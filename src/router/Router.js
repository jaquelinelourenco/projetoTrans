import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Simulador from '../pages/Simulador';
import Contador from '../pages/Contador';

const RouterWrapp = () => {
    return(
        <Routes>
            <Route path="/"
                element = {<Home/>}
            />
            <Route path="/simulador"
                element = {<Simulador/>}
            />
            <Route path="/contador"
                element = {<Contador/>}
            />
            <Route path="/experiencia"
                element = {<Contador/>}
            />
            <Route path="*"
                element = {
                    <iframe src="https://giphy.com/embed/3osxY9kuM2NGUfvThe"
                        width="100%" height="400" frameBorder="0" allowFullScreen>
                    </iframe>
                }
            />
        </Routes>
    )
}

export default RouterWrapp