import { User, Mail, Calendar, Award, TrendingUp, BookOpen, Code, Edit, Save, Camera, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUserStore } from '@/store/userStore';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
    const { user } = useUserStore();
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [bio, setBio] = useState('AI ve makine öğrenmesi tutkunuyum. Python ile ilgileniyorum.');

    if (!user) return null;

    const stats = {
        coursesCompleted: 3,
        totalCourses: 6,
        hoursLearned: 24,
        challengesWon: 2,
        questsCompleted: 45,
        averageScore: 87,
    };

    const recentActivity = [
        {
            type: 'course',
            title: 'ChatGPT Prompt Engineering dersi tamamlandı',
            date: '2 gün önce',
            xp: 250,
        },
        {
            type: 'badge',
            title: '7 Gün Streak rozeti kazanıldı',
            date: '5 gün önce',
            xp: 100,
        },
        {
            type: 'challenge',
            title: 'Görüntü Sınıflandırma yarışmasında 12. oldu',
            date: '1 hafta önce',
            xp: 150,
        },
    ];

    const handleSave = () => {
        setIsEditing(false);
        toast({
            title: "Profil Güncellendi! ✓",
            description: "Değişiklikler başarıyla kaydedildi.",
        });
    };

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Avatar */}
                        <div className="relative">
                            <Avatar className="h-32 w-32 ring-4 ring-primary">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="text-3xl">{user.name[0]}</AvatarFallback>
                            </Avatar>
                            <Button
                                size="icon"
                                className="absolute bottom-0 right-0 rounded-full h-10 w-10"
                                variant="secondary"
                            >
                                <Camera className="h-4 w-4" />
                            </Button>
                            <Badge
                                className="absolute -top-2 -right-2 h-12 w-12 flex items-center justify-center p-0 text-lg bg-gradient-to-r from-primary to-secondary"
                            >
                                {user.level}
                            </Badge>
                        </div>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            {isEditing ? (
                                <div className="space-y-2 mb-4">
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="text-2xl font-bold"
                                    />
                                </div>
                            ) : (
                                <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                            )}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
                                <span className="flex items-center gap-1">
                                    <Mail className="h-4 w-4" />
                                    {user.email}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    Kayıt: Ekim 2025
                                </span>
                                <span className="flex items-center gap-1">
                                    <User className="h-4 w-4" />
                                    {user.role === 'student' ? 'Öğrenci' : 'Öğretmen'}
                                </span>
                            </div>

                            {/* XP Progress */}
                            <div className="max-w-md">
                                <div className="flex items-center justify-between text-sm mb-2">
                                    <span className="text-muted-foreground">Level {user.level}</span>
                                    <span className="font-semibold text-xp">
                                        {user.xp} / {user.maxXp} XP
                                    </span>
                                </div>
                                <Progress value={(user.xp / user.maxXp) * 100} className="h-3" />
                                <div className="text-xs text-muted-foreground mt-1">
                                    {user.maxXp - user.xp} XP daha Level {user.level + 1} için
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                            {isEditing ? (
                                <>
                                    <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-secondary">
                                        <Save className="mr-2 h-4 w-4" />
                                        Kaydet
                                    </Button>
                                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                                        İptal
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                                        <Edit className="mr-2 h-4 w-4" />
                                        Profili Düzenle
                                    </Button>
                                    <Button variant="outline" asChild>
                                        <Link to="/settings">
                                            <Settings className="mr-2 h-4 w-4" />
                                            Ayarlar
                                        </Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Stats */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Quick Stats */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    İstatistikler
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Toplam XP</span>
                                    <span className="font-bold text-xp">{user.xp.toLocaleString()}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Rozetler</span>
                                    <span className="font-bold text-gold">{user.badges}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Streak</span>
                                    <span className="font-bold text-streak">{user.streak} 🔥</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Öğrenme Saati</span>
                                    <span className="font-bold">{stats.hoursLearned}h</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Ortalama Puan</span>
                                    <span className="font-bold">{stats.averageScore}%</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Course Progress */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-secondary" />
                                    Kurs İlerlemesi
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm">Tamamlanan Kurslar</span>
                                        <span className="font-semibold">
                                            {stats.coursesCompleted}/{stats.totalCourses}
                                        </span>
                                    </div>
                                    <Progress
                                        value={(stats.coursesCompleted / stats.totalCourses) * 100}
                                        className="h-2"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-3 pt-4 border-t">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-xp">{stats.questsCompleted}</div>
                                        <div className="text-xs text-muted-foreground">Görev</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gold">{stats.challengesWon}</div>
                                        <div className="text-xs text-muted-foreground">Yarışma</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Achievements Preview */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Award className="h-5 w-5 text-gold" />
                                    Son Rozetler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-4 gap-3">
                                    {['🎯', '🔥', '💎', '⚡'].map((emoji, i) => (
                                        <div
                                            key={i}
                                            className="aspect-square rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-3xl hover:scale-110 transition-transform cursor-pointer"
                                        >
                                            {emoji}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Tabs defaultValue="activity" className="space-y-6">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="activity">Aktivite</TabsTrigger>
                                <TabsTrigger value="bio">Hakkımda</TabsTrigger>
                            </TabsList>

                            {/* Activity Tab */}
                            <TabsContent value="activity">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Son Aktiviteler</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {recentActivity.map((activity, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                                            >
                                                <div className="mt-1">
                                                    {activity.type === 'course' && <BookOpen className="h-5 w-5 text-primary" />}
                                                    {activity.type === 'badge' && <Award className="h-5 w-5 text-gold" />}
                                                    {activity.type === 'challenge' && <Code className="h-5 w-5 text-secondary" />}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium mb-1">{activity.title}</p>
                                                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                                                </div>
                                                <Badge className="bg-xp/20 text-xp">
                                                    +{activity.xp} XP
                                                </Badge>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            {/* Bio Tab */}
                            <TabsContent value="bio">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Hakkımda</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {isEditing ? (
                                            <div className="space-y-4">
                                                <div>
                                                    <Label htmlFor="bio">Bio</Label>
                                                    <Textarea
                                                        id="bio"
                                                        value={bio}
                                                        onChange={(e) => setBio(e.target.value)}
                                                        rows={4}
                                                        placeholder="Kendinizden bahsedin..."
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="interests">İlgi Alanları</Label>
                                                    <Input
                                                        id="interests"
                                                        placeholder="AI, ML, Python, TensorFlow..."
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="github">GitHub</Label>
                                                    <Input
                                                        id="github"
                                                        placeholder="https://github.com/kullaniciadi"
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="linkedin">LinkedIn</Label>
                                                    <Input
                                                        id="linkedin"
                                                        placeholder="https://linkedin.com/in/kullaniciadi"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="font-semibold mb-2">Bio</h3>
                                                    <p className="text-muted-foreground">{bio}</p>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold mb-2">İlgi Alanları</h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {['AI', 'Machine Learning', 'Python', 'TensorFlow', 'ChatGPT'].map((tag) => (
                                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
}
