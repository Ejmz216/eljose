import React from 'react';
import './skills.css'

import Languages from './Languages.jsx';
import Frameworks from './Frameworks.jsx';
import Markup from './MarkupDB.jsx';
import Tools from './Tools.jsx';

import { GiSkills } from 'react-icons/gi';

function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className='container'>
                <div className='skill-bx'>
                    <h2 className='section_title'><GiSkills /> Skills</h2>
                    <span className='section_subtitle'>My Tech Stack</span>
                    <div className='skills_container container grid'>
                        <Languages />
                        <Frameworks />
                        <Markup />
                        <Tools />
                    </div>
                </div>
            </div>
        </section >
    )
};

export { Skills }