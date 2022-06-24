// == Import
import { useDispatch, useSelector } from 'react-redux';
import { closeNotifModal } from 'src/actions/connect';

import './styles.scss';

// == Composant
const NotiftModal = () => {
  const dispatch = useDispatch();
  const isSingIn = useSelector((state) => state.connectReducer.isSingIn);

  let cssNotif = 'notif notif--off';
  if (isSingIn) {
    cssNotif = 'notif';
  }

  return (
    <div className={cssNotif}>
      <button
        className="notif__button"
        type="button"
        onClick={() => {
          dispatch(closeNotifModal());
        }}
      >
        X
      </button>
      <p>Inscription réussie !</p>
      <p>Veuillez vous connecter</p>
    </div>
  );
};

// == Export
export default NotiftModal;
