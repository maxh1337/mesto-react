import React from 'react';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }


render(){
  if (this.props.card !== null) {
    this._openedClass = 'popup_opened';
  }
  if (this.props.isPopupClose) {
    this._openedClass = ' ';
  }
   if (this.props.card !== null  &&  !this.props.isPopupClose) { 

    return(
        <section className={`popup popup_type_image ${this._openedClass}`} id="image-viewer">
        <figure className="popup__figure">
          <button type="button" onClick={this.props.onClosePopup} className="popup__close-button popup__close-button_parent-corners_straight"/>
          <img className="popup__image" src={this.props.card.link} alt={this.props.card.name} />
          <figcaption className="popup__caption">{this.props.card.name}</figcaption>
        </figure>
      </section>
    )
    } else {
      return (null);
    }
  }
}
export default ImagePopup;