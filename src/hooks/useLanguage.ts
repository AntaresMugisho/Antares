import { useState, useEffect } from 'react'

export type Language = 'en' | 'fr'

const translations = {
  en: {
    navigation: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi there! 👋',
      name: "I'm Antares Mugisho",
      title: 'Full-Stack Developer & Cybersecurity Enthusiast',
      description: 'Passionate developer with expertise in software development, web and mobile applications, and cybersecurity. I build innovative solutions to solve real-world problems.',
      cta: 'View my work',
      location: 'Goma, DR Congo'
    },
    about: {
      title: 'About Me',
      subtitle: 'Passionate Developer & Cybersecurity Expert',
      bio: 'I am a passionate developer with a diverse skill set spanning software development, web and mobile app development, and cybersecurity. My journey in technology is driven by curiosity and the desire to create innovative solutions that make a difference.',
      experience: 'Professional Experience',
      experiences: [
        {
          title: 'Software Developer',
          description: 'Developed desktop solutions using Python and PySide, including cybersecurity scripts and ethical hacking tools.'
        },
        {
          title: 'Web Developer',
          description: "Designed and developed responsive websites using cutting-edge technologies including Django and the TALL Stack."
        },
        {
          title: 'Mobile App Developer',
          description: 'Created Android and iOS mobile applications with React Native for optimal performance and user experience.'
        }
      ]
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'My Technical Expertise',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Databases',
      devops: 'DevOps & Tools',
      stats: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Databases',
        devops: 'DevOps'
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Showcasing my work',
      categories: {
        all: 'All',
        web: 'Web Applications',
        mobile: 'Mobile Apps',
        desktop: 'Desktop Applications',
        security: 'Security Tools'
      },
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
      download: 'Download',
      role: 'Role',
      roles: {
        lead: 'Lead Developer',
        fullstack: 'Full-Stack Developer',
        frontend: 'Frontend Developer',
        security: 'Security Developer',
        mobile: 'Mobile Developer',
        backend: 'Backend Developer'
      },
      pyblade: {
        description: 'A lightweight, flexible template engine for Python inspired by Laravel\'s Blade syntax. Makes transitioning from Laravel to Django seamless.'
      },
      arIntercom: {
        description: 'A realtime chat application project that enhance enterprise communication between coworkers without the need of Internet connection.'
      },

      hiking: {
        description: 'Collection of ethical hacking tools and cybersecurity scripts.'
      },

      artrev: {
        description: 'Official website of Art Revolution, a digital & software agency specializing in modern web solutions and innovative digital experiences.'
      },
      avsd: {
        description: 'Website for AVSD DRCongo, an NGO focused on social development and community empowerment initiatives.'
      },
      haction: {
        description: 'Official website for Humanitarian Action Africa, a NGO supporting community development projects and humanitarian initiatives across the continent.'
      },
      albatdi: {
        description: 'Portfolio website for Albatros Designer with modern design and responsive layout.'
      },
      ecd: {
        description: 'Educational portal focused on Early Childhood Development tools and services, providing resources for educators and parents.'
      },
      autafrika: {
        description: 'Website for an African tech startup in the automotive and mobility space, promoting innovation in transportation solutions.'
      },
      agroflex: {
        description: 'Landing page for the Agroflex mobile app, showcasing key features for agricultural management and farming optimization.'
      },
      modelshostesses: {
        description: 'A platform dedicated to showcasing and managing models and hostesses, connecting professionals with event organizers.'
      },
      cvau: {
        description: 'A platform dedicated to manage loans and payments for a society specialized in loans and microfinance.'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Let's work together on your next project",
      description: "I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      whatsapp: 'Whatsapp'
    },
    footer: {
      rights: 'All rights reserved',
      built: 'Built with React & TailwindCSS'
    }
  },
  fr: {
    navigation: {
      about: 'À Propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Salut ! 👋',
      name: "Je suis Antares Mugisho",
      title: 'Développeur Full-Stack & Passionné de Cybersécurité',
      description: 'Développeur passionné avec une expertise en développement logiciel, applications web et mobiles, et cybersécurité. Je crée des solutions innovantes pour résoudre des problèmes du monde réel.',
      cta: 'Voir mes réalisations',
      location: 'Goma, DR Congo'
    },
    about: {
      title: 'À Propos de Moi',
      subtitle: 'Développeur Passionné & Expert en Cybersécurité',
      bio: 'Je suis un développeur passionné avec un ensemble de compétences diversifiées couvrant le développement logiciel, les applications web et mobiles, et la cybersécurité. Mon parcours en technologie est motivé par la curiosité et le désir de créer des solutions innovantes qui font la différence.',
      experience: 'Expérience Professionnelle',
      experiences: [
        {
          title: 'Développeur Logiciel',
          description: 'Développement de solutions desktop en utilisant Python et PySide, incluant des scripts de cybersécurité et des outils de hacking éthique.'
        },
        {
          title: 'Développeur Web',
          description: "Conception et développement de sites web responsifs utilisant des technologies de pointe incluant Django et la TALL Stack."
        },
        {
          title: 'Développeur d\'Applications Mobiles',
          description: 'Création d\'applications mobiles pour Android et iOS avec React Native pour des performances optimales et une expérience utilisateur exceptionnelle.'
        }
      ]
    },
    skills: {
      title: 'Compétences & Technologies',
      subtitle: 'Mon Expertise Technique',
      frontend: 'Frontend',
      backend: 'Backend',
      databases: 'Bases de Données',
      devops: 'DevOps & Outils',
      stats: {
        frontend: 'Frontend',
        backend: 'Backend',
        databases: 'Bases de Données',
        devops: 'DevOps'
      }
    },
    projects: {
      title: 'Projets Sélectionnés',
      subtitle: 'Présentation de Mon Travail',
      categories: {
        all: 'Tous',
        web: 'Applications Web',
        mobile: 'Applications Mobiles',
        desktop: 'Applications Desktop',
        security: 'Outils de Sécurité'
      },
      viewCode: 'Voir le Code',
      liveDemo: 'Démo Live',
      download: 'Télécharger',
      role: 'Rôle',
      roles: {
        lead: 'Développeur Principal',
        fullstack: 'Développeur Full-Stack',
        frontend: 'Développeur Frontend',
        security: 'Développeur Sécurité',
        mobile: 'Développeur Mobile',
        backend: 'Développeur Backend'
      },
      pyblade: {
        description: "Un moteur de template léger et flexible pour Python, inspiré de la syntaxe Blade de Laravel. Facilite la transition de Laravel vers Django."
      },
      arIntercom: {
        description: "Une application de chat en temps réel qui améliore la communication entre collègues en entreprise, sans besoin de connexion Internet."
      },
      hiking: {
        description: "Collection d'outils d'ethical hacking et de scripts de cybersécurité."
      },
      artrev: {
        description: "Site officiel d'Art Revolution, une agence numérique et logicielle spécialisée dans les solutions web modernes et les expériences digitales innovantes."
      },
      avsd: {
        description: "Site web de AVSD DRCongo, une ONG axée sur le développement social et les initiatives d'autonomisation communautaire."
      },
      haction: {
        description: "Site officiel de Humanitarian Action Africa, une ONG soutenant des projets de développement communautaire et des initiatives humanitaires à travers le continent."
      },
      albatdi: {
        description: "Site portfolio d'Albatros Designer avec un design moderne et une mise en page responsive."
      },
      ecd: {
        description: "Portail éducatif axé sur les outils et services pour le développement de la petite enfance, fournissant des ressources aux éducateurs et aux parents."
      },
      autafrika: {
        description: "Site web d'une startup technologique africaine dans le domaine de l'automobile et de la mobilité, promouvant l'innovation dans les solutions de transport."
      },
      agroflex: {
        description: "Page de destination de l'application mobile Agroflex, présentant les fonctionnalités clés pour la gestion agricole et l'optimisation des exploitations."
      },
      modelshostesses: {
        description: "Une plateforme dédiée à la présentation et à la gestion de modèles et d'hôtesses, mettant en relation les professionnels avec les organisateurs d'événements."
      },
      cvau: {
        description: "Une plateforme dédiée à la gestion des prêts et des paiements pour une société spécialisée dans les prêts et la microfinance."
      }
    },
    contact: {
      title: 'Contactez-Moi',
      subtitle: "Travaillons ensemble sur votre prochain projet",
      description: "Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants. N'hésitez pas à me contacter !",
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
      whatsapp: "Whatsapp"
    },
    footer: {
      rights: 'Tous droits réservés',
      built: 'Développé avec React & TailwindCSS'
    }
  }
}

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return { language, changeLanguage, t, translations: translations[language] }
}