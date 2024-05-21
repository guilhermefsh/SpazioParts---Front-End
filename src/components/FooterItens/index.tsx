import {
    ContactTitle,
    FooterContainer,
    LeftContent,
    Logo,
    MiddleContent,
    RightContent,
    TextP,
    Title,
    LinkPages,
    LinkContact,
    DivLinkContact,
} from './styles'
import logo from '../../assets/logo.jpg'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
export const FooterItens = () => {
    return (
        <FooterContainer>
            <LeftContent>
                <Logo src={logo} />
                <TextP>A marca parceira do seu carro!</TextP>
                <TextP>Desde 2021 atendendo clientes com qualidade!</TextP>
            </LeftContent>
            <MiddleContent>
                <Title>Site</Title>
                <LinkPages to="/catalogo">• Catálogo</LinkPages>
                <LinkPages to="/sobre" >• Quem Somos</LinkPages>
            </MiddleContent>
            <RightContent>
                <ContactTitle>Contatos</ContactTitle>
                <DivLinkContact>
                    <LinkContact href='https://www.instagram.com/spazioparts/' target='_blank' ><FaInstagram size={28} color='#b43a6d' /></LinkContact>
                    <LinkContact href='https://wa.me/+5511941597301?text=Olá!+vim+pelo+site' target='_blank'><FaWhatsapp size={28} color='green' /></LinkContact>
                </DivLinkContact>
            </RightContent>
        </FooterContainer>
    )
}
