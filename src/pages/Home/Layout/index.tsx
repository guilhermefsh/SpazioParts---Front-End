import { FooterItens } from '../../../components/FooterItens'
import { Header } from '../../../components/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='content'>
                <Outlet />
            </div>
            <FooterItens />
        </div>
    )
}
