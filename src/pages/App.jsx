import "./App.css";
import { useState } from "react";
import profilePhoto from "../assets/img/profile.jpg";
import lcoyOne from "../assets/img/volunteering/lcoy-1.jpg";
import lcoyTwo from "../assets/img/volunteering/lcoy-2.jpg";
import lcoyThree from "../assets/img/volunteering/lcoy-3.jpg";
import {
  FaArrowUp,
  FaBars,
  FaEnvelope,
  FaGithub,
  FaJedi,
  FaJediOrder,
  FaLinkedin,
  FaMoon,
  FaRegCopyright,
  FaSun,
  FaTimes,
} from "react-icons/fa";

const profileLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/el-jose/",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/Ejmz216",
    icon: FaGithub,
  },
  {
    label: "Email",
    href: "mailto:elmerjmz128@gmail.com",
    icon: FaEnvelope,
  },
];

const skillGroups = [
  {
    title: "Business Analysis & Delivery",
    tone: "blue",
    items: [
      "Requirements analysis and documentation",
      "Stakeholder communication",
      "Operational team alignment",
      "Process analysis and optimization",
      "Data-driven decision support",
      "Functional validation and UAT support",
      "QA and process control support",
    ],
  },
  {
    title: "Data Analysis & Automation",
    tone: "royal",
    items: [
      "Python for analysis and reporting automation",
      "SQL / MySQL analysis",
      "Data consistency checks",
      "Data pipelines",
      "ETL concepts",
      "Data quality and validation",
    ],
  },
  {
    title: "Tools & Platforms",
    tone: "sky",
    items: [
      "Jira",
      "ClickUp",
      "Git / GitHub",
      "Figma",
      "Microsoft Office",
      "Basic GCP foundations",
    ],
  },
  {
    title: "Methodologies",
    tone: "ice",
    items: ["Agile Scrum", "Kanban", "SDLC", "Lean Six Sigma Yellow Belt"],
  },
];

const experienceHighlights = [
  {
    id: "requirements",
    content: (
      <>
        Collaborated with development teams to define <strong>data requirements</strong>,
        <strong> schemas</strong>, <strong>validation rules</strong>, and analytical
        reporting needs for operational products.
      </>
    ),
  },
  {
    id: "bridge",
    content: (
      <>
        Served as a <strong>technical bridge</strong> between software teams and
        business stakeholders, translating operational needs into user stories,
        acceptance criteria, backlog items, and measurable process improvements.
      </>
    ),
  },
  {
    id: "pipelines",
    content: (
      <>
        Designed and maintained <strong>Python</strong> and <strong>SQL</strong> data
        pipelines for report automation and validation workflows, reducing manual
        work from more than four hours to less than thirty minutes.
      </>
    ),
  },
  {
    id: "datasets",
    content: (
      <>
        Cleaned, validated, and transformed structured operational datasets used
        for <strong>QA metrics</strong>, performance analysis, and monitoring routines.
      </>
    ),
  },
  {
    id: "sql",
    content: (
      <>
        Performed <strong>SQL validations</strong> and consistency checks across
        relational databases to support incident resolution, analytical reviews,
        and system verification.
      </>
    ),
  },
  {
    id: "agile",
    content: (
      <>
        Supported <strong>Agile delivery</strong> through Scrum and Kanban practices
        for technical backlogs related to data flows, analytical features, QA
        automation, and system improvements.
      </>
    ),
  },
];

const certifications = [
  {
    name: "IELTS Academic - Band 7.5 (C1)",
    issuer: "British Council / IELTS",
    date: "2026",
    link: "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
  },
  {
    name: "Lean Six Sigma - Yellow Belt",
    issuer: "The Council for Six Sigma Certification",
    date: "2025",
  },
];

const publications = [
  {
    year: "2023",
    title:
      "Evaluating User Experience in Web Chatbot Interactions: A Case Study in the Colombian Context",
    venue:
      "Presented at the IX Iberoamerican Conference on Human Computer Interaction (JIHCI 2023).",
    description:
      "This research analyzes user experience in web-based chatbot interactions through a case study in the Colombian context. It evaluates usability, user perception, and interaction quality to identify improvement opportunities in conversational systems.",
    reference:
      "Muñoz, E. J., Bravo, J. D., Collazos, C. A., & Torres, D. (2023). Evaluating User Experience in Web Chatbots Interactions: A Case Study in the Colombian Context. IX Iberoamerican Conference on Human Computer Interaction (JIHCI 2023). Universidad Nacional de La Matanza (UNLaM).",
  },
  {
    year: "2022",
    title:
      "Petlify: A Prototype of Hardware and Mobile Application to Reduce Nomophobia in a Controlled and Conscious Way in Young Students or Workers",
    venue: "Published in CEUR Workshop Proceedings.",
    description:
      "This work presents the design and prototyping of an integrated hardware-software solution aimed at reducing nomophobia in educational and work environments. The solution combines a mobile application with a physical device to promote more conscious and controlled technology usage.",
    reference:
      "Omen, I., Daza, L. S., Muñoz, E. J., & Bravo, J. D. (2022). Petlify: A Prototype of Hardware and Mobile Application to Reduce Nomophobia in a Controlled and Conscious Way in Young Students or Workers. CEUR Workshop Proceedings.",
  },
];

