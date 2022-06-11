// == Import
import './styles.scss';

// == Composant
const Searchbar = () => (

  <section className="serchbar">
    <div className="serchbar__select__wrapper">
      <select className="serchbar__select">
        <option value="">Établissement</option>
        <option value="">
          <a href="">Restaurants</a>
        </option>
        <option value="">
          <a href="">Bar / Izakaya</a>
        </option>
      </select>
      <select className="serchbar__select">
        <option value="">Quartier</option>
        <option className="serchbar__select__obs" value="">
          <a href="">Ikebukuro</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Ueno</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Asakusa</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Kagurazaka &amp; Iidabashi</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Okubo</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Takadanobaba</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Shinjuku</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">hibuya</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Harajuku</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Nakano</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Akihabara</a>
        </option>
        <option className="serchbar__select__obs" value="">
          <a href="">Ginza</a>
        </option>
      </select>
      <select className="serchbar__select">
        <option value="">Spécialités</option>
        <option value="">
          <a href="">Traditionnel</a>
        </option>
        <option value="">
          <a href="">grills</a>
        </option>
        <option value="">
          <a href="">Sushi</a>
        </option>
        <option value="">
          <a href="">fast food</a>
        </option>
        <option value="">
          <a href="">vegetarien</a>
        </option>
      </select>
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
