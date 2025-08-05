import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/useLanguage"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.programming'),
      skills: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'HTML/CSS'],
      icon: '💻',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: t('skills.frameworks'),
      skills: ['React', 'React Native', 'Django', 'Laravel', 'TailwindCSS', 'HTMX', 'Alpine.js', 'Livewire'],
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: t('skills.databases'),
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
      icon: '🗄️',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: t('skills.tools'),
      skills: ['Git', 'Docker', 'Linux', 'Cybersecurity Tools'],
      icon: '🛠️',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: t('skills.ai'),
      skills: ['Machine Learning', 'AI Development', 'Data Analysis'],
      icon: '🤖',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative group">
              {/* Central Icon */}
              <div className="relative flex items-center justify-center mb-8">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-20 blur-xl animate-pulse`}></div>
                <Card className="relative z-10 w-20 h-20 flex items-center justify-center glass border-primary/30 group-hover:scale-110 transition-all duration-500">
                  <div className="text-3xl">{category.icon}</div>
                </Card>
              </div>

              {/* Category Title */}
              <h3 className="text-center text-xl font-semibold mb-8 text-foreground">
                {category.title}
              </h3>

              {/* Circular Skills Layout */}
              <div className="relative w-80 h-80 mx-auto">
                {category.skills.map((skill, skillIndex) => {
                  const angle = (skillIndex * 360) / category.skills.length
                  const radius = 120
                  const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius
                  const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius
                  
                  return (
                    <div
                      key={skillIndex}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group/skill"
                      style={{
                        left: `50%`,
                        top: `50%`,
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        animationDelay: `${skillIndex * 0.1}s`
                      }}
                    >
                      <Badge 
                        variant="secondary"
                        className={`
                          px-3 py-2 text-xs font-medium whitespace-nowrap
                          glass border-primary/20 hover:border-primary/40
                          bg-background/80 hover:bg-background/90
                          transform hover:scale-110 transition-all duration-300
                          shadow-lg hover:shadow-primary/20
                          animate-fade-in
                          group-hover/skill:animate-pulse
                        `}
                      >
                        {skill}
                      </Badge>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-accent/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-primary/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </section>
  )
}