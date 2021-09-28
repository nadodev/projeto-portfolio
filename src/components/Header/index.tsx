/* eslint-disable no-restricted-globals */
import logimg from '../../assets/logotipo.svg'
import tela from '../../assets/tela.png'
import amico from '../../assets/amico.png'
import item from '../../assets/item.png'
import item2 from '../../assets/item2.png'
import item3 from '../../assets/item3.png'
import { Container, Content, Iside, Nav, Wraper, WraperTela, WraperTexto, Trabalhos, WraperFooter, Sobre, Trampo } from './style';
export default function Header() {
    return (
        <Container>
            <Content>
                    <Wraper>
                    <img src={logimg} alt="dt money" />
                  

                    <WraperTexto>
                        <span><img src={amico} /> UI DESIGNER</span>
                        <h1>DESIGNER DE INTERFACES</h1>
                        <p>Estudante e apaixonado por designer de interfaces
                        Atuamente trabalhando como designer gráfico, e 
                        migrando para Ux/Ui Designer</p>
                        <a href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e3c89eb-06d8-4ec7-b96d-176cd9c4490b/novoCurriculo.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210919%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210919T211819Z&X-Amz-Expires=86400&X-Amz-Signature=08124c5ab430df19f89e03e5272225cf35613c7cfee9ff17ffcdf7ec22287d67&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Curriculum.pdf%22" target="blank" >Ver Curriculum </a>
                    </WraperTexto>
                    </Wraper>
            </Content>
            <Iside>
                <Nav>
                    <ul>
                        <li onClick={(event: any) => scroll(0, 400)}>
                            <a href="#">Meus trabalhos</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/leonardo-geja-000a34201/" target="blank">Contato</a></li>
                    </ul>
                </Nav>
                <WraperTela>
                    <img src={tela} alt="tela"/>
                </WraperTela>
            </Iside>
            <Trabalhos>
               <WraperFooter>
                    <Sobre>
                        <h1>SOBRE MIM</h1>
                        <p>Olá meu nome é Leonardo Geja, tenho 30 anos, atualmente moro no interior de santa catarina,  e trabalho como designer gráfico. Curso UX/UI Designer na EBAC, e levo a vida de um autodidata, tenho conhecimento  de HTML, CSS, REACT JS , NODE JS , entre outros.</p>
                    </Sobre>
                    <Trampo>
                        <div className="items">
                            <img src={item} alt="" />
                        </div>
                        <div className="items">
                            <img src={item2} alt="" />
                        </div>
                        <div className="items">
                            <img src={item3} alt="" />
                        </div>
                    </Trampo>
               </WraperFooter>
            </Trabalhos>
        </Container>
    )
}
