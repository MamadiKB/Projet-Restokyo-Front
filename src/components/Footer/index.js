import { Link } from 'react-router-dom';

// == Import
import './styles.scss';

// == Composant
const Footer = () => (
  <footer>
    <div className="footer__links">
      <a href="">Plan du site</a>
      <a href="">Mention légales</a>
      <Link to="/contact" href="">Contact</Link>
    </div>
  </footer>
);

// == Export
export default Footer;
