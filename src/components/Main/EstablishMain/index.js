// == Imports
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import {
  addComment,
  changeCommentValue,
  changeNoteValue,
  getId,
} from 'src/actions/comments';
// -- styles
import './styles.scss';
// -- imgs

// == Composant
const EstablishMain = ({ listToShow }) => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const commentValue = useSelector((state) => state.commentsReducer.commentValue);
  const restaurent = listToShow.filter((item) => item.slug === slug);

  const noteOptions = [
    { value: '0', label: '0' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const comments = restaurent.map((item) => item.comments.map((e, k) => (
    <div key={k.id} className="comments__card">
      <div className="comments__card__user">
        <img className="comments__card__img" src={e.user.picture} alt="utilisateur" />
        <h5 className="comments__card__username">{e.user.pseudo}<span>le: 10/06/2022</span></h5>
      </div>
      <p>{e.content}</p>
    </div>
  )));

  return (
    <div className="restaurant">
      {restaurent.map((item) => (
        <div key={item.id}>
          <h3 className="restaurant__h3">{item.name}</h3>
          <section className="restaurant__info">
            <img className="restaurant__img" src={item.picture} alt="établisement" />
            <div className="restaurant__info__wrapper">
              <div className="restaurant__info__hours">
                <h4>Horaires d'ouverture</h4>
                <ul>
                  <li>{item.openingTime}</li>
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

          <section className="comments">
            <h4>Commentaires</h4>
            <div className="comments__wrapper__form">
              <form
                className="comments__form"
                onSubmit={(event) => {
                  event.preventDefault();
                  // console.log(item.id);
                  dispatch(getId(item.id));
                  dispatch(addComment());
                }}
              >
                <textarea
                  className="comments__form__input"
                  name="comment"
                  value={commentValue}
                  onChange={(event) => {
                    // console.log(event.target.value);
                    const action = changeCommentValue(event.target.value);
                    dispatch(action);
                  }}
                />
                <Select
                  onChange={(event) => {
                    const action = changeNoteValue(event.value);
                    dispatch(action);
                  }}
                  className="comments__form__select"
                  options={noteOptions}
                />
                <button className="comments__form__submit" type="submit">
                  Comment
                </button>
              </form>
            </div>
            {comments}
          </section>
        </div>
      ))}
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
