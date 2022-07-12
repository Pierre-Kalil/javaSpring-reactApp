import './style.scss'
import logo from "../../assets/logo.png"


export const Header = () => {
    return (
        <>
            <section className="container home-section">
                <img src={logo} alt='logo' />
                <h2>DSMeta</h2>
                <span>Desenvolvido por @pierre-kalil</span>
            </section>
        </>
    )
}