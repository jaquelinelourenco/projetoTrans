import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import "./contador.css";
import {useNavigate} from "react-router-dom";

const Contador = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  function frequencyCharacters(text) {

    // Define o mapa que gerenciará as frequências
    const map = new Map();
    
    // Percorre as letras do texto
    for (let letter of text) {
    
      // Busca a quantidade de vezes que a letra já se repetiu, ou 0 para a primeira ocorrência
      let count = map.get(letter) || 0;
      
      // Atualiza a frequência incrementando-a
      map.set(letter, count+1);
    }
    
    // Retorna o mapa de frequências
    return map;
  }

  const input = prompt ("Digite a frase!")
  const frequencies = frequencyCharacters(input);

  // Exibe a frequência de cada letra
  for (let [letter, total] of frequencies) {
    let porcetagemFrequencie = total * 10
    console.log(`A letra ${letter} tem frequência de ${porcetagemFrequencie}%.`);
  }

  return (
    <div className='container'>
      <button className='button' onClick={goToHome}>Home <HomeIcon /></button>
    </div>
  )
}
export default Contador
