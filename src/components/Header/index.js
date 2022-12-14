// == Imports
// -- components
import ResTokyologo from 'src/assets/img/mainLogo.png';
import Navbar from 'src/components/Header/Navbar';
import Slider from 'src/components/Header/Slider';
// import Searchbar from 'src/components/Header/Searchbar';

// -- styles
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
      {/* eslint-disable-next-line max-len */ }
      <p className="header__wrapper__p">Vous êtes à Tokyo et vous avez une petite faim mais vous ne savez pas où donner de l'assiette ? Comptez sur nous pour vous indiquer quels établissements ont un menu disponible en anglais !</p>
    </section>
    <section className="header__nav">
      <Navbar />
      {/* <Searchbar /> */}
    </section>
  </header>
);

// == Export
export default Header;
