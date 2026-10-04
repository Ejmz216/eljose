import "./App.css";
import { useEffect, useRef, useState } from "react";
import profilePhoto from "../assets/img/profile.jpg";
import unicaucaEmblem from "../assets/img/unicauca-emblem.png";
import lcoyOne from "../assets/img/volunteering/lcoy-1.jpg";
import lcoyTwo from "../assets/img/volunteering/lcoy-2.jpg";
import lcoyThree from "../assets/img/volunteering/lcoy-3.jpg";
import { FaJedi } from "react-icons/fa";
import {
  TbArrowDown,
  TbArrowUp,
  TbArrowUpRight,
  TbArrowsRightLeft,
  TbAward,
  TbBolt,
  TbBook2,
  TbBrandGithub,
  TbBrandLinkedin,
  TbBriefcase,
  TbBuildingBank,
  TbBulb,
  TbChevronDown,
  TbChevronRight,
  TbCalendar,
  TbChartDots,
  TbChecklist,
  TbCode,
  TbDatabase,
  TbFileCheck,
  TbHeartHandshake,
  TbLanguage,
  TbLayoutGrid,
  TbLeaf,
  TbMail,
  TbMapPin,
  TbMenu2,
  TbMessages,
  TbMicroscope,
  TbMoon,
  TbRoute,
  TbSatellite,
  TbSearch,
  TbShieldCheck,
  TbRocket,
  TbSun,
  TbTable,
  TbTimeline,
  TbTools,
  TbUsers,
  TbX,
} from "react-icons/tb";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const EMAIL = "elmerjmz128@gmail.com";

