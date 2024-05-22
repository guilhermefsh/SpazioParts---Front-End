import { useEffect, useState, } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FaTruck, FaWhatsapp } from "react-icons/fa"
import Mplogo from '../../assets/Mercadopagoicon.png'
import { useNavigate, useParams } from "react-router-dom"
import { ContainerAlign } from "../../components/Align"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebaseConnection"
import {
    Attributes,
    CallToAction,
    CallToActionMP,
    DescriptionParts,
    IconMP,
    InfoCont,
    InfoParts,
    ModelParts,
    NameParts,
    PartsDetail,
    PriceParts,
    SliderImg,
    TitleDescription,
    TitleParts,
    Titles,
    YearParts,
    CallToActionFrete
} from "./styles"

interface PartsProps {
    id: string;
    name: string;
    model: string;
    year: string;
    uid: string;
    price: string | number;
    images: PartsImageProps[];
    whatsapp: string;
    mercadoPago: string;
    frete: string;
    owner: string;
    description: string;
}

interface PartsImageProps {
    name: string;
    uid: string;
    url: string;
}

export const PartsDetails = () => {
    const { id } = useParams();
    const [parts, setParts] = useState<PartsProps>();
    const [sliderPerview, setSliderPerView] = useState<number>(2);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadParts() {
            if (!id) { return }

            const docRef = doc(db, "parts", id)
            getDoc(docRef)
                .then((snapshot) => {
                    if (!snapshot.data()) {
                        navigate("/");
                    }
                    setParts({
                        id: snapshot.id,
                        name: snapshot.data()?.name,
                        year: snapshot.data()?.year,
                        price: snapshot.data()?.price,
                        model: snapshot.data()?.model,
                        images: snapshot.data()?.images,
                        uid: snapshot.data()?.uid,
                        whatsapp: snapshot.data()?.whatsapp,
                        owner: snapshot.data()?.owner,
                        mercadoPago: snapshot.data()?.mercadoPago,
                        frete: snapshot.data()?.frete,
                        description: snapshot.data()?.description
                    })
                })
        }
        loadParts()
    }, [id])

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 720) {
                setSliderPerView(1);
            } else {
                setSliderPerView(2);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, [])


    return (
        <ContainerAlign>
            {parts && (
                <Swiper
                    slidesPerView={sliderPerview}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {parts?.images.map(image => (
                        <SwiperSlide key={image.name}>
                            <SliderImg src={image.url} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {parts && (
                <InfoCont>
                    <PartsDetail>
                        <TitleParts>{parts.name}</TitleParts>
                        <PriceParts>R${parts.price}</PriceParts>
                    </PartsDetail>
                    <ModelParts>
                        <Titles>Modelos:</Titles>{parts.model}
                    </ModelParts>
                    <InfoParts>
                        <NameParts>
                            <Attributes>
                                <YearParts>
                                    <Titles>Compatível com modelos de:</Titles> {parts.year}
                                </YearParts>
                            </Attributes>
                            <DescriptionParts>
                                <TitleDescription>
                                    Descrição:
                                </TitleDescription>
                                {parts.description}
                            </DescriptionParts>
                        </NameParts>
                        <CallToAction
                            href={`https://wa.me/+55${parts.whatsapp}?text=Olá!+tenho+interesse+na+peça "${parts.name}"+do+${parts.model}`}
                            target="_blank">
                            Compre pelo WhatsApp
                            <FaWhatsapp size={28} color="#fff" />
                        </CallToAction>
                        <CallToActionMP
                            href={parts.mercadoPago} target="_blank">
                            Compre direto no mercado pago!
                            <IconMP src={Mplogo} alt="icone MP" />
                        </CallToActionMP>
                        <CallToActionFrete
                            href={parts.frete} target="_blank">
                            Click aqui e cote seu frete!
                            <FaTruck size={32} />
                        </CallToActionFrete>
                    </InfoParts>
                </InfoCont>
            )}
        </ContainerAlign>
    )
}
