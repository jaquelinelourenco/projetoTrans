import React from 'react';
import {useNavigate} from "react-router-dom";
import './home.css';
import Logo from '../../assets/transdata_logo.webp';

const Experiencias = () => {
    const navigate = useNavigate()

    const goToHome = () => {
        navigate("/")
    }


    return (
        <div className="Home">
            <header className="Home-header">
                <img onClick={goToHome} src={Logo} className="Home-logo" alt="logo" />
                <div>
                    <h4>Experiencias</h4>
                    
                </div>
            </header>
        </div>
    );
}

export default Experiencias;
