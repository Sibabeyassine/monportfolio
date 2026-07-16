import Reveal from "@/components/Reveal";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Github = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4c.14-1.26-.3-2.48-1-3.35 3.28-.36 6.72-1.61 6.72-7.25A5.66 5.66 0 0 0 19.22 3.5 5.28 5.28 0 0 0 19.08.65S17.9.27 15 2.14a13.38 13.38 0 0 0-6 0C6.1.27 4.92.65 4.92.65A5.28 5.28 0 0 0 4.78 3.5 5.66 5.66 0 0 0 3.28 7.4c0 5.63 3.44 6.89 6.72 7.25-.69.86-1.13 2.08-1 3.35v4M9 19c-3 .92-3-1.5-4.2-2" /></svg>;
const Linkedin = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const Download = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>;

const projects = [
  { number: "01", name: "Kideo", role: "Projet de fin de licence · Full-stack", description: "Écosystème sécurisé de lecture vidéo pour enfants : application React Native, interface web parentale et backend centralisé avec contrôle strict des contenus.", tags: ["React Native", "React.js", "Node / Express", "MongoDB"], link: "https://kideo-togo.netlify.app/" },
  { number: "02", name: "LandMapper", role: "Architecture · Travail d’équipe", description: "Plateforme de certification foncière en Afrique de l’Ouest. Contribution à la refonte de l’architecture pour améliorer scalabilité, maintenabilité et expérience utilisateur.", tags: ["Total.js", "MongoDB", "Architecture"], link: null },
  { number: "03", name: "RepoBug", role: "Projet personnel · Solo", description: "Outil personnel de détection de bugs dans les bases de code, avec persistance structurée des analyses et de leurs résultats.", tags: ["Next.js", "Prisma", "Code analysis"], link: null },
  { number: "04", name: "Zamora", role: "Frontend · Travail d’équipe", description: "Plateforme de gestion pour restaurants : amélioration des interfaces, du thème sombre, des catégories, des cartes et du parcours de commande.", tags: ["React", "Node.js", "MongoDB"], link: null },
  { number: "05", name: "IntellMeet", role: "Full-stack · Temps réel", description: "Application de visioconférence avec gestion des réunions, des utilisateurs, des caméras et des flux vidéo en temps réel.", tags: ["React", "Socket.IO", "WebRTC"], link: null },
  { number: "06", name: "TropiNutri", role: "Full-stack · Tests & UX", description: "Tests fonctionnels, documentation des bugs, analyse de l’expérience utilisateur et développement des fonctionnalités liées aux restaurants.", tags: ["Tests fonctionnels", "UX", "Full-stack"], link: null },
];

const skills = [
  { title: "Frontend & mobile", text: "Interfaces modernes, accessibles et responsives, sur web comme sur mobile.", items: ["JavaScript ES6+", "React.js", "React Native", "Next.js", "Tailwind CSS", "TypeScript"] },
  { title: "Backend & données", text: "APIs sécurisées et architectures pensées pour évoluer.", items: ["Node.js", "Express.js", "Total.js", "API REST", "MongoDB", "Prisma", "Firestore"] },
  { title: "Architecture & outils", text: "Une pratique structurée de la conception jusqu’au déploiement.", items: ["Architecture MVC", "Sécurité", "Git / GitHub", "Docker", "Firebase Auth", "Postman", "Vercel"] },
];

