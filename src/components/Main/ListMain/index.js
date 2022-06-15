// == Imports
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// -- styles
import './styles.scss';

// == Composant
const MainList = ({ listToShow }) => {
  const { slug } = useParams();
  // -- for district display
  // console.log(listToShow);
  const byDistrict = listToShow.filter((item) => item.district.name === slug);

  if (slug) {
    return (
      <div className="card__list__wrapper">
        {byDistrict.map((item) => (
          <Link key={item.id} to={`${item.slug}`}>
            <article key={item.id} className="card__list">
              <img className="card__list__image" src={item.picture} alt="etablissement" />
              <div className="card__list__text">
                <h4>{item.name}</h4>
                <h5>{item.type}</h5>
                <p>{item.district.name}</p>
                <p>{item.address}</p>
                <span>{item.rating}</span>
              </div>
              <div className="card__list__stats" />
            </article>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="card__list__wrapper">
      {listToShow.map((item) => (
        <Link key={item.id} to={`${item.slug}`}>
          <article key={item.id} className="card__list">
            <img className="card__list__image" src={item.picture} alt="etablissement" />
            <div className="card__list__text">
              <h4>{item.name}</h4>
              <h5>{item.district.name}</h5>
              <p>{item.type}</p>
              <p>{item.address}</p>
              <span>{item.rating}</span>
            </div>
            <div className="card__list__stats" />
          </article>
        </Link>
      ))}
    </div>
  );
};

MainList.propTypes = {
  /** array of object whith tow key required :
   *   - id: number
   *   - name: string
  */
  listToShow: PropTypes.arrayOf(
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
export default MainList;
