import React from "react";

class PopupWithForm extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    if (this.props.isOpen) {
      this._openedClass = 'popup_opened';
    }
    if (this.props.onClose) {
      this._openedClass = ' ';
    }


    return(
    <section className={`popup ${this._openedClass}`} id={`${this.props.name}-editor`}>
        <div className="popup__container">
            <button type="reset" className="popup__close-button" onClick={this.props.onClosePopup}/>
            <h2 className="popup__title">{this.props.title}</h2>
            <form className="popup__form" action>
            {this.props.children} 
            </form>
        </div>
    </section> 
    )
  }
}
export default PopupWithForm;