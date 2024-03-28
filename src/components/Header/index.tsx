import styles from './Header.module.css'

function Header(){
    return (
        <header className={styles.header}>
            <figure>
                <img src="/headerimage.png" alt="" />
            </figure>
            <button>Login</button>
            <nav>
                <a href='#sobre'>Sobre</a>
                <a href='#time'>Time</a>
                <a href='#plano'>Plano de estudos</a>
                <a href='#contato'>Fale conosco</a>
            </nav> 
        </header>
    )
}

export default Header