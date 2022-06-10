// == Import
import './styles.scss';
import img1 from 'src/assets/img/imgSlider.jpg';
import img2 from 'src/assets/img/imgSlider2.jpg';
import img3 from 'src/assets/img/imgSlider3.jpg';

// == Composant
const HomeMain = () => (
  <main>
    <aside>
      <div className="district">
        <ul className="district__ul">
          <li><a href="">Ikebukuro</a></li>
          <li><a href="">Ueno</a></li>
          <li><a href="">Asakusa</a></li>
          <li><a href="">Kagurazaka &amp; Iidabashi</a></li>
          <li><a href="">Okubo</a></li>
          <li><a href="">Takadanobaba</a></li>
          <li><a href="">Shinjuku</a></li>
          <li><a href="">Shibuya</a></li>
          <li><a href="">Harajuku</a></li>
          <li><a href="">Nakano</a></li>
          <li><a href="">Akihabara</a></li>
          <li><a href="">Ginza</a></li>
        </ul>
      </div>
    </aside>
    <div className="card__wrapper">
      <div className="card__wrapper__mode">
        <h3 className="card__wrapper__h3">Les établisement à la mode</h3>
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
        <h3 className="card__wrapper__h3">Les dernier ajouts</h3>
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

// == Export
export default HomeMain;
