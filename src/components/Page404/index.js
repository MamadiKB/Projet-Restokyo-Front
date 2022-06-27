import quatre from 'src/assets/img/4-de-404.png';
import zero from 'src/assets/img/zero.png';
import { Link } from 'react-router-dom';

import './styles.scss';

const Page404 = () => (
  <div className="quatrecentquatre__wrapper">
    <div className="quatrecentquatre__wrapper__title">
      <h1 className="quatrecentquatre__title">Oups, il y a comme un Sushi !</h1>
    </div>
    <div className="quatrecentquatre__wrapper__img">
      <h1 className="quatrecentquatre__error">ERROR :</h1>
      <img className="quatrecentquatre" src={quatre} alt="quatre-cent-quatre" />
      <img className="quatrecentquatre" src={zero} alt="quatre-cent-quatre" />
      <img className="quatrecentquatre" src={quatre} alt="quatre-cent-quatre" />
    </div>
    <div className="quatrecentquatre__info">
      <p>Mais ce n'est pas la faim du monde</p>
      <p>
        Cliquez <Link className="quatrecentquatre__info__link" to="/">ici</Link>
        , que l'on vous Ramen à la page d'accueil (et que vous puissiez vous régaler)
      </p>
    </div>
  </div>
);

export default Page404;
