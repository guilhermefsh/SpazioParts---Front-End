import { ContainerAlign } from "../../components/Align"
import { Container, ImgAbout, TextSpazio, Title } from "./styles"
import spaziosobre from '../../assets/sobrespazio.jpg'

export const AboutUs = () => {
    return (
        <ContainerAlign>
            <Title>Sobre nós</Title>
            <Container>
                <ImgAbout src={spaziosobre} />
                <TextSpazio>
                    Desde 2021, a Spazioparts  tem se destacado como referência na fabricação de peças de época para os
                    Fiat 147 e derivados, oferecendo produtos de alta qualidade e garantia. Nosso compromisso é atender
                    clientes em todo o Brasil,com peças que não se encontra mais no mercado, proporcionando resgatar  a originalidade
                    para seus projetos de restauração  automotivas. Com um foco incessante na excelência, estamos prontos para superar
                    as expectativas de nossos clientes e fortalecer ainda mais nossa posição no mercado.
                </TextSpazio>
            </Container>
        </ContainerAlign>
    )
}
