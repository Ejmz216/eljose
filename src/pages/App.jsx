import "./App.css";
import { Fragment, useEffect, useRef, useState } from "react";
import { DEFAULT_LANGUAGE, LANGUAGES, translations } from "../i18n";
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
/* Structure: icons, colors and links. Text lives in ../i18n.js       */
/* ------------------------------------------------------------------ */

const EMAIL = "elmerjmz128@gmail.com";

const navItems = [
  { id: "experience", href: "#experience", icon: TbBriefcase, tone: "coral" },
  { id: "skills", href: "#skills", icon: TbTools, tone: "azure" },
  { id: "publications", href: "#publications", icon: TbBook2, tone: "orchid" },
  { id: "volunteering", href: "#volunteering", icon: TbLeaf, tone: "sage" },
];

const socialLinks = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/el-jose/", icon: TbBrandLinkedin },
  { id: "github", label: "GitHub", href: "https://github.com/Ejmz216", icon: TbBrandGithub },
  { id: "email", href: `mailto:${EMAIL}`, icon: TbMail },
];

// Short version shown in the hero; the full detail lives in #experience.
const timeline = [
  {
    id: "scotiabank",
    company: "Scotiabank",
    team: "ScotiaTech",
    role: "Business Solutions Associate · IT Business Analyst",
    icon: TbBuildingBank,
    tone: "coral",
    current: true,
  },
  {
    id: "bpo",
    company: "BPO Labs S.A.S",
    role: "IT Business Analyst · Project Manager",
    icon: TbChartDots,
    tone: "violet",
  },
  { id: "idis", icon: TbMicroscope, tone: "blue" },
];

// Listed in the header "Projects" menu. Add new ones here and their text in i18n.js;
// set inProgress for work that is not public yet.
const projects = [
  {
    id: "paymentLab",
    title: "Aula Libre de Pagos",
    href: "https://ejmz216.github.io/payment-lab/",
    code: "https://github.com/Ejmz216/payment-lab",
    icon: TbArrowsRightLeft,
    tone: "blue",
  },
  { id: "next", icon: TbRocket, tone: "amber", inProgress: true },
];

const experience = [
  {
    id: "scotiabank",
    company: "Scotiabank",
    team: "ScotiaTech",
    role: "Business Solutions Associate · IT Business Analyst",
    icon: TbBuildingBank,
    tone: "coral",
    current: true,
    highlightIcons: [TbChecklist, TbUsers, TbArrowsRightLeft, TbSearch, TbShieldCheck],
  },
  {
    id: "bpo",
    company: "BPO Labs S.A.S",
    role: "IT Business Analyst · Project Manager",
    icon: TbChartDots,
    tone: "violet",
    highlightIcons: [TbTable, TbMessages, TbBolt, TbFileCheck, TbDatabase, TbTimeline],
  },
];

const skillGroups = [
  { id: "business", icon: TbBulb, tone: "amber" },
  { id: "banking", icon: TbBuildingBank, tone: "coral" },
  { id: "process", icon: TbRoute, tone: "sage" },
  { id: "data", icon: TbDatabase, tone: "azure" },
  { id: "tools", icon: TbTools, tone: "blue" },
];

const principles = [
  { id: "business", icon: TbBulb, tone: "amber" },
  { id: "data", icon: TbDatabase, tone: "azure" },
  { id: "payments", icon: TbArrowsRightLeft, tone: "coral" },
  { id: "process", icon: TbRoute, tone: "sage" },
  { id: "people", icon: TbHeartHandshake, tone: "orchid" },
  { id: "software", icon: TbCode, tone: "blue" },
];

const certifications = [
  {
    id: "ielts",
    name: "IELTS Academic",
    issuer: "British Council / IELTS · 2026",
    icon: TbLanguage,
    tone: "sun",
    link: "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
  },
  {
    id: "leanSixSigma",
    name: "Lean Six Sigma",
    issuer: "The Council for Six Sigma Certification · 2025",
    icon: TbAward,
    tone: "sage",
  },
];

// CEFR steps used by the language meters; "native" fills every step.
const cefrSteps = ["A1", "A2", "B1", "B2", "C1", "C2"];
const languageSkills = ["listening", "reading", "speaking", "writing"];

