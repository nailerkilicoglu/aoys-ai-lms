import { BarChart3, TrendingUp, Users, BookOpen, Award, Target, Clock, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function TeacherAnalytics() {
    const courseStats = [
        { name: 'ChatGPT ile Prompt Engineering', students: 342, completion: 78, avgRating: 4.8, revenue: 51300 },
        { name: 'Python ile Makine Öğrenmesi', students: 289, completion: 65, avgRating: 4.6, revenue: 43350 },
        { name: 'TensorFlow ile Derin Öğrenme', students: 256, completion: 52, avgRating: 4.7, revenue: 38400 },
        { name: 'NLP & Metin Analizi', students: 198, completion: 71, avgRating: 4.9, revenue: 29700 },
        { name: 'Computer Vision Temelleri', students: 155, completion: 58, avgRating: 4.5, revenue: 23250 },
    ];

    const weeklyActivity = [
        { day: 'Pazartesi', students: 520, lessons: 1240, xp: 24800 },
        { day: 'Salı', students: 580, lessons: 1390, xp: 27800 },
        { day: 'Çarşamba', students: 650, lessons: 1560, xp: 31200 },
        { day: 'Perşembe', students: 590, lessons: 1420, xp: 28400 },
        { day: 'Cuma', students: 480, lessons: 1150, xp: 23000 },
        { day: 'Cumartesi', students: 420, lessons: 1010, xp: 20200 },
        { day: 'Pazar', students: 380, lessons: 910, xp: 18200 },
    ];

    const maxStudents = Math.max(...weeklyActivity.map(d => d.students));

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="h-10 w-10 text-gold" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">Detaylı İstatistikler</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Kurslarınızın performansını ve öğrenci etkileşimini analiz edin
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Time Filter */}
                <div className="flex justify-end mb-6">
                    <Select defaultValue="30days">
                        <SelectTrigger className="w-[200px]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7days">Son 7 Gün</SelectItem>
                            <SelectItem value="30days">Son 30 Gün</SelectItem>
                            <SelectItem value="90days">Son 3 Ay</SelectItem>
                            <SelectItem value="year">Bu Yıl</SelectItem>
                            <SelectItem value="all">Tüm Zamanlar</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
                        <TabsTrigger value="courses">Kurs Detayları</TabsTrigger>
                        <TabsTrigger value="engagement">Etkileşim</TabsTrigger>
                        <TabsTrigger value="revenue">Gelir Analizi</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6">
                        {/* Key Metrics */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Toplam Öğrenci</div>
                                            <div className="text-3xl font-bold">1,240</div>
                                            <div className="text-xs text-xp mt-1">+18% bu ay</div>
                                        </div>
                                        <Users className="h-10 w-10 text-gold/50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Ort. Tamamlanma</div>
                                            <div className="text-3xl font-bold text-primary">78%</div>
                                            <div className="text-xs text-xp mt-1">+5% bu ay</div>
                                        </div>
                                        <Target className="h-10 w-10 text-primary/50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Toplam Gelir</div>
                                            <div className="text-3xl font-bold text-xp">₺186K</div>
                                            <div className="text-xs text-xp mt-1">+22% bu ay</div>
                                        </div>
                                        <TrendingUp className="h-10 w-10 text-xp/50" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-sm text-muted-foreground mb-1">Ort. Puan</div>
                                            <div className="text-3xl font-bold text-gold">4.7</div>
                                            <div className="text-xs text-muted-foreground mt-1">248 değerlendirme</div>
                                        </div>
                                        <Award className="h-10 w-10 text-gold/50" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Weekly Activity Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="h-5 w-5 text-primary" />
                                    Haftalık Aktivite
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {weeklyActivity.map((day) => (
                                        <div key={day.day}>
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium w-24">{day.day}</span>
                                                <div className="flex-1 mx-4">
                                                    <div className="relative h-8 bg-muted rounded-lg overflow-hidden">
                                                        <div
                                                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-secondary rounded-lg"
                                                            style={{ width: `${(day.students / maxStudents) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-right min-w-[200px]">
                                                    <div className="text-sm font-bold">{day.students} öğrenci</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {day.lessons} ders • {day.xp.toLocaleString()} XP
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Engagement Metrics */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Öğrenci Etkileşimi</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Günlük Aktif Kullanıcı</span>
                                            <span className="font-bold">520 öğrenci</span>
                                        </div>
                                        <Progress value={75} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Haftalık Aktif Kullanıcı</span>
                                            <span className="font-bold">890 öğrenci</span>
                                        </div>
                                        <Progress value={92} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Ort. Oturum Süresi</span>
                                            <span className="font-bold">42 dakika</span>
                                        </div>
                                        <Progress value={68} className="h-2" />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Tamamlanma Oranı</span>
                                            <span className="font-bold">78%</span>
                                        </div>
                                        <Progress value={78} className="h-2" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Platform Aktiviteleri</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <BookOpen className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Tamamlanan Dersler</span>
                                        </div>
                                        <span className="font-bold">8,690</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Target className="h-5 w-5 text-xp" />
                                            <span className="text-sm">Kazanılan XP</span>
                                        </div>
                                        <span className="font-bold">173,800</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Award className="h-5 w-5 text-gold" />
                                            <span className="text-sm">Kazanılan Rozet</span>
                                        </div>
                                        <span className="font-bold">2,340</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-5 w-5 text-secondary" />
                                            <span className="text-sm">Toplam Öğrenme Saati</span>
                                        </div>
                                        <span className="font-bold">18,420 saat</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Courses Tab */}
                    <TabsContent value="courses" className="space-y-4">
                        {courseStats.map((course, idx) => (
                            <Card key={idx}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="font-semibold mb-1">{course.name}</h3>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    {course.students} öğrenci
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Award className="h-4 w-4 text-gold" />
                                                    {course.avgRating}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-2xl font-bold text-xp">₺{course.revenue.toLocaleString()}</div>
                                            <div className="text-xs text-muted-foreground">Toplam Gelir</div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>Tamamlanma Oranı</span>
                                                <span className="font-bold">{course.completion}%</span>
                                            </div>
                                            <Progress value={course.completion} className="h-2" />
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span>Aktif Öğrenci</span>
                                                <span className="font-bold">{Math.round(course.students * 0.65)} öğrenci</span>
                                            </div>
                                            <Progress value={65} className="h-2" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>

                    {/* Engagement Tab */}
                    <TabsContent value="engagement" className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <TrendingUp className="h-10 w-10 text-xp mx-auto mb-3" />
                                    <div className="text-3xl font-bold mb-1">+24%</div>
                                    <div className="text-sm text-muted-foreground">Öğrenci Artışı</div>
                                    <div className="text-xs text-muted-foreground mt-2">Son 30 gün</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <Clock className="h-10 w-10 text-primary mx-auto mb-3" />
                                    <div className="text-3xl font-bold mb-1">42 dk</div>
                                    <div className="text-sm text-muted-foreground">Ort. Oturum Süresi</div>
                                    <div className="text-xs text-xp mt-2">+8 dakika artış</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <Target className="h-10 w-10 text-gold mx-auto mb-3" />
                                    <div className="text-3xl font-bold mb-1">89%</div>
                                    <div className="text-sm text-muted-foreground">Retention Rate</div>
                                    <div className="text-xs text-xp mt-2">+3% artış</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Öğrenci Aktivite Detayları</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold">En Aktif Zamanlar</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">20:00 - 22:00</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={95} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">450 öğrenci</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">14:00 - 16:00</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={78} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">380 öğrenci</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">10:00 - 12:00</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={62} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">290 öğrenci</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold">En Popüler Özellikler</h4>
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Video Dersler</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={92} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">92%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Kod Playground</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={85} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">85%</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm">Quiz & Testler</span>
                                                <div className="flex-1 mx-3">
                                                    <Progress value={78} className="h-2" />
                                                </div>
                                                <span className="text-sm font-bold">78%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Revenue Tab */}
                    <TabsContent value="revenue" className="space-y-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-muted-foreground mb-1">Toplam Gelir</div>
                                    <div className="text-3xl font-bold text-xp">₺186,000</div>
                                    <div className="text-xs text-xp mt-1">+22% bu ay</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-muted-foreground mb-1">Aylık Gelir</div>
                                    <div className="text-3xl font-bold text-primary">₺42,500</div>
                                    <div className="text-xs text-xp mt-1">+15% geçen aya göre</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-muted-foreground mb-1">Öğrenci Başına</div>
                                    <div className="text-3xl font-bold text-gold">₺150</div>
                                    <div className="text-xs text-muted-foreground mt-1">Ortalama gelir</div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6 text-center">
                                    <div className="text-sm text-muted-foreground mb-1">Yeni Satışlar</div>
                                    <div className="text-3xl font-bold">284</div>
                                    <div className="text-xs text-xp mt-1">Bu ay</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card>
                            <CardHeader>
                                <CardTitle>Kurs Bazlı Gelir Dağılımı</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {courseStats.map((course, idx) => {
                                        const percentage = (course.revenue / 186000) * 100;
                                        return (
                                            <div key={idx}>
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-sm font-medium">{course.name}</span>
                                                    <span className="text-sm font-bold">₺{course.revenue.toLocaleString()}</span>
                                                </div>
                                                <Progress value={percentage} className="h-3" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
