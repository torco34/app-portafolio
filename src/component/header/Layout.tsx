import { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header';
interface IProps {
    children: ReactNode;
}
export const Layout = ({ children }: IProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
