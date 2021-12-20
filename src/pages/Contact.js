import ContactForm from '../components/ContactForm';
import SocialNetworks from '../components/SocialNetworks';

const Contact = () => {
    return ( 
        <section className="contact" id="contact">
            <h1 className="contact__page-name">Contact</h1>
            <div className="contact__container">
                <SocialNetworks/>
                <ContactForm/>
            </div>
        </section>
     );
}
 
export default Contact;