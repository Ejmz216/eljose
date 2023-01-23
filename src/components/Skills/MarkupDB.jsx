import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { SiCss3, SiMongodb } from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import { GrMysql } from 'react-icons/gr';

function MarkupDB() {

    const technologies = [
        {
            name: "HTML 5",
            icon: <FaHtml5 />,
            color: "color3",
        },
        {
            name: "CSS 3",
            icon: <SiCss3 />,
            color: "color1",
        },
        {
            name: "JSON",
            icon: <VscJson />,
            color: "color4",
        },
        {
            name: "MySQL",
            icon: <GrMysql />,
            color: "color1",
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
            color: "color2",
        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title">Markup, Style and DB</h2>
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

export default MarkupDB;