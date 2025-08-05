import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Twitter, Globe, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export function Contact() {
  const { t } = useLanguage()

  const contactMethods = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'antaresmugisho@gmail.com',
      href: 'mailto:antaresmugisho@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: Github,
      label: t('contact.github'),
      value: 'AntaresMugisho',
      href: 'https://github.com/AntaresMugisho',
      color: 'text-gray-500'
    },
    {
      icon: Linkedin,
      label: t('contact.linkedin'),
      value: 'Antares Mugisho',
      href: 'https://www.linkedin.com/in/antares-mugisho-5803b6233',
      color: 'text-blue-500'
    },
    {
      icon: Twitter,
      label: t('contact.twitter'),
      value: '@AntaresMugisho',
      href: 'https://twitter.com/AntaresMugisho',
      color: 'text-sky-500'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'antaresmugisho.vercel.app',
      href: 'https://antaresmugisho.vercel.app',
      color: 'text-green-500'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {t('contact.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="glass border-primary/20 hover:glow transition-all duration-300"
            >
              <CardContent className="p-6">
                <Button
                  variant="ghost"
                  className="w-full h-auto p-0 flex flex-col items-center space-y-4 text-left"
                  asChild
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    <div className={`p-4 rounded-full bg-background/50 ${method.color}`}>
                      <method.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground">{method.label}</h3>
                      <p className="text-sm text-muted-foreground break-all">{method.value}</p>
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location */}
        <Card className="glass border-primary/20 max-w-md mx-auto mb-12">
          <CardContent className="p-6 text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-muted-foreground">Bujumbura, Burundi</p>
            <p className="text-sm text-muted-foreground mt-2">Art Revolution Label</p>
          </CardContent>
        </Card>

        {/* Quick Email CTA */}
        <Card className="glass border-primary/20">
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, need cybersecurity consultation, or just want to chat about technology, 
              I'd love to hear from you.
            </p>
            <Button
              size="lg"
              className="hero-gradient text-white glow"
              asChild
            >
              <a href="mailto:antaresmugisho@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}