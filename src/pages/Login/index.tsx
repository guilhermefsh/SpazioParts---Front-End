import { ButtonLogin, Container, Content, LabelForm, LoginForm, Logo } from "./styles"
import logospazio from "../../assets/logo.jpg"
import { InputLogin } from "./Input";
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConnection'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

//schema validation para validar os dados de entrada
const schema = z.object({
    email: z.string().email("Insira um email valido").nonempty("O campo email é obrigatório"),
    password: z.string().nonempty("A senha é obrigatória")
})

type FormData = z.infer<typeof schema>

export const Login = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: "onChange"
    })

    //função de login
    async function onSubmit(data: FormData) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(() => {
                toast.success("Usuário logado com sucesso!")
                navigate("/")
            })
            .catch(err => {
                toast.error("Houve um erro no login")
                console.log(err);
            })
    }

    return (
        <Container>
            <Content>
                <Logo src={logospazio} />
                <LoginForm onSubmit={handleSubmit(onSubmit)}>
                    <LabelForm>EMAIL</LabelForm>
                    <InputLogin
                        type="email"
                        placeholder="Digite seu email..."
                        name="email"
                        error={errors.email?.message}
                        register={register}
                    />
                    <LabelForm>SENHA</LabelForm>
                    <InputLogin
                        type="password"
                        placeholder="Digite sua senha"
                        name="password"
                        error={errors.password?.message}
                        register={register}
                    />
                    <ButtonLogin>Acessar</ButtonLogin>
                </LoginForm>
            </Content>
        </Container>
    )
}
