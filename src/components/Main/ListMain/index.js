// == Imports
// -- tool
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';
import Page404 from '../../Page404';

// -- styles
import './styles.scss';

// == Composant
const MainList = ({ listToShow }) => {
  const { slug } = useParams();
  // -- for district display
  const byDistrict = listToShow.filter((item) => item.district.name === slug);

  if (!listToShow) {
    <Page404 />;
  }
  // -- if the route have a :slug is for district list
  if (slug) {
    return (
      <div className="card__list__wrapper">
        {byDistrict.map((item) => (
          <Link key={item.id} to={`${item.slug}`}>

            <article key={item.id} className="card__list">
              <img className="card__list__image" src={item.picture} alt="etablissement" />
              {item.tags.map((tag) => (
                <p key={tag.id} className="card__list__tags">{tag.name}</p>
              ))}
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
            {item.tags.map((tag) => (
              <p key={tag.id} className="card__list__tags">{tag.name}</p>
            ))}
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
  /** array of object all is required :
   *  - id: number
   *  - name: string
   *  - address: string
   *  - picture: string
   *  - rating: string
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
