import me from "../resources/images/cmoi.jpg";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { HashLink } from "react-router-hash-link";
import { motion } from 'framer-motion';

const AboutMe = () => {
    const [ title, titleIsVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    })
    //switches isVisible to true when triggerElement enters the screen

    const [ text, textIsVisible ] = useElementOnScreen({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    })

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
            pathLength: { delay, type: "linear", duration: 0.5, bounce: 0 },
            opacity: { delay, duration: 0.01 }
            }
        };
        }
    };

    return ( 
        <section className="about" id="about">
            <h1 className="about__page-name">About me</h1>
            <h2 className={titleIsVisible ? "about__title about__title--transition" : "about__title"} ref={title}>Hello there !</h2>
            <div className="about__image-container">
                <img className="about__picture" src={me} alt="Yours truly"/>
            </div>
            <div className="about__text-container">
                <p className="about__text about__text--first">
                    My name is Thomas, I am a 25 years old front-end web developer from Belgium.
                </p>
                <p className="about__text about__text--second">
                    I am a CSS enjoyer and a JavaScript React lover.
                </p>

                <HashLink to="/#projects">
                    <p className={textIsVisible ? "about__text about__text--third about__text--transition":"about__text about__text--third"} ref={text}>
                        Check out my work !
                    </p>
                
                    <motion.svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__next-btn"
                  initial="hidden"
                  animate={textIsVisible ? "visible" : "hidden"}>
                        <motion.line x1="10.2929" y1="11.9706" x2="20.8995" y2="1.36397" stroke="white" strokeWidth="2" variants={draw} custom={5}/>
                        <motion.line x1="0.707107" y1="1.29289" x2="11.3137" y2="11.8995" stroke="white" strokeWidth="2" variants={draw} custom={4}/>
                    </motion.svg>
                </HashLink>
            </div>

        </section>
     );
}
 
export default AboutMe;