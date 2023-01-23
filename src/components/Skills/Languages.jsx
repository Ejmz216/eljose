import React from 'react';
import { FaJava } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiCplusplus } from 'react-icons/si';
import { TbMathFunction } from 'react-icons/tb';

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
    const technologies = [
        {
            name: "JavaScript",
            icon: <SiJavascript />,
            color: "color6",
        },
        {
            name: "TypeScript",
            icon: <SiTypescript />,
            color: "color1",
        },
        {
            name: "Java",
            icon: <FaJava />,
            color: "color3",
        },
        {
            name: "Python",
            icon: <SiPython />,
            color: "color6",
        },
        {
            name: "C++",
            icon: <SiCplusplus />,
            color:"color1",
        },
        {
            name: "Matlab",
            icon: <TbMathFunction />,
            color: "color7",
        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title">Languages</h2>
            <div className="skill_inner_box">
                {/* ------------------ Data ------------------ */}
                {technologies.map(({ name, icon, color }) => (
                    <div className="skill_data">
                        <i class='bx bx-badge-check' />
                        <div className='main_data'>
                            <i className="skills_icon" id={color}>{icon}</i>
                            <h4 className="skills_name">{name}</h4>
                        </div>
                    </div>
                ))}
                {/* ----------------------------------------- */}
            </div>
        </div>
    )
}

export default Languages;
