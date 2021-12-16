import ContactForm from '../components/ContactForm';
import SocialNetworks from '../components/SocialNetworks';

const Contact = () => {
    return ( 
        <section className="contact" id="contact">
            <div className="contact__container">
                <SocialNetworks/>
                <ContactForm/>
            </div>
        </section>
     );
}
 
export default Contact;