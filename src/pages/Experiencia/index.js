import React from 'react';
import {useNavigate} from "react-router-dom";
import '../Home/home.css';
import Logo from '../../assets/transdata_logo.webp';
import "./experiencia.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Experiencias = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }


    return (
        <div className="Home">
            <header className="Home-header">
                <div className='container'>
                    <div className='header'>
                        <img onClick={goToHome} src={Logo} className="Home-logo" alt="logo" />
                        <h1>Experiências</h1>
                    </div>
                    <div className='containerHomePage'>
                        <div className='homeFlexBox'>
                            <div className='card'>
                                <p>Labenu</p>
                                <p> Intensivo de 6 meses inicio maio/2021 à outubro/2021, no desenvolvimento Full-Stack 
                                    estudando de segunda à sexta período da manhã aulas e a tarde prática <br/>
                                    preparando da 8 às 18 para mercado de trabalho.
                                    Framework:
                                </p>
                                <div className='imag'>
                                    <img src='https://alyssonmach.github.io/Minicurso-Git-e-GitHub/img/5.png'/>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
                                    <img src='https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/com037-scaled.jpg'/>
                                    <img src='https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png'/>
                                    <img src='https://miro.medium.com/max/1400/1*KLFAndcuvaQ3uteqw_Qqkg.png'/>
                                    <img src='https://www.nicepng.com/png/detail/985-9857805_html5-css3-logo-png-html-and-css-logo.png'/>
                                    <img src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png'/>
                                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png'/>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'/>
                                    <img src='https://www.techasoft.com/debug/img/unittesting.png'/>
                                    <img src='https://www.styled-components.com/atom.png'/>
                                </div>
                            </div>
                        </div>
                    </div>
                            <div className='card'>
                                <p>Truss professional</p>
                                <p> Contratada em outubro/2021 à maio/2022, no desenvolvimento Full-Stack 
                                    estrutura repósitorios github com markdown, integrações com api e apipass com a vtex e-commerce<br/>
                                    preparando banco de dados com PHP e Django.<br/>
                                    Framework:
                                </p>
                                <div className='imag'>
                                    <img src='https://alyssonmach.github.io/Minicurso-Git-e-GitHub/img/5.png'/>
                                    <img src='https://blog.da2k.com.br/uploads/2015/02/markdown.png'/>
                                    <img src='https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png'/>
                                    <img src='https://www.nicepng.com/png/detail/985-9857805_html5-css3-logo-png-html-and-css-logo.png'/>
                                    <img src=' https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/>
                                    <img src='https://assets.stickpng.com/thumbs/62cc1b3a150d5de9a3dad5f7.png'/>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/1664px-Ansible_logo.svg.png'/>
                                    <img src='https://miro.medium.com/max/1400/1*KLFAndcuvaQ3uteqw_Qqkg.png'/>
                                    <img src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png'/>
                                    <img src='https://www.opengis.ch/wp-content/uploads/2020/04/django-python-logo-e1588009010920.png'/>
                                    <img src='https://www.techasoft.com/debug/img/unittesting.png'/>
                                    <img src='https://www.styled-components.com/atom.png'/>
                                </div>
                            </div>
                            <div className='card'>
                                <p>Aremas Engenharia</p>
                                <p> Contratada em maio/2022 à setembro/2022 em desenvolvimento Front-end 
                                    desenvolver style dos projetos em formação, desenvolvendo com CSS, Bootstrap, HTML<br/>
                                    acessando banco de dados para desenvolver do style.<br/>
                                    Framework:
                                </p>
                                <div className='imag'>
                                    <img src='https://alyssonmach.github.io/Minicurso-Git-e-GitHub/img/5.png'/>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'/>
                                    <img src='https://www.brcline.com/wp-content/uploads/2016/01/bootstrap-logo.png'/>
                                    <img src='https://miro.medium.com/max/1400/1*KLFAndcuvaQ3uteqw_Qqkg.png'/>
                                    <img src='https://www.techasoft.com/debug/img/unittesting.png'/>
                                    <img src='https://www.styled-components.com/atom.png'/>
                                </div>
                            </div>
                </div>
            </header>
        </div>
    );
}

export default Experiencias;
