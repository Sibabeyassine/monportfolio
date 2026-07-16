import Reveal from "@/components/Reveal";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Github = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4c.14-1.26-.3-2.48-1-3.35 3.28-.36 6.72-1.61 6.72-7.25A5.66 5.66 0 0 0 19.22 3.5 5.28 5.28 0 0 0 19.08.65S17.9.27 15 2.14a13.38 13.38 0 0 0-6 0C6.1.27 4.92.65 4.92.65A5.28 5.28 0 0 0 4.78 3.5 5.66 5.66 0 0 0 3.28 7.4c0 5.63 3.44 6.89 6.72 7.25-.69.86-1.13 2.08-1 3.35v4M9 19c-3 .92-3-1.5-4.2-2" /></svg>;
const Linkedin = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const Mail = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m22 6-10 7L2 6"/></svg>;

const projects = [
  { number: "01", name: "Kideo", role: "Web & mobile · Full-stack", description: "Une plateforme pensée pour l’autonomie des enfants et la tranquillité des parents, sans publicité ni contenus parasites.", tags: ["React.js", "React Native", "Express.js"], link: "https://kideo-togo.netlify.app/" },
  { number: "02", name: "TropiNutri", role: "Full-stack · Tests & UX", description: "Tests fonctionnels, identification et documentation des bugs, analyse de l’expérience utilisateur et développement des fonctionnalités dédiées à la gestion des restaurants.", tags: ["Tests fonctionnels", "UX", "Full-stack"], link: null },
  { number: "03", name: "IntellMeet", role: "Full-stack · Temps réel", description: "Application de visioconférence avec gestion des réunions, des utilisateurs, des caméras et des flux vidéo en temps réel.", tags: ["React", "Socket.IO", "WebRTC"], link: null },
  { number: "04", name: "Zamora", role: "Frontend · Interface", description: "Amélioration des interfaces, adaptation du thème sombre et optimisation de l’affichage des catégories et des repas.", tags: ["React", "UI Design", "Dark mode"], link: null },
];

const skills = [
  { title: "Frontend", text: "Interfaces modernes, accessibles et responsives.", items: ["HTML / CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Vite"] },
  { title: "Backend", text: "APIs fiables et logiques métier structurées.", items: ["Node.js", "Express.js", "API REST", "JWT", "Gestion des rôles", "Socket.IO"] },
  { title: "Data & outils", text: "Un environnement de travail complet et efficace.", items: ["MongoDB", "MongoDB Atlas", "Git / GitHub", "Docker", "Postman", "Linux Ubuntu"] },
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#accueil" aria-label="Accueil"><span>YS</span> SIBABE Yassine</a>
      <div className="navlinks"><a href="#apropos">À propos</a><a href="#projets">Projets</a><a href="#competences">Compétences</a></div>
      <a href="#contact" className="nav-cta">Me contacter <Arrow /></a>
    </nav>

    <section className="hero wrap" id="accueil">
      <div className="hero-copy hero-enter">
        <div className="eyebrow"><i /> Disponible pour de nouvelles opportunités</div>
        <h1>Je transforme des idées en <em>expériences web.</em></h1>
        <p>Développeur full-stack junior, je conçois des applications utiles, performantes et pensées avec soin — de l’interface jusqu’à l’API.</p>
        <div className="hero-actions"><a className="button primary" href="#projets">Découvrir mes projets <Arrow /></a><a className="button secondary" href="mailto:sibabeyassine@gmail.com">Parlons de votre projet</a></div>
        <div className="socials"><span>Retrouvez-moi</span><a href="https://github.com/Sibabeyassine" target="_blank" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/yassine-sibabe-584099280" target="_blank" aria-label="LinkedIn"><Linkedin /></a></div>
      </div>
      <div className="hero-visual visual-enter">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="photo-frame">
          <object data="/yassine-sibabe.jpg" type="image/jpeg" aria-label="Portrait professionnel de SIBABE Yassine">
            <span className="photo-fallback">YS<small>Photo à ajouter dans public/</small></span>
          </object>
        </div>
        <span className="floating-tag tag-react">React</span><span className="floating-tag tag-node">Node.js</span><span className="floating-tag tag-next">Next.js</span>
      </div>
    </section>

    <Reveal><section className="section about wrap" id="apropos">
      <div><span className="section-no">01 — À PROPOS</span><h2>Curieux par nature.<br/><em>Rigoureux</em> par choix.</h2></div>
      <div className="about-text"><p>Je suis Yassine, développeur full-stack junior passionné par la création d’applications web et la résolution de problèmes techniques.</p><p>J’aime comprendre le besoin derrière chaque projet, apprendre rapidement et transformer les contraintes en solutions simples. Mon objectif : continuer à progresser tout en contribuant à des produits numériques utiles et innovants.</p><div className="qualities"><span>Esprit d’analyse</span><span>Apprentissage rapide</span><span>Esprit d’équipe</span><span>Autonomie</span></div></div>
    </section></Reveal>

    <section className="projects-section" id="projets"><div className="wrap"><Reveal><div className="section-heading"><div><span className="section-no light">02 — PROJETS SÉLECTIONNÉS</span><h2>Des projets qui racontent<br/>ma façon de <em>construire.</em></h2></div><p>Une sélection d’expériences où technique, collaboration et attention aux détails se rencontrent.</p></div></Reveal>
      <Reveal stagger={90}><div className="project-list">{projects.map((p) => { const content = <><span className="project-number">{p.number}</span><div><span className="project-role">{p.role}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="project-arrow"><Arrow /></div></>; return p.link ? <a className="project featured" href={p.link} target="_blank" rel="noreferrer" key={p.name} aria-label={`Voir le projet ${p.name}`}>{content}</a> : <article className="project" key={p.name}>{content}</article>; })}</div></Reveal>
    </div></section>

    <Reveal><section className="section skills wrap" id="competences"><span className="section-no">03 — EXPERTISE</span><div className="skills-heading"><h2>Les outils au service<br/>de <em>bonnes idées.</em></h2><p>Une stack moderne pour concevoir, développer, tester et déployer des produits web complets.</p></div><div className="skill-grid">{skills.map((s, i) => <article key={s.title}><span className="skill-icon">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><div>{s.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section></Reveal>

    <Reveal><section className="experience wrap"><span className="section-no">04 — EXPÉRIENCE</span><div className="timeline"><article><span>Projet</span><div><h3>Kideo</h3><p>Développeur full-stack web & mobile</p></div></article><article><span>Projet</span><div><h3>TropiNutri</h3><p>Développeur full-stack / Testeur logiciel</p></div></article><article><span>Projet</span><div><h3>IntellMeet</h3><p>Développeur full-stack</p></div></article><article><span>Projet</span><div><h3>Zamora</h3><p>Développeur frontend</p></div></article></div></section></Reveal>

    <section className="contact" id="contact"><div className="wrap contact-inner"><span className="section-no light">05 — CONTACT</span><h2>Une idée, un projet<br/>ou simplement envie <em>d’échanger ?</em></h2><p>Je suis toujours ouvert aux nouvelles opportunités et aux collaborations intéressantes.</p><a className="email" href="mailto:sibabeyassine@gmail.com">sibabeyassine@gmail.com <Arrow /></a><div className="footer"><span>© 2026 SIBABE Yassine</span><div><a href="https://github.com/Sibabeyassine" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/yassine-sibabe-584099280" target="_blank">LinkedIn</a></div><a href="#accueil">Retour en haut ↑</a></div></div></section>
  </main>;
}
