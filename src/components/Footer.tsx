import { Heart, Code } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-gradient mb-2">Antares Mugisho</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Developer & Cybersecurity Enthusiast
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/10 text-center text-4xl" style={{fontFamily: 'Stay Classy'}}>•CreativeMind</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
          © 2020 - {currentYear} <span>• All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}