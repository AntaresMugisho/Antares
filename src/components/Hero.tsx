import { Button } from "@/components/ui/button"
import { ArrowDown, MapPin, Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export function Hero() {
  const { t } = useLanguage()

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src="https://gravatar.com/avatar/de62fbc9ff2e48aaf538d8e74c80b3c57965d7d7ae9c686e3280a5996cf680ab?s=256"
                alt="Antares Mugisho"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shadow-2xl glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground animate-slide-up" style={{animationDelay: '0.2s'}}>
              {t('hero.greeting')}
            </p>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gradient animate-slide-up" style={{animationDelay: '0.4s'}}>
              {t('hero.name')}
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/80 animate-slide-up" style={{animationDelay: '0.6s'}}>
              {t('hero.title')}
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.8s'}}>
              {t('hero.description')}
            </p>

            <div className="flex items-center justify-center space-x-2 text-muted-foreground animate-slide-up" style={{animationDelay: '1s'}}>
              <MapPin className="h-4 w-4" />
              <span>{t('hero.location')}</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 animate-slide-up" style={{animationDelay: '1.2s'}}>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full glass hover:glow transition-all duration-300"
              asChild
            >
              <a href="https://github.com/AntaresMugisho" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full glass hover:glow transition-all duration-300"
              asChild
            >
              <a href="https://twitter.com/AntaresMugisho" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full glass hover:glow transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/antares-mugisho-5803b6233" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full glass hover:glow transition-all duration-300"
              asChild
            >
              <a href="mailto:hi@antaresmugisho.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{animationDelay: '1.4s'}}>
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="hero-gradient text-white px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 glow"
            >
              {t('hero.cta')}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}