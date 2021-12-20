import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dn0v5ub', 'template_7jt6yxz', form.current, 'user_f3yE2YkRtNjwkFC6Yc7yT')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        });
        e.target.reset();
    }

    return ( 
        <form className="form__container" ref={form} onSubmit={sendEmail}>
            <input name="fullname" type="text" placeholder='John Doe' className="form__input form__input--fullname" />
            <input name="email" type="email" placeholder='email@example.com' className="form__input form__input--email" />
            <div className="form__text-btn-container">
                <textarea name="text" id="" cols="30" rows="10" placeholder='Your message...' className="form__input form__input--text"/>
                <input type="submit" className="form__btn" value="Send" />
            </div>
        </form>
     );
}
 
export default ContactForm;