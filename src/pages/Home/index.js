import React from 'react';
import {useNavigate} from "react-router-dom";
import './home.css';
import Logo from '../../assets/transdata_logo.webp';

const Home = () => {
    const navigate = useNavigate()

    const goToSimulador = () => {
      navigate("/simulador")
    }

    const goToContador = () => {
        navigate("/contador")
    }

    const goToExperiencia = () => {
        navigate("/experiencia")
    }

    return (
        <div className="Home">
            <header className="Home-header">
                <img src={Logo} className="Home-logo" alt="logo" />
                <a
                    className="Home-link"
                    href="https://www.itstransdata.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Site Transdata
                </a>
                <div className='button-home'>
                    <button onClick={goToExperiencia}>Experiencias</button>
                    <button onClick={goToContador}>Contador</button>
                    <button onClick={goToSimulador}>Simulador </button>
                </div>
            </header>
        </div>
    );
}

export default Home;
