import { Trophy, TrendingUp, Medal, Crown, Flame, Award, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

interface LeaderboardUser {
    rank: number;
    name: string;
    avatar: string;
    level: number;
    xp: number;
    badges: number;
    streak: number;
    completedCourses: number;
    isCurrentUser?: boolean;
}

export default function Leaderboard() {
    const topUsers: LeaderboardUser[] = [
        {
            rank: 1,
            name: 'Ahmet Yılmaz',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet',
            level: 42,
            xp: 12450,
            badges: 28,
            streak: 45,
            completedCourses: 15,
        },
        {
            rank: 2,
            name: 'Zeynep Kaya',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep',
            level: 38,
            xp: 11230,
            badges: 24,
            streak: 38,
            completedCourses: 12,
        },
        {
            rank: 3,
            name: 'Mehmet Demir',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet',
            level: 35,
            xp: 10560,
            badges: 22,
            streak: 32,
            completedCourses: 11,
        },
    ];

    const allUsers: LeaderboardUser[] = [
        ...topUsers,
        {
            rank: 4,
            name: 'Ayşe Özkan',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ayse',
            level: 32,
            xp: 9840,
            badges: 20,
            streak: 28,
            completedCourses: 10,
        },
        {
            rank: 5,
            name: 'Can Arslan',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can',
            level: 30,
            xp: 9120,
            badges: 18,
            streak: 25,
            completedCourses: 9,
        },
        {
            rank: 6,
            name: 'Elif Yıldız',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif',
            level: 28,
            xp: 8450,
            badges: 16,
            streak: 22,
            completedCourses: 8,
        },
        {
            rank: 7,
            name: 'Burak Çelik',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=burak',
            level: 26,
            xp: 7890,
            badges: 15,
            streak: 20,
            completedCourses: 7,
        },
        {
            rank: 8,
            name: 'Selin Aydın',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=selin',
            level: 24,
            xp: 7230,
            badges: 14,
            streak: 18,
            completedCourses: 7,
        },
        // ... Current user
        {
            rank: 42,
            name: 'Sen',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=you',
            level: 15,
            xp: 2340,
            badges: 12,
            streak: 7,
            completedCourses: 3,
            isCurrentUser: true,
        },
    ];

    const getRankIcon = (rank: number) => {
        if (rank === 1) return { icon: '🥇', color: 'text-gold' };
        if (rank === 2) return { icon: '🥈', color: 'text-gray-400' };
        if (rank === 3) return { icon: '🥉', color: 'text-amber-600' };
        return { icon: rank, color: 'text-muted-foreground' };
    };

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Hero */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <Trophy className="h-12 w-12 text-gold" />
                            <h1 className="text-4xl md:text-5xl font-bold">
                                <span className="text-gradient">Liderlik Tablosu</span>
                            </h1>
                        </div>
                        <p className="text-xl text-muted-foreground mb-6">
                            En başarılı AI öğrencilerini keşfet ve onlarla yarış! 🏆
                        </p>
                        <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span><strong>5,240</strong> Aktif Öğrenci</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-gold" />
                                <span><strong>12,450</strong> Toplam XP</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-5 w-5 text-xp" />
                                <span>Son güncelleme: <strong>5 dk önce</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Top 3 Podium */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {topUsers.map((user) => {
                        const rankIcon = getRankIcon(user.rank);
                        return (
                            <Card
                                key={user.rank}
                                className={`relative overflow-hidden ${user.rank === 1
                                    ? 'md:order-2 border-gold/50 glow-effect'
                                    : user.rank === 2
                                        ? 'md:order-1 md:mt-8'
                                        : 'md:order-3 md:mt-8'
                                    }`}
                            >
                                <CardContent className="p-6 text-center">
                                    {/* Rank Badge */}
                                    <div className={`absolute top-4 right-4 text-4xl ${user.rank === 1 ? 'animate-pulse' : ''}`}>
                                        {rankIcon.icon}
                                    </div>

                                    {/* Avatar */}
                                    <div className="flex justify-center mb-4">
                                        <div className="relative">
                                            <Avatar className={`h-24 w-24 ring-4 ${user.rank === 1 ? 'ring-gold' :
                                                user.rank === 2 ? 'ring-gray-400' :
                                                    'ring-amber-600'
                                                }`}>
                                                <AvatarImage src={user.avatar} alt={user.name} />
                                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <Badge
                                                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${user.rank === 1 ? 'bg-gold text-gold-foreground' :
                                                    'bg-primary'
                                                    }`}
                                            >
                                                Level {user.level}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-xl font-bold mb-2">{user.name}</h3>

                                    {/* Stats */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">XP</span>
                                            <span className="font-bold text-xp">{user.xp.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Rozetler</span>
                                            <span className="font-bold text-gold">{user.badges}</span>
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-muted-foreground">Streak</span>
                                            <span className="font-bold text-streak">{user.streak} 🔥</span>
                                        </div>
                                    </div>

                                    {user.rank === 1 && (
                                        <Badge className="bg-gold/20 text-gold border-gold/30">
                                            <Crown className="h-3 w-3 mr-1" />
                                            Şampiyon
                                        </Badge>
                                    )}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                {/* Full Leaderboard */}
                <Tabs defaultValue="all" className="space-y-6">
                    <TabsList className="grid w-full max-w-md grid-cols-3">
                        <TabsTrigger value="all">Tüm Zamanlar</TabsTrigger>
                        <TabsTrigger value="monthly">Bu Ay</TabsTrigger>
                        <TabsTrigger value="weekly">Bu Hafta</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Medal className="h-5 w-5 text-primary" />
                                    Genel Sıralama
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-16">Sıra</TableHead>
                                            <TableHead>Öğrenci</TableHead>
                                            <TableHead>Level</TableHead>
                                            <TableHead>XP</TableHead>
                                            <TableHead>Rozetler</TableHead>
                                            <TableHead>Streak</TableHead>
                                            <TableHead>Kurslar</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {allUsers.map((user) => {
                                            const rankIcon = getRankIcon(user.rank);
                                            return (
                                                <TableRow
                                                    key={user.rank}
                                                    className={user.isCurrentUser ? 'bg-primary/5 border-primary/30' : ''}
                                                >
                                                    <TableCell className={`font-bold text-xl ${rankIcon.color}`}>
                                                        {rankIcon.icon}
                                                    </TableCell>
                                                    <TableCell>
                                                        <div className="flex items-center gap-3">
                                                            <Avatar className="h-10 w-10">
                                                                <AvatarImage src={user.avatar} alt={user.name} />
                                                                <AvatarFallback>{user.name[0]}</AvatarFallback>
                                                            </Avatar>
                                                            <div>
                                                                <div className="font-medium">
                                                                    {user.name}
                                                                    {user.isCurrentUser && (
                                                                        <Badge variant="outline" className="ml-2 text-xs">Sen</Badge>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Badge variant="secondary" className="bg-level/20 text-level">
                                                            {user.level}
                                                        </Badge>
                                                    </TableCell>
                                                    <TableCell className="font-bold text-xp">
                                                        {user.xp.toLocaleString()}
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className="flex items-center gap-1">
                                                            <Award className="h-4 w-4 text-gold" />
                                                            {user.badges}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell>
                                                        <span className="flex items-center gap-1">
                                                            <Flame className="h-4 w-4 text-streak" />
                                                            {user.streak}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell>{user.completedCourses}</TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="monthly">
                        <Card>
                            <CardContent className="p-12 text-center">
                                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                                <h3 className="text-xl font-bold mb-2">Bu Ayki Sıralama</h3>
                                <p className="text-muted-foreground">
                                    Aylık sıralama ay sonunda hesaplanacak
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="weekly">
                        <Card>
                            <CardContent className="p-12 text-center">
                                <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                                <h3 className="text-xl font-bold mb-2">Bu Haftaki Sıralama</h3>
                                <p className="text-muted-foreground">
                                    Haftalık sıralama Pazar günü sıfırlanır
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Your Progress */}
                <Card className="mt-8 border-primary/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            Senin İlerleme
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Mevcut Sıran</span>
                            <span className="text-2xl font-bold text-primary">#42</span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">Bir üst sıraya</span>
                                <span className="font-semibold">120 XP kaldı</span>
                            </div>
                            <Progress value={65} className="h-2" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Top 10'a girmek için <strong className="text-foreground">2,110 XP</strong> daha kazanmalısın!
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
