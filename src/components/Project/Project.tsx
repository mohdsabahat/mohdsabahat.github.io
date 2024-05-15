import Card from 'react-bootstrap/Card';

import './Project.css';

export interface ProjectType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    watchers_count: number;
    language: string;
}

interface ProjectProps {
    project: ProjectType;
}

const Project = ({project}:ProjectProps) => {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <Card className="project-card">
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text>
                    {project.description ? project.description : 'No description available'}
                </Card.Text>
                <div className='d-flex'>
                    <button 
                        className="ms-auto btn btn-sm rounded-5 fw-bold"
                        onClick={() => openInNewTab(project.html_url)}
                    >
                        View on Github
                    </button>
                </div>
                <div className='d-flex mt-2'>
                    <div className="project-stats me-auto w-50">
                        <span>
                            <i className="fas fa-star"></i> {project.stargazers_count}
                        </span>
                        <span>
                            <i className="fas fa-code-branch"></i> {project.forks_count}
                        </span>
                        <span>
                            <i className="fas fa-eye"></i> {project.watchers_count}
                        </span>
                    </div>
                    <div className='language'>
                        <span className="fas fa-code"></span> {project.language}
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Project;
