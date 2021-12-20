import { useState } from 'react';
import {HashLink} from 'react-router-hash-link';

const Menu = () => {

    const [pageName, setPageName] = useState("home");
    // const [previousPage, setPreviousPage] = useState(null);
    // const [nextPage, setNextPage] = useState("about");
    const windowHeight = window.innerHeight;
    const thirdOfWindowHeight = windowHeight/3
    window.addEventListener("scroll", () => {

        if(window.pageYOffset < windowHeight - thirdOfWindowHeight) {
            setPageName("home");
        }
        if(window.pageYOffset > windowHeight - thirdOfWindowHeight && window.pageYOffset < (2 * windowHeight) - thirdOfWindowHeight) {
            setPageName("about");
        }
        if(window.pageYOffset > (2 * windowHeight) - thirdOfWindowHeight && window.pageYOffset < (3 * windowHeight) - thirdOfWindowHeight) {
            setPageName("projects");
        }
        if(window.pageYOffset >= (3 * windowHeight) - thirdOfWindowHeight) {
            setPageName("contact");
        }
    })

    // useEffect(() => {
    //     switch (pageName) {
    //         case "home":
    //             setPreviousPage("home");
    //             setNextPage("about");
    //         break;
    //         case "about":
    //             setPreviousPage("home");
    //             setNextPage("projects");
    //         break;
    //         case "projects":
    //             setPreviousPage("about");
    //             setNextPage("contact");
    //         break;
    //         case "contact":
    //             setPreviousPage("projects");
    //             setNextPage("contact");
    //         break;
    //         default: setPreviousPage("home")
    //     }
    // }, [pageName])

    

    return ( 
        <ul className="nav">
            <div className="nav__border"></div>
            <HashLink to="/#home">
                <li className={pageName === "home" ? "nav__item nav__item--red nav__item--active" : "nav__item"} 
                // onClick={() => setPageName("home")}
                >
                        <p>home</p>
                        <div className="nav__symbol-container">
                            <div className="nav__dot nav__dot--red"></div>
                            <div className="nav__line"></div>
                        </div>
                </li>
            </HashLink>
            <HashLink to="/#about">
                <li className={pageName === "about" ? "nav__item nav__item--green nav__item--active" : "nav__item nav__item--about"} 
                // onClick={() => setPageName("about")}
                >
                        <p>about</p>
                        <div className="nav__symbol-container">
                            <div className="nav__dot nav__dot--green"></div>
                            <div className="nav__line"></div>
                        </div>
                </li>
            </HashLink>
            <HashLink to="/#projects">
                <li className={pageName === "projects" ? "nav__item nav__item--blue nav__item--active" : "nav__item nav__item--projects"}  
                // onClick={() => setPageName("projects")}
                >
                        <p>projects</p>
                        <div className="nav__symbol-container">
                            <div className="nav__dot nav__dot--blue"></div>
                            <div className="nav__line"></div>
                        </div>
                </li>
            </HashLink>
            <HashLink to="/#contact">
                <li className={pageName === "contact" ? "nav__item nav__item--white nav__item--active nav__item--last" : "nav__item nav__item--contact"}  
                // onClick={() => setPageName("contact")}
                >
                        <p>contact</p>
                        <div className="nav__symbol-container">
                            <div className="nav__dot nav__dot--white"></div>
                            <div className="nav__line"></div>
                        </div>
                </li>
            </HashLink>
        </ul>
        
     );
}
 
export default Menu;