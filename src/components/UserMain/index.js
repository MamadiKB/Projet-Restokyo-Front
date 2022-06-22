// == Imports
// import { useDispatch } from 'react-redux';
// -- tool
import { useSelector } from 'react-redux';

// -- styles
import './styles.scss';
// -- components

// -- Main components

// == Composant
const UserMain = () => {
  const userInfo = useSelector((state) => state.connectReducer.user);
  // console.log(userInfo);

  return (
    <main>
      <h1 className="card__user__h1"> Hello <span>{userInfo.pseudo} !</span></h1>
      <div className="card__user__wrapper">
        <img className="card__user__image" src={userInfo.picture} alt="utilisateur" />
        <div className="card__user__info">
          <ul>
            <li>Pseudo: {userInfo.pseudo}</li>
            <li>Prenom: {userInfo.firstname}</li>
            <li>Nom: {userInfo.lastname}</li>
            <li>Age:</li>
            <li>Email: {userInfo.email}</li>
          </ul>
          {/* <button className="card__user__edit" type="button">edit</button> */}
        </div>
      </div>
      {/* <h1 className="card__user__h1">Favoris</h1>
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
      </div> */}
    </main>
  );
};

// == Export
export default UserMain;
