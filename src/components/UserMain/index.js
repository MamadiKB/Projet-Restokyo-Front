// == Imports
// import { useDispatch } from 'react-redux';
// -- tempo
import imgUser from 'src/assets/img/user.jpg';
import imgFav from 'src/assets/img/imgSlider.jpg';
// -- tool

// -- styles
import './styles.scss';
// -- components

// -- Main components

// == Composant
const UserMain = () => (
  <main>
    <h1 className="card__user__h1"> Hello <span>(Nom d'utilisateur)</span></h1>
    <div className="card__user__wrapper">
      <img className="card__user__image" src={imgUser} alt="utilisateur" />
      <div className="card__user__info">
        <ul>
          <li>nom</li>
          <li>prenom</li>
          <li>age</li>
          <li>Email</li>
        </ul>
        <button className="card__user__edit" type="button">edit</button>
      </div>
    </div>
    <h1 className="card__user__h1">Favoris</h1>
    <div className="card__fav__wrapper">
      <article className="card__fav">
        <img className="card__fav__image" src={imgFav} alt="etablissement" />
        <div className="card__fav__text">
          <h4>favoris name</h4>
          <h5>type</h5>
          <p>district name</p>
          <p>address</p>
          <span>rating</span>
        </div>
        <div className="card__fav__stats" />
      </article>
      <article className="card__fav">
        <img className="card__fav__image" src={imgFav} alt="etablissement" />
        <div className="card__fav__text">
          <h4>favoris name</h4>
          <h5>type</h5>
          <p>district name</p>
          <p>address</p>
          <span>rating</span>
        </div>
        <div className="card__fav__stats" />
      </article>
      <article className="card__fav">
        <img className="card__fav__image" src={imgFav} alt="etablissement" />
        <div className="card__fav__text">
          <h4>favoris name</h4>
          <h5>type</h5>
          <p>district name</p>
          <p>address</p>
          <span>rating</span>
        </div>
        <div className="card__fav__stats" />
      </article>
    </div>
  </main>
);

// == Export
export default UserMain;
