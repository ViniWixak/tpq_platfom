import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from './Landingpage.module.css'

function Landingpage() {
    return (
        <>
            <Header />
            <section>
                <div className={styles.sobre}>
                    <h2>Sobre</h2>
                    <p>
                        Nascemos da convicção de que a tecnologia é uma ferramenta que deve ser acessível a todos, independentemente de sua origem, gênero, raça, orientação sexual ou situação socioeconômica. Nosso objetivo é criar um ambiente seguro e inclusivo, combatendo o fosso digital e promovendo a igualdade frente ao acesso ao conteúdo tecnológico.<br /><br />
                        Celebramos a diversidade e valorizamos a inclusão, utilizando a tecnologia como ferramenta para abordar questões sociais urgentes. Aqui, cada voz é ouvida e cada contribuição é valorizada. Junte-se a nós nessa jornada em direção a um futuro onde a tecnologia seja verdadeiramente para todos.
                    </p>
                    <figure>
                        <img src="../public/cyberTeam.jpg" alt="" />
                    </figure>

                </div>

                <div className={styles.time}>
                    <h2>Time</h2>
                    <p>
                        Nossa equipe é composta por talentos diversos, todos comprometidos com o aprendizado contínuo e com a colaboração ativa na comunidade do Tecnologia Para Quem.<br/>
                        Estamos unidos em nossa missão de tornar a tecnologia acessível e inclusiva para todos.
                    </p>
                    <figure>
                        <img src="../public/timePic1.avif" alt="" />
                        <img src="../public/timePic2.avif" alt="" />
                        <img src="../public/timePic3.avif" alt="" />
                        <img src="../public/timePic4.avif" alt="" />
                        <img src="../public/timePic5.avif" alt="" />
                        <img src="../public/timePic6.avif" alt="" />
                        <img src="../public/timePic7.avif" alt="" />
                        <img src="../public/timePic8.avif" alt="" />
                    </figure>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Landingpage