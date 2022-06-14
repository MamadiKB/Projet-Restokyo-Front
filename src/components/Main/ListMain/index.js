// == Imports
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// -- styles
import './styles.scss';

// == Composant
const MainList = ({ listToShow }) => {
  const { slug } = useParams();
  // -- for district display
  const byDistrict = listToShow.filter((item) => item.district.name === slug);
  // console.log(slug);
  if (slug) {
    return (
      <div className="card__wrapper--list">
        {byDistrict.map((item) => (
          <Link to={`${item.slug}`}>
            <article key={item.id} className="card--list">
              <img className="card__image--list" src={item.picture} alt="etablissement" />
              <div className="card__text--list">
                <h4>{item.name}</h4>
                <h5>{item.type}</h5>
                {/* <p>{item.district.name}</p> */}
                <p>{item.address}</p>
                <span>{item.rating}</span>
              </div>
              <div className="list__card__stats" />
            </article>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="card__wrapper--list">
      {listToShow.map((item) => (
        <Link to={`${item.slug}`}>
          <article key={item.id} className="card--list">
            <img className="card__image--list" src={item.picture} alt="etablissement" />
            <div className="card__text--list">
              <h4>{item.name}</h4>
              <h5>{item.type}</h5>
              <p>{item.district.name}</p>
              <p>{item.address}</p>
              <span>{item.rating}</span>
            </div>
            <div className="list__card__stats" />
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
