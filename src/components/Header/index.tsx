import { useContext } from 'react'
import { Container, LinkPages, Navlinks, Logo } from "./styles.tsx"
import logospazio from "../../assets/logo.jpg"
import { FiSettings } from "react-icons/fi"
import { AuthContext } from '../../contexts/AuthContext.tsx'

export const Header = () => {
    const { signed, loadingAuth } = useContext(AuthContext);

    return (
        <Container>
            <LinkPages to="/"><Logo src={logospazio}></Logo></LinkPages>
            <Navlinks>
                <LinkPages to={"/catalogo"}>Catálogo</LinkPages>
                <LinkPages to={"/sobre"}>Sobre nós</LinkPages>
                {!loadingAuth && signed && (
                    <LinkPages to="/dashboard"><FiSettings size={22} color="#fff" /></LinkPages>
                )}
            </Navlinks>
        </Container>
    )
}
