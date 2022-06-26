// == Imports
// -- tool
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// -- styles
import './styles.scss';

// == Composant
const TagsListMain = ({ listToShow }) => {
  // console.log(listToShow[0]);
  if (listToShow[0].length === 0) {
    return (
      <div className="card__list__wrapper">
        <article className="card__list">
          <p className="card__list__soon">Commin soon !</p>
        </article>
      </div>
    );
  }
  return (
    <div className="card__list__wrapper">
      {listToShow.map((item) => (
        <div key={item.id}>
          {item.map((e) => (
            <Link
              key={e.id}
              to={`${e.type}/list/${e.slug}`}
            >
              <article key={e.name} className="card__list">
                <img className="card__list__image" src={e.picture} alt="etablissement" />
                <div key={e.type} className="card__list__text">
                  <h4>{e.name}</h4>
                  <h5>{e.type}</h5>
                  <p>{e.district.name}</p>
                  <p>{e.address}</p>
                  <span>{e.rating}</span>
                </div>
                <div className="card__list__stats" />
              </article>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

TagsListMain.propTypes = {

  listToShow: PropTypes.array.isRequired,
};
// == Export
export default TagsListMain;
