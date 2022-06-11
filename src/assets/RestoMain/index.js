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
      <div className="restaurant__wrapper">
        
      </div>
  </main>
);

// == Export
export default HomeMain;
