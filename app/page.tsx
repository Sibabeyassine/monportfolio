import Reveal from "@/components/Reveal";

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const Github = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4c.14-1.26-.3-2.48-1-3.35 3.28-.36 6.72-1.61 6.72-7.25A5.66 5.66 0 0 0 19.22 3.5 5.28 5.28 0 0 0 19.08.65S17.9.27 15 2.14a13.38 13.38 0 0 0-6 0C6.1.27 4.92.65 4.92.65A5.28 5.28 0 0 0 4.78 3.5 5.66 5.66 0 0 0 3.28 7.4c0 5.63 3.44 6.89 6.72 7.25-.69.86-1.13 2.08-1 3.35v4M9 19c-3 .92-3-1.5-4.2-2" /></svg>;
const Linkedin = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>;
const Download = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" /></svg>;

const projects = [
  { number: "01", name: "KLINZO", role: "2026 · SaaS déchets · Full-stack", description: "Plateforme de collecte des déchets reliant usagers, entreprises et collecteurs, avec landing publique, espaces métier, cartographie et administration SaaS.", tags: ["React 19", "NestJS", "TypeScript", "Prisma", "Leaflet"], link: null },
  { number: "02", name: "Eventia", role: "2026 · Événementiel · Web & API", description: "Solution de gestion événementielle avec billetterie, QR codes, contrôle d’accès, cartographie et tableaux de bord organisateurs.", tags: ["React", "NestJS", "TypeORM", "QR Code"], link: null },
  { number: "03", name: "COPA Gestion", role: "2026 · Produit desktop & web", description: "Application de gestion comptable, commerciale et de stock conçue pour centraliser les opérations quotidiennes des entreprises.", tags: ["React", "Electron", "Node.js", "MongoDB"], link: null },
  { number: "04", name: "LIVEINBLACK", role: "2026 · Plateforme événementielle", description: "Écosystème web et mobile réunissant découverte d’événements, billetterie, paiements, messagerie, espaces organisateurs et outils de modération.", tags: ["Next.js", "React Native", "MongoDB", "Stripe"], link: null },
  { number: "05", name: "Total Clean Pro", role: "2026 · Refonte full-stack", description: "Refonte d’un site de services en application full-stack avec catalogue administrable, gestion des produits et génération de factures PDF.", tags: ["React", "Express", "MongoDB", "Vercel Blob"], link: null },
  { number: "06", name: "Kideo / KidPlay", role: "2025 — 2026 · Projet de licence", description: "Écosystème sécurisé de lecture vidéo pour enfants : application mobile, interface parentale web, profils, playlists et contrôle du temps d’écran.", tags: ["React Native", "React", "Express", "MongoDB"], link: "https://kideo-togo.netlify.app/" },
  { number: "07", name: "LandMapper", role: "2025 · Architecture · Équipe", description: "Plateforme de certification foncière en Afrique de l’Ouest. Contribution à la refonte de l’architecture, à la maintenabilité et aux parcours métier.", tags: ["Total.js", "MongoDB", "Architecture"], link: null },
  { number: "08", name: "Zamora", role: "2025 · Restauration · Équipe", description: "Plateforme de gestion pour restaurants : interfaces, thème sombre, catégories, cartes et optimisation du parcours de commande.", tags: ["React", "Node.js", "MongoDB"], link: null },
  { number: "09", name: "RepoBug", role: "2025 · Projet personnel", description: "Outil personnel de détection de bugs dans les bases de code, avec persistance structurée des analyses et de leurs résultats.", tags: ["Next.js", "Prisma", "Code analysis"], link: null },
  { number: "10", name: "IntellMeet", role: "2025 · Collaboration temps réel", description: "Plateforme collaborative avec réunions, gestion des utilisateurs, visioconférence et échanges en temps réel.", tags: ["React", "Express", "Socket.IO", "WebRTC"], link: null },
  { number: "11", name: "TropiNutri", role: "2025 · Produit nutrition", description: "Contribution aux tests fonctionnels, à la documentation des anomalies, à l’expérience utilisateur et aux fonctionnalités liées aux restaurants.", tags: ["Next.js", "Prisma", "Tests", "UX"], link: null },
];

