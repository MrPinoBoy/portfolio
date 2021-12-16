const ContactForm = () => {
    return ( 
        <form className="form__container">
            <input type="text" className="form__input form__input--fullname" />
            <input type="email" className="form__input form__input--email" />
            <textarea name="" id="" cols="30" rows="10" className="form__input form__input--text"></textarea>
        </form>
     );
}
 
export default ContactForm;