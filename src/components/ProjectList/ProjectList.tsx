import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Project, { ProjectType } from "../Project/Project";
import { useEffect, useRef, useState } from "react";

// write an utility method to sort a list of object based on the provided key
function sortProjectsByKey<T extends { [key: string]: string | number }>(list: T[], key: keyof T, ascending: boolean = true): T[] {
  return [...list].sort((a, b) => {
    if (typeof a[key] === 'number' && typeof b[key] === 'number') {
      return ascending ? (a[key] as number) - (b[key] as number) : (b[key] as number) - (a[key] as number);
    } else if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return ascending ? (a[key] as string).localeCompare(b[key] as string) : (b[key] as string).localeCompare(a[key] as string);
    } else {
      return 0;
    }
  });
}

const ProjectList = ({projects, setProjects}:any) => {

    const [sortAsc, setSortAsc] = useState(false);
    const selectEl = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        handleProjectSort();
    }, []);

    const handleProjectSort = (ascOrder: boolean = sortAsc) => {
        const sortType = selectEl.current?.value??'';
        let sortedProjects ;
        switch (sortType) {
            case '1':
                sortedProjects = sortProjectsByKey(projects, 'stargazers_count', ascOrder);
                break;
            case '2':
                sortedProjects = sortProjectsByKey(projects, 'forks_count', ascOrder);
                break;
            default:
                sortedProjects = sortProjectsByKey(projects, 'watchers_count', ascOrder);
                break;
        }
        setProjects(sortedProjects);
    }

    const sortProjects = () => {
        handleProjectSort();
    }

    const changeSortOrder = () => {
        handleProjectSort(!sortAsc);
        setSortAsc(currOrder => !currOrder);
    }

    return (
        <Row>
            <Col xs={12} md={12} lg={12}>
                <div className='d-flex mb-4'>
                    <div className="d-flex ms-auto align-items-center position-relative">
                        <Form.Select size="sm" onChange={sortProjects} ref={selectEl}> 
                            <option hidden value="1">Sort By</option>
                            <option value="0">Default</option>
                            <option value="1">Stars</option>
                            <option value="2">Forks</option>
                            <option value="3">Views</option>
                        </Form.Select>
                        <span 
                            className={`sort-btn ${sortAsc ? 'active-asc' : 'active-desc'} ms-2`}
                            onClick={changeSortOrder}
                        >
                            <span className="fas fa-sort-up"></span>
                            <span className="fas fa-sort-down"></span>
                        </span>
                    </div>
                </div>
            </Col>
            {projects && projects.map((project : ProjectType) => {
                    return (
                        <Col xs={12} md={6} lg={4} key={project.id}>
                            <Project project={project} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default ProjectList;