import * as React from "react"
import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { useLanguage, Language } from "@/hooks/useLanguage"

const Index = () => {
  const { language, changeLanguage } = useLanguage()

  React.useEffect(() => {
    // Set default dark mode on first load
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation 
        currentLanguage={language} 
        onLanguageChange={changeLanguage} 
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default Index
