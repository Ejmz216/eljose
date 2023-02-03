import React from 'react';
import './skills.css'

import Languages from './Languages.jsx';
import Frameworks from './Frameworks.jsx';
import Markup from './MarkupDB.jsx';
import Tools from './Tools.jsx';

import { HiChip } from 'react-icons/hi';

function Skills() {
    return (
        <section className="skills section" id="skills">
            <div className='container'>
                <div className='skill-bx'>
                    <h2 className='section_title'>Skills <HiChip /></h2>
                    <h4 className='section_subtitle'>My Tech Stack</h4>
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