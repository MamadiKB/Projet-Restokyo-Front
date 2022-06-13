// == Import
import PropTypes from 'prop-types';
import './styles.scss';

// == Composant
const Aside = ({ districtsList }) => (
  <aside>
    <div className="district">
      <h2>Quartiers</h2>
      <ul className="district__ul">
        {districtsList.map((item) => (
          <li key={item.id}><a key={item.id} href="">{item.name}</a></li>
        ))}
      </ul>
    </div>
  </aside>
);

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