const languages = [
  {
    id: "es",
    level: "native",
    tone: "amber",
    skills: { listening: "native", reading: "native", speaking: "native", writing: "native" },
  },
  {
    id: "en",
    level: "C1",
    tone: "azure",
    credential:
      "https://drive.google.com/file/d/1vvswzrBTQ6oyDNxcGPo5t1OQfWVv_Ibi/view?usp=sharing",
    skills: { listening: "C2", reading: "C2", speaking: "C1", writing: "C1" },
  },
  {
    id: "pt",
    level: "A2",
    tone: "sage",
    skills: { listening: "A2", reading: "A2", speaking: "A2", writing: "A2" },
  },
];

// Titles and citations stay in their original published language.
const publications = [
  {
    id: "chatbots",
    year: "2023",
    title:
      "Evaluating User Experience in Web Chatbot Interactions: A Case Study in the Colombian Context",
    reference:
      "Muñoz, E. J., Bravo, J. D., Collazos, C. A., & Torres, D. (2023). Evaluating User Experience in Web Chatbots Interactions: A Case Study in the Colombian Context. IX Iberoamerican Conference on Human Computer Interaction (JIHCI 2023). Universidad Nacional de La Matanza (UNLaM).",
    icon: TbMessages,
    tone: "orchid",
  },
  {
    id: "petlify",
    year: "2022",
    title:
      "Petlify: A Prototype of Hardware and Mobile Application to Reduce Nomophobia in a Controlled and Conscious Way in Young Students or Workers",
    reference:
      "Omen, I., Daza, L. S., Muñoz, E. J., & Bravo, J. D. (2022). Petlify: A Prototype of Hardware and Mobile Application to Reduce Nomophobia in a Controlled and Conscious Way in Young Students or Workers. CEUR Workshop Proceedings.",
    icon: TbMicroscope,
    tone: "teal",
  },
];

const lcoyPhotos = [lcoyOne, lcoyTwo, lcoyThree];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */

// Renders **bold** segments of a translated string as <strong>.
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index}>{part.slice(2, -2)}</strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}

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
  const filled = level === "native" ? cefrSteps.length : cefrSteps.indexOf(level) + 1;
  return (
    <span className="meter" aria-hidden="true">
      {cefrSteps.map((step, index) => (
        <span key={step} className={index < filled ? "is-on" : ""} />
      ))}
    </span>
  );
}

