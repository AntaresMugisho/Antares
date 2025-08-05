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
  category: 'web' | 'mobile' | 'desktop' | 'security' | 'framework'
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
      category: 'framework',
      technologies: ['Python', 'JavaScript'],
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
      technologies: ['Python', 'PyQT'],
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'github'
    },
    {
      id: 'hiking',
      name: 'HiKing',
      description: t('projects.hiking.description'),
      category: 'security',
      technologies: ['Python'],
      github: 'https://github.com/AntaresMugisho/HiKing',
      role: t('projects.roles.security'),
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
      technologies: ['PHP', 'Laravel'],
      demo: 'https://artrev.net',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'avsd',
      name: 'AVSD DR Congo',
      description: t('projects.avsd.description'),
      category: 'web',
      technologies: ['PHP', 'Laravel'],
      demo: 'https://avsd-drcongo.org',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'haction',
      name: 'Humanitarian Action for Africa',
      description: t('projects.haction.description'),
      category: 'web',
      technologies: ['Next.js', 'Laravel'],
      demo: 'https://h-action-africa.org',
      role: t('projects.roles.backend'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'albatdi',
      name: 'Albatros Design',
      description: t('projects.albatdi.description'),
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demo: 'https://albatdi.com',
      role: t('projects.roles.frontend'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'ecd',
      name: 'Eglise Compassion Divine',
      description: t('projects.ecd.description'),
      category: 'web',
      technologies: ['HTML', 'CSS', 'PHP'],
      demo: 'https://ecd.artrev.net',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'autafrika',
      name: 'Autafrika',
      description: t('projects.autafrika.description'),
      category: 'web',
      technologies: ["Laravel"],
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
      technologies: ['React Native', 'Django'],
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
      technologies: ['Django', 'Next.js'],
      demo: 'https://modelshostesses.com',
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    },
    {
      id: 'cvau',
      name: 'CVAU Loan Manager',
      description: t('projects.cvau.description'),
      category: 'desktop',
      technologies: ['Python', 'PyQT'],
      role: t('projects.roles.fullstack'),
      featured: true,
      type: 'manual'
    }
  ]

  const projects = [...githubProjects, ...manualProjects].sort((a, b) => a.name.localeCompare(b.name));

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col bg-card/50 backdrop-blur-sm border-border/20 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader className="flex-row items-start justify-between p-4">
                <CardTitle className="text-lg font-semibold">{project.name}</CardTitle>
                <div className="flex gap-3 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col p-4 pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                {/* <p className="text-xs text-muted-foreground italic">
                  Contributed as {project.role}
                </p> */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
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