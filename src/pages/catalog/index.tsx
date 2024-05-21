import { FiSearch } from "react-icons/fi"
import { ContainerAlign } from "../../components/Align"
import { useState, useEffect } from "react"
import { collection, query, getDocs, orderBy, where } from "firebase/firestore"
import { db } from '../../services/firebaseConnection'
import {
    AgeProduct,
    DetailsProduct,
    ItemDivider,
    NameProduct,
    PriceProduct,
    ProductImg,
    SectionProduct,
    BtnSearch,
    ContainerSection,
    InputSearch,
    MainCont,
    PrevLoadImage,
} from "./styles"
import { LinkSection } from "../Home/styles"

interface PartsProps {
    id: string;
    name: string;
    model: string;
    year: string;
    uid: string;
    price: string | number;
    images: PartsImageProps[];
}

interface PartsImageProps {
    name: string;
    uid: string;
    url: string;
}

export const Catalog = () => {
    const [parts, setParts] = useState<PartsProps[]>([])
    const [loadImages, setLoadImages] = useState<string[]>([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        loadParts();
    }, [])

    function loadParts() {
        const partsRef = collection(db, "parts")
        const queryRef = query(partsRef, orderBy("created", "desc"))

        getDocs(queryRef)
            .then((snapshot) => {
                let listparts = [] as PartsProps[];

                snapshot.forEach(doc => {
                    listparts.push({
                        id: doc.id,
                        name: doc.data().name,
                        year: doc.data().year,
                        price: doc.data().price,
                        model: doc.data().model,
                        images: doc.data().images,
                        uid: doc.data().uid
                    })
                })
                setParts(listparts)
            })
    }

    function handleLoad(id: string) {
        setLoadImages((prevImageLoaded) => [...prevImageLoaded, id])
    }

    async function handleSearchParts() {
        if (input === '') {
            loadParts();
            return
        }
        setParts([]);
        setLoadImages([]);

        const q = query(collection(db, "parts"),
            where("name", ">=", input.toUpperCase()),
            where("name", "<=", input.toUpperCase() + "\uf8ff")
        )

        const querySnapshot = await getDocs(q)
        let listparts = [] as PartsProps[];
        querySnapshot.forEach(doc => {
            listparts.push({
                id: doc.id,
                name: doc.data().name,
                year: doc.data().year,
                price: doc.data().price,
                model: doc.data().model,
                images: doc.data().images,
                uid: doc.data().uid
            })
        })

        setParts(listparts)
    }

    return (
        <ContainerAlign>
            <ContainerSection>
                <InputSearch
                    placeholder="Digite o nome da peça..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <BtnSearch onClick={handleSearchParts}>
                    <FiSearch size={28} color="black" />
                </BtnSearch>
            </ContainerSection>
            <MainCont>
                {parts.map(parts => (
                    <LinkSection key={parts.id} to={`/parts/${parts.id}`}>
                        <SectionProduct>
                            <PrevLoadImage style={{ display: loadImages.includes(parts.id) ? "none" : "block" }}>
                            </PrevLoadImage>
                            <ProductImg src={parts.images[0].url}
                                alt="carro"
                                onLoad={() => handleLoad(parts.id)}
                                style={{ display: loadImages.includes(parts.id) ? "block" : "none" }}
                            />
                            <NameProduct>{parts.name}</NameProduct>
                            <DetailsProduct>
                                <AgeProduct>{parts.model} | {parts.year}</AgeProduct>
                                <PriceProduct>R${parts.price}</PriceProduct>
                                <ItemDivider></ItemDivider>
                            </DetailsProduct>
                        </SectionProduct>
                    </LinkSection>
                ))}
            </MainCont>
        </ContainerAlign>
    )
}
