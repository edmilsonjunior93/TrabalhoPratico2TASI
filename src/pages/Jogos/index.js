import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Jogos = () => {
  const [jogos, setJogos] = useState(null);

  useEffect(() => {
    axios.get('https://www.cheapshark.com/api/1.0/deals').then((resposta) => {
      setJogos(resposta.data);
    });
  }, []);

  if (jogos === null) {
    return <p>Carregando ...</p>;
  }

  return (
    <ul>
      {jogos.map((jogos) => (
        <li key={jogos.dealID}>
          <img src={jogos.thumb} alt="" />
          <p>{jogos.title}</p>
          <p> De: US${jogos.normalPrice}</p>
          <p> Por: US${jogos.salePrice}</p>
          <p> Avaliação: {jogos.steamRatingText}</p>
        </li>
      ))}
    </ul>
  );
};

export default Jogos;
