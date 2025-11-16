import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Calendar, TrendingUp, Award, BookOpen, Target, Flame, Trophy, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useTeacherStore } from '@/store/teacherStore';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function StudentDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const getStudentById = useTeacherStore((state) => state.getStudentById);

    const student = getStudentById(Number(id));

    if (!student) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <Card className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">Öğrenci bulunamadı</p>
                    <Button onClick={() => navigate('/teacher/students')}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Öğrenci Listesine Dön
                    </Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <Button
                        variant="ghost"
                        className="mb-4"
                        onClick={() => navigate('/teacher/students')}
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Öğrenci Listesine Dön
                    </Button>

                    <div className="flex items-start gap-6">
                        <Avatar className="h-24 w-24 border-4 border-background">
                            <AvatarImage src={student.avatar} />
                            <AvatarFallback className="text-2xl">{student.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                            <h1 className="text-4xl font-bold mb-2">
                                <span className="text-gradient">{student.name}</span>
                            </h1>

                            <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span>{student.email}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>Katılım: {new Date(student.joinedDate).toLocaleDateString('tr-TR')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4" />
                                    <span>Son Aktivite: {student.lastActive}</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Badge
                                    variant={student.status === 'active' ? 'default' : 'secondary'}
                                    className={student.status === 'active' ? 'bg-xp/20 text-xp' : ''}
                                >
                                    {student.status === 'active' ? '🟢 Aktif' : '⚪ Pasif'}
                                </Badge>
                                <Badge variant="outline" className="bg-gold/10 text-gold">
                                    {student.xp.toLocaleString()} XP
                                </Badge>
                                <Badge variant="outline" className="bg-primary/10 text-primary">
                                    🔥 {student.streak} gün streak
                                </Badge>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="outline" asChild>
                                <Link to="/teacher/assign-content">
                                    İçerik Ata
                                </Link>
                            </Button>
                            <Button className="bg-gradient-to-r from-primary to-secondary">
                                Mesaj Gönder
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Stats Overview */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Genel İlerleme</div>
                                    <div className="text-3xl font-bold text-primary">{student.totalProgress}%</div>
                                </div>
                                <Target className="h-10 w-10 text-primary/50" />
                            </div>
                            <Progress value={student.totalProgress} className="h-2 mt-3" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Tamamlanan Ders</div>
                                    <div className="text-3xl font-bold text-xp">{student.totalLessonsCompleted}</div>
                                </div>
                                <BookOpen className="h-10 w-10 text-xp/50" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Quiz Ortalaması</div>
                                    <div className="text-3xl font-bold text-secondary">{student.averageQuizScore}%</div>
                                </div>
                                <Trophy className="h-10 w-10 text-secondary/50" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Kazanılan Rozet</div>
                                    <div className="text-3xl font-bold text-gold">{student.badges}</div>
                                </div>
                                <Award className="h-10 w-10 text-gold/50" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Weekly Activity Chart */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="h-5 w-5 text-primary" />
                                    Haftalık Aktivite
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={250}>
                                    <BarChart data={student.weeklyActivity}>
                                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                                        <XAxis dataKey="day" />
                                        <YAxis />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: 'hsl(var(--background))',
                                                border: '1px solid hsl(var(--border))',
                                                borderRadius: '6px',
                                            }}
                                        />
                                        <Bar dataKey="lessons" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                        {/* Enrolled Courses */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-primary" />
                                    Kayıtlı Kurslar ({student.enrolledCourses.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {student.courseNames.map((courseName, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                    <BookOpen className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <div className="font-medium">{courseName}</div>
                                                    <div className="text-sm text-muted-foreground">
                                                        {index === 0 && student.completedCourses > 0 ? 'Tamamlandı' : 'Devam ediyor'}
                                                    </div>
                                                </div>
                                            </div>
                                            {index === 0 && student.completedCourses > 0 && (
                                                <CheckCircle className="h-5 w-5 text-xp" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    Son Aktiviteler
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {student.recentActivity.map((activity, index) => (
                                        <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0">
                                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                            <div className="flex-1">
                                                <div className="font-medium">{activity.action}</div>
                                                <div className="text-sm text-muted-foreground">{activity.item}</div>
                                                <div className="text-xs text-muted-foreground mt-1">{activity.date}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Performance Summary */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Performans Özeti</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Toplam Kurs</span>
                                        <span className="font-medium">{student.enrolledCourses.length}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Tamamlanan</span>
                                        <span className="font-medium text-xp">{student.completedCourses}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Devam Eden</span>
                                        <span className="font-medium">{student.enrolledCourses.length - student.completedCourses}</span>
                                    </div>
                                </div>

                                <div className="h-px bg-border" />

                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Tamamlanan Ders</span>
                                        <span className="font-medium">{student.totalLessonsCompleted}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Çözülen Quiz</span>
                                        <span className="font-medium">{student.totalQuizzesCompleted}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Quiz Ortalaması</span>
                                        <span className="font-medium text-secondary">{student.averageQuizScore}%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Achievements */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base flex items-center gap-2">
                                    <Award className="h-5 w-5 text-gold" />
                                    Başarılar
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-gold/10 border border-gold/20 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Flame className="h-5 w-5 text-gold" />
                                        <div>
                                            <div className="font-medium text-sm">Streak Master</div>
                                            <div className="text-xs text-muted-foreground">{student.streak} gün üst üste</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-xp/10 border border-xp/20 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="h-5 w-5 text-xp" />
                                        <div>
                                            <div className="font-medium text-sm">XP Toplayan</div>
                                            <div className="text-xs text-muted-foreground">{student.xp.toLocaleString()} XP</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-3 bg-primary/10 border border-primary/20 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Award className="h-5 w-5 text-primary" />
                                        <div>
                                            <div className="font-medium text-sm">Rozet Koleksiyonu</div>
                                            <div className="text-xs text-muted-foreground">{student.badges} rozet kazandı</div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Hızlı İşlemler</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link to="/teacher/assign-content">
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        İçerik Ata
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Mesaj Gönder
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <TrendingUp className="mr-2 h-4 w-4" />
                                    Rapor Oluştur
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
