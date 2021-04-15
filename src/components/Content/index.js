import React from 'react';
import './style.css';
import trilhasIcon from '../../assets/icon-trilhas.svg';
import playlistIcon from '../../assets/icon-playlists-p.svg';
import folderIcon from '../../assets/icon-folder.svg';
import seta from '../../assets/seta.svg';
import rocket from '../../assets/rocket.svg';

function Content() {
  return (
    <div className="content-container">
      <div className="content">
        <div className="content-head">
          <div className="content-detalhes">
            <div />
            <h3>PENSAMOS EM CADA DETALHE</h3>
          </div>
          <a href="#">Conheça alguns dos nossos recursos ⚡️</a>
        </div>
        <h1>Queremos que o aluno se sinta confortável enquanto aprende</h1>
        <article className="art-content">
          <div className="art">
            <img src={trilhasIcon} alt="img" />
            <h2>Trilhas de etapas</h2>
            <p>
              Crie planos de estudos especificando aulas e/ou cursos e definindo
              a ordem que seus alunos devem estudar.
            </p>
          </div>
          <div className="art">
            <img src={playlistIcon} alt="img" />
            <h2>Playlists</h2>
            <p>
              Transforme uma coleção em uma playlist para poder ver vídeos e
              áudios em sequência offline.
            </p>
          </div>
          <div className="art">
            <img src={folderIcon} alt="img" />
            <h2>Coleções</h2>
            <p>
              Crie coleções, adicione conteúdos, reorganize ítens e deixe tudo
              do seu jeito para melhorar a experiência.
            </p>
          </div>
        </article>
        <hr />
        <div className="veja">
          <div className="text">
            <img src={rocket} alt="rocket" />
            Veja todos os outros recursos disponíveis para te ajudar{' '}
          </div>
          <a href="#">
            Ver mais <img src={seta} alt="seta" />{' '}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Content;
