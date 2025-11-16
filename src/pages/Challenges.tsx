import { Trophy, Clock, Users, Award, Zap, Target, Code, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';

export default function Challenges() {
    const activeChallenges = [
        {
            id: 1,
            title: 'ChatGPT Prompt Yarışması',
            description: 'En yaratıcı prompt\'u yaz ve ödüller kazan!',
            difficulty: 'easy',
            participants: 342,
            timeLeft: '2 gün 5 saat',
            prize: '500 XP + Özel Rozet',
            category: 'Prompt Engineering',
            deadline: '2025-11-20',
            status: 'active',
        },
        {
            id: 2,
            title: 'Görüntü Sınıflandırma Challenge',
            description: 'En yüksek doğruluk oranına ulaş',
            difficulty: 'medium',
            participants: 156,
            timeLeft: '5 gün 12 saat',
            prize: '1000 XP + Premium Badge',
            category: 'Computer Vision',
            deadline: '2025-11-23',
            status: 'active',
        },
        {
            id: 3,
            title: 'NLP Sentiment Analysis',
            description: 'Türkçe tweet duygu analizi',
            difficulty: 'hard',
            participants: 89,
            timeLeft: '1 gün 8 saat',
            prize: '2000 XP + Sertifika',
            category: 'NLP',
            deadline: '2025-11-18',
            status: 'active',
        },
    ];

    const upcomingChallenges = [
        {
            id: 4,
            title: 'AI Code Generation Sprint',
            description: 'En iyi kod üretici AI modelini oluştur',
            difficulty: 'hard',
            startsIn: '3 gün',
            prize: '3000 XP + Trophy',
            category: 'Code Generation',
        },
        {
            id: 5,
            title: 'Chatbot Tasarım Yarışması',
            description: 'Kullanıcı dostu chatbot tasarla',
            difficulty: 'medium',
            startsIn: '1 hafta',
            prize: '1500 XP + Badge',
            category: 'Conversational AI',
        },
    ];

    const completedChallenges = [
        {
            id: 6,
            title: 'Makine Öğrenmesi Hackathon',
            yourRank: 12,
            totalParticipants: 450,
            xpEarned: 750,
            completedDate: '2025-11-10',
        },
        {
            id: 7,
            title: 'Deep Learning Sprint',
            yourRank: 5,
            totalParticipants: 230,
            xpEarned: 1500,
            completedDate: '2025-11-05',
        },
    ];

    const getDifficultyColor = (difficulty: string) => {
        const colors = {
            easy: 'bg-xp/20 text-xp',
            medium: 'bg-secondary/20 text-secondary',
            hard: 'bg-streak/20 text-streak',
        };
        return colors[difficulty as keyof typeof colors];
    };

    const getDifficultyLabel = (difficulty: string) => {
        const labels = {
            easy: 'Kolay',
            medium: 'Orta',
            hard: 'Zor',
        };
        return labels[difficulty as keyof typeof labels];
    };

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Hero */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-streak/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Trophy className="h-12 w-12 text-gold" />
                            <h1 className="text-4xl md:text-5xl font-bold">
                                <span className="text-gradient">AI Yarışmaları</span>
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground mb-6">
                            Yeteneklerini test et, rakiplerle yarış ve ödüller kazan! 🏆
                        </p>
                        <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Zap className="h-5 w-5 text-gold" />
                                <span><strong>15</strong> Aktif Yarışma</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span><strong>2,340</strong> Katılımcı</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-secondary" />
                                <span><strong>50K+</strong> XP Dağıtıldı</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <Tabs defaultValue="active" className="space-y-6">
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger value="active">
                            Aktif ({activeChallenges.length})
                        </TabsTrigger>
                        <TabsTrigger value="upcoming">
                            Yakında ({upcomingChallenges.length})
                        </TabsTrigger>
                        <TabsTrigger value="completed">
                            Tamamlanan ({completedChallenges.length})
                        </TabsTrigger>
                    </TabsList>

                    {/* Active Challenges */}
                    <TabsContent value="active" className="space-y-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activeChallenges.map((challenge) => (
                                <Card key={challenge.id} className="group hover:border-gold/50 transition-all hover:-translate-y-1">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge className={getDifficultyColor(challenge.difficulty)}>
                                                {getDifficultyLabel(challenge.difficulty)}
                                            </Badge>
                                            <Badge variant="outline" className="bg-gold/10 text-gold border-gold/30">
                                                <Trophy className="h-3 w-3 mr-1" />
                                                Aktif
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl group-hover:text-gold transition-colors">
                                            {challenge.title}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {challenge.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-1 text-muted-foreground">
                                                    <Clock className="h-4 w-4" />
                                                    Kalan Süre
                                                </span>
                                                <span className="font-semibold text-streak">{challenge.timeLeft}</span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-1 text-muted-foreground">
                                                    <Users className="h-4 w-4" />
                                                    Katılımcı
                                                </span>
                                                <span className="font-semibold">{challenge.participants}</span>
                                            </div>

                                            <div className="flex items-center justify-between text-sm">
                                                <span className="flex items-center gap-1 text-muted-foreground">
                                                    <Target className="h-4 w-4" />
                                                    Kategori
                                                </span>
                                                <span className="font-semibold">{challenge.category}</span>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-t border-border">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-5 w-5 text-gold" />
                                                <span className="font-semibold">Ödül</span>
                                            </div>
                                            <p className="text-sm text-gold font-medium">{challenge.prize}</p>
                                        </div>

                                        <Button className="w-full bg-gradient-to-r from-gold to-streak hover:opacity-90" asChild>
                                            <Link to={`/challenge/${challenge.id}`}>
                                                <Code className="mr-2 h-4 w-4" />
                                                Yarışmaya Katıl
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Upcoming Challenges */}
                    <TabsContent value="upcoming" className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {upcomingChallenges.map((challenge) => (
                                <Card key={challenge.id} className="hover:border-primary/50 transition-all">
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge className={getDifficultyColor(challenge.difficulty)}>
                                                {getDifficultyLabel(challenge.difficulty)}
                                            </Badge>
                                            <Badge variant="outline">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {challenge.startsIn}
                                            </Badge>
                                        </div>
                                        <CardTitle className="text-xl">{challenge.title}</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            {challenge.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Kategori</span>
                                            <span className="font-semibold">{challenge.category}</span>
                                        </div>
                                        <div className="pt-4 border-t border-border">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Award className="h-5 w-5 text-gold" />
                                                <span className="font-semibold">Ödül</span>
                                            </div>
                                            <p className="text-sm text-gold font-medium">{challenge.prize}</p>
                                        </div>
                                        <Button variant="outline" className="w-full border-primary/50">
                                            Hatırlat
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Completed Challenges */}
                    <TabsContent value="completed" className="space-y-4">
                        {completedChallenges.map((challenge) => (
                            <Card key={challenge.id} className="hover:border-xp/50 transition-all">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span>Tamamlanma: {challenge.completedDate}</span>
                                                <span>•</span>
                                                <span>{challenge.totalParticipants} katılımcı</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-gold mb-1">
                                                #{challenge.yourRank}
                                            </div>
                                            <div className="text-sm text-muted-foreground">Sıralaman</div>
                                            <Badge className="mt-2 bg-xp/20 text-xp">
                                                +{challenge.xpEarned} XP
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>
                </Tabs>

                {/* Leaderboard Preview */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-gold" />
                            Bu Haftanın Liderleri
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {[
                                { rank: 1, name: 'Ahmet Y.', xp: 3450, badge: '🥇' },
                                { rank: 2, name: 'Zeynep K.', xp: 3120, badge: '🥈' },
                                { rank: 3, name: 'Mehmet D.', xp: 2890, badge: '🥉' },
                                { rank: 4, name: 'Ayşe M.', xp: 2640 },
                                { rank: 5, name: 'Can A.', xp: 2420 },
                            ].map((leader) => (
                                <div key={leader.rank} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 text-center font-bold text-xl">
                                            {leader.badge || leader.rank}
                                        </div>
                                        <span className="font-medium">{leader.name}</span>
                                    </div>
                                    <Badge className="bg-xp/20 text-xp">
                                        {leader.xp} XP
                                    </Badge>
                                </div>
                            ))}
                        </div>
                        <Button variant="outline" className="w-full mt-4" asChild>
                            <Link to="/leaderboard">Tam Sıralamayı Gör</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
