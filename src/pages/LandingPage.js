import {HashLink} from 'react-router-hash-link';
import NameIntroduction from '../components/NameIntroduction';
import NextPageButton from '../components/NextPageButton';

const LandingPage = () => {
    return ( 
        <section className='landing'>
            <NameIntroduction/>
            <HashLink to='/#about'>
                <NextPageButton/>
            </HashLink>
        </section>
     );
}
export default LandingPage;