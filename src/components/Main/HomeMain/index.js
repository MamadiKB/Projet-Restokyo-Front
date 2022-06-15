// == Imports
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// -- styles
import './styles.scss';
// -- imgs

// == Composant
const HomeMain = ({ lastEstablishments }) => (
  <div className="card__wrapper">
    <div className="card__wrapper__mode">
      <h3 className="card__wrapper__h3">Les établissements à la mode</h3>
      {lastEstablishments.map((item) => (
        <Link key={item.id} to={item.slug}>
          <article key={item.id} className="card">
            <img className="card__image" src={item.picture} alt="etablissement" />
            <div className="card__text">
              <h4>{item.name}</h4>
              <h5>{item.type}</h5>
              <p>{item.address}</p>
              <span>{item.rating}</span>
            </div>
            <div className="card__stats" />
          </article>
        </Link>
      ))}
    </div>
    <div className="card__wrapper__add">
      <h3 className="card__wrapper__h3">Les derniers ajouts</h3>
      {lastEstablishments.map((item) => (
        <Link key={item.id} to={item.slug}>
          <article key={item.id} className="card">
            <img className="card__image" src={item.picture} alt="etablissement" />
            <div className="card__text">
              <h4>{item.name}</h4>
              <h5>{item.type}</h5>
              <p>{item.address}</p>
              <span>{item.rating}</span>
            </div>
            <div className="card__stats" />
          </article>
        </Link>
      ))}
    </div>
  </div>
);

HomeMain.propTypes = {
  /** array of object whith tow key required :
   *   - id: number
   *   - name: string
  */
  lastEstablishments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default HomeMain;
