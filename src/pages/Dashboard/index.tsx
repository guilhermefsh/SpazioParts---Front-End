import { ContainerAlign } from '../../components/Align/'
import { PanelHeader } from '../../components/PanelHeader'
import { FiTrash } from 'react-icons/fi'
import { collection, getDocs, where, query, doc, deleteDoc } from 'firebase/firestore'
import { db, storage } from '../../services/firebaseConnection'
import { ref, deleteObject } from 'firebase/storage'
import { useState, useEffect, useContext } from 'react'
import {
    AgeProduct,
    DetailsProduct,
    ItemDivider,
    NameProduct,
    PartsMain,
    PriceProduct,
    ProductImg,
    RemoveImgBtn,
    SectionProduct,
    EditProduct
} from './styles'
import { AuthContext } from '../../contexts/AuthContext'
import toast from 'react-hot-toast'
import { FaPencil } from 'react-icons/fa6'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

export const Dashboard = () => {
    const [parts, setParts] = useState<PartsProps[]>([])
    const { user } = useContext(AuthContext)
    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        async function loadParts() {
            if (!user?.uid) {
                return;
            }

            const partsRef = collection(db, "parts")
            const queryRef = query(partsRef, where("uid", "==", user.uid))

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
    }, [user, id])

    async function handleDeleteCar(part: PartsProps) {
        const itemParts = part;
        const docRef = doc(db, "parts", itemParts.id)
        await deleteDoc(docRef);

        itemParts.images.map(async (image) => {
            const imagePath = `images/${image.uid}/${image.name}`
            const imageRef = ref(storage, imagePath)

            try {
                await deleteObject(imageRef)
                setParts(parts.filter(part => part.id !== itemParts.id))
            } catch (err) {
                toast.error("Erro ao excluir imagem")
            }
        })
    }


    return (
        <ContainerAlign>
            <PanelHeader />
            <PartsMain>
                {parts.map(part => (
                    <SectionProduct key={part.id}>
                        <RemoveImgBtn onClick={() => handleDeleteCar(part)}>
                            <FiTrash size={30} color='red' />
                        </RemoveImgBtn>
                        <EditProduct>
                            <Link to={`new/${part.id}`}><FaPencil size={30} color='red' /></Link>
                        </EditProduct>
                        <ProductImg src={part.images[0].url} alt="carro" />
                        <NameProduct>{part.name}</NameProduct>
                        <DetailsProduct>
                            <AgeProduct>{part.model} | {part.year}</AgeProduct>
                            <PriceProduct> R${part.price}</PriceProduct>
                            <ItemDivider></ItemDivider>
                        </DetailsProduct>
                    </SectionProduct>
                ))}
            </PartsMain>
        </ContainerAlign>
    )
}
