// == Import
// -- tool
import { useDispatch, useSelector } from 'react-redux';
import { Select, Icon } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
// -- actions
import { toggelNavMenu, changeSelectSpecialityValue, addSelectSearchValue } from 'src/actions/app';
// -- components
import ResTokyologo from 'src/assets/img/mainLogo.png';
import ButtonSettings from 'src/components/Header/Navbar/ButtonSettings';
// -- styles

import './styles.scss';

// == Composant
const Navbar = () => {
  const toggelNav = useSelector((state) => state.headerReducer.navIsOpen);
  const tagsList = useSelector((state) => state.tagsReducer.tagsList);
  const researchValue = useSelector((state) => state.searchBarReducer);

  let cssNav = 'nav nav--collapse';
  let cssNavMenu = 'nav__menu nav__menu--collapse';
  if (toggelNav) {
    cssNav = 'nav';
    cssNavMenu = 'nav__menu';
  }
  else {
    cssNav = 'nav nav--collapse';
    cssNavMenu = 'nav__menu nav__menu--collapse';
  }

  const tagsSelectOption = tagsList.map((item) => (
    { key: item.id, value: item.name, text: item.slug }
  ));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="nav__wrapper">
      <nav className={cssNav}>
        <Link to="/">
          <img src={ResTokyologo} alt="restokyo logo" className="nav__logo" />
        </Link>
        <ul className={cssNavMenu}>
          <li className="nav__item">
            <Link
              to="/"
              href="#"
              className="nav__link"
            >
              Accueil
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="restaurant/list"
              href="#"
              className="nav__link"
            >
              Restaurants
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="izakaya/list"
              href="#"
              className="nav__link"
            >
              Izakaya
            </Link>
          </li>
          <ButtonSettings />
        </ul>

        <h1 className="nav__title">Restez serein, Restaurez-vous, ResTokyo</h1>
        <div
          className="toggler__icon"
          // eslint-disable-next-line no-unused-vars
          onClick={(event) => {
            const action = toggelNavMenu();
            dispatch(action);
          }}
        >
          <div className="line__1" />
          <div className="line__2" />
          <div className="line__3" />
        </div>
      </nav>

      <form
        className="serchbar"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addSelectSearchValue());
          localStorage.setItem('recherch', JSON.stringify(researchValue.specialityValue));
          navigate(`tags/${researchValue.specialityValue}`);
        }}
      >
        <p className="serchbar__p">J'ai faim ! J'ai envie de : </p>
        <Select
          className="serchbar__select"
          placeholder="Spécialités"
          options={tagsSelectOption}
          onChange={(event) => {
            const action = changeSelectSpecialityValue(event.target.textContent);
            dispatch(action);
          }}
        />

        <button className="serchbar__submit__button" type="submit"> <Icon name="search" /> </button>
      </form>
    </div>
  );
};

// == Export
export default Navbar;
