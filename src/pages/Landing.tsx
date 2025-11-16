import { Link } from 'react-router-dom';
import { Brain, Zap, Code, TrendingUp, Award, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Landing() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-gold" />,
      title: 'Oyunlaştırma',
      description: 'XP kazan, seviye atla, liderlikte yüksel',
    },
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: 'AI Odaklı',
      description: 'Makine Öğrenmesi\'nden ChatGPT\'ye kadar',
    },
    {
      icon: <Code className="h-10 w-10 text-secondary" />,
      title: 'Pratik Kod',
      description: 'Tarayıcıda AI modelleri kodla ve test et',
    },
  ];

  const courses = [
    {
      title: 'ChatGPT ile Prompt Engineering',
      level: 'Başlangıç',
      students: 1240,
      xp: 250,
    },
    {
      title: 'Python ile Makine Öğrenmesi',
      level: 'Orta',
      students: 856,
      xp: 500,
    },
    {
      title: 'TensorFlow ile Derin Öğrenme',
      level: 'İleri',
      students: 432,
      xp: 1000,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 bg-primary rounded-full animate-glow-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
                <Sparkles className="inline h-4 w-4 mr-2" />
                Türkiye'nin İlk AI Öğrenme Platformu
              </div>
            </div>
            
            <h1 className="mb-6 text-5xl md:text-7xl font-bold tracking-tight">
              Yapay Zeka Öğrenimini
              <br />
              <span className="text-gradient">Oyunlaştır 🚀</span>
            </h1>
            
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Seviyeni yükselt, rozetleri topla, AI uzmanı ol!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg glow-effect">
                <Link to="/register">
                  Hemen Başla
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-primary/50 hover:border-primary">
                <Link to="/login">Demo İzle</Link>
              </Button>
            </div>
          </div>

          {/* Live Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Öğrenci', value: '1.2K', icon: <Users className="h-5 w-5" /> },
              { label: 'AI Projesi Tamamlandı', value: '450', icon: <Code className="h-5 w-5" /> },
              { label: 'Rozet Kazanıldı', value: '8.5K', icon: <Award className="h-5 w-5" /> },
            ].map((stat, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-2 text-primary">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Neden <span className="text-gradient">AÖYS</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:glow-effect group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Popüler <span className="text-gradient">AI Kursları</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all hover:-translate-y-1 group cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-primary/10 rounded text-primary">{course.level}</span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </span>
                    <span className="flex items-center gap-1 text-xp font-semibold">
                      +{course.xp} XP
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:border-primary">
              <Link to="/register">Tüm Kursları Gör</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AÖYS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Yapay zeka öğrenimini oyunlaştıran yeni nesil platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-foreground">AI Kursları</Link></li>
                <li><Link to="/playground" className="hover:text-foreground">Code Playground</Link></li>
                <li><Link to="/leaderboard" className="hover:text-foreground">Liderlik Tablosu</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">Hakkımızda</Link></li>
                <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-foreground">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Yasal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground">Gizlilik</Link></li>
                <li><Link to="/terms" className="hover:text-foreground">Kullanım Koşulları</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2025 AÖYS. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}
