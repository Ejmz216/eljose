import React from 'react';
import { FaGitAlt, FaGithub, FaFigma, FaLinux, FaWindows } from 'react-icons/fa';
import { SiVisualstudiocode, SiMicrosoftexcel } from 'react-icons/si';

function Tools() {

    const technologies = [
        {
            name: "Git",
            icon: <FaGitAlt />,
            color: "color3",
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
            color: "color4",
        },
        {
            name: "VSCode",
            icon: <SiVisualstudiocode />,
            color: "color1",
        },
        {
            name: "Excel",
            icon: <SiMicrosoftexcel />,
            color: "color2",
        },
        {
            name: "Figma",
            icon: <FaFigma />,
            color: "color5",
        },
        {
            name: "UNIX/Linux",
            icon: <FaLinux />,
            color: "color3",
        },
        {
            name: "Windows",
            icon: <FaWindows />,
            color: "color1",

        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title">Tools and Platforms</h2>
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

export default Tools;
