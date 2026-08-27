import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, Github, Linkedin, Mail,
  ExternalLink, Code2, Palette, ShoppingBag, Globe2, Sparkles,
  ChevronDown
} from "lucide-react";
import "./styles.css";

const WHATSAPP_NUMBER = "+923325024809";
const WHATSAPP_DISPLAY = "+92 xxxxxxxxx";

const projects = [
  {
    title: "Afro Hair Boutique",
    image: "https://placehold.co/1200x800/171321/5d32ad?text=Afro+Hair+Boutique",
    category: "Shopify",
    type: "E-commerce Experience",
    description: "A polished Shopify storefront focused on a clean shopping journey, product presentation and conversion-ready sections.",
    tags: ["Shopify", "Liquid", "E-commerce","HTML","CSS","JavaScript"],
    accent: "violet",
    number: "01",
    link: "https://www.afrohairboutique.com/"
  },
  {
    title: "MHA Solutionz",
    image: "https://placehold.co/1200x800/0c1b20/73e5ff?text=MHA+Solutionz",
    category: "WordPress",
    type: "Business Website",
    description: "A custom WordPress platform for digital collaboration, project management and real-time communication built with Elementor and custom development.",
    tags: ["WordPress", "HTML", "CSS", "JavaScript", "custom development", "Elementor"],
    accent: "cyan",
    number: "02",
    link: "https://mhasolutionz.com/"
  },
    {
    title: "Hair Beauty",
    image: "https://placehold.co/1200x800/171321/b7ff5a?text=Hair+Beauty",
    category: "Shopify",
    type: "E-commerce Experience",
    description: "A polished Shopify storefront focused on a clean shopping journey, product presentation and conversion-ready sections.",
    tags: ["Shopify", "Liquid", "E-commerce","HTML","CSS","JavaScript"],
    accent: "violet",
    number: "03",
    link: "https://hairbeauty.pk/"
  },
  {
    title: "eazywayz",
    image: "https://placehold.co/1200x800/111a0d/D4C4FB?text=easywayz",
    category: "WordPress",
    type: "Business Website",
    description: "A custom WordPress platform for digital collaboration, project management and real-time communication built with Elementor and custom development.",
    tags: ["WordPress", "Elementor", "SEO","JavaScript", "custom development","HTML","CSS"],
    accent: "green",
    number: "04",
    link: "https://eazywayz.us/en"
  },
  {
    title: "Creative Landing Page",
    image: "https://placehold.co/1200x800/1c120c/ffb36b?text=Landing+Page",
    category: "UI/UX",
    type: "Conversion-focused Design",
    description: "A contemporary landing page direction with a strong visual hierarchy, responsive composition and interactive sections.",
    tags: ["Figma", "UI/UX", "Responsive"],
    accent: "orange",
    number: "05",
    link: "https://www.figma.com/design/22JmqrUJPvEWJVUUJ7wrFc/Super73-website-templete?node-id=0-1&t=gXoL1PIbLEe8xg7s-1"
  },
   {
    title: "Prototype Landing Page",
    image: "https://placehold.co/1200x800/1c120c/ffb36b?text=Prototype",
    category: "UI/UX",
    type: "Conversion-focused Design",
    description: "A contemporary landing page direction with a strong visual hierarchy, responsive composition and interactive sections.",
    tags: ["Figma", "UI/UX", "Responsive"],
    accent: "orange",
    number: "06",
    link: "https://www.figma.com/design/UI90I9GMrIj1Nx8ZtM41fp/Nike-Shoes-Prototype?t=4y6ZXHAExaEfGERi-1"
  }
];

const services = [
  { icon: ShoppingBag, title: "Shopify Development", text: "Custom storefronts, theme sections, product experiences and conversion-focused e-commerce interfaces." },
  { icon: Globe2, title: "WordPress Development", text: "Professional business websites, landing pages and flexible WordPress experiences that are easy to manage." },
  { icon: Code2, title: "Web Development", text: "Fast, responsive and interactive websites and web applications built with modern frontend technologies." },
  { icon: Palette, title: "UI/UX Design", text: "Clean user interfaces, responsive layouts and practical experiences designed around real users and business goals." }
];

