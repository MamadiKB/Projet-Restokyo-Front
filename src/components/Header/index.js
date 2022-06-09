// == Import
import ResTokyologo from 'src/assets/img/mainLogo.png';
import Navbar from 'src/components/Navbar';
import Slider from 'src/components/Slider';
import Searchbar from '../Searchbar';
import './styles.scss';

// == Composant
const Header = () => (
  <header className="header">
    <section className="header__wrapper">
      <div className="header__wrapper__title">
        <img src={ResTokyologo} alt="restokyo logo" className="header__wrapper__title__logo" />
        <h1 className="header__wrapper__title__h1">
          Restez serein, Restaurez-vous, ResTokyo
        </h1>
      </div>
      <Slider />
    </section>
    <section className="header__nav">
      <Navbar />
      <Searchbar />
    </section>
  </header>
);

// == Export
export default Header;
