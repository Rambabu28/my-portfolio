import React from 'react';
import {Download, ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, BriefcaseBusiness, GraduationCap, Sparkles, Menu } from 'lucide-react';
import resume from "./resume/RambabuCv.pdf?url";
const skills = ['HTML & CSS', 'JavaScript', 'React.js', 'Python', 'Java', 'Spring boot', 'MySQL', 'Git & GitHub'];

const projects = [
  { number: '01', title: 'Portfolio Website', type: 'PERSONAL WEBSITE', description: 'A responsive personal website to introduce myself, highlight my skills and showcase my work.', stack: ['React', 'CSS', 'Vite'], link: 'https://my-portfolio-one-xi-tzwx14bvto.vercel.app/' },
  { number: '02', title: 'BLOCKCHAIN FOR ENHANCING TRUST AND PRIVACY IN EKYC', type: 'WEB APPLICATION', description: 'Implemented a blockchain-based e-KYC system with CP-ABE encryption and smart contracts to ensure secure scalable, and privacy-preserving identity verification.', stack: ['HTML', 'CSS','JS','JAVA', 'MySQL'], link: 'https://github.com/Rambabu28/MCA-Final-Project' },
  { number: '03', title: 'CRUD app with Spring Boot and React', type: 'WEB APPLICATON', description: 'A small web application focused on understanding CRUD operations.', stack: ['HTML', 'CSS','React','SpringBoot'], link: 'https://github.com/Rambabu28/SpringBoot-CRUD-App' }
];

function App() {
  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#home"><span className="brand-mark">PR</span> RAMBABU<span>PACHIPALA</span></a>
        <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav>
        <a
          className="nav-cta"
          href={resume}
          download="RambabuCv.pdf"
        >
          RESUME <Download size={16} />
        </a>
      </header>
      <main>
        {/* 1 home */}
        <section className="hero section" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse"></span> AVAILABLE FOR OPPORTUNITIES
            </div>
            <p className="eyebrow">HELLO, I'M</p>
            <h1>Rambabu Pachipala<span className="accent">.</span></h1>
            <h2>Developer <span className="muted">&</span> lifelong learner.</h2>
            <p className="hero-text">I build clean, useful and user-friendly digital experiences. I enjoy turning ideas into real projects and learning something new along the way.</p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="socials">
              <a href="https://github.com/Rambabu28/" aria-label="GitHub"><Github /></a>
              <a href="https://linkedin.com/in/rambabu-pachipala" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:rambabuyadav19119@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="code-card">
              <div className="card-top">
                <span></span>
                <span></span>
                <span></span>
                <small>developer.js</small>
              </div>
              <div className="code-lines">
                <p><i>01</i> <b>const</b> <em>developer</em> = {'{'}</p><p><i>02</i> &nbsp; name: <strong>'Rambabu'</strong>,</p><p><i>03</i> &nbsp; passion: <strong>'Building things'</strong>,</p><p><i>04</i> &nbsp; learning: <strong>'Every day'</strong>,</p><p><i>05</i> &nbsp; creative: <strong>true</strong></p><p><i>06</i> {'};'}</p><p className="code-comment"><i>07</i> // turning ideas into reality ✨</p></div><div className="code-footer"><span><span className="pulse"></span> Ready to create</span><Code2 size={16} />
              </div>
            </div>
            <div className="float-tag tag-top"><Sparkles size={15} /> Curious mind</div><div className="float-tag tag-bottom"><Code2 size={15} /> Clean code, clear ideas</div>
          </div>
          <a href="#about" className="scroll-hint"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
        </section>
        {/* 2 about */}
        <section className="section about-section" id="about">
          <div className="section-label">
            01 / ABOUT ME
          </div>
          <div className="about-grid">
            <div>
              <h2 className="section-title">A little about <span className="accent">me.</span></h2>
            </div>
            <div className="about-content">
              <p className="large-copy">I believe good technology should feel simple, useful and thoughtful.</p>
              <p>I'm a technology enthusiast interested in web development and building practical solutions. I enjoy exploring new tools, solving problems and continuously improving my skills through hands-on projects.</p><div className="facts">
                <div>
                  <MapPin /><span>Based in India</span>
                </div>
                <div>
                  <BriefcaseBusiness /><span>Open to opportunities</span>
                </div>
                <div>
                  <GraduationCap /><span>Always learning</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3 skills */}
        <section className="section skills-section" id="skills">
          <div className="section-label">02 / WHAT I WORK WITH</div>
          <h2 className="section-title">Skills & <span className="accent">tools.</span></h2>
          <p className="section-intro">Technologies I'm familiar with and use to bring ideas to life.</p>
          <div className="skill-grid">
            {skills.map((skill, index) =>
              <div className="skill" key={skill}><span>0{index + 1}</span><strong>{skill}</strong><ArrowUpRight size={17} />
              </div>)}
          </div>
        </section>
        {/* 4 projects */}
        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED WORK</div>
          <div className="projects-heading">
            <h2 className="section-title">Things I've <span className="accent">built.</span></h2>
            <p className="section-intro">A few projects and experiments.</p>
          </div>
          <div className="project-list">{projects.map(project => <article className="project" key={project.number}>

            <div className="project-number">
              {project.number}
            </div>
            <div className="project-main">
              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ArrowUpRight /></a></article>)}
          </div>
        </section>
        {/* 5 eduction */}

        <section className="section education-section">
          <div className="section-label">04 / EDUCATION</div>

          <h2 className="section-title">
            My Educational <span className="accent">Journey.</span>
          </h2>

          <div className="education-list">

            <div className="education-card">
              <div className="edu-icon">
                <GraduationCap />
              </div>
              <div>
                <span className="project-type">POST GRADUATION</span>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Avanthi PG College | 2025</p>
                <small>CGPA: 8.37</small>
              </div>
            </div>
            <div className="education-card">
              <div className="edu-icon">
                <GraduationCap />
              </div>
              <div>
                <span className="project-type">GRADUATION</span>
                <h3>Bachelor's Degree</h3>
                <p>BJR Govet Degree College | 2022</p>
                <small>CGPA: 8.37</small>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-icon">
                <GraduationCap />
              </div>
              <div>
                <span className="project-type">INTERMEDIATE</span>
                <h3>Intermediate (12th)</h3>
                <p>TSWRJC| 2019</p>
                <small>Percentage: 86%</small>
              </div>
            </div>

            <div className="education-card">
              <div className="edu-icon">
                <GraduationCap />
              </div>
              <div>
                <span className="project-type">SCHOOL EDUCATION</span>
                <h3>SSC (10th Class)</h3>
                <p>MJPTBCWRS | 2017</p>
                <small>CGPA: 9.0</small>
              </div>
            </div>

          </div>
        </section>

        {/* 6 contact */}
        <section className="section contact-section" id="contact">
          <div className="section-label">05 / GET IN TOUCH</div>
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>Let's make<br />something <span className="accent">great.</span></h2>
          <p className="contact-copy">I'm always happy to connect, discuss ideas and explore opportunities.</p>
          <a className="button primary contact-button" href="mailto:rambabuyadav19119@gmail.com">Say hello <Mail size={17} /></a>
          <div className="contact-bottom">
            <span>© 2026 Rambabu Pachipla. Built with React.</span>
            <div><a href="https://github.com/Rambabu28/">GitHub</a>
              <a href="https://linkedin.com/in/rambabu-pachipala">LinkedIn</a>
              <a href="#home">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;