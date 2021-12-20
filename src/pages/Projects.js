import { useState } from 'react';
import CarouselControls from "../components/CarouselControls";
import ProjectElement from '../components/ProjectElement';
import icon1 from "../resources/images/projects-icons/pomodoro-icon.png";

const Projects = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const projects = [{
        projectName: "React Pomodoro Timer",
        projectIconUrl: icon1,
        projectDescription: "A react timer on the theme of sun and moon light. A lot of work was put in the animations, trying to figure out how to make them run in relation to the timer and its modifications.",
        projectLinks: {
            direct: "https://astral-timer.netlify.app/",
            github: "https://github.com/ThomasBeaupain/react-pomodoro"
        }
    },
        {
        projectName: "Placeholder",
        projectIconUrl: icon1,
        projectDescription: "lorem ipsum sample text etceatera",
        projectLinks: {
            direct: "https://google.com",
            github: "https://github.com/ThomasBeaupain/"
        }
    },
        {
        projectName: "Placeholder",
        projectIconUrl: icon1,
        projectDescription: "lorem ipsum sample text etceatera",
        projectLinks: {
            direct: "https://google.com",
            github: "https://github.com/ThomasBeaupain/"
        }
    }]


    return ( 
        <section id="projects" className='projects'>
            <CarouselControls activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
            <div className="projects__info">
                {projects.map((project, index) => {
                    return <ProjectElement activeBtn={activeBtn} projectNumber={index+1} projectName={project.projectName} projectIconUrl={project.projectIconUrl} projectDescription={project.projectDescription} projectLinks={project.projectLinks}/>
                })}
            </div>
        </section>
     );
}
 
export default Projects;