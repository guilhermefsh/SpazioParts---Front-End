import { BTLogout, PageLinks, PanelContainer } from "./styles"
import { auth } from "../../services/firebaseConnection"
import { signOut } from "firebase/auth"
import { FiLogOut } from "react-icons/fi"

export const PanelHeader = () => {

    async function handleLogout() {
        await signOut(auth);
    }
    return (
        <PanelContainer>
            <PageLinks to="/dashboard">Dashboard</PageLinks>
            <PageLinks to="/dashboard/new">Adicionar Peças</PageLinks>
            <BTLogout onClick={handleLogout}><FiLogOut size={22} style={{ color: 'white' }} /></BTLogout>
        </PanelContainer>
    )
}
