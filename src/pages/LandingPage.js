import {HashLink} from 'react-router-hash-link';
import Menu from '../components/Menu';
import NameIntroduction from '../components/NameIntroduction';
import NextPageButton from '../components/NextPageButton';

const LandingPage = () => {
    return ( 
        <section className='landing' id="home">
            <NameIntroduction/>
            <Menu/>
            <HashLink to='/#about'>
                <NextPageButton/>
            </HashLink>
        </section>

     );
}
export default LandingPage;