const languages = [
  {
    language: "English",
    level: "C1",
    listening: "C2",
    reading: "C2",
    speaking: "C1",
    writing: "C1",
    credential:
      "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
  },
  {
    language: "Portuguese",
    level: "A2",
    listening: "A2",
    reading: "A2",
    speaking: "A2",
    writing: "A2",
  },
  {
    language: "Spanish",
    level: "Native",
    listening: "Native",
    reading: "Native",
    speaking: "Native",
    writing: "Native",
  },
];

const lcoyPhotos = [
  { src: lcoyOne, alt: "LCOY Colombia group gathering" },
  { src: lcoyTwo, alt: "LCOY Colombia methodology activity" },
  { src: lcoyThree, alt: "LCOY Colombia youth climate activity" },
];

// const cvPreviewUrl = "https://drive.google.com/file/d/1E7JYjupQ9uIxLVOJl6Hd4PbSFB4ba_VD/preview";
// const cvOpenUrl = "https://drive.google.com/file/d/1E7JYjupQ9uIxLVOJl6Hd4PbSFB4ba_VD/view?usp=sharing";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className={`site-shell ${isDarkMode ? "dark-theme" : ""}`} id="home">
      <header className="site-header">
        <a className="site-name" href="#home">
          Eljose
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <nav className={`topbar ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#languages" onClick={() => setIsMenuOpen(false)}>Languages</a>
          <a href="#publications" onClick={() => setIsMenuOpen(false)}>Publications</a>
          {/* <a href="#cv" onClick={() => setIsMenuOpen(false)}>CV</a> */}
          <button
            className="theme-toggle"
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsDarkMode((current) => !current)}
          >
            {isDarkMode ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
            <span>{isDarkMode ? "Light" : "Dark"}</span>
          </button>
        </nav>
      </header>

      <aside className="profile-panel" aria-label="Profile summary">
        <div className="portrait-frame">
          <img src={profilePhoto} alt="Elmer Jose Muñoz Zuñiga" />
        </div>
        <p className="eyebrow role-eyebrow">
          <FaJediOrder aria-hidden="true" /> IT Business Analyst
        </p>
        <h1>Elmer Jose Muñoz Zuñiga</h1>
        <div className="profile-links" aria-label="Professional links">
          {profileLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>
      </aside>

      <div className="content-column">
        <section className="hero">
          <p className="section-kicker">Professional Profile</p>
          <h2>
            IT Business Analyst & Project Manager | Data & AI-driven Solutions |
            Electronics & Telecommunications Engineer
          </h2>
          <p className="lead">
            Electronics and Telecommunications Engineer with 3+ years of
            experience working at the intersection of business, data, software,
            and applied AI for decision-making.
          </p>
          <p>
            I specialize in translating operational needs into data-driven
            solutions within SaaS environments, particularly in BPO and contact
            center operations. My work involves designing and scaling analytics
            workflows, QA automation processes, reporting systems, and data
            validation pipelines, ensuring traceability from business
            requirements to implementation.
          </p>
          <p>
            With hands-on experience in Python and SQL, I focus on transforming
            operational and analytical data into actionable insights and
            decision-support tools. Currently, I contribute to AI-driven and
            analytics-based features in a SaaS platform, bridging business logic
            with technical execution.
          </p>
          <p className="updated-note">Updated April 2026.</p>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="section-kicker">Experience</p>
            <h2 id="experience-title">BPO Labs S.A.S</h2>
            <p>IT Business Analyst | Remote, Colombia | May 2023 - Present</p>
          </div>
          <ul className="timeline-list">
            {experienceHighlights.map((item) => (
              <li key={item.id}>{item.content}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="section-kicker">Technical & Professional Skills</p>
            <h2 id="skills-title">Core Capabilities</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group) => (
              <article className={`skill-group skill-group-${group.tone}`} key={group.title}>
                <h3>{group.title}</h3>
                <div className="pill-row">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="section-heading">
            <p className="section-kicker">Education</p>
            <h2>Electronic and Telecommunications Engineering</h2>
            <p>Universidad del Cauca | Popayán, Colombia | 2016 - 2023</p>
          </div>
          <p>
            Engineering background in <strong>information and communication technologies</strong>,
            including <strong>software analysis</strong>, <strong>databases</strong>,
            <strong> networks</strong>, computing, and telecommunications systems.
            The program strengthened my ability to connect technical infrastructure
            with software logic and <strong>data-driven problem solving</strong>.
          </p>
          <p>
            With an emphasis on <strong>Human-Computer Interaction (HCI)</strong>, my
            academic work focused on <strong>user experience</strong>, digital behavior,
            and the design of user-centered technological solutions. My research
            explored the interaction between users and digital systems, particularly
            in web-based environments and behavioral patterns related to technology
            usage.
          </p>
        </section>

        <section className="section" id="languages" aria-labelledby="languages-title">
          <div className="section-heading">
            <p className="section-kicker">Languages</p>
            <h2 id="languages-title">Language Proficiency</h2>
          </div>
          <div className="language-table" role="table" aria-label="Language proficiency">
            <div className="language-row language-head" role="row">
              <span role="columnheader">Language</span>
              <span role="columnheader">Level</span>
              <span role="columnheader">Listening</span>
              <span role="columnheader">Reading</span>
              <span role="columnheader">Speaking</span>
              <span role="columnheader">Writing</span>
            </div>
            {languages.map((language) => (
              <div className="language-row" role="row" key={language.language}>
                <span role="cell">{language.language}</span>
                <span role="cell">
                  {language.credential ? (
                    <a href={language.credential} target="_blank" rel="noreferrer">
                      {language.level} credential
                    </a>
                  ) : (
                    language.level
                  )}
                </span>
                <span role="cell">{language.listening}</span>
                <span role="cell">{language.reading}</span>
                <span role="cell">{language.speaking}</span>
                <span role="cell">{language.writing}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section stacked-section" id="publications">
          <div className="content-block">
            <p className="section-kicker">Publications</p>
            <div className="stack-list">
              {publications.map((publication) => (
                <article className="publication-item" key={publication.title}>
                  <span className="publication-year">{publication.year}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.venue}</p>
                  <p>{publication.description}</p>
                  <p className="publication-reference">Reference: {publication.reference}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="content-block">
            <p className="section-kicker">Certifications</p>
            <div className="stack-list">
              {certifications.map((certification) => (
                <article key={certification.name}>
                  <h3>{certification.name}</h3>
                  <p>
                    {certification.issuer} | {certification.date}
                  </p>
                  {certification.link && (
                    <a href={certification.link} target="_blank" rel="noreferrer">
                      View credential
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="section cv-section" id="cv" aria-labelledby="cv-title">
          <div className="section-heading">
            <p className="section-kicker">CV</p>
            <h2 id="cv-title">Curriculum Vitae</h2>
            <p>Preview the latest version of my CV or open it in a new tab.</p>
          </div>
          <div className="cv-actions">
            <a href={cvOpenUrl} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
          </div>
          <div className="cv-viewer">
            <iframe
              src={cvPreviewUrl}
              title="Elmer Jose Muñoz Zuñiga CV"
              allow="autoplay"
            ></iframe>
          </div>
        </section> */}

        <section className="section volunteer-section">
          <p className="section-kicker">Volunteering</p>
          <h2>Community, research, and youth initiatives.</h2>
          <div className="volunteer-grid">
            <article>
              <h3>LCOY Colombia | Logistics & Methodology Team</h3>
              <p className="volunteer-date">October 2025 - November 2025</p>
              <p>
                Supported operational coordination, team logistics, and
                methodology activities for a youth climate conference, helping
                align participants, working sessions, and organizational needs.
              </p>
              <div className="volunteer-photos" aria-label="LCOY photos">
                {lcoyPhotos.map((photo) => (
                  <img key={photo.src} src={photo.src} alt={photo.alt} />
                ))}
              </div>
            </article>
            <article>
              <h3>IEEE AESS - Universidad del Cauca | Volunteer</h3>
              <p className="volunteer-date">June 2020 - August 2022</p>
              <p>
                Participated in scientific outreach and educational activities
                for schools and children, supporting initiatives that made
                engineering and science more accessible to younger audiences.
              </p>
            </article>
          </div>
        </section>

        <footer className="footer">
          <p>
            <FaRegCopyright aria-hidden="true" /> 2026 Elmer Jose Muñoz Zuñiga.
          </p>
          <p className="star-wars-line">
            <FaJedi aria-hidden="true" /> May the data be with you.
          </p>
          <a href="#home">Back to top</a>
        </footer>
      </div>
      <a className="back-to-top" href="#home" aria-label="Back to top">
        <FaArrowUp aria-hidden="true" />
      </a>
    </main>
  );
}

export default App;
