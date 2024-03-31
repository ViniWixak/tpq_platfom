import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <figure>
                <img src="/favicon.png" alt="" />
            </figure>
            <nav>
                <a href=''>Instagram</a>
                <a href=''>Linkedin</a>
            </nav>
            <nav>
                <a href='#sobre'>Sobre</a>
                <a href='#time'>Time</a>
                <a href='#plano'>Plano de estudos</a>
                <a href='#contato'>Fale conosco</a>
            </nav>
        </footer>
    )
}

export default Footer;