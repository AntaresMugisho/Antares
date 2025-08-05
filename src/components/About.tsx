import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/useLanguage"
import { Code, Smartphone, Shield, Award } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  const achievements = [
    { icon: Award, label: "Pull Shark", count: "x2" },
    { icon: Award, label: "YOLO", count: "" },
  ]

  const experiences = [
    {
      icon: Code,
      title: t('about.experiences.0.title'),
      description: t('about.experiences.0.description')
    },
    {
      icon: Smartphone,
      title: t('about.experiences.1.title'),
      description: t('about.experiences.1.description')
    },
    {
      icon: Shield,
      title: t('about.experiences.2.title'),
      description: t('about.experiences.2.description')
    }
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.bio')}
            </p>

            {/* GitHub Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">GitHub Achievements</h3>
              <div className="flex flex-wrap gap-3">
                {achievements.map((achievement, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                    <achievement.icon className="w-4 h-4 mr-2" />
                    {achievement.label} {achievement.count}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">1,036+</div>
                  <div className="text-sm text-muted-foreground">Contributions</div>
                </CardContent>
              </Card>
              <Card className="glass border-primary/20">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">{t('about.experience')}</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="glass border-primary/20 hover:glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <exp.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{exp.title}</h4>
                        <p className="text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}