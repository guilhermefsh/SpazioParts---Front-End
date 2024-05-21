import { useState, useEffect } from "react"
import banner from "../../assets/back.png"
import { ContainerAlign } from "../../components/Align"
import { LinkSection, MainCont, PrevLoadImage } from "./styles"
import { collection, query, getDocs, orderBy } from "firebase/firestore"
import { db } from '../../services/firebaseConnection'
import {
    AgeProduct,
    Bannerspazio,
    Container,
    DetailsProduct,
    ItemDivider,
    NameProduct,
    PriceProduct,
    ProductImg,
    SectionProduct
} from "./styles"

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

export const Home = () => {
    const [parts, setParts] = useState<PartsProps[]>([])
    const [loadImages, setLoadImages] = useState<string[]>([]);

    useEffect(() => {
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
        loadParts();
    }, [])

    function handleLoad(id: string) {
        setLoadImages((prevImageLoaded) => [...prevImageLoaded, id])
    }

    return (
        <Container>
            <Bannerspazio src={banner} />
            <ContainerAlign>
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
        </Container>
    )
}
