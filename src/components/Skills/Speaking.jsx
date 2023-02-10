import React from 'react';
import { TbLetterS, TbLetterE } from 'react-icons/tb';

function Languages() {
    /*  Color code: 
    1	Blue
    2	Green
    3	Orange
    4	Black
    5	Purple
    6	Yellow
    7	Red
    */
    const idiomas = [
        {
            name: "English",
            icon: <TbLetterE />,
            level: "C1/C2 Advanced",
            color: "color6",
        },
        {
            name: "Español",
            icon: <TbLetterS />,
            level: "Competencia Nativa",
            color: "color7",
        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title"> Languages</h2>
            <div className="skill_inner_box">
                {/* ------------------ Data ------------------ */}
                {idiomas.map(({ name, level, icon, color }) => (
                    <div className="skill_data">
                        {/* <i class='bx bx-badge-check' /> */}
                        <div className='main_data'>
                            <i className="skills_icon" id={color}>{icon}</i>
                            <h4 className="skills_name">{name}</h4>
                            <h4 className="skills_name">{level}</h4>
                        </div>
                    </div>
                ))}
                {/* ----------------------------------------- */}
            </div>
        </div>
    )
}

export default Languages;
