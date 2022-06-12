// == Imports
// -- styles
import './styles.scss';
// -- imgs
import img1 from 'src/assets/img/imgSlider.jpg';
import img2 from 'src/assets/img/imgSlider2.jpg';
import img3 from 'src/assets/img/imgSlider3.jpg';

// == Composant
const MainList = () => (
  <div className="card__wrapper--list">

    <article className="card--list">
      <img className="card__image" src={img1} alt="etablissement" />
      <div className="card__text--list">
        <h4>nom du restaurants</h4>
        <h5>type</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi!</p>
        <span>Note...</span>
      </div>
      <div className="list__card__stats" />
    </article>

    <article className="card--list">
      <img className="card__image" src={img2} alt="etablissement" />
      <div className="card__text--list">
        <h4>nom du restaurants</h4>
        <h5>type</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi!</p>
        <span>Note...</span>
      </div>
      <div className="list__card__stats" />
    </article>

    <article className="card--list">
      <img className="card__image" src={img3} alt="etablissement" />
      <div className="card__text--list">
        <h4>nom du restaurants</h4>
        <h5>type</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi!</p>
        <span>Note...</span>
      </div>
      <div className="list__card__stats" />
    </article>

    <article className="card--list">
      <img className="card__image" src={img1} alt="etablissement" />
      <div className="card__text--list">
        <h4>nom du restaurants</h4>
        <h5>type</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, commodi!</p>
        <span>Note...</span>
      </div>
      <div className="list__card__stats" />
    </article>

  </div>
);

// == Export
export default MainList;
