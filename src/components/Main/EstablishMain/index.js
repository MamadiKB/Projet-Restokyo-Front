// == Imports
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
/* import userimg from 'src/assets/img/user.jpg'; */
// -- styles
import './styles.scss';
// -- imgs

// == Composant
const EstablishMain = ({ listToShow }) => {
  const { slug } = useParams();
  const restaurent = listToShow.filter((item) => item.slug === slug);

  return (
    <div className="restaurant">
      {restaurent.map((item) => (
        <>
          <h3 className="restaurant__h3">{item.name}</h3>
          <section key={item.id} className="restaurant__info">
            <img className="restaurant__img" src={item.picture} alt="établisement" />
            <div className="restaurant__info__wrapper">
              <div className="restaurant__info__hours">
                <h4>Horaires d'ouverture</h4>
                <ul>
                  <li>Lundi: 10h30 - 21h00</li>
                  <li>Mardi: 10h30 - 21h00</li>
                  <li>Mercredi: 10h30 - 21h00</li>
                  <li>Jeudi: 10h30 - 21h00</li>
                  <li>Vendredi: 10h30 - 21h00</li>
                  <li>Samedi: 10h30 - 21h00</li>
                  <li>Dimanche: 10h30 - 21h00</li>
                </ul>
              </div>
              <div className="restaurant__info__loc">
                <h4>Adresse</h4>
                <p>{item.address}</p>
              </div>
              <div className="restaurant__info__desc">
                <h4>Description</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </section>
        </>
      ))}

      {/*       <section className="comments">
        <h4>Commentaires</h4>
        <div className="comments__wrapper__form">
          <form className="comments__form">
            <textarea className="comments__form__input" name="comment" />
            <input className="comments__form__submit" type="submit" name="comment" value="Send" />
          </form>
        </div>
        <div className="comments__card">
          <div className="comments__card__user">
            <img className="comments__card__img" src={userimg} alt="utilisateur" />
            <h5 className="comments__card__username">Nom d'utilisateur<span>le: 10/06/2022</span></h5>
          </div>
          <p>Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus.
          </p>
        </div>
        <div className="comments__card">
          <div className="comments__card__user">
            <img className="comments__card__img" src={userimg} alt="utilisateur" />
            <h5 className="comments__card__username">Nom d'utilisateur<span>le: 10/06/2022</span></h5>
          </div>
          <p>Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus.
          </p>
        </div>
      </section>
 */}
    </div>
  );
};

EstablishMain.propTypes = {
  /** array of object (Establishments to show ) all is required :
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
export default EstablishMain;