function LanguageSwitch({ language, onChange, label }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {LANGUAGES.map((option) => (
        <button
          key={option.code}
          type="button"
          lang={option.code}
          title={option.name}
          aria-label={option.name}
          aria-pressed={language === option.code}
          className={language === option.code ? "is-active" : ""}
          onClick={() => onChange(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

// Header dropdown with side projects: the row opens the site, the GitHub icon opens the code.
function ProjectsMenu({ t, onNavigate }) {
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
        <span className="nav-label">{t.nav.projects}</span>
        <TbChevronDown className="chevron" aria-hidden="true" />
      </button>
      <ul className="projects-panel" id="projects-panel" hidden={!isOpen}>
        {projects.map((project) => {
          const text = t.projects[project.id];
          const title = project.title ?? text.title;
          return (
            <li className={`tone-${project.tone}`} key={project.id}>
              {project.inProgress ? (
                <span className="project-item is-pending">
                  <Orb icon={project.icon} tone={project.tone} size="sm" />
                  <span className="project-text">
                    <strong>{title}</strong>
                    <span>{text.description}</span>
                  </span>
                  <span className="soon-tag">{t.ui.inProgress}</span>
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
                      <strong>{title}</strong>
                      <span>{text.description}</span>
                    </span>
                    <TbArrowUpRight className="project-arrow" aria-hidden="true" />
                  </a>
                  {project.code && (
                    <a
                      className="project-code"
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${title}: ${t.ui.codeOnGithub}`}
                      title={t.ui.codeOnGithub}
                    >
                      <TbBrandGithub aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function readStored(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    // Storage can be blocked (private mode, strict settings).
    return null;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    // Ignore storage errors; the choice still works for this visit.
  }
}

function getInitialTheme() {
  const saved = readStored("eljose-theme");
  if (saved === "dark" || saved === "light") return saved === "dark";
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
}

// English unless the visitor already picked another language.
function getInitialLanguage() {
  const saved = readStored("eljose-lang");
  return translations[saved] ? saved : DEFAULT_LANGUAGE;
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
  const [language, setLanguage] = useState(getInitialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  useReveal();

  useEffect(() => {
    writeStored("eljose-theme", isDarkMode ? "dark" : "light");
    const pageColor = isDarkMode ? "#0b1220" : "#f4f2ee";
    // Keeps overscroll areas and the browser bar in the same color as the page.
    document.body.style.background = pageColor;
    document.documentElement.style.colorScheme = isDarkMode ? "dark" : "light";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", pageColor);
  }, [isDarkMode]);

  useEffect(() => {
    writeStored("eljose-lang", language);
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [language, t]);

  const closeMenu = () => setIsMenuOpen(false);

  const socialLabel = (link) => link.label ?? t.ui.email;

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
          aria-label={isMenuOpen ? t.ui.closeNav : t.ui.openNav}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <TbX aria-hidden="true" /> : <TbMenu2 aria-hidden="true" />}
        </button>
        <nav className={`topbar ${isMenuOpen ? "is-open" : ""}`} aria-label={t.nav.primary}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a className={`nav-link tone-${item.tone}`} key={item.id} href={item.href} onClick={closeMenu}>
                <span className="nav-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="nav-label">{t.nav[item.id]}</span>
                <TbChevronRight className="chevron" aria-hidden="true" />
              </a>
            );
          })}
          <ProjectsMenu t={t} onNavigate={closeMenu} />
          <div className="header-controls">
            <LanguageSwitch language={language} onChange={setLanguage} label={t.ui.language} />
            <button
              className="theme-toggle"
              type="button"
              aria-label={isDarkMode ? t.ui.toLight : t.ui.toDark}
              onClick={() => setIsDarkMode((current) => !current)}
            >
              {isDarkMode ? <TbSun aria-hidden="true" /> : <TbMoon aria-hidden="true" />}
              <span className="theme-label">{isDarkMode ? t.ui.lightMode : t.ui.darkMode}</span>
            </button>
          </div>
          <div className="menu-social">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={socialLabel(link)}
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
        <section className="bento hero-bento" aria-label={t.ui.profile}>
          <article className="card name-card" data-reveal>
            <p className="now-pill">
              <span className="status-dot" aria-hidden="true" />
              {t.hero.now}
            </p>
            <div>
              <h1>
                Elmer Jose
                <br />
                Muñoz Zuñiga
              </h1>
              <p className="name-role">{t.hero.role}</p>
              <p className="name-meta">
                <span>
                  <TbSatellite aria-hidden="true" /> {t.hero.engineer}
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
            <CardLabel>{t.labels.experience}</CardLabel>
            <ol className="timeline">
              {timeline.map((item) => {
                const text = t.timeline[item.id];
                return (
                  <li className={`tone-${item.tone}`} key={item.id}>
                    <Orb icon={item.icon} tone={item.tone} size="sm" />
                    <div>
                      <h3>
                        {item.company ?? text.company}
                        {item.team && <span className="team-tag">{item.team}</span>}
                      </h3>
                      <p className="timeline-role">{item.role ?? text.role}</p>
                      <p className="timeline-period">
                        {text.period}
                        {item.current && (
                          <span className="current-chip">
                            <span className="status-dot" aria-hidden="true" /> {t.ui.current}
                          </span>
                        )}
                      </p>
                      <p className="timeline-summary">{text.summary}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
            <a className="text-link" href="#experience">
              {t.ui.fullExperience} <TbArrowDown aria-hidden="true" />
            </a>
          </article>

          <article className="card about-card" data-reveal>
            <CardLabel>{t.labels.about}</CardLabel>
            <p className="lead">{t.about.lead}</p>
            <p>
              <Rich text={t.about.body} />
            </p>
          </article>

          <a className="card contact-card" href={`mailto:${EMAIL}`} data-reveal style={{ "--delay": "80ms" }}>
            <span className="contact-top">
              {t.ui.getInTouch[0]}
              <br />
              {t.ui.getInTouch[1]}
              <TbArrowUpRight className="contact-arrow" aria-hidden="true" />
            </span>
            <span className="contact-cta">{t.ui.emailMe}</span>
            <span className="contact-address">{EMAIL}</span>
          </a>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience" aria-labelledby="experience-title">
          <SectionTitle id="experience-title" icon={TbBriefcase} tone="coral">
            {t.sections.experience}
          </SectionTitle>
          <ol className="experience-list">
            {experience.map((job) => {
              const text = t.jobs[job.id];
              return (
                <li className={`card job-card tone-${job.tone}`} key={job.id} data-reveal>
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
                          <TbCalendar aria-hidden="true" /> {text.period}
                        </span>
                        {text.location && (
                          <span>
                            <TbMapPin aria-hidden="true" /> {text.location}
                          </span>
                        )}
                        {job.current && (
                          <span className="current-chip">
                            <span className="status-dot" aria-hidden="true" /> {t.ui.current}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <ul className="job-highlights">
                    {text.highlights.map((highlight, index) => {
                      const Icon = job.highlightIcons[index];
                      return (
                        <li key={index}>
                          <span className="bullet-icon" aria-hidden="true">
                            <Icon />
                          </span>
                          <p>
                            <Rich text={highlight} />
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="tag-row">
                    {text.tags.map((tag) => (
                      <span className="chip" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* ---------- Skills, education, certifications, languages ---------- */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <SectionTitle id="skills-title" icon={TbTools} tone="azure">
            {t.sections.skillsEducation}
          </SectionTitle>
          <div className="bento skills-bento">
            <article className="card expertise-card" data-reveal>
              <CardLabel>{t.labels.skills}</CardLabel>
              <div className="expertise-list">
                {skillGroups.map((group) => {
                  const text = t.skills[group.id];
                  return (
                    <div className={`expertise-group tone-${group.tone}`} key={group.id}>
                      <h3>
                        <Orb icon={group.icon} tone={group.tone} size="xs" />
                        {text.title}
                      </h3>
                      <div className="tag-row">
                        {text.items.map((item) => (
                          <span className="chip" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="card education-card tone-teal" id="education" data-reveal>
              <CardLabel>{t.labels.education}</CardLabel>
              <div className="education-head">
                <span className="university-logo">
                  <img src={unicaucaEmblem} alt={t.education.emblemAlt} />
                </span>
                <div>
                  <h3 className="university-name">
                    <a href="https://www.unicauca.edu.co/" target="_blank" rel="noreferrer">
                      Universidad del Cauca <TbArrowUpRight aria-hidden="true" />
                    </a>
                  </h3>
                  <p className="degree-name">{t.education.degree}</p>
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
                <span className="chip">{t.education.emphasis}</span>
                <span className="chip">{t.education.research}</span>
              </div>
              <p>
                <Rich text={t.education.body} />
              </p>
            </article>

            <article className="card cert-card" data-reveal>
              <CardLabel>{t.labels.certifications}</CardLabel>
              <ul className="cert-list">
                {certifications.map((certification) => (
                  <li className={`tone-${certification.tone}`} key={certification.id}>
                    <Orb icon={certification.icon} tone={certification.tone} size="sm" />
                    <div>
                      <h3>{certification.name}</h3>
                      <p className="cert-detail">{t.certifications[certification.id].detail}</p>
                      <p className="cert-issuer">{certification.issuer}</p>
                      {certification.link && (
                        <a className="text-link" href={certification.link} target="_blank" rel="noreferrer">
                          {t.ui.viewCredential} <TbArrowUpRight aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card language-card" id="languages" data-reveal>
              <CardLabel>{t.labels.languages}</CardLabel>
              <ul className="language-list">
                {languages.map((item) => {
                  const levelLabel = (level) => (level === "native" ? t.languages.native : level);
                  return (
                    <li className={`tone-${item.tone}`} key={item.id}>
                      <div className="language-head">
                        <h3>{t.languages.names[item.id]}</h3>
                        {item.credential ? (
                          <a className="level-badge" href={item.credential} target="_blank" rel="noreferrer">
                            {levelLabel(item.level)} <TbArrowUpRight aria-hidden="true" />
                          </a>
                        ) : (
                          <span className="level-badge">{levelLabel(item.level)}</span>
                        )}
                      </div>
                      <dl className="language-skills">
                        {languageSkills.map((skill) => (
                          <div key={skill}>
                            <dt>{t.languages.skills[skill]}</dt>
                            <dd>
                              <LevelMeter level={item.skills[skill]} />
                              {/* Native rows show only the full bar; the badge already says it */}
                              {item.skills[skill] !== "native" && <span>{item.skills[skill]}</span>}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </li>
                  );
                })}
              </ul>
            </article>
          </div>
        </section>

        {/* ---------- Publications ---------- */}
        <section className="section" id="publications" aria-labelledby="publications-title">
          <SectionTitle id="publications-title" icon={TbBook2} tone="orchid">
            {t.sections.publications}
          </SectionTitle>
          <div className="bento two-up">
            {publications.map((publication) => {
              const text = t.publications[publication.id];
              return (
                <article
                  className={`card publication-card tone-${publication.tone}`}
                  key={publication.id}
                  data-reveal
                >
                  <div className="publication-top">
                    <Orb icon={publication.icon} tone={publication.tone} />
                    <span className="year-tag">{publication.year}</span>
                  </div>
                  <h3 lang="en">{publication.title}</h3>
                  <p className="publication-venue">{text.venue}</p>
                  <p>{text.description}</p>
                  <p className="publication-reference" lang="en">
                    {publication.reference}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* ---------- Volunteering ---------- */}
        <section className="section" id="volunteering" aria-labelledby="volunteering-title">
          <SectionTitle id="volunteering-title" icon={TbLeaf} tone="sage">
            {t.sections.volunteering}
          </SectionTitle>
          <div className="bento volunteer-bento">
            <article className="card volunteer-card tone-sage" data-reveal>
              <div className="education-head">
                <Orb icon={TbLeaf} tone="sage" />
                <div>
                  <h3>{t.volunteering.lcoy.title}</h3>
                  <p className="meta-row">
                    <span>
                      <TbCalendar aria-hidden="true" /> {t.volunteering.lcoy.period}
                    </span>
                  </p>
                </div>
              </div>
              <p>{t.volunteering.lcoy.body}</p>
              <div className="volunteer-photos" aria-label={t.volunteering.lcoy.photosLabel}>
                {lcoyPhotos.map((src, index) => (
                  <img key={src} src={src} alt={t.volunteering.lcoy.photos[index]} loading="lazy" />
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
                      <TbCalendar aria-hidden="true" /> {t.volunteering.ieee.period}
                    </span>
                  </p>
                </div>
              </div>
              <p>{t.volunteering.ieee.body}</p>
            </article>
          </div>
        </section>

        {/* ---------- What I bring ---------- */}
        <section className="section" id="principles" aria-labelledby="principles-title">
          <SectionTitle id="principles-title" icon={TbHeartHandshake} tone="amber">
            {t.sections.principles}
          </SectionTitle>
          <ul className="card principles" data-reveal>
            {principles.map((item) => (
              <li className={`tone-${item.tone}`} key={item.id}>
                <Orb icon={item.icon} tone={item.tone} />
                <span className="principle-area">{t.principles[item.id].area}</span>
                <span className="principle-word">{t.principles[item.id].value}</span>
              </li>
            ))}
          </ul>
        </section>

        <footer className="card footer">
          <p>
            © 2026 Elmer Jose Muñoz Zuñiga · {t.footer.updated}
            <span className="star-wars-line">
              <FaJedi aria-hidden="true" /> {t.footer.starWars}
            </span>
          </p>
          <div className="social-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={socialLabel(link)}
                  title={socialLabel(link)}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </footer>
      </div>

      <a className="back-to-top" href="#home" aria-label={t.ui.backToTop}>
        <TbArrowUp aria-hidden="true" />
      </a>
    </main>
  );
}

export default App;
