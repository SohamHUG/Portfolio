import { IProject } from "../types/IProjects"

export const projects: IProject[] = [
    {
        id: 'phx',
        title: 'Phoenix',
        createdAt: '2025-08-18',
        description: 'Landing page immersive d’un groupe de musique fictif, réalisée en une semaine dans le cadre du Brief of the Week.',
        longDescription: `
            Le label <strong>B-WEEK Entertainment</strong> lance “Phoenix”.  
            Ils viennent de signer le groupe et souhaitent une landing page qui présente son univers, sa musique ainsi que leur premier single.<br />

            Ce projet a été développé en une semaine dans le cadre du <a href="https://briefweek.fr/" target="_blank">Brief of the Week (BOTW)</a>. 
            Le BOTW est un challenge hebdomadaire qui encourage la collaboration entre designers et développeurs, afin de progresser ensemble, expérimenter de nouvelles approches et enrichir son portfolio. 

            Pour ce projet, j’ai collaboré avec <a href="https://www.linkedin.com/in/gauravmalii/" target="_blank">Gaurav Mali</a>, un designer expérimenté, ce qui m’a permis de mieux comprendre l’importance du travail en équipe dans un contexte créatif. 
            De mon côté, j’ai notamment appris à manier Three.js pour intégrer un élément 3D immersif et donner une identité visuelle forte à l’expérience. 

            La page met en avant l’univers du groupe, leur dernier single, son style musical et son nouveau merchandising, tout en offrant une navigation moderne et dynamique. 
            Ce projet illustre la créativité et la rapidité d’exécution mises en avant par le BOTW.
            `,
        thumbnail: '/img/phx.png',
        technologies: ['React', 'Next.js', 'TypeScript', 'ThreeJs', 'Tailwind', "GSAP", "Lenis"],
        github: 'https://github.com/SohamHUG/Phoenix',
        website: 'https://phoenix-botw.vercel.app/',
        featured: true,
    },
    {
        id: 'our-blog',
        title: 'OurBlog',
        createdAt: '2025-02-13',
        description: 'Plateforme permettant aux utilisateurs de consulter, commenter et publier des articles par catégorie.',
        longDescription: `OurBlog est une application web de type blog permettant aux utilisateurs de consulter, commenter et publier des articles classés par catégories. Ce projet, réalisé dans le cadre de mon projet de fin de formation, m’a permis de valider mon titre de Développeur Fullstack. J’y ai développé une API REST robuste avec Node.js et Express, incluant un système d’authentification sécurisé via JWT, une gestion des rôles utilisateurs (administrateur, auteur, lecteur), ainsi que l’implémentation complète des opérations CRUD pour les articles et les commentaires. Côté front-end, l’interface a été conçue avec React, Redux et Vite, pour une expérience fluide et moderne.`,
        thumbnail: '/img/ourblog.png',
        technologies: ['React', 'JavaScript', 'Vite', 'Redux', 'Node.js', 'Express', 'API', 'Scss',],
        github: 'https://github.com/SohamHUG/OurBlog',
        website: 'https://our-blog-client.vercel.app/',
        featured: true,
    },
    {
        id: 'humean-wp',
        title: 'Humean',
        createdAt: '2024-06-15',
        description: 'Site du Centre Humean, spécialisé dans l’orientation durable, le bien-être professionnel et l’accompagnement à impact positif.',
        longDescription: `Développé pour le Centre Humean, ce site met en valeur leurs ressources, formations et accompagnements en orientation professionnelle durable, bien-être au travail et entrepreneuriat responsable. Le projet a été réalisé avec WordPress et le thème Avada, étendu via un thème enfant pour une meilleure flexibilité. Nous avons également intégré des formulaires personnalisés via WooCommerce afin de collecter des données spécifiques et interagir efficacement avec la base de données. Ce projet allie personnalisation avancée et gestion de contenu évolutive.`,
        thumbnail: '/img/humean.png',
        technologies: ['Wordpress', 'PHP', 'MySQL'],
        website: 'https://humean.org/',
        featured: true,
    },
    {
        id: 'movies-share',
        title: 'Movies Share',
        createdAt: '2025-01-08',
        description: 'Ce petit projet est une application web permettant aux utilisateurs de découvrir, partager et critiquer des films. Les utilisateurs peuvent également créer des collections personnalisées avec des statuts (Vu ou À voir).',
        longDescription: `Projet réalisé dans le cadre de ma formation. Movies Share est une API développée en Node.js, Express et TypeScript, qui permet aux utilisateurs d’interagir autour de leur passion pour le cinéma. L’application comprend un système d’authentification sécurisé via JWT, la possibilité d’ajouter, modifier ou supprimer des films, de poster des critiques notées, et de créer des collections personnalisées avec des statuts (Vu / À voir). Ce projet m’a permis de mettre en œuvre des concepts clés comme la gestion des permissions, la structuration d’une API REST, et la manipulation de données relationnelles.`,
        thumbnail: '/img/moviesshare.jpg',
        technologies: ['Node.js', 'Express', 'API', 'PostgreSQL', 'TypeScript'],
        github: 'https://github.com/SohamHUG/Movies-share',
        featured: true,
    },
    {
        id: 'portfolio',
        title: 'Portfolio personnel',
        createdAt: '2025-04-30',
        description: 'Site vitrine personnel développé pour présenter mes projets, compétences et parcours de manière claire et interactive.',
        longDescription: `Ce portfolio a été conçu comme un projet technique à part entière. Il met en valeur mes compétences en React, TypeScript et en design moderne avec Tailwind CSS. L’application est construite avec Vite pour des performances optimales. Le site est responsive, accessible, et optimisé pour offrir une navigation fluide sur tous les supports.`,
        thumbnail: '/img/portfolio.png',
        technologies: ['React', 'Vite', 'TypeScript', 'Tailwind',],
        github: 'https://github.com/SohamHUG/Portfolio',
        website: '',
        featured: false
    }

]