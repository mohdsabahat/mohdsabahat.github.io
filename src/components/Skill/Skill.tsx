
import ProgressBar from 'react-bootstrap/ProgressBar';

import './Skill.css';


interface skillType {
    id: number;
    name: string;
    level: number;
}

interface skillProps {
    skill: skillType;
}

const skillLevelToName = (skillLevel: number) => {
    switch (skillLevel) {
        case 0:
            return 'Beginner';
        case 1:
            return 'Intermediate';
        case 2:
            return 'Proficient';
        case 3:
            return 'Expert';
        default:
            return '';
    }
}
const skillLevelToPercentage = (skillLevel : number) => {
    return ((skillLevel + 1) * 25);
}

const Skill = ({skill} : skillProps) => {
    return (
        <div className="skill"
            key={skill.name}
        >
            <div>
                {skill.name} - {skillLevelToName(skill.level)}
            </div>
            <div>
                <ProgressBar 
                    now={skillLevelToPercentage(skill.level)} 
                    style={{height: '0.4rem'}}
                />
            </div>
        </div>
    );
}

export default Skill;

export type {skillType, skillProps};