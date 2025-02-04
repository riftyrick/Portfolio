import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            fr: {
                translation: {
                    app_title: 'Accueil - RiftyRick',
                    nav_dev: 'Développeur',
                    nav_as: 'Administrateur système',
                    nav_provider: 'Services',
                    nav_stats: 'Statistiques',
                    nav_bep: 'Blog & Projets',
                    nav_contact: 'Contact',
                    desc_dev: 'Développeur JavaScript, API Discord js, Web (HTML,CSS,JS,PHP), C# (Unity), SQL, Python',
                    desc_as: 'Administrateur Système',
                    desc_am_ai: 'Amateur de cybersécurité & d\'IA',
                    desc_provider: 'Prestataire de services',
                    devat_noctis: 'Fondateur de ',
                    dev_title: 'Développeur - Farmeurimmo',
                    dev_langs: 'Langages',
                    dev_level_1: 'Débutant',
                    dev_level_2: 'Intermédiaire',
                    dev_level_3: 'Avancé',
                    dev_level_4: 'Expert',
                    dev_level_5: 'Maître',
                    dev_level: 'Niveau',
                    dev_apis: 'APIs',
                    dev_frameworks: 'Frameworks',
                    dev_langs_java: 'Java',
                    dev_langs_java_desc: 'Java est un langage de programmation orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy (cofondateur de Sun Microsystems en 1982), présenté officiellement le 23 mai 1995 au SunWorld.',
                    dev_langs_html: 'HTML',
                    dev_langs_html_desc: 'HTML, sigle de HyperText Markup Language, est le format de données conçu pour représenter les pages web. C’est un langage de balisage permettant d’écrire de l’hypertexte, d’où son nom.',
                    dev_langs_css: 'CSS',
                    dev_langs_css_desc: 'Les feuilles de style en cascade, généralement appelées CSS de l\'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.',
                    dev_langs_python: 'Python',
                    dev_langs_python_desc: 'Python est un langage de programmation interprété, multi-paradigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.',
                    dev_langs_sql: 'SQL',
                    dev_langs_sql_desc: 'SQL est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d\'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.',
                    dev_langs_js: 'JavaScript',
                    dev_langs_js_desc: 'JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs avec l\'utilisation (par exemple) de Node.js.',
                    dev_langs_ts: 'TypeScript',
                    dev_langs_ts_desc: 'TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d\'améliorer et de sécuriser la production de code JavaScript.',

                    dev_apis_spigot: 'API Spigot/Paper/Purpur',
                    dev_apis_spigot_desc: 'Spigot est un fork de CraftBukkit, qui était un fork de Bukkit. Spigot est un serveur Minecraft modifié qui est utilisé par la plupart des plugins des serveurs Minecraft.',
                    dev_apis_bungeecord: 'API BungeeCord',
                    dev_apis_bungeecord_desc: 'BungeeCord est un proxy qui permet de relier plusieurs serveurs Minecraft entre eux. Il est développé par SpigotMC et permet de relier des serveurs Spigot, Paper, Purpur, etc.',
                    dev_apis_velocity: 'API Velocity',
                    dev_apis_velocity_desc: 'Velocity est un proxy qui permet de relier plusieurs serveurs Minecraft entre eux. Il est développé par VelocityPowered et permet de relier des serveurs Spigot, Paper, Purpur, etc. en étant plus léger par rapport aux autres proxy.',

                    dev_frameworks_spring: 'Spring',
                    dev_frameworks_spring_desc: 'Spring est un framework libre pour construire et définir l\'infrastructure d\'une application Java, dont il facilite le développement et les tests.',
                    dev_frameworks_react: 'React',
                    dev_frameworks_react_desc: 'React est une bibliothèque JavaScript libre développée par Facebook depuis 2013. Le but principal de cette bibliothèque est de faciliter la création d\'application web monopage, via la création de composants dépendant d\'un état et générant une page (ou portion) HTML à chaque changement d\'état.',

                    as_title: 'Administrateur système - Farmeurimmo',
                    as_skills: 'Compétences',
                    as_skills_ndd: 'Gestion/configuration de noms de domaine',
                    as_skills_linux_install: 'Installation/configuration de serveurs Linux',
                    as_skills_install_services: 'Installer docker, docker-compose, portainer, pterodactyl, etc...',
                    as_skills_install_web: 'Installer et configurer un serveur web (Apache, Nginx, etc...)',
                    as_skills_install_db: 'Installer et configurer un serveur de base de données (MySQL, MariaDB, etc...)',
                    as_skills_install_games: 'Installer et configurer un serveur de jeux/api (Minecraft, etc...)',
                    as_skills_tunnels: 'Mettre en place des tunnels cloudflare pour sécuriser/restraindre l\'accès à un service',

                    provider_title: 'Prestataire - Farmeurimmo',
                    provider_h1: 'Prestataire de services',
                    provider_button: 'Voir ce service',
                    provider_button_contact: 'Me contacter pour ce service',
                    provider_not_available: 'Non disponible pour l\'instant',
                    provider_available: 'Disponible',
                    provider_1_title: 'Minecraft Plugins',
                    provider_1_desc: 'Je suis vendeur sur Fiverr, je propose actuellement seulement des services de développement de plugins Minecraft (Spigot, Paper, Purpur, BungeeCord, Velocity).',
                    provider_1_price: 'À partir de 10€',
                    provider_2_title: 'Portfolios / Websites',
                    provider_2_desc: 'Je vais proposer des services de création de portfolios ou de sites web.',
                    provider_2_price: 'Probablement à partir de 10€ - 20€',
                    provider_3_title: 'Installation/configuration de serveurs',
                    provider_3_desc: 'Je vais proposer des services d\'installation/configuration de serveurs (Linux, Web, BDD, Jeux, etc...) et de nom de domaine.',
                    provider_3_price: 'Aucun prix défini pour le moment',

                    stats_title: 'Statistiques - Farmeurimmo',
                    stats_desc: 'Quelques statistiques',
                    stats_readme_stats: 'Readme stats',
                    stats_wakatime: 'Wakatime',
                    stats_timeline: 'Timeline',

                    contact_title: 'Contact - Farmeurimmo',
                    contact_discord: 'Discord',
                    contact_mail: 'Email',
                    contact_github: 'Github',

                    bep_title: 'Blog & Projets - Farmeurimmo',
                    bep_h1: 'Blog & Projets',
                    bep_desc: 'Certains de ces projets sont open-source ou personnel ou fait pour des projets à part. Je poste ici les projets que je trouve intéressant de partager ou des expériences que j\'ai envie de partager.',


                }
            },
            en: {
                translation: {
                    app_title: 'Home - Farmeurimmo',
                    nav_dev: 'Developer',
                    nav_as: 'System administrator',
                    nav_provider: 'Provider',
                    nav_stats: 'Statistics',
                    nav_bep: 'Blog & Projects',
                    nav_contact: 'Contact',
                    desc_dev: 'Java developer, Minecraft API : Spigot/Paper/Purpur/Bungee/Velocity, Web (HTML,CSS,JS/TS), C++, SQL, Python',
                    desc_as: 'System administrator',
                    desc_am_ai: 'Cybersecurity & AI lover',
                    desc_provider: 'Service provider',
                    devat_noctis: 'Developer at ',
                    dev_title: 'Developer - Farmeurimmo',
                    dev_langs: 'Languages',
                    dev_level_1: 'Beginner',
                    dev_level_2: 'Intermediate',
                    dev_level_3: 'Advanced',
                    dev_level_4: 'Expert',
                    dev_level_5: 'Master',
                    dev_level: 'Level',
                    dev_apis: 'APIs',
                    dev_frameworks: 'Frameworks',
                    dev_langs_java: 'Java',
                    dev_langs_java_desc: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
                    dev_langs_html: 'HTML',
                    dev_langs_html_desc: 'Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser.',
                    dev_langs_css: 'CSS',
                    dev_langs_css_desc: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.',
                    dev_langs_python: 'Python',
                    dev_langs_python_desc: 'Python is an interpreted, high-level and general-purpose programming language.',
                    dev_langs_sql: 'SQL',
                    dev_langs_sql_desc: 'SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system.',
                    dev_langs_cpp_desc: 'C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or "C with Classes".',
                    dev_langs_js: 'JavaScript',
                    dev_langs_js_desc: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
                    dev_langs_ts: 'TypeScript',
                    dev_langs_ts_desc: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',

                    dev_apis_spigot: 'Spigot/Paper/Purpur API',
                    dev_apis_spigot_desc: 'Spigot is a fork of CraftBukkit, which was a fork of Bukkit. Spigot is a modified Minecraft server that is used by most Minecraft server plugins.',
                    dev_apis_bungeecord: 'BungeeCord API',
                    dev_apis_bungeecord_desc: 'BungeeCord is a proxy that allows you to connect multiple Minecraft servers together. It is developed by SpigotMC and allows you to connect Spigot, Paper, Purpur, etc. servers together.',
                    dev_apis_velocity: 'Velocity API',
                    dev_apis_velocity_desc: 'Velocity is a proxy that allows you to connect multiple Minecraft servers together. It is developed by VelocityPowered and allows you to connect Spigot, Paper, Purpur, etc. servers together. It is lighter than other proxies.',

                    dev_frameworks_spring: 'Spring',
                    dev_frameworks_spring_desc: 'Spring is a free and open-source framework for building and defining the infrastructure of a Java application, of which it facilitates the development and testing.',
                    dev_frameworks_react: 'React',
                    dev_frameworks_react_desc: 'React is a free and open-source front-end JavaScript library for building user interfaces or UI components.',

                    as_title: 'System administrator - Farmeurimmo',
                    as_skills: 'Skills',
                    as_skills_ndd: 'Domain name management/configuration',
                    as_skills_linux_install: 'Installation/configuration of Linux servers',
                    as_skills_install_services: 'Install docker, docker-compose, portainer, pterodactyl, etc...',
                    as_skills_install_web: 'Install and configure a web server (Apache, Nginx, etc...)',
                    as_skills_install_db: 'Install and configure a database server (MySQL, MariaDB, etc...)',
                    as_skills_install_games: 'Install and configure a game server/api (Minecraft, etc...)',
                    as_skills_tunnels: 'Set up cloudflare tunnels to secure/restrain access to a service',

                    provider_title: 'Provider - Farmeurimmo',
                    provider_h1: 'Service provider',
                    provider_button: 'See this service',
                    provider_button_contact: 'Contact me for this service',
                    provider_not_available: 'Not available at the moment',
                    provider_available: 'Available',
                    provider_1_title: 'Minecraft Plugins',
                    provider_1_desc: 'I am a seller on Fiverr, I currently offer Minecraft plugin development services (Spigot, Paper, Purpur, BungeeCord, Velocity).',
                    provider_1_price: 'Starting at 9.49€',
                    provider_2_title: 'Portfolios / Websites',
                    provider_2_desc: 'I will offer portfolio or website creation services.',
                    provider_2_price: 'Probably starting at 15€ - 20€',
                    provider_3_title: 'Installation/configuration of servers',
                    provider_3_desc: 'I will offer server installation/configuration services (Linux, Web, DB, Games, etc...) and domain name.',
                    provider_3_price: 'No price defined for the moment',

                    stats_title: 'Statistics - Farmeurimmo',
                    stats_desc: 'Some statistics',
                    stats_readme_stats: 'Readme stats',
                    stats_wakatime: 'Wakatime',
                    stats_timeline: 'Timeline',

                    contact_title: 'Contact - Farmeurimmo',
                    contact_discord: 'Discord',
                    contact_mail: 'Email',
                    contact_github: 'Github',

                    bep_title: 'Blog & Projects - Farmeurimmo',
                    bep_h1: 'Blog & Projects',
                    bep_desc: 'Some of these projects are open-source or personal or made for separate projects. I post here the projects that I find interesting to share or experiences that I want to share.',


                }
            }
        }
    });

export default i18n;
