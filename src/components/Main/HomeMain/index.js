// == Imports
// -- tool
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// -- styles
import './styles.scss';

// == Composant
const HomeMain = ({ lastEstablishments, bestEstablishmentsList }) => (
  <div className="card__wrapper">
    <div className="card__wrapper__mode">
      <h3 className="card__wrapper__h3">Les établissements à la mode</h3>
      {bestEstablishmentsList.map((item) => (
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
  /** array of object ( 3 last Establishments add ) all is required :
   *  - id: number
   *  - name: string
   *  - address: string
   *  - picture: string
   *  - rating: string
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
  /** array of object ( 3 best Establishments rate ) all is required :
   *  - id: number
   *  - name: string
   *  - address: string
   *  - picture: string
   *  - rating: string
  */
  bestEstablishmentsList: PropTypes.arrayOf(
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
