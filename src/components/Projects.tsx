import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

interface Project {
  id: string
  name: string
  description: string
  category: 'web' | 'mobile' | 'desktop' | 'security'
  technologies: string[]
  github?: string
  demo?: string
  download?: string
  image?: string
  role: string
  featured: boolean
  type: 'github' | 'manual'
}

export function Projects() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')

  // GitHub projects
  const githubProjects: Project[] = [
    {
      id: 'pyblade',
      name: 'PyBlade',
      description: t('projects.pyblade.description'),
      category: 'web',
      technologies: ['Python', 'Django', 'Template Engine'],
      github: 'https://github.com/AntaresMugisho/PyBlade',
      role: t('projects.roles.lead'),
      featured: true,
      type: 'github'
    },
    {
      id: 'ar-intercom',
      name: 'AR Intercom',
      description: t('projects.arIntercom.description'),
      category: 'desktop',
      technologies: ['Python', 'Networking', 'Socket Programming'],
      github: 'https://github.com/AntaresMugisho/AR_Intercom',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'github'
    },
    {
      id: 'albatros',
      name: 'Albatros',
      description: t('projects.albatros.description'),
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/AntaresMugisho/Albatros',
      role: t('projects.roles.frontend'),
      featured: true,
      type: 'github'
    },
    {
      id: 'weather',
      name: 'Weather App',
      description: t('projects.weather.description'),
      category: 'web',
      technologies: ['PHP', 'API Integration', 'CSS'],
      github: 'https://github.com/AntaresMugisho/Weather',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'github'
    },
    {
      id: 'hiking',
      name: 'HiKing',
      description: t('projects.hiking.description'),
      category: 'security',
      technologies: ['Python', 'Cybersecurity', 'Ethical Hacking'],
      github: 'https://github.com/AntaresMugisho/HiKing',
      role: t('projects.roles.security'),
      featured: true,
      type: 'github'
    },
    {
      id: 'stockmanager',
      name: 'Stock Manager',
      description: t('projects.stockmanager.description'),
      category: 'web',
      technologies: ['PHP', 'MySQL', 'Real-time Updates'],
      github: 'https://github.com/AntaresMugisho/StockManager',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'github'
    }
  ]

  // Manual website projects
  const manualProjects: Project[] = [
    {
      id: 'artrev',
      name: 'Art Revolution',
      description: t('projects.artrev.description'),
      category: 'web',
      technologies: ['React', 'TailwindCSS', 'Modern Design'],
      demo: 'https://artrev.net',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'avsd',
      name: 'AVSD DRCongo',
      description: t('projects.avsd.description'),
      category: 'web',
      technologies: ['WordPress', 'PHP', 'MySQL'],
      demo: 'https://avsd-drcongo.org',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'haction',
      name: 'Humanitarian Action Africa',
      description: t('projects.haction.description'),
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB'],
      demo: 'https://h-action-africa.org',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'albatdi',
      name: 'Albatdi Consulting',
      description: t('projects.albatdi.description'),
      category: 'web',
      technologies: ['Laravel', 'Vue.js', 'MySQL'],
      demo: 'https://albatdi.com',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'ecd',
      name: 'Early Childhood Development',
      description: t('projects.ecd.description'),
      category: 'web',
      technologies: ['React', 'Django', 'PostgreSQL'],
      demo: 'https://ecd.artrev.net',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'autafrika',
      name: 'AutAfrika',
      description: t('projects.autafrika.description'),
      category: 'web',
      technologies: ['React Native', 'Node.js', 'MongoDB'],
      demo: 'https://autafrika.com',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'agroflex',
      name: 'Agroflex',
      description: t('projects.agroflex.description'),
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      demo: 'https://agroflex.vercel.app',
      download: 'https://agroflex.vercel.app',
      role: t('projects.roles.mobile'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'modelshostesses',
      name: 'Models & Hostesses',
      description: t('projects.modelshostesses.description'),
      category: 'web',
      technologies: ['PHP', 'Laravel', 'MySQL'],
      demo: 'https://modelshostesses.com',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    }
  ]

  const projects = [...githubProjects, ...manualProjects]

  const categories = [
    { id: 'all', label: t('projects.categories.all') },
    { id: 'web', label: t('projects.categories.web') },
    { id: 'mobile', label: t('projects.categories.mobile') },
    { id: 'desktop', label: t('projects.categories.desktop') },
    { id: 'security', label: t('projects.categories.security') }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐'
      case 'mobile': return '📱'
      case 'desktop': return '💻'
      case 'security': return '🔒'
      default: return '📦'
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'hero-gradient text-white glow' 
                  : 'glass hover:glow'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="glass border-primary/20 hover:glow transition-all duration-300 group h-full flex flex-col"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl">{getCategoryIcon(project.category)}</div>
                  {project.featured && (
                    <Badge variant="secondary" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>{t('projects.role')}:</strong> {project.role}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 min-w-[120px] glass hover:glow"
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        {t('projects.viewCode')}
                      </a>
                    </Button>
                  )}
                  
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 min-w-[120px] hero-gradient text-white"
                      asChild
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.liveDemo')}
                      </a>
                    </Button>
                  )}

                  {project.download && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex-1 min-w-[120px]"
                      asChild
                    >
                      <a 
                        href={project.download} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('projects.download')}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <Card className="glass border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Code className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
              <p className="text-muted-foreground mb-6">
                Check out my complete collection of projects, contributions, and open-source work.
              </p>
              <Button
                size="lg"
                className="hero-gradient text-white glow"
                asChild
              >
                <a 
                  href="https://github.com/AntaresMugisho" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}