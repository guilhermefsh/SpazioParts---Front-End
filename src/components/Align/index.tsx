import { ReactNode } from 'react'
import { Align } from './styles'

export const ContainerAlign = ({ children }: { children: ReactNode }) => {
    return (
        <Align>
            {children}
        </Align>
    )
}
