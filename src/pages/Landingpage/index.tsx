import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from './Landingpage.module.css'
import FlippableCard from "../../components/FlippableCard"
import Roadmap from "../../components/Roadmap/Map"


function Landingpage() {
    return (
        <>
            <Header />
            <section>
                <div className={styles.sobre} id="sobre">
                    <h2>Sobre</h2>
                    <p>
                        Nascemos da convicção de que a tecnologia é uma ferramenta que deve ser acessível a todos, independentemente de sua origem, gênero, raça, orientação sexual ou situação socioeconômica. Nosso objetivo é criar um ambiente seguro e inclusivo, combatendo o fosso digital e promovendo a igualdade frente ao acesso ao conteúdo tecnológico.<br /><br />
                        <span>
                            Celebramos a diversidade e valorizamos a inclusão, utilizando a tecnologia como ferramenta para abordar questões sociais urgentes. Aqui, cada voz é ouvida e cada contribuição é valorizada.
                        </span>
                    </p>    
                    <figure>
                        <img src="/cyberTeam.jpg" alt="" />
                    </figure>

                </div>

                <div className={styles.time} id="time">
                    <h2>Time</h2>
                    <p>
                        Nossa equipe é composta por talentos diversos, todos comprometidos com o aprendizado contínuo e com a colaboração ativa na comunidade do Tecnologia Para Quem.<br />
                        Estamos unidos em nossa missão de tornar a tecnologia acessível e inclusiva para todos.
                    </p>
                    <figure>
                        <FlippableCard imagePath="/timePic1.avif"/>
                        <FlippableCard imagePath="/timePic2.avif"/>
                        <FlippableCard imagePath="/timePic3.avif"/>
                        <FlippableCard imagePath="/timePic4.avif"/>
                        <FlippableCard imagePath="/timePic5.avif"/>
                        <FlippableCard imagePath="/timePic6.avif"/>
                        <FlippableCard imagePath="/timePic7.avif"/>
                        <FlippableCard imagePath="/timePic8.avif"/>
                    </figure>
                </div>

                <div className={styles.planoDeEstudos} id="plano">
                    <h2>Plano de estudos</h2>
                    <p>
                        Nosso plano de estudos visa criar um ambiente educacional inclusivo, ensinando programação e desenvolvimento de software para iniciantes, especialmente aqueles sem experiência prévia em computação. Buscamos engajar comunidades diversas e minorias, incentivando a criação de soluções inovadoras para desafios urgentes.<br /><br />
                        Além de cobrir desde conceitos básicos até tecnologias avançadas, nosso programa também aborda questões de carreira, gestão e ética na área de tecnologia. Oferecemos mentorias em soft skills para aprimorar habilidades como comunicação, liderança, aprendizado e auto-gestão.
                    </p>
                    <Roadmap/>
                </div>

                <div className={styles.faleConosco} id="contato">
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