export default function Home() {
  return <main>
    <nav className="nav wrap">
      <a className="brand" href="#accueil" aria-label="Accueil"><span>YS</span> SIBABE Yassine</a>
      <div className="navlinks"><a href="#apropos">À propos</a><a href="#projets">Projets</a><a href="#competences">Compétences</a><a href="#parcours">Parcours</a></div>
      <a href="/CV-SIBABE-Yassine.pdf" download className="nav-cta">Télécharger mon CV <Download /></a>
    </nav>

    <section className="hero wrap" id="accueil">
      <div className="hero-copy hero-enter">
        <div className="eyebrow"><i /> Disponible pour de nouvelles opportunités</div>
        <h1>Je transforme des idées en <em>expériences web.</em></h1>
        <p>Développeur full-stack diplômé en architecture logicielle, je conçois des applications modernes, sécurisées et bien structurées — du web au mobile, de l’interface jusqu’à l’API.</p>
        <div className="hero-actions"><a className="button primary" href="#projets">Découvrir mes projets <Arrow /></a><a className="button secondary" href="/CV-SIBABE-Yassine.pdf" target="_blank" rel="noreferrer">Consulter mon CV <Arrow /></a></div>
        <div className="socials"><span>Retrouvez-moi</span><a href="https://github.com/Sibabeyassine" target="_blank" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/yassine-sibabe-584099280" target="_blank" aria-label="LinkedIn"><Linkedin /></a></div>
      </div>
      <div className="hero-visual visual-enter">
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="photo-frame">
          <object data="/yassine-sibabe.png" type="image/png" aria-label="Portrait professionnel de SIBABE Yassine">
            <span className="photo-fallback">YS<small>Photo à ajouter dans public/</small></span>
          </object>
        </div>
        <span className="floating-tag tag-react">React</span><span className="floating-tag tag-node">Node.js</span><span className="floating-tag tag-next">Next.js</span>
      </div>
    </section>

    <Reveal><section className="section about wrap" id="apropos">
      <div><span className="section-no">01 — À PROPOS</span><h2>Concevoir proprement.<br/><em>Construire</em> durablement.</h2></div>
      <div className="about-text"><p>Je suis Yassine, développeur full-stack récemment diplômé en architecture logicielle.</p><p>Mes projets couvrent la sécurité des contenus numériques, la gestion foncière et la restauration, avec une attention particulière portée aux architectures propres, à la scalabilité et à la fiabilité. J’aime comprendre le besoin, apprendre rapidement et transformer les contraintes en solutions simples et évolutives.</p><div className="qualities"><span>Architecture logicielle</span><span>Sécurité applicative</span><span>Esprit d’équipe</span><span>Autonomie</span></div></div>
    </section></Reveal>

    <section className="projects-section" id="projets"><div className="wrap"><Reveal><div className="section-heading"><div><span className="section-no light">02 — PROJETS SÉLECTIONNÉS</span><h2>Des projets qui racontent<br/>ma façon de <em>construire.</em></h2></div><p>Une sélection d’expériences où technique, collaboration et attention aux détails se rencontrent.</p></div></Reveal>
      <Reveal stagger={90}><div className="project-list">{projects.map((p) => { const content = <><span className="project-number">{p.number}</span><div><span className="project-role">{p.role}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="project-arrow"><Arrow /></div></>; return p.link ? <a className="project featured" href={p.link} target="_blank" rel="noreferrer" key={p.name} aria-label={`Voir le projet ${p.name}`}>{content}</a> : <article className="project" key={p.name}>{content}</article>; })}</div></Reveal>
    </div></section>

    <Reveal><section className="section skills wrap" id="competences"><span className="section-no">03 — EXPERTISE</span><div className="skills-heading"><h2>Les outils au service<br/>de <em>bonnes idées.</em></h2><p>Une stack moderne pour concevoir, développer, tester et déployer des produits web complets.</p></div><div className="skill-grid">{skills.map((s, i) => <article key={s.title}><span className="skill-icon">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><div>{s.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section></Reveal>

    <Reveal><section className="experience wrap" id="parcours"><span className="section-no">04 — PARCOURS</span><div className="journey-layout"><div><h2>Une base technique,<br/><em>une vision produit.</em></h2><p className="journey-intro">Une formation en architecture logicielle renforcée par des projets concrets, individuels et collectifs.</p></div><div className="timeline"><article><span>2024 — 2025</span><div><h3>Licence en Architecture Logicielle</h3><p>ESGIS · Conception logicielle, architecture et développement full-stack</p></div></article><article><span>2021 — 2022</span><div><h3>Baccalauréat scientifique</h3><p>Sciences · Option scientifique</p></div></article><article><span>Langues</span><div><h3>Français & Anglais</h3><p>Français natif · Anglais intermédiaire</p></div></article><article><span>Localisation</span><div><h3>Agoè-Dikamé, Togo</h3><p>Disponible pour de nouvelles opportunités et collaborations</p></div></article></div></div></section></Reveal>

    <section className="contact" id="contact"><div className="wrap contact-inner"><span className="section-no light">05 — CONTACT</span><h2>Construisons quelque chose<br/>d’utile et de <em>durable.</em></h2><p>Une opportunité, une collaboration ou une idée de produit ? Je serai ravi d’en discuter.</p><div className="contact-links"><a className="email" href="mailto:sibabeyassine@gmail.com">sibabeyassine@gmail.com <Arrow /></a><a href="tel:+22871309997">+228 71 30 99 97</a></div><div className="footer"><span>© 2026 SIBABE Yassine · Agoè-Dikamé, Togo</span><div><a href="https://github.com/Sibabeyassine" target="_blank">GitHub</a><a href="https://www.linkedin.com/in/yassine-sibabe-584099280" target="_blank">LinkedIn</a><a href="/CV-SIBABE-Yassine.pdf" download>CV</a></div><a href="#accueil">Retour en haut ↑</a></div></div></section>
  </main>;
}
