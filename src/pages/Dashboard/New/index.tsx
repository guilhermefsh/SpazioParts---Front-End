import { ChangeEvent, useContext, useState } from 'react'
import { FiTrash, FiUpload } from 'react-icons/fi'
import { ContainerAlign } from '../../../components/Align'
import { PanelHeader } from '../../../components/PanelHeader'
import { InputForm } from './InputForm'
import { BTImage, ButtonRegister, DescriptionArea, DivInput, DivTwoInputs, FormCont, FormInfo, FormItens, ImageCont, ImgView, RemoveImgBtn, TitleInput, UploadIcon, UploadInput, ViewImageCont } from './styles'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthContext } from '../../../contexts/AuthContext'
import { v4 as uuidV4 } from 'uuid'
import { storage, db } from '../../../services/firebaseConnection'
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore'
import toast from 'react-hot-toast'

const schema = z.object({
    name: z.string().nonempty("O campo nome é obrigatório"),
    model: z.string().nonempty("O modelo do carro correspondente é obrigatório"),
    year: z.string().nonempty("o ano do carro é obrigatório"),
    price: z.string().nonempty("O preço é obrigatório"),
    whatsapp: z.string().min(1, "O telefone é obrigatório").refine((value) => /^(\d{11,12})$/.test(value), {
        message: "Numero de telefone inválido"
    }),
    mercadoPago: z.string(),
    description: z.string().nonempty("A descrição é obrigatória")
})

type FormData = z.infer<typeof schema>;

interface ImagemItemProps {
    uid: string;
    name: string;
    previewUrl: string;
    url: string;
}

export const New = () => {
    const [partsImage, setPartsImage] = useState<ImagemItemProps[]>([])
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    async function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0]

            if (image.type === 'image/jpeg' || image.type === 'image/png') {
                await handleUpload(image)
            } else {
                alert("envie uma imagem PNG ou JPG")
            }
        }
    }

    function handleUpload(image: File) {
        if (!user?.uid) {
            return;
        }
        const currentId = user?.uid;
        const uidImage = uuidV4();

        const uploadRef = ref(storage, `images/${currentId}/${uidImage}`)
        uploadBytes(uploadRef, image)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    const imageItem = {
                        name: uidImage,
                        uid: currentId,
                        previewUrl: URL.createObjectURL(image),
                        url: downloadUrl,
                    }

                    setPartsImage((images) => [...images, imageItem])
                })
            })
    }

    async function handleDeleteImage(item: ImagemItemProps) {
        const imagePath = `images/${item.uid}/${item.name}`;
        const imageRef = ref(storage, imagePath);

        try {
            await deleteObject(imageRef)
            setPartsImage(partsImage.filter((parts) => parts.url !== item.url))
        } catch (err) {
            alert("erro ao deletar");
        }
    }

    function onSubmit(data: FormData) {
        if (partsImage.length === 0) {
            alert("Envie alguma imagem das peças")
            return;
        }

        const partsListImages = partsImage.map(parts => {
            return {
                uid: parts.uid,
                name: parts.name,
                url: parts.url,
            }
        })

        addDoc(collection(db, "parts"), {
            name: data.name.toUpperCase(),
            model: data.model,
            year: data.year,
            price: data.price,
            whatsapp: data.whatsapp,
            description: data.description,
            created: new Date(),
            owner: user?.name,
            uid: user?.uid,
            images: partsListImages,
            mercadoPago: data.mercadoPago,
        })
            .then(() => {
                reset();
                setPartsImage([]);
                toast.success("Peça cadastrada com sucesso");
            })
            .catch((error) => {
                console.log(error)
                toast.error("Erro ao cadastrar no banco de dados")
            })
    }
    return (
        <ContainerAlign>
            <PanelHeader />
            <ImageCont>
                <BTImage>
                    <UploadIcon>
                        <FiUpload size={30} color='#000' />
                    </UploadIcon>
                    <DivInput>
                        <UploadInput type='file' accept="image/*" onChange={handleFile} />
                    </DivInput>
                </BTImage>
                {partsImage.map(item => (
                    <ViewImageCont key={item.name}>
                        <RemoveImgBtn onClick={() => handleDeleteImage(item)}>
                            <FiTrash size={28} color='red' />
                        </RemoveImgBtn>
                        <ImgView
                            src={item.previewUrl}
                            alt='Foto das peças' />
                    </ViewImageCont>
                ))}
            </ImageCont>
            <FormCont>
                <FormInfo onSubmit={handleSubmit(onSubmit)}>
                    <FormItens>
                        <TitleInput>Nome da peça:</TitleInput>
                        <InputForm
                            type='text'
                            register={register}
                            name='name'
                            error={errors.name?.message}
                            placeholder='Ex: Capo Fiat Uno'
                        />
                    </FormItens>
                    <DivTwoInputs>
                        <FormItens>
                            <TitleInput>Modelo:</TitleInput>
                            <InputForm
                                type='text'
                                register={register}
                                name='model'
                                error={errors.model?.message}
                                placeholder='Ex: Fiat uno'
                            />
                        </FormItens>
                        <FormItens>
                            <TitleInput>Ano:</TitleInput>
                            <InputForm
                                type='text'
                                register={register}
                                name='year'
                                error={errors.year?.message}
                                placeholder='Ex: 2016 à 2020'
                            />
                        </FormItens>
                    </DivTwoInputs>
                    <FormItens>
                        <TitleInput>Preço:</TitleInput>
                        <InputForm
                            type='text'
                            register={register}
                            name='price'
                            error={errors.price?.message}
                            placeholder='Ex: 240R$'
                        />
                    </FormItens>
                    <FormItens>
                        <TitleInput>WhatsApp:</TitleInput>
                        <InputForm
                            type='text'
                            register={register}
                            name='whatsapp'
                            error={errors.whatsapp?.message}
                            placeholder='ex: 32945330306'
                        />
                    </FormItens>
                    <FormItens>
                        <TitleInput>Mercado Pago:</TitleInput>
                        <InputForm
                            type='text'
                            register={register}
                            name='mercadoPago'
                            error={errors.mercadoPago?.message}
                            placeholder='cole o link do mercado Pago'
                        />
                    </FormItens>
                    <FormItens>
                        <TitleInput>Descrição:</TitleInput>
                        <DescriptionArea
                            {...register("description")}
                            name='description'
                            id='description'
                            placeholder='Digite a descrição completa da peça...'
                        />
                        {errors.description && <p style={{ color: "red" }}>{errors.description.message}</p>}
                    </FormItens>
                    <ButtonRegister type='submit'>
                        Cadastrar
                    </ButtonRegister>
                </FormInfo>
            </FormCont>
        </ContainerAlign >
    )
}