import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

const ProjectElement = ({projectName, projectIconUrl, projectDescription, projectLinks, activeBtn, projectNumber}) => {
    return ( 
        <div className={activeBtn === projectNumber ? "project__container project__container--active" : "project__container"}>
            <img src={projectIconUrl} alt={`${projectName} icon`} className="project__icon"/>
            <h1 className="project__name">{projectName}</h1>
            <p className="project__description">{projectDescription}</p>
            <div className="project__links-container">
                <a href={projectLinks.direct}><FontAwesomeIcon className='social-networks__element' icon={faExternalLinkSquareAlt}/></a>
                <a href={projectLinks.github}><FontAwesomeIcon className='social-networks__element' icon={faGithubSquare}/></a>
            </div>
        </div>
     );
}
 
export default ProjectElement;