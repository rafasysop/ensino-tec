import React from 'react';
import './style.css';

import pessoa from '../../assets/pessoa2.svg';
import elipsePessoa from '../../assets/elipse.svg';
import union from '../../assets/Union.svg';
import union1 from '../../assets/Union-1.svg';
import playlist from '../../assets/icon-playlists.svg';
import cert from '../../assets/icon-certified.svg';
import video from '../../assets/video.svg';
import devices from '../../assets/devices.svg';

function InfoPessoa() {
  return (
    <section className="info-container">
      <img className="icon-playlist-1" src={playlist} alt="playlist" />
      <img className="icon-playlist-2" src={playlist} alt="playlist" />
      <img className="icon-cert-1" src={cert} alt="playlist" />
      <div className="info-content">
        <div className="info-devices">
          <img src={devices} alt="devices" />
          <h2>PLATAFORMA ALL IN ONE</h2>
        </div>
        <h1>Sua Escola online poderosa e lucrativa</h1>

        <p>
          Tenha sua própria escola online 100% white label com rede social,
          gamificação, clube de assinaturas, ecommerce e sostema EAD completo.
        </p>
        <div className="info-btn">
          <button className="info-comecar">Começar agora</button>
          <button className="info-video">
            <img src={video} alt="icon video" /> Ver vídeo
          </button>
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