const navItems = [
  { href: "#experience", label: "Experience", icon: TbBriefcase, tone: "coral" },
  { href: "#skills", label: "Skills", icon: TbTools, tone: "azure" },
  { href: "#publications", label: "Publications", icon: TbBook2, tone: "orchid" },
  { href: "#volunteering", label: "Volunteering", icon: TbLeaf, tone: "sage" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/el-jose/", icon: TbBrandLinkedin },
  { label: "GitHub", href: "https://github.com/Ejmz216", icon: TbBrandGithub },
  { label: "Email", href: `mailto:${EMAIL}`, icon: TbMail },
];

// Short version shown in the hero; the full detail lives in #experience.
const timeline = [
  {
    company: "Scotiabank",
    team: "ScotiaTech",
    role: "Business Solutions Associate · IT Business Analyst",
    period: "June 2026 - Present",
    summary: "Requirements and impact analysis for banking technology: payment systems, financial messaging and ISO 20022.",
    icon: TbBuildingBank,
    tone: "coral",
    current: true,
  },
  {
    company: "BPO Labs S.A.S",
    role: "IT Business Analyst · Project Manager",
    period: "May 2023 - Present",
    summary: "Data requirements, QA automation and analytics features for a SaaS platform serving BPO operations.",
    icon: TbChartDots,
    tone: "violet",
  },
  {
    company: "IDIS Research Group",
    role: "Undergraduate Researcher · HCI",
    period: "2022 - 2023",
    summary: "User experience research on web chatbots, presented at JIHCI 2023 in Buenos Aires.",
    icon: TbMicroscope,
    tone: "blue",
  },
];

// Listed in the header "Projects" menu. Add new ones here; set inProgress for work not yet public.
const projects = [
  {
    title: "Aula Libre de Pagos",
    description: "ISO 20022 & payments learning space",
    href: "https://ejmz216.github.io/payment-lab/",
    code: "https://github.com/Ejmz216/payment-lab",
    icon: TbArrowsRightLeft,
    tone: "blue",
  },
  {
    title: "Next project",
    description: "Coming soon",
    icon: TbRocket,
    tone: "amber",
    inProgress: true,
  },
];

const experience = [
  {
    company: "Scotiabank",
    team: "ScotiaTech",
    role: "Business Solutions Associate · IT Business Analyst",
    period: "June 2026 - Present",
    icon: TbBuildingBank,
    tone: "coral",
    current: true,
    highlights: [
      {
        icon: TbChecklist,
        content: (
          <>
            Analyze <strong>business, functional and system requirements</strong> for
            technology initiatives, translating operational and financial-process needs
            into structured specifications for technical teams.
          </>
        ),
      },
      {
        icon: TbUsers,
        content: (
          <>
            Work with <strong>business, technology and operations</strong> stakeholders
            to define requirements, validate proposed solutions, and assess dependencies
            and impacts across interconnected processes and systems.
          </>
        ),
      },
      {
        icon: TbArrowsRightLeft,
        content: (
          <>
            Support initiatives involving <strong>payment systems</strong> and
            <strong> financial messaging</strong>: transaction flows, business rules,
            message structures and integration requirements, including
            <strong> ISO 20022</strong>.
          </>
        ),
      },
      {
        icon: TbSearch,
        content: (
          <>
            Analyze <strong>end-to-end processes</strong> to find functional gaps,
            inconsistencies, dependencies and improvement opportunities before a
            solution is implemented.
          </>
        ),
      },
      {
        icon: TbShieldCheck,
        content: (
          <>
            Help define and validate <strong>business-critical</strong> solutions where
            data accuracy, traceability, interoperability and operational continuity
            matter most.
          </>
        ),
      },
    ],
    tags: ["ISO 20022", "Payment systems", "Financial messaging", "Requirements", "Impact analysis"],
  },
  {
    company: "BPO Labs S.A.S",
    role: "IT Business Analyst · Project Manager",
    period: "May 2023 - Present",
    location: "Remote, Colombia",
    icon: TbChartDots,
    tone: "violet",
    highlights: [
      {
        icon: TbTable,
        content: (
          <>
            Collaborated with development teams to define <strong>data requirements</strong>,
            <strong> schemas</strong>, <strong>validation rules</strong>, and analytical
            reporting needs for operational products.
          </>
        ),
      },
      {
        icon: TbMessages,
        content: (
          <>
            Served as a <strong>technical bridge</strong> between software teams and
            business stakeholders, translating operational needs into user stories,
            acceptance criteria, backlog items, and measurable process improvements.
          </>
        ),
      },
      {
        icon: TbBolt,
        content: (
          <>
            Designed and maintained <strong>Python</strong> and <strong>SQL</strong> data
            pipelines for report automation and validation workflows, reducing manual
            work from more than four hours to less than thirty minutes.
          </>
        ),
      },
      {
        icon: TbFileCheck,
        content: (
          <>
            Cleaned, validated, and transformed structured operational datasets used
            for <strong>QA metrics</strong>, performance analysis, and monitoring routines.
          </>
        ),
      },
      {
        icon: TbDatabase,
        content: (
          <>
            Performed <strong>SQL validations</strong> and consistency checks across
            relational databases to support incident resolution, analytical reviews,
            and system verification.
          </>
        ),
      },
      {
        icon: TbTimeline,
        content: (
          <>
            Supported <strong>Agile delivery</strong> through Scrum and Kanban practices
            for technical backlogs related to data flows, analytical features, QA
            automation, and system improvements.
          </>
        ),
      },
    ],
    tags: ["Python", "SQL", "QA automation", "Analytics", "Scrum / Kanban"],
  },
];

const skillGroups = [
  {
    title: "Business & Product",
    icon: TbBulb,
    tone: "amber",
    items: [
      "Business Analysis",
      "Requirements Engineering",
      "Functional Analysis",
      "Functional Documentation",
      "Product Requirements",
      "Stakeholder Management",
      "UAT & Functional Validation",
    ],
  },
  {
    title: "Banking & Financial Systems",
    icon: TbBuildingBank,
    tone: "coral",
    items: [
      "Payment Systems",
      "Transaction Flows",
      "Financial Messaging",
      "ISO 20022",
      "Business Rules Analysis",
      "System & Process Impact Analysis",
    ],
  },
  {
    title: "Process & Delivery",
    icon: TbRoute,
    tone: "sage",
    items: ["Process Improvement", "Process Mapping", "Agile Delivery", "Scrum", "Kanban", "SDLC", "Lean Six Sigma"],
  },
  {
    title: "Data & Technology",
    icon: TbDatabase,
    tone: "azure",
    items: ["Python", "SQL / MySQL", "Data Analysis", "Data Validation", "ETL & Data Pipelines", "API Testing"],
  },
  {
    title: "Tools",
    icon: TbTools,
    tone: "blue",
    items: ["Jira", "ClickUp", "Postman", "Git / GitHub", "Figma", "Microsoft Office"],
  },
];

const principles = [
  { area: "Business", value: "Clarity", icon: TbBulb, tone: "amber" },
  { area: "Data", value: "Evidence", icon: TbDatabase, tone: "azure" },
  { area: "Payments", value: "Traceability", icon: TbArrowsRightLeft, tone: "coral" },
  { area: "Process", value: "Flow", icon: TbRoute, tone: "sage" },
  { area: "People", value: "Empathy", icon: TbHeartHandshake, tone: "orchid" },
  { area: "Software", value: "Craft", icon: TbCode, tone: "blue" },
];

const certifications = [
  {
    name: "IELTS Academic",
    detail: "Overall Band 7.5 (C1)",
    issuer: "British Council / IELTS · 2026",
    icon: TbLanguage,
    tone: "sun",
    link: "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
  },
  {
    name: "Lean Six Sigma",
    detail: "Yellow Belt",
    issuer: "The Council for Six Sigma Certification · 2025",
    icon: TbAward,
    tone: "sage",
  },
];

// CEFR steps used by the language meters; "Native" fills every step.
const cefrSteps = ["A1", "A2", "B1", "B2", "C1", "C2"];

const languages = [
  {
    language: "Spanish",
    level: "Native",
    tone: "amber",
    skills: { Listening: "Native", Reading: "Native", Speaking: "Native", Writing: "Native" },
  },
  {
    language: "English",
    level: "C1",
    tone: "azure",
    credential:
      "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
    skills: { Listening: "C2", Reading: "C2", Speaking: "C1", Writing: "C1" },
  },
  {
    language: "Portuguese",
    level: "A2",
    tone: "sage",
    skills: { Listening: "A2", Reading: "A2", Speaking: "A2", Writing: "A2" },
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
    icon: TbMessages,
    tone: "orchid",
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
    icon: TbMicroscope,
    tone: "teal",
  },
];

const lcoyPhotos = [
  { src: lcoyOne, alt: "LCOY Colombia group gathering" },
  { src: lcoyTwo, alt: "LCOY Colombia methodology activity" },
  { src: lcoyThree, alt: "LCOY Colombia youth climate activity" },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

function Orb({ icon: Icon, tone, size = "md" }) {
  return (
    <span className={`orb orb-${size} tone-${tone}`} aria-hidden="true">
      <Icon />
    </span>
  );
}

function SectionTitle({ id, icon, tone, children }) {
  return (
    <div className="section-title" data-reveal>
      <Orb icon={icon} tone={tone} size="sm" />
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function CardLabel({ children }) {
  return <p className="card-label">{children}</p>;
}

function LevelMeter({ level }) {
  const filled = level === "Native" ? cefrSteps.length : cefrSteps.indexOf(level) + 1;
  return (
    <span className="meter" aria-hidden="true">
      {cefrSteps.map((step, index) => (
        <span key={step} className={index < filled ? "is-on" : ""} />
      ))}
    </span>
  );
}

// Header dropdown with side projects: the row opens the site, the GitHub icon opens the code.
function ProjectsMenu({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handlePointer = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsOpen(false);
    };
    const handleKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <div className={`projects-menu ${isOpen ? "is-open" : ""}`} ref={menuRef}>
      <button
        className="nav-link projects-trigger tone-blue"
        type="button"
        aria-expanded={isOpen}
        aria-controls="projects-panel"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="nav-icon" aria-hidden="true">
          <TbLayoutGrid />
        </span>
        <span className="nav-label">Projects</span>
        <TbChevronDown className="chevron" aria-hidden="true" />
      </button>
      <ul className="projects-panel" id="projects-panel" hidden={!isOpen}>
        {projects.map((project) => (
          <li className={`tone-${project.tone}`} key={project.title}>
            {project.inProgress ? (
              <span className="project-item is-pending">
                <Orb icon={project.icon} tone={project.tone} size="sm" />
                <span className="project-text">
                  <strong>{project.title}</strong>
                  <span>{project.description}</span>
                </span>
                <span className="soon-tag">In progress</span>
              </span>
            ) : (
              <div className="project-item">
                <a
                  className="project-main"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate();
                  }}
                >
                  <Orb icon={project.icon} tone={project.tone} size="sm" />
                  <span className="project-text">
                    <strong>{project.title}</strong>
                    <span>{project.description}</span>
                  </span>
                  <TbArrowUpRight className="project-arrow" aria-hidden="true" />
                </a>
                {project.code && (
                  <a
                    className="project-code"
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} code on GitHub`}
                    title="Code on GitHub"
                  >
                    <TbBrandGithub aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function getInitialTheme() {
  try {
    const saved = window.localStorage.getItem("eljose-theme");
    if (saved === "dark" || saved === "light") return saved === "dark";
  } catch (error) {
    // Storage can be blocked; fall back to the system preference.
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

// Fades cards in the first time they scroll into view.
function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function App() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useReveal();

  useEffect(() => {
    try {
      window.localStorage.setItem("eljose-theme", isDarkMode ? "dark" : "light");
    } catch (error) {
      // Ignore storage errors; the toggle still works for this visit.
    }
    const pageColor = isDarkMode ? "#0b1220" : "#f4f2ee";
    // Keeps overscroll areas and the browser bar in the same color as the page.
    document.body.style.background = pageColor;
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", pageColor);
  }, [isDarkMode]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <main className={`site-shell ${isDarkMode ? "dark-theme" : ""}`} id="home">
      <div className="backdrop" aria-hidden="true" />

      <header className="site-header">
        <a className="site-name" href="#home">
          ELJOSE<span>CV</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <TbX aria-hidden="true" /> : <TbMenu2 aria-hidden="true" />}
        </button>
        <nav className={`topbar ${isMenuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a className={`nav-link tone-${item.tone}`} key={item.href} href={item.href} onClick={closeMenu}>
                <span className="nav-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="nav-label">{item.label}</span>
                <TbChevronRight className="chevron" aria-hidden="true" />
              </a>
            );
          })}
          <ProjectsMenu onNavigate={closeMenu} />
          <button
            className="theme-toggle"
            type="button"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setIsDarkMode((current) => !current)}
          >
            {isDarkMode ? <TbSun aria-hidden="true" /> : <TbMoon aria-hidden="true" />}
            <span className="theme-label">{isDarkMode ? "Light mode" : "Dark mode"}</span>
          </button>
          <div className="menu-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      <div className="page">
        {/* ---------- Hero bento ---------- */}
        <section className="bento hero-bento" aria-label="Profile">
          <article className="card name-card" data-reveal>
            <p className="now-pill">
              <span className="status-dot" aria-hidden="true" />
              Now at Scotiabank · ScotiaTech
            </p>
            <div>
              <h1>
                Elmer Jose
                <br />
                Muñoz Zuñiga
              </h1>
              <p className="name-role">IT Business Analyst</p>
              <p className="name-meta">
                <span>
                  <TbSatellite aria-hidden="true" /> Electronic & Telecommunications Engineer
                </span>
                <span>
                  <TbMapPin aria-hidden="true" /> Colombia
                </span>
              </p>
            </div>
          </article>

          <figure className="card photo-card" data-reveal style={{ "--delay": "80ms" }}>
            <img src={profilePhoto} alt="Elmer Jose Muñoz Zuñiga" />
          </figure>

          <article className="card timeline-card" data-reveal style={{ "--delay": "160ms" }}>
            <CardLabel>Experience</CardLabel>
            <ol className="timeline">
              {timeline.map((item) => (
                <li className={`tone-${item.tone}`} key={item.company}>
                  <Orb icon={item.icon} tone={item.tone} size="sm" />
                  <div>
                    <h3>
                      {item.company}
                      {item.team && <span className="team-tag">{item.team}</span>}
                    </h3>
                    <p className="timeline-role">{item.role}</p>
                    <p className="timeline-period">
                      {item.period}
                      {item.current && (
                        <span className="current-chip">
                          <span className="status-dot" aria-hidden="true" /> Current
                        </span>
                      )}
                    </p>
                    <p className="timeline-summary">{item.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
            <a className="text-link" href="#experience">
              Full experience <TbArrowDown aria-hidden="true" />
            </a>
          </article>

          <article className="card about-card" data-reveal>
            <CardLabel>About</CardLabel>
            <p className="lead">
              Business Analyst and engineer with 3+ years of experience where
              business processes, data, software and user-centered design meet.
            </p>
            <p>
              At <strong>Scotiabank (ScotiaTech)</strong> I analyze requirements for
              payment systems, financial messaging and business-critical banking
              platforms, including <strong>ISO 20022</strong>. In
              <strong> SaaS/BPO</strong> environments I have built analytics, QA
              automation and decision-support tools with <strong>Python</strong> and
              <strong> SQL</strong>. My background in Human-Computer Interaction keeps
              the user in view.
            </p>
          </article>

          <a className="card contact-card" href={`mailto:${EMAIL}`} data-reveal style={{ "--delay": "80ms" }}>
            <span className="contact-top">
              Want to get
              <br />
              in touch?
              <TbArrowUpRight className="contact-arrow" aria-hidden="true" />
            </span>
            <span className="contact-cta">Email me</span>
            <span className="contact-address">{EMAIL}</span>
          </a>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <SectionTitle id="experience-title" icon={TbBriefcase} tone="coral">
            Professional Experience
          </SectionTitle>
          <ol className="experience-list">
            {experience.map((job) => (
              <li className={`card job-card tone-${job.tone}`} key={job.company} data-reveal>
                <div className="job-head">
                  <Orb icon={job.icon} tone={job.tone} size="lg" />
                  <div>
                    <h3>
                      {job.company}
                      {job.team && <span className="team-tag">{job.team}</span>}
                    </h3>
                    <p className="job-role">{job.role}</p>
                    <p className="meta-row">
                      <span>
                        <TbCalendar aria-hidden="true" /> {job.period}
                      </span>
                      {job.location && (
                        <span>
                          <TbMapPin aria-hidden="true" /> {job.location}
                        </span>
                      )}
                      {job.current && (
                        <span className="current-chip">
                          <span className="status-dot" aria-hidden="true" /> Current
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <ul className="job-highlights">
                  {job.highlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <li key={index}>
                        <span className="bullet-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <p>{item.content}</p>
                      </li>
                    );
                  })}
                </ul>
                <div className="tag-row">
                  {job.tags.map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- Skills, education, certifications, languages ---------- */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <SectionTitle id="skills-title" icon={TbTools} tone="azure">
            Skills & Education
          </SectionTitle>
          <div className="bento skills-bento">
            <article className="card expertise-card" data-reveal>
              <CardLabel>Technical & professional skills</CardLabel>
              <div className="expertise-list">
                {skillGroups.map((group) => (
                  <div className={`expertise-group tone-${group.tone}`} key={group.title}>
                    <h3>
                      <Orb icon={group.icon} tone={group.tone} size="xs" />
                      {group.title}
                    </h3>
                    <div className="tag-row">
                      {group.items.map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="card education-card tone-teal" id="education" data-reveal>
              <CardLabel>Education</CardLabel>
              <div className="education-head">
                <span className="university-logo">
                  <img src={unicaucaEmblem} alt="Universidad del Cauca emblem" />
                </span>
                <div>
                  <h3 className="university-name">
                    <a href="https://www.unicauca.edu.co/" target="_blank" rel="noreferrer">
                      Universidad del Cauca <TbArrowUpRight aria-hidden="true" />
                    </a>
                  </h3>
                  <p className="degree-name">Electronic and Telecommunications Engineering</p>
                  <p className="meta-row">
                    <span>
                      <TbMapPin aria-hidden="true" /> Popayán, Colombia
                    </span>
                    <span>
                      <TbCalendar aria-hidden="true" /> 2016 - 2023
                    </span>
                  </p>
                </div>
              </div>
              <div className="tag-row">
                <span className="chip">Telematics & Project Management emphasis</span>
                <span className="chip">IDIS Research Group · HCI</span>
              </div>
              <p>
                Engineering background in <strong>information and communication technologies</strong>,
                including <strong>software analysis</strong>, <strong>databases</strong>,
                <strong> networks</strong>, computing, and telecommunications systems,
                with an emphasis on <strong>Human-Computer Interaction (HCI)</strong>:
                user experience, digital behavior and user-centered design.
              </p>
            </article>

            <article className="card cert-card" data-reveal>
              <CardLabel>Certifications</CardLabel>
              <ul className="cert-list">
                {certifications.map((certification) => (
                  <li className={`tone-${certification.tone}`} key={certification.name}>
                    <Orb icon={certification.icon} tone={certification.tone} size="sm" />
                    <div>
                      <h3>{certification.name}</h3>
                      <p className="cert-detail">{certification.detail}</p>
                      <p className="cert-issuer">{certification.issuer}</p>
                      {certification.link && (
                        <a className="text-link" href={certification.link} target="_blank" rel="noreferrer">
                          View credential <TbArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card language-card" id="languages" data-reveal>
              <CardLabel>Languages · CEFR</CardLabel>
              <ul className="language-list">
                {languages.map((language) => (
                  <li className={`tone-${language.tone}`} key={language.language}>
                    <div className="language-head">
                      <h3>{language.language}</h3>
                      {language.credential ? (
                        <a className="level-badge" href={language.credential} target="_blank" rel="noreferrer">
                          {language.level} <TbArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="level-badge">{language.level}</span>
                      )}
                    </div>
                    <dl className="language-skills">
                      {Object.entries(language.skills).map(([skill, level]) => (
                        <div key={skill}>
                          <dt>{skill}</dt>
                          <dd>
                            <LevelMeter level={level} />
                            <span>{level}</span>
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section className="section" id="publications" aria-labelledby="publications-title">
          <SectionTitle id="publications-title" icon={TbBook2} tone="orchid">
            Research & Publications
          </SectionTitle>
          <div className="bento two-up">
            {publications.map((publication) => (
              <article className={`card publication-card tone-${publication.tone}`} key={publication.title} data-reveal>
                <div className="publication-top">
                  <Orb icon={publication.icon} tone={publication.tone} />
                  <span className="year-tag">{publication.year}</span>
                </div>
                <h3>{publication.title}</h3>
                <p className="publication-venue">{publication.venue}</p>
                <p>{publication.description}</p>
                <p className="publication-reference">{publication.reference}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- Volunteering ---------- */}
        <section className="section" id="volunteering" aria-labelledby="volunteering-title">
          <SectionTitle id="volunteering-title" icon={TbLeaf} tone="sage">
            Leadership & Volunteering
          </SectionTitle>
          <div className="bento volunteer-bento">
            <article className="card volunteer-card tone-sage" data-reveal>
              <div className="education-head">
                <Orb icon={TbLeaf} tone="sage" />
                <div>
                  <h3>LCOY Colombia · Logistics & Methodology Team</h3>
                  <p className="meta-row">
                    <span>
                      <TbCalendar aria-hidden="true" /> October 2025 - November 2025
                    </span>
                  </p>
                </div>
              </div>
              <p>
                Supported operational coordination, team logistics, and methodology
                activities for a youth climate conference, helping align participants,
                working sessions, and organizational needs.
              </p>
              <div className="volunteer-photos" aria-label="LCOY photos">
                {lcoyPhotos.map((photo) => (
                  <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
                ))}
              </div>
            </article>
            <article className="card volunteer-card tone-azure" data-reveal>
              <div className="education-head">
                <Orb icon={TbSatellite} tone="azure" />
                <div>
                  <h3>IEEE AESS · Universidad del Cauca</h3>
                  <p className="meta-row">
                    <span>
                      <TbCalendar aria-hidden="true" /> June 2020 - August 2022
                    </span>
                  </p>
                </div>
              </div>
              <p>
                Participated in scientific outreach and educational activities for
                schools and children, supporting initiatives that made engineering and
                science more accessible to younger audiences.
              </p>
            </article>
          </div>
        </section>

        {/* ---------- What I bring ---------- */}
        <section className="section" id="principles" aria-labelledby="principles-title">
          <SectionTitle id="principles-title" icon={TbHeartHandshake} tone="amber">
            What I Bring
          </SectionTitle>
          <ul className="card principles" data-reveal>
            {principles.map((item) => (
              <li className={`tone-${item.tone}`} key={item.area}>
                <Orb icon={item.icon} tone={item.tone} />
                <span className="principle-area">{item.area}</span>
                <span className="principle-word">{item.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="card footer">
          <p>
            © 2026 Elmer Jose Muñoz Zuñiga · Updated October 2026
            <span className="star-wars-line">
              <FaJedi aria-hidden="true" /> May the data be with you.
            </span>
          </p>
          <div className="social-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>

      <a className="back-to-top" href="#home" aria-label="Back to top">
        <TbArrowUp aria-hidden="true" />
      </a>
    </main>
  );
}

export default App;
