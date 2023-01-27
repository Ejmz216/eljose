import React, { useState } from 'react'
import '../Education/education.css'

function Education() {
    const studies = [
        {
            id: 1,
            title: "Ingeniería Electrónica y Telecomunicaciones",
            subtitle: "Univesidad del Cauca",
            date: "2017-Present",
        },
        {
            id: 2,
            title: "Grupo de Investigación IDIS",
            subtitle: "Univesidad del Cauca",
            date: "2022 - Present",
        },
        {
            id: 3,
            title: "Énfasis en Sistemas Telemáticos",
            subtitle: "Departamento de Télematica FIET",
            date: "2018-2021",
        },
        {
            id: 4,
            title: "Bachiller",
            subtitle: "Seminario Menor",
            date: "2016",
        },

    ];
    const courses = [
        {
            id: 1,
            title: "Frontend con React.js",
            subtitle: "Platzi",
            see: "Certificados",
        },
        {
            id: 2,
            title: "TypeScript: Fundamentos, OOP, Tipos Avanzados y Funciones",
            subtitle: "Platzi",
            see: "Certificados",
        },
        {
            id: 3,
            title: "Profesional de JavaScript",
            subtitle: "Platzi",
            see: "Certificados",
        },
        {
            id: 4,
            title: "JavaScript: Consumo Profesional API REST, Closures y Scopes, OOP, Prácticas",
            subtitle: "Platzi",
            see: "Certificados",
        },
        {
            id: 5,
            title: "NPM: Gestión de Paquetes y Dependencias JavaScript",
            subtitle: "Platzi",
            see: "Certificados",
        },
        {
            id: 6,
            title: "Python Fundamentals & Python for Data Science",
            subtitle: "Platzi e IBM",
            see: "Certificados",
        },
        {
            id: 7,
            title: "16.00x: Introduction to Aerospace Engineering: Astronautics and Human Spaceflight",
            subtitle: "MIT",
            see: "Certificado",
        },
        {
            id: 8,
            title: "Scrum Fundamentals",
            subtitle: "SCRUMstudy",
            see: "Certificado",
        },
    ];

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section_title" id="educationTitle">Qualification</h2>
            <h4 className="section_subtitle" id="educationSubtitle"> My personal Journey</h4>

            <div className="qualification_container container">
                {/* ---------------OPTIONS--------------------------- */}
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification_icon"></i>{" "}Education
                    </div>
                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-award qualification_icon"></i>{" "}Certifications
                    </div>
                </div>
                {/* -------------- SECTION OUTPUT---------------------------- */}
                <div className="qualification_sections">

                    {/* --------------DATA OTPUT 1---------------------------- */}
                    <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"} >
                        <div className="qualification_data">
                            {studies.map(({ title, subtitle, date }) => (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                    <div className='q_space'>
                                        <h3 className="qualification_title">{title}</h3>
                                        <h4 className="qualification_subtitle">{subtitle}</h4>
                                        <div className="qualification_calender"><i className="uil uil-calendar-alt">{date}</i></div>
                                    </div>

                                </>
                            ))}
                        </div>
                    </div>
                    {/* --------------DATA OTPUT 2---------------------------- */}
                    <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"} >
                        <div className="qualification_data">
                            {courses.map(({ title, subtitle, see }) => (
                                <>
                                    <div></div>
                                    <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                    </div>
                                    <div className='q_space'>
                                        <h3 className="qualification_title">{title}</h3>
                                        <span className="qualification_subtitle">{subtitle}</span>
                                        <div className='qualification_links'>
                                            <a href={see} className="qualification_calender"><i className="uil uil-eye"></i> See Certificate/s</a>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export { Education };
