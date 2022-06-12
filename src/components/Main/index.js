// == Imports
import { useSelector } from 'react-redux';
// -- styles
import './styles.scss';
// -- imgs
import img1 from 'src/assets/img/imgSlider.jpg';
import img2 from 'src/assets/img/imgSlider2.jpg';
import img3 from 'src/assets/img/imgSlider3.jpg';
import Aside from 'src/components/Aside';
// import MainList from 'src/components/Main/MainList';

// == Composant
const Main = () => {
  const districts = useSelector((state) => state.districtsReducer.districtsList);
  return (
    <main>

      <Aside districts={districts} />
      {/* <MainList /> */}
      <div className="card__wrapper">
        <div className="card__wrapper__mode">
          <h3 className="card__wrapper__h3">Les établissements à la mode</h3>
          <article className="card">
            <img className="card__image" src={img1} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
          <article className="card">
            <img className="card__image" src={img2} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
          <article className="card">
            <img className="card__image" src={img3} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
        </div>
        <div className="card__wrapper__add">
          <h3 className="card__wrapper__h3">Les derniers ajouts</h3>
          <article className="card">
            <img className="card__image" src={img1} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
          <article className="card">
            <img className="card__image" src={img2} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
          <article className="card">
            <img className="card__image" src={img3} alt="etablissement" />
            <div className="card__text">
              <h4>nom du restaurants</h4>
              <h5>type</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span>Note...</span>
            </div>
            <div className="card__stats" />
          </article>
        </div>
      </div>
    </main>
  );
};

// == Export
export default Main;
