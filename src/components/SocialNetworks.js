import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

const SocialNetworks = () => {
    return ( 
        <div className="social-networks__container">
            <a href="https://twitter.com/MrPinoBoy" target={"_blank"} rel="noreferrer"><FontAwesomeIcon className='social-networks__element' icon={faTwitterSquare}/></a>
            <a href="https://github.com/ThomasBeaupain" target={"_blank"} rel="noreferrer"><FontAwesomeIcon className='social-networks__element' icon={faGithubSquare}/></a>
            <a href="https://www.linkedin.com/in/thomas-beaupain" target={"_blank"} rel="noreferrer"><FontAwesomeIcon className='social-networks__element' icon={faLinkedin}/></a>
        </div>
     );
}
 
export default SocialNetworks;