const skills = ["React", "JavaScript", "HTML & CSS", "Tailwind CSS", "Shopify", "Liquid", "WordPress", "Elementor", "Figma", "Git & GitHub", ".NET", "SignalR"];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  const go = (id) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="nav-wrap">
        <nav className="nav container">
          <button className="logo" onClick={() => go("#home")} aria-label="Go home">
            GHULAM QADIR<span>.</span>
          </button>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["Work", "Services", "About", "Contact"].map(item => (
              <button key={item} onClick={() => go("#" + item.toLowerCase())}>{item}</button>
            ))}
            <button className="nav-cta" onClick={() => go("#contact")}>Let's talk <ArrowUpRight size={16}/></button>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >
            <div className="eyebrow"><span className="status-dot" /> Available for selected projects</div>
            <h1>Design.<br /><span>Build.</span><br />Grow.</h1>
            <p className="hero-text">
              I'm <strong>Ghulam Qadir</strong>, a Web Designer & Developer creating modern digital experiences across Shopify, WordPress and the web.
            </p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => go("#work")}>Explore my work <ArrowRight size={18}/></button>
              <button className="btn ghost" onClick={() => go("#contact")}>Let's work together</button>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: .92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: .15 }}
          >
            <div className="grid-plane" />
            <div className="floating-card card-main">
              <div className="mini-top"><span>01 / 04</span><span>PORTFOLIO</span></div>
              <div className="visual-title">Digital<br /><em>Experiences</em></div>
              <div className="visual-line" />
              <div className="mini-bottom"><span>UI/UX</span><span>WEB</span><span>SHOPIFY</span></div>
            </div>
            <div className="floating-card card-small">
              <Sparkles size={16} />
              <span>Creative + Technical</span>
            </div>
          </motion.div>

          <div className="scroll-cue"><span>Scroll to explore</span><ChevronDown size={16}/></div>
        </section>

        <section className="marquee">
          <div className="marquee-track">
            {["SHOPIFY", "WORDPRESS", "WEB DEVELOPMENT", "UI/UX", "FRONTEND", "E-COMMERCE", "SHOPIFY", "WORDPRESS","HTML","CSS","JAVASCRIPT","BOOTSTRAP","FIGMA","LIQUID"].map((x,i) =>
              <span key={i}>{x} <b>✦</b></span>
            )}
          </div>
        </section>

        <section id="work" className="section container">
          <SectionIntro index="01" label="Selected work" title={<>A few things I've<br /><span>built & designed.</span></>} />
          <div className="filters">
            {["All", "Shopify", "WordPress", "Web Development", "UI/UX"].map(x =>
              <button key={x} className={filter === x ? "active" : ""} onClick={() => setFilter(x)}>{x}</button>
            )}
          </div>
          <div className="project-grid">
            {filtered.map((p, i) => (
              <motion.article
                className={`project project-${p.accent}`}
                key={p.title}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: .55, delay: i * .06 }}
                onClick={() => setActiveProject(p)}
              >
                <div className="project-art">
                  <div className="art-glow" />
                  <div className="browser">
                    <div className="browser-bar"><i/><i/><i/><span>{p.category.toLowerCase()}.studio</span></div>
                    <div className="thumbnail-wrap">
                      <img src={p.image} alt={`${p.title} project thumbnail`} className="project-thumbnail" />
                      <div className="thumbnail-overlay"><span>VIEW PROJECT</span><ArrowUpRight size={17}/></div>
                    </div>
                  </div>
                  <span className="project-number">{p.number}</span>
                </div>
                <div className="project-info">
                  <div><small>{p.category} · {p.type}</small><h3>{p.title}</h3></div>
                  <ArrowUpRight className="project-arrow" />
                </div>
                <p>{p.description}</p>
                <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="services" className="section services-section">
          <div className="container">
            <SectionIntro index="02" label="What I do" title={<>One creative partner.<br /><span>Multiple capabilities.</span></>} />
            <div className="services-grid">
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div className="service" key={s.title} whileHover={{ y: -7 }} transition={{ duration: .2 }}>
                    <div className="service-top"><span>0{i+1}</span><Icon size={22}/></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                    <ArrowUpRight className="service-arrow" size={19}/>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section container about-section">
          <SectionIntro index="03" label="About me" title={<>Design thinking.<br /><span>Developer mindset.</span></>} />
          <div className="about-grid">
            <div className="about-statement">
              <p className="big-copy">I bridge the gap between <em>beautiful design</em> and <em>solid development.</em></p>
              <p>I care about the details people notice and the technical decisions they don't. From a Shopify storefront to a WordPress business website or a custom web application, my goal is the same: create something useful, fast and memorable.</p>
            </div>
            <div className="skill-box">
              <div className="skill-head"><span>Toolkit</span><span>01 — 12</span></div>
              <div className="skills">{skills.map(s => <span key={s}>{s}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section philosophy">
          <div className="container philosophy-inner">
            <span className="eyebrow">My approach</span>
            <h2>Good design gets attention.<br /><i>Great experiences earn trust.</i></h2>
            <div className="principles">
              <div><b>01</b><span>Understand</span><p>Start with the business, users and real problem.</p></div>
              <div><b>02</b><span>Design</span><p>Turn strategy into a clear, intentional visual system.</p></div>
              <div><b>03</b><span>Build</span><p>Develop responsive experiences that feel as good as they look.</p></div>
              <div><b>04</b><span>Refine</span><p>Polish, test and improve every meaningful detail.</p></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section container">
          <div className="contact-card">
            <div className="contact-copy">
              <span className="eyebrow">04 — Contact</span>
              <h2>Have a project<br /><i>in mind?</i></h2>
              <p>Let's turn your idea into a polished digital experience.</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href="mailto:your.email@example.com">
                <span>theqadirghulam@gmail.com</span><ArrowUpRight />
              </a>
              <a className="whatsapp-btn" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Ghulam, I would like to discuss a project with you.")}`} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} />
                <span><b>WhatsApp</b><small>{WHATSAPP_DISPLAY}</small></span>
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div><button className="logo" onClick={() => go("#home")}>GHULAM QADIR<span>.</span></button><p>Web Designer & Developer</p></div>
        <div className="socials">
          {/* <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/></a> */}
          {/* <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18}/></a> */}
          <a href="mailto:theqadirghulam@gmail.com"><Mail size={18}/></a>
        </div>
        <small>© {new Date().getFullYear()} Ghulam Qadir. Crafted with intention.</small>
      </footer>

      <AnimatePresence>
        {activeProject && (
          <motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setActiveProject(null)}>
            <motion.div className="modal" initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} exit={{y:20, opacity:0}} onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setActiveProject(null)}><X/></button>
              <span className="eyebrow">{activeProject.category}</span>
              <h2>{activeProject.title}</h2>
              <p>{activeProject.description}</p>
              <div className="tags">{activeProject.tags.map(t => <span key={t}>{t}</span>)}</div>
              <a className="btn primary" href={activeProject.link} target="_blank" rel="noreferrer">View project <ExternalLink size={16}/></a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionIntro({ index, label, title }) {
  return (
    <div className="section-intro">
      <div className="intro-meta"><span>{index}</span><span>{label}</span></div>
      <h2>{title}</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
