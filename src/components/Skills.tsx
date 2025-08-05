import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/useLanguage"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: t('skills.frontend'),
      skills: ['HTML', 'CSS', 'JavaScript', 'Next.js', 'TailwindCSS', 'PyQT', 'PyBlade'],
      icon: '🎨',
      darkGradient: 'dark:from-blue-600 dark:to-cyan-600',
      lightGradient: 'from-blue-400 to-cyan-400',
      darkHover: 'dark:hover:from-blue-700 dark:hover:to-cyan-700',
      lightHover: 'hover:from-blue-500 hover:to-cyan-500'
    },
    {
      title: t('skills.backend'),
      skills: ['Python', 'Django', 'PHP', 'Laravel'],
      icon: '⚙️',
      darkGradient: 'dark:from-purple-600 dark:to-pink-600',
      lightGradient: 'from-purple-400 to-pink-400',
      darkHover: 'dark:hover:from-purple-700 dark:hover:to-pink-700',
      lightHover: 'hover:from-purple-500 hover:to-pink-500'
    },
    {
      title: t('skills.databases'),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Firebase', 'Supabase'],
      icon: '🗃️',
      darkGradient: 'dark:from-green-600 dark:to-emerald-600',
      lightGradient: 'from-green-400 to-emerald-400',
      darkHover: 'dark:hover:from-green-700 dark:hover:to-emerald-700',
      lightHover: 'hover:from-green-500 hover:to-emerald-500'
    },
    {
      title: t('skills.devops'),
      skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'Nginx', 'Cloud Engineering', 'SEO'],
      icon: '🚀',
      darkGradient: 'dark:from-orange-600 dark:to-red-600',
      lightGradient: 'from-orange-400 to-red-400',
      darkHover: 'dark:hover:from-orange-700 dark:hover:to-red-700',
      lightHover: 'hover:from-orange-500 hover:to-red-500'
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20 dark:bg-muted/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className={`
                relative group cursor-pointer
                bg-gradient-to-br ${category.lightGradient} ${category.darkGradient}
                ${category.lightHover} ${category.darkHover}
                border-0 shadow-lg hover:shadow-2xl dark:shadow-lg dark:hover:shadow-2xl
                shadow-black/10 dark:shadow-black/30
                transform hover:scale-105 transition-all duration-500 ease-out
                glass backdrop-blur-sm
                before:absolute before:inset-0 
                before:bg-white/10 dark:before:bg-black/10 
                before:rounded-lg
                hover:before:bg-white/5 dark:hover:before:bg-black/5
              `}
              style={{
                animationDelay: `${categoryIndex * 0.1}s`
              }}
            >
              <CardHeader className="text-center pb-4 relative z-10">
                {/* Floating Icon with Animation */}
                <div className="relative mx-auto mb-4">
                  <div className="absolute inset-0 bg-white/20 dark:bg-white/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative w-16 h-16 mx-auto bg-white/10 dark:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 dark:border-white/30">
                    <span className="text-3xl filter drop-shadow-lg">
                      {category.icon}
                    </span>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-white dark:text-white drop-shadow-lg">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`
                        px-3 py-1.5 text-xs font-medium
                        bg-white/20 hover:bg-white/30 
                        dark:bg-white/25 dark:hover:bg-white/35 
                        backdrop-blur-sm
                        border border-white/30 hover:border-white/50
                        dark:border-white/40 dark:hover:border-white/60
                        text-white dark:text-white
                        transform hover:scale-110 transition-all duration-300
                        shadow-sm hover:shadow-md
                        animate-fade-in
                      `}
                      style={{
                        animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 dark:bg-white/40 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 dark:bg-white/50 rounded-full animate-pulse"></div>
              </CardContent>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent dark:from-black/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '7+', label: t('skills.stats.frontend') },
            { number: '6+', label: t('skills.stats.backend') },
            { number: '6+', label: t('skills.stats.databases') },
            { number: '6+', label: t('skills.stats.devops') }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-24 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-bounce"
            style={{
              top: `${20 + (i * 15)}%`,
              left: `${10 + (i * 15)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + (i * 0.5)}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
