import React from 'react';
import { RiMentalHealthLine } from 'react-icons/ri';
import { IoThumbsUpSharp, IoEar} from 'react-icons/io5';
import { BsCardChecklist } from 'react-icons/bs';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import { FaPaintBrush, FaExchangeAlt } from 'react-icons/fa';

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
            name: "Confidence",
            icon: <IoThumbsUpSharp />,
            color: "color6",
        },
        {
            name: "Empathetic Listening",
            icon: <IoEar />,
            color: "color2",
        },
        {
            name: "Delegation",
            icon: <BsCardChecklist />,
            color: "color1",
        },
        {
            name: "Reliability",
            icon: <VscWorkspaceTrusted />,
            color: "color2",
        },
        {
            name: "Adaptability",
            icon: <FaExchangeAlt />,
            color: "color6",
        },
        {
            name: "Creativity",
            icon: <FaPaintBrush />,
            color: "color5",
        },
        {
            name: "Motivated",
            icon: <RiMentalHealthLine />,
            color: "color7",
        },
    ];
    return (
        <div className="skill_content">
            <h2 className="skills_title"> Soft Skills</h2>
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
