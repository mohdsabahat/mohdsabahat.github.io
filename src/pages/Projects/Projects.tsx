import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { localStorageUtils } from "../../utils/localstorage";
import ProjectList from "../../components/ProjectList/ProjectList";

import { ProjectType } from "../../components/Project/Project";

import './Projects.css';

const GITHUB_USERNAME = 'mohdsabahat';

const Projects =() => {
    
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const projects = localStorageUtils.getFromLocalStorage('projects');

        console.log('projects from local storage : ', projects);
        if(projects){
            // use settimeoout to show loading for 1 sec
            setTimeout(() => {
                setProjects(projects);
                setIsLoading(false);
            }, 1000);
        } else {
            setIsLoading(true);
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
                .then((response) => {
                    if(response.status !== 200){
                        throw new Error('Failed to fetch Github projects');
                    }
                    return response.json();
                }).then((projects) => {
                    // filter projects to show only those which are not forked and have stars
                    const filteredProjects = projects.filter((project: any) => 
                        !project.fork //&& project.stargazers_count > 0
                    );
                    setProjects(filteredProjects);
                    localStorageUtils.saveToLocalStorage('projects', JSON.stringify(filteredProjects));
                    toast.success('Projects fetched successfully');
                }).catch((error) => {
                    console.error('Error fetching projects : ', error);
                    toast.error('Failed to fetch Github projects');
                }).finally(() => {
                    setIsLoading(false);
                });
        }

    }, [setProjects]);

    const noProjects = () => {
        return (
            <div className="text-center">
                <h3>No projects found</h3>
            </div>
        )
    }

    const showErrorToast = () => {
        toast.error('Failed to fetch Github projects');
        return (
            <h3 className="text-center">Error fetching projects</h3>
        )
    }

    return (
        <section id="projects">
            <Container className="navbar-offset">
                <div className="page-title">
                    <h2>My <span className="dots color-text">Projects</span></h2>
                </div>
                <Row>
                    <Col>
                        {isLoading ? 
                            <div className="text-center">Loading...</div> : 
                            projects?.length === 0 && noProjects()
                        }
                        {projects?.length > 0 && 
                            <ProjectList 
                                projects={projects} 
                                setProjects={setProjects}
                            />
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;