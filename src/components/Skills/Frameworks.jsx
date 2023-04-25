import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiAngular, SiSpringboot, SiBootstrap } from 'react-icons/si';

function Backend() {

    const technologies = [
        {
            name: "React JS",
            icon: <FaReact />,
            color: "color1",
        },
        {
            name: "Angular JS",
            icon: <SiAngular />,
            color: "color7",
        },
        {
            name: "SpringBoot",
            icon: <SiSpringboot />,
            color: "color2",
        },
        {
            name: "Node JS",
            icon: <FaNodeJs />,
            color: "color2",
        },
        {
            name: "Tailwind",
            icon: <SiTailwindcss />,
            color: "color1",
        },
        {
            name: "BootStrap",
            icon: <SiBootstrap />,
            color: "color5",
        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title">Frameworks</h2>
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

export default Backend;