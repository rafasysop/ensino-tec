import React from 'react';
import './style.css';

import pessoa from '../../assets/pessoa2.svg';
import elipsePessoa from '../../assets/elipse.svg';
import union from '../../assets/Union.svg';
import union1 from '../../assets/Union-1.svg';

function InfoPessoa() {
  return (
    <section className="info-container">
      <div className="info-content">
        <h2>PLATAFORMA ALL IN ONE</h2>
        <h1>Sua Escola online poderisa e lucrativa</h1>

        <p>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sostema EAD completo.
        </p>
        <div className="info-btn">
          <button className="info-comecar">Começar agora</button>
          <button className="info-video">Ver vídeo</button>
        </div>
      </div>
      <img className="pessoa" src={pessoa} alt="aa" />
      <img className="elipse" src={elipsePessoa} alt="aa" />
      <img className="union" src={union} alt="aa" />
      <img className="union1" src={union1} alt="aa" />
    </section>
  );
}

export default InfoPessoa;
