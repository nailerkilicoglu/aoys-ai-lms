import { Award, Lock, Star, Trophy, Zap, Target, Brain, Code, Users, Flame, Crown, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserStore } from '@/store/userStore';

export default function Badges() {
    const { user } = useUserStore();

    const badges = [
        {
            id: 1,
            icon: '🎯',
            name: 'İlk Adım',
            description: 'İlk kursu tamamladın!',
            rarity: 'common',
            unlocked: true,
            unlockedDate: '2025-10-15',
            progress: 100,
        },
        {
            id: 2,
            icon: '🔥',
            name: '7 Gün Streak',
            description: '7 gün üst üste giriş yaptın',
            rarity: 'rare',
            unlocked: true,
            unlockedDate: '2025-10-22',
            progress: 100,
        },
        {
            id: 3,
            icon: '💎',
            name: 'Kod Ustası',
            description: '100 kod challenge tamamladın',
            rarity: 'epic',
            unlocked: true,
            unlockedDate: '2025-11-01',
            progress: 100,
        },
        {
            id: 4,
            icon: '⚡',
            name: 'Hızlı Öğrenci',
            description: '24 saat içinde 5 ders tamamla',
            rarity: 'rare',
            unlocked: true,
            unlockedDate: '2025-11-05',
            progress: 100,
        },
        {
            id: 5,
            icon: '🧠',
            name: 'AI Dehası',
            description: 'Tüm AI kurslarını tamamla',
            rarity: 'legendary',
            unlocked: false,
            progress: 45,
            requirement: '6/15 kurs tamamlandı',
        },
        {
            id: 6,
            icon: '🏆',
            name: 'Şampiyon',
            description: 'Bir yarışmada ilk 3\'e gir',
            rarity: 'legendary',
            unlocked: false,
            progress: 0,
            requirement: 'Henüz yarışmaya katılmadın',
        },
        {
            id: 7,
            icon: '👑',
            name: 'Kral',
            description: 'Liderlik tablosunda 1. ol',
            rarity: 'mythic',
            unlocked: false,
            progress: 0,
            requirement: 'Mevcut sıra: #42',
        },
        {
            id: 8,
            icon: '📚',
            name: 'Kitap Kurdu',
            description: '50 ders tamamla',
            rarity: 'epic',
            unlocked: false,
            progress: 68,
            requirement: '34/50 ders',
        },
        {
            id: 9,
            icon: '🎓',
            name: 'Mezun',
            description: 'Level 50\'ye ulaş',
            rarity: 'legendary',
            unlocked: false,
            progress: 30,
            requirement: 'Level 15/50',
        },
        {
            id: 10,
            icon: '🌟',
            name: 'Yıldız Öğrenci',
            description: 'Tüm kurslardan 5 yıldız al',
            rarity: 'mythic',
            unlocked: false,
            progress: 20,
            requirement: '3/15 kurs',
        },
        {
            id: 11,
            icon: '💪',
            name: '30 Gün Streak',
            description: '30 gün üst üste giriş yap',
            rarity: 'epic',
            unlocked: false,
            progress: 23,
            requirement: '7/30 gün',
        },
        {
            id: 12,
            icon: '🤝',
            name: 'Sosyal',
            description: '10 arkadaşına platform öner',
            rarity: 'rare',
            unlocked: false,
            progress: 10,
            requirement: '1/10 referans',
        },
    ];

    const getRarityColor = (rarity: string) => {
        const colors = {
            common: 'from-gray-400 to-gray-600',
            rare: 'from-blue-400 to-blue-600',
            epic: 'from-purple-400 to-purple-600',
            legendary: 'from-gold to-amber-600',
            mythic: 'from-pink-400 to-red-600',
        };
        return colors[rarity as keyof typeof colors];
    };

    const getRarityLabel = (rarity: string) => {
        const labels = {
            common: 'Yaygın',
            rare: 'Nadir',
            epic: 'Epik',
            legendary: 'Efsanevi',
            mythic: 'Mitik',
        };
        return labels[rarity as keyof typeof labels];
    };

    const unlockedBadges = badges.filter(b => b.unlocked);
    const lockedBadges = badges.filter(b => !b.unlocked);

    const totalBadges = badges.length;
    const earnedBadges = unlockedBadges.length;
    const completionPercentage = (earnedBadges / totalBadges) * 100;

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Hero */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-purple-500/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Award className="h-12 w-12 text-gold" />
                            <h1 className="text-4xl md:text-5xl font-bold">
                                <span className="text-gradient">Rozet Galerim</span>
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground mb-6">
                            Başarılarını topla ve koleksiyonunu tamamla! 🏆
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30">
                        <CardContent className="p-6 text-center">
                            <Trophy className="h-8 w-8 text-gold mx-auto mb-2" />
                            <div className="text-3xl font-bold">{earnedBadges}/{totalBadges}</div>
                            <div className="text-sm text-muted-foreground">Rozet Toplandı</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                        <CardContent className="p-6 text-center">
                            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                            <div className="text-3xl font-bold">{completionPercentage.toFixed(0)}%</div>
                            <div className="text-sm text-muted-foreground">Tamamlanma</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border-purple-500/30">
                        <CardContent className="p-6 text-center">
                            <Medal className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                            <div className="text-3xl font-bold">
                                {badges.filter(b => b.rarity === 'legendary' && b.unlocked).length}
                            </div>
                            <div className="text-sm text-muted-foreground">Efsanevi Rozet</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-pink-500/20 to-pink-500/5 border-pink-500/30">
                        <CardContent className="p-6 text-center">
                            <Crown className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                            <div className="text-3xl font-bold">
                                {badges.filter(b => b.rarity === 'mythic' && b.unlocked).length}
                            </div>
                            <div className="text-sm text-muted-foreground">Mitik Rozet</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Overall Progress */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5 text-primary" />
                            Genel İlerleme
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-muted-foreground">
                                    {earnedBadges} / {totalBadges} rozet kazanıldı
                                </span>
                                <span className="font-semibold">{completionPercentage.toFixed(1)}%</span>
                            </div>
                            <Progress value={completionPercentage} className="h-3" />
                        </div>
                    </CardContent>
                </Card>

                {/* Badges Grid */}
                <Tabs defaultValue="all" className="space-y-6">
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger value="all">
                            Tümü ({totalBadges})
                        </TabsTrigger>
                        <TabsTrigger value="unlocked">
                            Açılan ({earnedBadges})
                        </TabsTrigger>
                        <TabsTrigger value="locked">
                            Kilitli ({lockedBadges.length})
                        </TabsTrigger>
                    </TabsList>

                    {/* All Badges */}
                    <TabsContent value="all">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {badges.map((badge) => (
                                <Card
                                    key={badge.id}
                                    className={`group relative overflow-hidden ${badge.unlocked
                                            ? 'hover:border-gold/50 hover:-translate-y-1 transition-all'
                                            : 'opacity-60 grayscale hover:grayscale-0 transition-all'
                                        }`}
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(badge.rarity)} opacity-10`} />

                                    <CardContent className="p-6 text-center relative">
                                        <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                                            {badge.unlocked ? badge.icon : '🔒'}
                                        </div>

                                        <Badge className={`mb-2 bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white`}>
                                            {getRarityLabel(badge.rarity)}
                                        </Badge>

                                        <h3 className="font-bold text-lg mb-2">{badge.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {badge.description}
                                        </p>

                                        {badge.unlocked ? (
                                            <div className="text-xs text-xp font-semibold">
                                                ✓ {badge.unlockedDate} tarihinde kazanıldı
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                {badge.progress !== undefined && badge.progress > 0 && (
                                                    <>
                                                        <Progress value={badge.progress} className="h-2" />
                                                        <div className="text-xs text-muted-foreground">
                                                            {badge.progress}% tamamlandı
                                                        </div>
                                                    </>
                                                )}
                                                <div className="text-xs text-muted-foreground">
                                                    {badge.requirement}
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Unlocked Badges */}
                    <TabsContent value="unlocked">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {unlockedBadges.map((badge) => (
                                <Card
                                    key={badge.id}
                                    className="group relative overflow-hidden hover:border-gold/50 hover:-translate-y-1 transition-all"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(badge.rarity)} opacity-10`} />

                                    <CardContent className="p-6 text-center relative">
                                        <div className="text-6xl mb-3 group-hover:scale-110 transition-transform animate-pulse">
                                            {badge.icon}
                                        </div>

                                        <Badge className={`mb-2 bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white`}>
                                            {getRarityLabel(badge.rarity)}
                                        </Badge>

                                        <h3 className="font-bold text-lg mb-2">{badge.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {badge.description}
                                        </p>

                                        <div className="text-xs text-xp font-semibold">
                                            ✓ {badge.unlockedDate} tarihinde kazanıldı
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Locked Badges */}
                    <TabsContent value="locked">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {lockedBadges.map((badge) => (
                                <Card
                                    key={badge.id}
                                    className="group relative overflow-hidden opacity-60 grayscale hover:grayscale-0 transition-all"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${getRarityColor(badge.rarity)} opacity-10`} />

                                    <CardContent className="p-6 text-center relative">
                                        <div className="text-6xl mb-3">🔒</div>

                                        <Badge className={`mb-2 bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white`}>
                                            {getRarityLabel(badge.rarity)}
                                        </Badge>

                                        <h3 className="font-bold text-lg mb-2">{badge.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {badge.description}
                                        </p>

                                        <div className="space-y-2">
                                            {badge.progress !== undefined && badge.progress > 0 && (
                                                <>
                                                    <Progress value={badge.progress} className="h-2" />
                                                    <div className="text-xs text-muted-foreground">
                                                        {badge.progress}% tamamlandı
                                                    </div>
                                                </>
                                            )}
                                            <div className="text-xs text-muted-foreground">
                                                {badge.requirement}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
