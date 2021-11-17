import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // avatar должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
  const avatarLink = React.useRef('');

  function handleSubmit(e) {
    e.preventDefault();
    avatarLink.current.focus(); 
    currentUser.avatar = avatarLink.current.value;
    props.onUpdateAvatar(currentUser);
  } 

  return(
    <PopupWithForm name='avatar' title='Обновить аватар' isOpen={props.isOpen}  onClosePopup={props.onClose} onSubmit={handleSubmit} onUpdateAvatar={props.onUpdateAvatar}>
        <input ref={avatarLink} type="url" className="popup__input" name="link" id="profile-avatar" placeholder="Ссылка на картинку" required />
        <p className="popup__error" id="profile-avatar-error" />
        <button type="submit" className="popup__button">
            Сохранить
        </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup; 