const skills = [
  { title: "Frontend & mobile", text: "Interfaces modernes, accessibles et responsives, sur web comme sur mobile.", items: ["JavaScript ES6+", "React.js", "React Native", "Next.js", "Tailwind CSS", "TypeScript"] },
  { title: "Backend & données", text: "APIs sécurisées et architectures pensées pour évoluer.", items: ["Node.js", "Express.js", "Total.js", "API REST", "MongoDB", "Prisma", "Firestore"] },
  { title: "Architecture & outils", text: "Une pratique structurée de la conception jusqu’au déploiement.", items: ["Architecture MVC", "Sécurité", "Git / GitHub", "Docker", "Firebase Auth", "Postman", "Vercel"] },
];

export default function Home() {
  return <main>
    <header className="site-header site-header-dark">
      <nav className="nav nav-clean wrap">
        <a className="brand brand-clean" href="#accueil" aria-label="Accueil"><span>YS</span><strong>Yassine Sibabe</strong></a>
        <div className="navlinks"><a href="#apropos">À propos</a><a href="#projets">Projets</a><a href="#competences">Compétences</a><a href="#parcours">Parcours</a></div>
        <a href="/CV-SIBABE-Yassine.pdf" target="_blank" rel="noreferrer" className="nav-cta nav-cta-clean">Voir mon CV <Arrow /></a>
      </nav>
    </header>

    <section className="hero-designer" id="accueil">
      <div className="hero-designer-inner wrap">
        <div className="hero-designer-copy">
          <div className="hero-overline"><span>Portfolio — 2026</span><span>Lomé, Togo</span></div>
          <h1>Je transforme des idées en produits <em>numériques.</em></h1>
          <div className="hero-designer-intro">
            <p>Développeur full-stack diplômé en architecture logicielle. Je conçois des expériences web et mobile claires, utiles et techniquement solides.</p>
            <span className="availability"><i /> Disponible pour une opportunité</span>
          </div>
          <div className="hero-designer-actions"><a className="designer-cta" href="#projets">Voir mes projets <Arrow /></a><a className="designer-link" href="#contact">Parlons de votre projet</a></div>
        </div>
        <figure className="hero-portrait">
          <div className="hero-portrait-image"><img src="/yassine-sibabe.webp" alt="Portrait professionnel de SIBABE Yassine" /></div>
          <figcaption><span>SIBABE Yassine</span><span>Full-stack developer</span></figcaption>
        </figure>
        <div className="hero-specialties"><span>01</span><p>Frontend<br/><strong>React · Next.js</strong></p><span>02</span><p>Backend<br/><strong>Node.js · API</strong></p><span>03</span><p>Mobile<br/><strong>React Native</strong></p></div>
      </div>
    </section>

    <Reveal><section className="section about wrap" id="apropos">
      <div><span className="section-no">01 — À PROPOS</span><h2>Concevoir proprement.<br/><em>Construire</em> durablement.</h2></div>
      <div className="about-text"><p>Je suis Yassine, développeur full-stack récemment diplômé en architecture logicielle.</p><p>Mes projets couvrent la sécurité des contenus numériques, la gestion foncière et la restauration, avec une attention particulière portée aux architectures propres, à la scalabilité et à la fiabilité. J’aime comprendre le besoin, apprendre rapidement et transformer les contraintes en solutions simples et évolutives.</p><div className="qualities"><span>Architecture logicielle</span><span>Sécurité applicative</span><span>Esprit d’équipe</span><span>Autonomie</span></div></div>
    </section></Reveal>

    <section className="projects-section" id="projets"><div className="wrap"><Reveal><div className="section-heading"><div><span className="section-no light">02 — PROJETS · 2025 À AUJOURD’HUI</span><h2>Des projets qui racontent<br/>ma façon de <em>construire.</em></h2></div><p>Des produits réalisés en autonomie ou en équipe, de la première architecture jusqu’aux interfaces utilisées au quotidien.<span className="scroll-hint">Faites défiler →</span></p></div></Reveal>
      <Reveal stagger={90}><div className="project-list">{projects.map((p) => { const content = <><span className="project-number">{p.number}</span><div><span className="project-role">{p.role}</span><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div><div className="project-arrow"><Arrow /></div></>; return p.link ? <a className="project featured" href={p.link} target="_blank" rel="noreferrer" key={p.name} aria-label={`Voir le projet ${p.name}`}>{content}</a> : <article className="project" key={p.name}>{content}</article>; })}</div></Reveal>
    </div></section>

    <Reveal><section className="section skills wrap" id="competences"><span className="section-no">03 — EXPERTISE</span><div className="skills-heading"><h2>Une expertise de bout en bout.</h2><p>Conception d’interfaces, APIs, données et déploiement : chaque couche contribue à la qualité du produit final.</p></div><div className="skill-grid">{skills.map((s, i) => <article key={s.title}><span className="skill-icon">0{i+1}</span><h3>{s.title}</h3><p>{s.text}</p><div>{s.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section></Reveal>

    <Reveal><section className="experience wrap" id="parcours"><span className="section-no">04 — PARCOURS</span><div className="journey-layout"><div><h2>Apprendre, construire,<br/><em>faire évoluer.</em></h2><p className="journey-intro">Une formation en architecture logicielle renforcée par des projets concrets, individuels et collectifs.</p></div><div className="timeline"><article><span>2024 — 2025</span><div><h3>Licence en Architecture Logicielle</h3><p>ESGIS · Conception logicielle, architecture et développement full-stack</p></div></article><article><span>2021 — 2022</span><div><h3>Baccalauréat scientifique</h3><p>Sciences · Option scientifique</p></div></article><article><span>Langues</span><div><h3>Français & Anglais</h3><p>Français natif · Anglais intermédiaire</p></div></article><article><span>Localisation</span><div><h3>Agoè-Dikamé, Togo</h3><p>Disponible pour de nouvelles opportunités et collaborations</p></div></article></div></div></section></Reveal>

    <section className="contact contact-redesign" id="contact">
      <div className="wrap contact-main">
        <div className="contact-heading">
          <span className="section-no">05 — CONTACT</span>
          <h2>Vous avez un projet ?<br/><em>Échangeons.</em></h2>
        </div>
        <div className="contact-details">
          <p>Une opportunité, une collaboration ou un produit à construire ? Écrivez-moi, je vous répondrai avec plaisir.</p>
          <a className="contact-email" href="mailto:sibabeyassine.com"><span>sibabeyassine.com</span><Arrow /></a>
          <div className="contact-meta"><span>Téléphone</span><a href="tel:+22871309997">+228 71 30 99 97</a><span>Localisation</span><strong>Agoè-Dikamé, Togo</strong></div>
        </div>
      </div>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand"><span>YS</span><div><strong>Yassine Sibabe</strong><small>Développeur full-stack</small></div></div>
          <div className="footer-nav"><a href="https://github.com/Sibabeyassine" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/yassine-sibabe-584099280" target="_blank" rel="noreferrer">LinkedIn</a><a href="/CV-SIBABE-Yassine.pdf" target="_blank" rel="noreferrer">Curriculum vitæ</a></div>
          <a className="back-top" href="#accueil">Retour en haut <span>↑</span></a>
        </div>
        <div className="wrap footer-bottom"><span>© 2026 SIBABE Yassine</span><span>Conçu et développé à Lomé</span></div>
      </footer>
    </section>
  </main>;
}
