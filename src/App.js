function App() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
    />{" "}
    {/* 'maximum-scale' fixes auto-zooming on some mobile devices */}
    <title lang="en">Mesto · Russia</title>
    <meta lang="en" name="author" content="Maksim Vorobev" />
    <link rel="canonical" href="https://maxh1337.github.io/mesto/" />
    <header className="header">
      <a
        target="_self"
        href="https://github.com/maxh1337/mesto"
        className="logo header__logo"
      >
        <img
          className="logo__img"
          alt="Mesto"
          src="<%=require('./images/logo.svg')%>"
        />
      </a>
    </header>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src="<%=require('./images/avatar.jpg')%>"
            alt="Жак-Ив Кусто"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Неизвестный</h1>
          <p className="profile__description">Потеряно соединение с сервером</p>
          <button type="button" className="profile__edit-button" />
        </div>
        <button type="button" className="profile__add-button" />
      </section>
      <section className="elements">
        <ul className="elements__list">{/* fills up via JS */}</ul>
      </section>
    </main>
    <footer className="footer">
      <a
        target="_blank"
        href="https://github.com/maxh1337"
        className="footer__copyright"
      >
        © 2021 Maksim Vorobev
      </a>
    </footer>
    <section className="popup" id="avatar-editor">
      <div className="popup__container">
        <button type="reset" className="popup__close-button" />
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form" action>
          {" "}
          {/* 'action' attr is necessary for iOS to display blue 'Go' button on the keyboard */}
          <input
            type="url"
            className="popup__input"
            name="link"
            id="profile-avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <p className="popup__error" id="profile-avatar-error" />
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </form>
      </div>
    </section>
    <section className="popup" id="profile-editor">
      <div className="popup__container">
        <button type="reset" className="popup__close-button" />
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form" action>
          <input
            type="text"
            autoComplete="name"
            autoCapitalize="words"
            className="popup__input"
            name="name"
            id="profile-name"
            placeholder="Имя"
            minLength={2}
            maxLength={40}
            required
          />
          <p className="popup__error" id="profile-name-error" />
          <input
            type="text"
            className="popup__input"
            name="job"
            id="profile-job"
            placeholder="О себе"
            minLength={2}
            maxLength={200}
            required
          />
          <p className="popup__error" id="profile-job-error" />
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </form>
      </div>
    </section>
    <section className="popup" id="element-editor">
      <div className="popup__container">
        <button type="button" className="popup__close-button" />
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form" action>
          <input
            type="text"
            className="popup__input"
            name="title"
            id="element-title"
            placeholder="Название"
            minLength={2}
            maxLength={30}
            required
          />
          <p className="popup__error" id="element-title-error" />
          <input
            type="url"
            className="popup__input"
            name="link"
            id="element-link"
            placeholder="Ссылка на картинку"
            required
          />
          <p className="popup__error" id="element-link-error" />
          <button type="submit" className="popup__button">
            Создать
          </button>
        </form>
      </div>
    </section>
    <section className="popup" id="delete-confirmation">
      <div className="popup__container">
        <button type="button" className="popup__close-button" />
        <h2 className="popup__title">Вы уверены?</h2>
        <form className="popup__form">
          <button type="submit" className="popup__button">
            Да
          </button>
        </form>
      </div>
    </section>
    <section className="popup popup_type_image" id="image-viewer">
      <figure className="popup__figure">
        <button
          type="button"
          className="popup__close-button popup__close-button_parent-corners_straight"
        />
        <img className="popup__image" alt="#" src="#" />
        <figcaption className="popup__caption" />
      </figure>
    </section>
    <template id="element-template" />
  </>
  
  );
}

export default App;
