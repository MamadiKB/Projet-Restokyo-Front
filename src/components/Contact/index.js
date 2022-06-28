/* eslint-disable jsx-a11y/control-has-associated-label */
import mika from 'src/assets/img/MikaDraw.jpg';
import ken from 'src/assets/img/KenDraw.jpg';
import nico from 'src/assets/img/NicoDraw.jpg';
import madi from 'src/assets/img/MadiDraw.jpg';
import git from 'src/assets/img/icons8-github-50.png';

import './styles.scss';

const Contact = () => (
  <div className="contact__wrapper">
    <h1>Team Back-end</h1>
    <div className="contact__back">

      <div className="contact__div">

        <img className="contact__img" src={ken} alt="Ken Bacconnier" />
        <p>Ken Bacconnier</p>
        <p>Product Owner</p>
        <a href="https://github.com/Ken-Bac" target="_blank" rel="noreferrer">
          <img className="contact__git" src={git} alt="Ken Bacconnier" />
        </a>
      </div>
      <div className="contact__div">
        <img className="contact__img" src={mika} alt="Mickaël Zimmermann" />
        <p>Mickaël Zimmermann</p>
        <p>Scrum Master</p>
        <a href="https://github.com/MickaelZimmermann" target="_blank" rel="noreferrer">
          <img className="contact__git" src={git} alt="Ken Bacconnier" />
        </a>
      </div>
      <div className="contact__div">
        <img className="contact__img" src={nico} alt="Nicolas Boivin" />
        <p>Nicolas Boivin</p>
        <p>Lead Dev Back</p>
        <a href="https://github.com/Baron78x" target="_blank" rel="noreferrer">
          <img className="contact__git" src={git} alt="Ken Bacconnier" />
        </a>
      </div>
    </div>
    <h1>Team Front-end</h1>
    <div className="contact__front">

      <div className="contact__div">
        <img className="contact__img" src={madi} alt="Mamadi Kaba" />
        <p>Mamadi Kaba</p>
        <p>Lead Dev Front</p>
        <a href="https://github.com/MamadiKB" target="_blank" rel="noreferrer">
          <img className="contact__git" src={git} alt="Ken Bacconnier" />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
