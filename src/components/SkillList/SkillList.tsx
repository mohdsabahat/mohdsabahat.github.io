import React , {useEffect, useRef, useState} from 'react';

import Form from 'react-bootstrap/Form';
import Skill, { skillType } from '../Skill/Skill';

import './SkillList.css';
import { localStorageUtils } from '../../utils/localstorage';
import toast from 'react-hot-toast';
import { toastStyles } from '../../utils/toastStyles';

const SPREADSHEET_ID = '1HwsoZ_bCfIo9UgcRr9b2kYZS_njxCfIzaJqmnLhuneM';

const skillListTest:skillType[] = [
    {id: 1, name: 'HTML', level: 2}, {id: 2, name: 'CSS', level: 1},
    {id: 3, name: 'Bootstrap', level: 2}, {id: 4, name: 'JQuery', level: 2},
    {id: 5, name: 'Java', level: 1}, {id: 6, name: 'MySQL', level: 2},
    {id: 7, name: 'SprintBoot', level: 1}, {id: 8, name: 'React', level: 1},
];

const SkillList = () => {

    const [sortAsc, setSortAsc] = useState(true);
    const [skillList, setSkillList] = useState(skillListTest); 
    const [isLoading, setIsLoading] = useState(true);
    const selectEl = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        // fetch skill list using api call to a google spreadsheet
        let skills = localStorageUtils.getFromLocalStorage('skills');
        if(skills){
            setTimeout(() => {
                setSkillList(skills);
                setIsLoading(false);
            }, 1000);
        } else {
            setIsLoading(true);
            fetch(`https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq`)
            .then((response) => response.text())
            .then((text:string) => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                console.log('fetched skill json data: ', json);
                const skills = json.table.rows.map((row: any) => {
                    return {
                        id: parseInt(row.c[0].v),
                        name: row.c[1].v,
                        level: parseInt(row.c[2].v)
                    }
                });
                setSkillList(skills);
                setIsLoading(false);
                localStorageUtils.saveToLocalStorage('skills', skills);
            })
            .catch((error) => {
                console.error('Error fetching skills : ', error);
                toast.error('Failed to fetch latest skills', toastStyles.dark);
            })
            .finally(() => {
                // set loading to false
                setIsLoading(false);
            });
        }
    }, []);
    useEffect(() => {
        sortSkills();
    }, []);

    const sortSkillAlphabetically = (ascOrder: boolean) => {
        // sort skills alphabetically without muatating the state variable but use setSkillList to update the state
        const sortedSkills = [...skillList].sort((a, b) => {
            if (ascOrder) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });
        setSkillList(sortedSkills);
    }

    const sortSkillBySkillLevel = (ascOrder: boolean) => {
        const sortedSkills = [...skillList].sort((a, b) => {
            if (ascOrder) {
                return a.level - b.level;
            } else {
                return b.level - a.level;
            }
        });
        setSkillList(sortedSkills);
    }

    const sortSkillById = (ascOrder: boolean) => {
        const sortedSkills = [...skillList].sort((a, b) => {
            if (ascOrder) {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });
        setSkillList(sortedSkills);
    }

    const handleSkillSort = (ascOrder: boolean = sortAsc) => {
        const sortType = selectEl.current?.value??'';
        switch (sortType) {
            case '1':
                sortSkillAlphabetically(ascOrder);
                break;
            case '2':
                sortSkillBySkillLevel(ascOrder);
                break;
            default:
                sortSkillById(ascOrder);
                break;
        }
    }

    const sortSkills = () => {
        handleSkillSort();
    }
    const changeSortOrder = () => {
        handleSkillSort(!sortAsc);
        setSortAsc((currOrder) => !currOrder);
    }

    return (
        <>
            {/* Skill list */}
            <div className="d-flex mb-4">
                <div className="ms-auto align-self-center me-3">
                    <div className='d-flex align-items-center position-relative'>
                        <Form.Select size="sm" onChange={sortSkills} ref={selectEl}> 
                            <option hidden >Sort By</option>
                            <option value="0">Default</option>
                            <option value="1">Alphabetically</option>
                            <option value="2">Skill Level</option>
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
            </div>
            <div className="d-flex flex-wrap justify-content-between skill-list">
                {isLoading && <div className="w-100 text-center">Loading...</div>}
                {skillList && skillList.map(skill => {
                        return <Skill skill={skill} key={skill.id} />;
                    })
                }
            </div>
        </>
    );
}

export default SkillList;