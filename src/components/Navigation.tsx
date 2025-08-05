import * as React from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { LanguageToggle, Language } from "@/components/ui/language-toggle"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

interface NavigationProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function Navigation({ currentLanguage, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gradient">Antares</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')}
                className="hover:text-primary transition-colors"
              >
                {t('navigation.about')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('skills')}
                className="hover:text-primary transition-colors"
              >
                {t('navigation.skills')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('projects')}
                className="hover:text-primary transition-colors"
              >
                {t('navigation.projects')}
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('contact')}
                className="hover:text-primary transition-colors"
              >
                {t('navigation.contact')}
              </Button>
            </div>
          </div>

          {/* Theme and Language toggles */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle 
              currentLanguage={currentLanguage} 
              onLanguageChange={onLanguageChange} 
            />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-10 w-10"
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass border-t border-border/20">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="w-full text-left justify-start"
            >
              {t('navigation.about')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('skills')}
              className="w-full text-left justify-start"
            >
              {t('navigation.skills')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('projects')}
              className="w-full text-left justify-start"
            >
              {t('navigation.projects')}
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="w-full text-left justify-start"
            >
              {t('navigation.contact')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}