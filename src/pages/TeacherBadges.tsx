import { Award, Users, TrendingUp, Gift, Target, Star, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function TeacherBadges() {
    // Öğretmen Başarım Rozetleri
    const teacherAchievements = [
        {
            id: 1,
            name: 'İlk Eğitmen',
            icon: '🌟',
            description: 'İlk kursunuzu oluşturun',
            progress: 5,
            target: 1,
            earned: true,
            rarity: 'common',
            earnedDate: '1 Ocak 2024',
        },
        {
            id: 2,
            name: 'Kurs Koleksiyoneri',
            icon: '📚',
            description: '5 farklı kurs yayınlayın',
            progress: 5,
            target: 5,
            earned: true,
            rarity: 'rare',
            earnedDate: '8 Şubat 2024',
        },
        {
            id: 3,
            name: 'Mega Eğitmen',
            icon: '🎓',
            description: '1000 öğrenciye ulaşın',
            progress: 1240,
            target: 1000,
            earned: true,
            rarity: 'epic',
            earnedDate: '15 Mart 2024',
        },
        {
            id: 4,
            name: 'Yıldız Öğretmen',
            icon: '⭐',
            description: '4.8+ ortalama değerlendirme alın',
            progress: 4.8,
            target: 4.8,
            earned: true,
            rarity: 'legendary',
            earnedDate: '22 Mart 2024',
        },
        {
            id: 5,
            name: 'Soru Uzmanı',
            icon: '💬',
            description: '1000 öğrenci sorusunu yanıtlayın',
            progress: 387,
            target: 1000,
            earned: false,
            rarity: 'epic',
        },
        {
            id: 6,
            name: 'Hızlı Yanıt',
            icon: '⚡',
            description: 'Ortalama yanıt süresini 2 saat altına indirin',
            progress: 2.5,
            target: 2,
            earned: false,
            rarity: 'rare',
        },
        {
            id: 7,
            name: 'Tamamlama Şampiyonu',
            icon: '🏆',
            description: 'Kurslarınızda %80+ tamamlanma oranı',
            progress: 78,
            target: 80,
            earned: false,
            rarity: 'epic',
        },
        {
            id: 8,
            name: 'Video Prodüktörü',
            icon: '🎬',
            description: '100+ saat video içerik üretin',
            progress: 45,
            target: 100,
            earned: false,
            rarity: 'rare',
        },
        {
            id: 9,
            name: 'Gelir Kralı',
            icon: '💰',
            description: 'Toplam 100.000₺ gelir elde edin',
            progress: 45600,
            target: 100000,
            earned: false,
            rarity: 'legendary',
        },
        {
            id: 10,
            name: 'Eğitim Efsanesi',
            icon: '👑',
            description: '5000 öğrenciye ulaşın',
            progress: 1240,
            target: 5000,
            earned: false,
            rarity: 'mythic',
        },
    ];

    // Öğrencilere Verilebilecek Rozetler
    const studentBadgesCatalog = [
        {
            id: 1,
            name: 'Hızlı Öğrenen',
            icon: '🚀',
            assignedCount: 45,
            description: 'Kursu 1 hafta içinde tamamlayanlara',
            category: 'Tamamlanma',
            autoAssign: true,
        },
        {
            id: 2,
            name: 'Mükemmeliyetçi',
            icon: '💯',
            assignedCount: 23,
            description: 'Tüm quizlerden %95+ alanlara',
            category: 'Performans',
            autoAssign: true,
        },
        {
            id: 3,
            name: 'Aktif Öğrenci',
            icon: '🎯',
            assignedCount: 67,
            description: 'Her gün düzenli ders işleyenlere',
            category: 'Etkileşim',
            autoAssign: true,
        },
        {
            id: 4,
            name: 'Soru Soran',
            icon: '❓',
            assignedCount: 34,
            description: '5+ kaliteli soru soranlara',
            category: 'Etkileşim',
            autoAssign: false,
        },
        {
            id: 5,
            name: 'Kod Ustası',
            icon: '💻',
            assignedCount: 28,
            description: 'Tüm kod challengeları tamamlayanlara',
            category: 'Performans',
            autoAssign: true,
        },
        {
            id: 6,
            name: 'Yardımsever',
            icon: '🤝',
            assignedCount: 12,
            description: 'Diğer öğrencilere yardım edenlere',
            category: 'Topluluk',
            autoAssign: false,
        },
        {
            id: 7,
            name: 'Erken Kuş',
            icon: '🌅',
            assignedCount: 19,
            description: 'İlk 100 kayıt olan öğrencilere',
            category: 'Özel',
            autoAssign: true,
        },
        {
            id: 8,
            name: 'Gece Baykuşu',
            icon: '🦉',
            assignedCount: 31,
            description: 'Gece saatlerinde aktif olanlara',
            category: 'Etkileşim',
            autoAssign: true,
        },
    ];

    const recentBadgeActivities = [
        {
            id: 1,
            student: 'Ayşe Yılmaz',
            badge: 'Mükemmeliyetçi',
            icon: '💯',
            course: 'ChatGPT ile Prompt Engineering',
            date: '2 saat önce',
        },
        {
            id: 2,
            student: 'Mehmet Demir',
            badge: 'Hızlı Öğrenen',
            icon: '🚀',
            course: 'Python ile Makine Öğrenmesi',
            date: '5 saat önce',
        },
        {
            id: 3,
            student: 'Zeynep Kaya',
            badge: 'Aktif Öğrenci',
            icon: '🎯',
            course: 'TensorFlow ile Derin Öğrenme',
            date: '1 gün önce',
        },
    ];

    const rarityColors = {
        common: 'text-gray-500',
        rare: 'text-blue-500',
        epic: 'text-purple-500',
        legendary: 'text-gold',
        mythic: 'text-pink-500',
    };

    const rarityBg = {
        common: 'from-gray-400 to-gray-600',
        rare: 'from-blue-400 to-blue-600',
        epic: 'from-purple-400 to-purple-600',
        legendary: 'from-gold to-amber-600',
        mythic: 'from-pink-400 to-red-600',
    };

    const earnedAchievements = teacherAchievements.filter(b => b.earned);
    const lockedAchievements = teacherAchievements.filter(b => !b.earned);
    const totalAssignedBadges = studentBadgesCatalog.reduce((sum, b) => sum + b.assignedCount, 0);

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-3 mb-4">
                        <Award className="h-10 w-10 text-gold" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">Eğitmen Rozetleri</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Başarılarınızı takip edin ve öğrencilerinize rozet atayın
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30">
                        <CardContent className="p-6 text-center">
                            <Award className="h-10 w-10 text-gold mx-auto mb-2" />
                            <div className="text-3xl font-bold">{earnedAchievements.length}</div>
                            <div className="text-sm text-muted-foreground">Kazanılan Başarım</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                        <CardContent className="p-6 text-center">
                            <Target className="h-10 w-10 text-primary mx-auto mb-2" />
                            <div className="text-3xl font-bold">{lockedAchievements.length}</div>
                            <div className="text-sm text-muted-foreground">Kilitli Başarım</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
                        <CardContent className="p-6 text-center">
                            <Users className="h-10 w-10 text-secondary mx-auto mb-2" />
                            <div className="text-3xl font-bold">{totalAssignedBadges}</div>
                            <div className="text-sm text-muted-foreground">Dağıtılan Rozet</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30">
                        <CardContent className="p-6 text-center">
                            <Gift className="h-10 w-10 text-purple-500 mx-auto mb-2" />
                            <div className="text-3xl font-bold">{studentBadgesCatalog.length}</div>
                            <div className="text-sm text-muted-foreground">Rozet Çeşidi</div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="achievements" className="space-y-6">
                    <TabsList className="grid w-full max-w-2xl grid-cols-3">
                        <TabsTrigger value="achievements">
                            Başarımlarım ({earnedAchievements.length}/{teacherAchievements.length})
                        </TabsTrigger>
                        <TabsTrigger value="manage">
                            Rozet Yönetimi
                        </TabsTrigger>
                        <TabsTrigger value="activity">
                            Son Aktiviteler
                        </TabsTrigger>
                    </TabsList>

                    {/* Teacher Achievements */}
                    <TabsContent value="achievements" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-gold" />
                                    Kazanılan Başarımlar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {earnedAchievements.map((achievement) => (
                                        <Card key={achievement.id} className="border-gold/30 bg-gold/5 relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${rarityBg[achievement.rarity]} opacity-5`} />
                                            <CardContent className="p-6 relative">
                                                <div className="text-center mb-3">
                                                    <div className="text-5xl mb-2">{achievement.icon}</div>
                                                    <h3 className="text-lg font-bold mb-1">{achievement.name}</h3>
                                                    <Badge className={`bg-gradient-to-r ${rarityBg[achievement.rarity]} text-white text-xs`}>
                                                        {achievement.rarity === 'mythic' && '👑 Mitik'}
                                                        {achievement.rarity === 'legendary' && '⭐ Efsanevi'}
                                                        {achievement.rarity === 'epic' && '🔥 Epik'}
                                                        {achievement.rarity === 'rare' && '💎 Nadir'}
                                                        {achievement.rarity === 'common' && '✨ Yaygın'}
                                                    </Badge>
                                                </div>
                                                <p className="text-sm text-muted-foreground text-center mb-3">
                                                    {achievement.description}
                                                </p>
                                                <div className="text-center">
                                                    <div className="text-xs text-gold font-semibold">
                                                        ✓ {achievement.earnedDate}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    Devam Eden Başarımlar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {lockedAchievements.map((achievement) => {
                                        const percentage = Math.min((achievement.progress / achievement.target) * 100, 100);
                                        return (
                                            <Card key={achievement.id} className="relative overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${rarityBg[achievement.rarity]} opacity-5`} />
                                                <CardContent className="p-4 relative">
                                                    <div className="flex items-start gap-3">
                                                        <div className="text-4xl opacity-50 grayscale">{achievement.icon}</div>
                                                        <div className="flex-1">
                                                            <div className="flex items-start justify-between mb-2">
                                                                <div>
                                                                    <h4 className="font-semibold">{achievement.name}</h4>
                                                                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                                                                </div>
                                                                <Badge variant="outline" className="text-xs">
                                                                    {achievement.rarity === 'mythic' && '👑'}
                                                                    {achievement.rarity === 'legendary' && '⭐'}
                                                                    {achievement.rarity === 'epic' && '🔥'}
                                                                    {achievement.rarity === 'rare' && '💎'}
                                                                </Badge>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <div className="flex items-center justify-between text-xs">
                                                                    <span className="text-muted-foreground">İlerleme</span>
                                                                    <span className="font-semibold">
                                                                        {achievement.progress} / {achievement.target}
                                                                    </span>
                                                                </div>
                                                                <Progress value={percentage} className="h-2" />
                                                                <div className="text-xs text-right text-muted-foreground">
                                                                    {percentage.toFixed(0)}%
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Badge Management */}
                    <TabsContent value="manage" className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Gift className="h-5 w-5 text-gold" />
                                    Öğrencilere Verilebilecek Rozetler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-3">
                                    {studentBadgesCatalog.map((badge) => (
                                        <div
                                            key={badge.id}
                                            className="flex items-center justify-between p-4 border rounded-lg hover:border-gold/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="text-4xl">{badge.icon}</div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold">{badge.name}</span>
                                                        <Badge variant="outline" className="text-xs">
                                                            {badge.category}
                                                        </Badge>
                                                    </div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {badge.description}
                                                    </div>
                                                    <div className="text-xs text-muted-foreground mt-1">
                                                        <Users className="inline h-3 w-3 mr-1" />
                                                        {badge.assignedCount} öğrenciye verildi
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                {badge.autoAssign ? (
                                                    <Badge className="bg-xp/20 text-xp">
                                                        Otomatik
                                                    </Badge>
                                                ) : (
                                                    <Badge variant="outline">
                                                        Manuel
                                                    </Badge>
                                                )}
                                                <Button size="sm" variant="outline">
                                                    Düzenle
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Yeni Rozet Oluştur</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-center py-8 text-muted-foreground">
                                    <Star className="h-16 w-16 mx-auto mb-4 opacity-50" />
                                    <p className="mb-4">
                                        Kurslarınız için özel rozetler oluşturun ve öğrencilerinizi motive edin
                                    </p>
                                    <Button className="bg-gradient-to-r from-primary to-secondary">
                                        <Gift className="mr-2 h-4 w-4" />
                                        Yeni Rozet Oluştur
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Recent Activities */}
                    <TabsContent value="activity" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    Son Rozet Aktiviteleri
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {recentBadgeActivities.map((activity) => (
                                        <div
                                            key={activity.id}
                                            className="flex items-center gap-4 p-4 border rounded-lg"
                                        >
                                            <div className="text-3xl">{activity.icon}</div>
                                            <div className="flex-1">
                                                <div className="font-semibold">{activity.student}</div>
                                                <div className="text-sm text-muted-foreground">
                                                    <span className="text-gold">{activity.badge}</span> rozetini kazandı
                                                </div>
                                                <div className="text-xs text-muted-foreground">
                                                    {activity.course}
                                                </div>
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                {activity.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">En Popüler Rozetler</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {studentBadgesCatalog.sort((a, b) => b.assignedCount - a.assignedCount).slice(0, 5).map((badge, idx) => (
                                            <div key={badge.id} className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-2xl">{badge.icon}</span>
                                                    <span className="text-sm">{badge.name}</span>
                                                </div>
                                                <span className="text-sm font-bold text-gold">
                                                    {badge.assignedCount}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Bu Hafta</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Verilen Rozet</span>
                                        <span className="font-bold text-xp">+24</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Yeni Başarım</span>
                                        <span className="font-bold text-primary">+2</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-muted-foreground">Aktif Rozet</span>
                                        <span className="font-bold text-secondary">{studentBadgesCatalog.length}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
