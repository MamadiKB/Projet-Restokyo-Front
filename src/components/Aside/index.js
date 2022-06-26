// == Import
// -- tool
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// -- actions
import { addAsideSelectValue } from 'src/actions/app';
// -- styles
import './styles.scss';

// == Composant
const Aside = ({ districtsList }) => {
  const dispatch = useDispatch();
  // console.log(districtsList);
  return (
    <aside>
      <div className="district">
        <h2>Quartiers</h2>
        <ul className="district__ul">
          {districtsList.map((item) => (
            <li key={item.id}>
              <Link
                key={item.id}
                to={`quartier/${item.slug}`}
                onClick={(event) => {
                  const action = addAsideSelectValue(event.target.textContent);
                  dispatch(action);
                }}
              >
                <p>{item.name} / {item.kanji}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

Aside.propTypes = {
  /** array of object whith tow key required :
   *   - id: number
   *   - name: string
  */
  districtsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// == Export
export default Aside;
