// == Import
import './styles.scss';

// == Composant
const Searchbar = () => (

  <section className="serchbar">
    <div className="serchbar__btn__wrapper">
      <button type="submit" className="btn__wrapper__elm">Établissement</button>
      <button type="submit" className="btn__wrapper__elm">Spécialités</button>
      <button type="submit" className="btn__wrapper__elm">Quartier</button>
    </div>
    <div className="serchbar__wrapper__form">
      <form className="serchbar__form">
        <input className="wrapper__form__input" type="text" name="" placeholder="Etablissement..." />
        <input className="wrapper__form__submit" type="submit" name="" value="Search" />
      </form>
    </div>
  </section>

);

// == Export
export default Searchbar;
