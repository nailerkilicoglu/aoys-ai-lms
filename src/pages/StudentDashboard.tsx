import { Trophy, Target, Flame, Award, TrendingUp, BookOpen, Code, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useUserStore } from '@/store/userStore';
import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  const { user } = useUserStore();

  if (!user) return null;

  const dailyQuests = [
    { id: 1, title: '1 ders tamamla', xp: 50, completed: true },
    { id: 2, title: '5 quiz sorusu çöz', xp: 30, completed: false, progress: { current: 3, target: 5 } },
    { id: 3, title: 'Code playground kullan', xp: 25, completed: false },
  ];

  const recentCourses = [
    {
      id: 1,
      title: 'ChatGPT ile Prompt Engineering',
      progress: 65,
      nextLesson: 'Gelişmiş Prompt Teknikleri',
    },
    {
      id: 2,
      title: 'Python ile Makine Öğrenmesi',
      progress: 30,
      nextLesson: 'Lineer Regresyon',
    },
  ];

  const achievements = [
    { icon: '🎯', name: 'İlk Adım', rarity: 'common', unlocked: true },
    { icon: '🔥', name: '7 Gün Streak', rarity: 'rare', unlocked: true },
    { icon: '💎', name: 'Kod Ustası', rarity: 'epic', unlocked: true },
    { icon: '🏆', name: 'AI Dehası', rarity: 'legendary', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      <div className="container mx-auto px-4 py-6">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Merhaba, <span className="text-gradient">{user.name}! 👋</span>
          </h1>
          <p className="text-muted-foreground">
            Bugün harika görünüyorsun! Öğrenmeye devam et ve rozetlerini topla.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Stats & Quests */}
          <div className="lg:col-span-2 space-y-6">
            {/* XP & Level Stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Level {user.level}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">{user.xp} XP</div>
                  <div className="text-sm text-muted-foreground">
                    {user.maxXp - user.xp} XP kaldı
                  </div>
                  <Progress 
                    value={(user.xp / user.maxXp) * 100} 
                    className="mt-3 h-2"
                  />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="h-8 w-8 text-gold" />
                  </div>
                  <div className="text-2xl font-bold">{user.badges}</div>
                  <div className="text-sm text-muted-foreground">Rozet Toplandı</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-streak/20 to-streak/5 border-streak/30">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Flame className="h-8 w-8 text-streak" />
                  </div>
                  <div className="text-2xl font-bold">{user.streak}</div>
                  <div className="text-sm text-muted-foreground">Günlük Seri 🔥</div>
                </CardContent>
              </Card>
            </div>

            {/* Daily Quests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Günlük Görevler
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {dailyQuests.map((quest) => (
                  <div 
                    key={quest.id}
                    className={`flex items-center justify-between p-4 rounded-lg border ${
                      quest.completed 
                        ? 'bg-xp/10 border-xp/30' 
                        : 'bg-muted/50 border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        quest.completed 
                          ? 'bg-xp border-xp' 
                          : 'border-muted-foreground'
                      }`}>
                        {quest.completed && <span className="text-white text-xs">✓</span>}
                      </div>
                      <div className="flex-1">
                        <div className={quest.completed ? 'line-through text-muted-foreground' : ''}>
                          {quest.title}
                        </div>
                        {quest.progress && (
                          <div className="mt-1">
                            <Progress 
                              value={(quest.progress.current / quest.progress.target) * 100} 
                              className="h-1"
                            />
                            <span className="text-xs text-muted-foreground">
                              {quest.progress.current}/{quest.progress.target}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-xp/20 text-xp">
                      +{quest.xp} XP
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Öğrenmeye Devam Et
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Sonraki: {course.nextLesson}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {course.progress}%
                      </Badge>
                    </div>
                    <Progress value={course.progress} className="mb-3" />
                    <Button size="sm" className="w-full">
                      Derse Devam Et
                    </Button>
                  </div>
                ))}
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/courses">Tüm Kursları Gör</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements & Quick Actions */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-gold" />
                  Son Rozetler
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-3">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index}
                      className={`aspect-square rounded-lg border flex items-center justify-center text-3xl relative group cursor-pointer transition-all ${
                        achievement.unlocked
                          ? 'bg-card border-primary/30 hover:scale-110 hover:glow-effect'
                          : 'bg-muted/30 border-border grayscale opacity-40'
                      }`}
                    >
                      {achievement.icon}
                      {!achievement.unlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
                          <span className="text-2xl">🔒</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link to="/badges">Tüm Rozetleri Gör</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Hızlı Erişim</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild className="w-full justify-start bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Link to="/playground">
                    <Code className="mr-2 h-4 w-4" />
                    Code Playground
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start border-primary/50 hover:border-primary">
                  <Link to="/challenges">
                    <Trophy className="mr-2 h-4 w-4" />
                    Yarışmalar
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/leaderboard">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Liderlik Tablosu
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/courses">
                    <Brain className="mr-2 h-4 w-4" />
                    AI Kursları
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Liderlik
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Senin Sıran:</span>
                    <span className="font-bold text-primary">#42</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/leaderboard">Tam Listeyi Gör</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
