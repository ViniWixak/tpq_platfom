import styles from './Header.module.css'

function Header(){
    return (
        <header className={styles.header}>
            <figure>
                <img src="/public/static/images/headerimage.png" alt="" />
            </figure>
            <button>Login</button>
            <nav>
                <a href=''>Sobre</a>
                <a href=''>Time</a>
                <a href=''>Plano de estudos</a>
                <a href=''>Fale conosco</a>
            </nav> 
        </header>
    )
}

export default Header