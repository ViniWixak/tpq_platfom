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
                        <img src="../public/static/images/cyberTeam.jpg" alt="" />
                    </figure>

                </div>

                <div className={styles.time}>
                    <h2>Time</h2>
                    <p>
                        Nossa equipe é composta por talentos diversos, todos comprometidos com o aprendizado contínuo e com a colaboração ativa na comunidade do Tecnologia Para Quem.<br />
                        Estamos unidos em nossa missão de tornar a tecnologia acessível e inclusiva para todos.
                    </p>
                    <figure>
                        <img src="../public/static/images/timePic1.avif" alt="" />
                        <img src="../public/static/images/timePic2.avif" alt="" />
                        <img src="../public/static/images/timePic3.avif" alt="" />
                        <img src="../public/static/images/timePic4.avif" alt="" />
                        <img src="../public/static/images/timePic5.avif" alt="" />
                        <img src="../public/static/images/timePic6.avif" alt="" />
                        <img src="../public/static/images/timePic7.avif" alt="" />
                        <img src="../public/static/images/timePic8.avif" alt="" />
                    </figure>
                </div>

                <div className={styles.planoDeEstudos}>
                    <h2>Plano de estudos</h2>
                    <p>
                        Nosso plano de estudos visa criar um ambiente educacional inclusivo, ensinando programação e desenvolvimento de software para iniciantes, especialmente aqueles sem experiência prévia em computação. Buscamos engajar comunidades diversas e minorias, incentivando a criação de soluções inovadoras para desafios urgentes.<br /><br />
                        Além de cobrir desde conceitos básicos até tecnologias avançadas, nosso programa também aborda questões de carreira, gestão e ética na área de tecnologia. Oferecemos mentorias em soft skills para aprimorar habilidades como comunicação, liderança, aprendizado e auto-gestão.
                    </p>
                    <figure>
                        <img src="../public/static/images/planoDeEstudos.jpg" alt="" />
                    </figure>
                </div>

                <div className={styles.faleConosco}>
                    <h2>Fale conosco</h2>
                    <p><span>Vamos nos conectar e colaborar</span><br /><br />Se quiser saber mais sobre o programa Tecnologia Para Quem e colaborar conosco, não hesite em entrar em contato.</p>
                    <section className={styles.faleConoscoForms}>
                        <form action="/pagina-processa-dados-do-form" method="post">
                            <div>
                                <input type="text" placeholder="Título" id="titulo" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" id="email" />
                            </div>
                            <div>
                                <textarea placeholder="Mensagem" rows={10} id="msg"></textarea>
                            </div>
                            <div>
                                <input type="submit"  value="Enviar"/>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Landingpage