import React, { useEffect} from 'react';
import Vinte from "../../assets/vinte.jpg";
import Dez from "../../assets/dez.jpg";
import Cinco from "../../assets/cinco.jpg";
import Um from "../../assets/um.jpg";
import {useNavigate} from "react-router-dom";
import "./simulador.css";
import HomeIcon from '@mui/icons-material/Home';

const Simulador = () => {
    const navigate = useNavigate()

    const goToHome = () => {
      navigate("/")
    }


    const loadDataOnlyOnce = () => {
    
        let valor = prompt("Digite o valor a ser sacado") 

        let resto = Number(valor)

        while(resto >= 20){
            document.write('<img src="'+Vinte+'" border=0 style="height:150px;width:150px;">')
            resto = resto - 20
        }

        while(resto >= 10){
            document.write('<img src="'+Dez+'" border=0 style="height:150px;width:150px;">')
            resto = resto - 10
        }

        while(resto >= 5){
            document.write('<img src="'+Cinco+'" border=0 style="height:150px;width:150px;">')
            resto = resto - 5
        }

        while(resto >= 1){
            document.write('<img src="'+Um+'" border=0 style="height:150px;width:150px;">')
            resto = resto - 1
        }

        if(resto > 0) {
            document.write("<br /><br />Sobrou R$ "+resto.toFixed(2)+", o valor será devolvido para a sua conta")
        }
    }

    useEffect(() => {
        loadDataOnlyOnce();
      }, [])

    return (
        <div className='container'>
            <button className='button' onClick={goToHome}>Home <HomeIcon /></button>
        </div>
    );
}

export default Simulador;
