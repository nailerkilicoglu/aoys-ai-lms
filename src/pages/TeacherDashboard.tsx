import { BookOpen, Users, TrendingUp, Award, Plus, Edit, Eye, BarChart3, MessageSquare, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useUserStore } from '@/store/userStore';
import { useTeacherStore } from '@/store/teacherStore';
import { Link } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

export default function TeacherDashboard() {
    const { user } = useUserStore();
    const students = useTeacherStore((state) => state.students);

    if (!user) return null;

    // Mock data - Öğretmen için
    const stats = {
        totalStudents: 1240,
        activeCourses: 5,
        totalRevenue: 45600,
        avgRating: 4.8,
        pendingQuestions: 12,
        completionRate: 78,
    };

    const myCourses = [
        {
            id: 1,
            title: 'ChatGPT ile Prompt Engineering',
            students: 450,
            completed: 320,
            rating: 4.9,
            revenue: 18000,
            status: 'active',
        },
        {
            id: 2,
            title: 'Python ile Makine Öğrenmesi',
            students: 380,
            completed: 250,
            rating: 4.7,
            revenue: 15200,
            status: 'active',
        },
        {
            id: 3,
            title: 'TensorFlow ile Derin Öğrenme',
            students: 220,
            completed: 180,
            rating: 4.8,
            revenue: 12400,
            status: 'active',
        },
    ];

    const recentStudents = [
        {
            id: 1,
            name: 'Ahmet Yılmaz',
            course: 'ChatGPT ile Prompt Engineering',
            progress: 65,
            lastActive: '2 saat önce',
        },
        {
            id: 2,
            name: 'Ayşe Demir',
            course: 'Python ile Makine Öğrenmesi',
            progress: 82,
            lastActive: '5 saat önce',
        },
        {
            id: 3,
            name: 'Mehmet Kaya',
            course: 'TensorFlow ile Derin Öğrenme',
            progress: 45,
            lastActive: '1 gün önce',
        },
    ];

    const pendingQuestions = [
        {
            id: 1,
            student: 'Zeynep Özkan',
            course: 'ChatGPT Kursu',
            question: 'Temperature parametresi nasıl kullanılır?',
            time: '15 dk önce',
        },
        {
            id: 2,
            student: 'Can Arslan',
            course: 'Python ML',
            question: 'Overfitting sorununu nasıl çözebilirim?',
            time: '1 saat önce',
        },
    ];

    return (
        <div className="min-h-screen bg-background pb-8">
            <div className="container mx-auto px-4 py-6">
                {/* Welcome Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        Öğretmen Paneli - <span className="text-gradient">{user.name}</span> 👨‍🏫
                    </h1>
                    <p className="text-muted-foreground">
                        Kurslarınızı yönetin, öğrencilerinizi takip edin ve istatistikleri görün.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <div className="text-2xl font-bold">{stats.totalStudents}</div>
                            <div className="text-sm text-muted-foreground">Toplam Öğrenci</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <BookOpen className="h-8 w-8 text-secondary" />
                            </div>
                            <div className="text-2xl font-bold">{stats.activeCourses}</div>
                            <div className="text-sm text-muted-foreground">Aktif Sınıf</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-gold/20 to-gold/5 border-gold/30">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <TrendingUp className="h-8 w-8 text-gold" />
                            </div>
                            <div className="text-2xl font-bold">{stats.completionRate}%</div>
                            <div className="text-sm text-muted-foreground">Tamamlanma Oranı</div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Column - Courses */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* My Courses */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-primary" />
                                    Sınıflarım
                                </CardTitle>
                                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary" asChild>
                                    <Link to="/teacher/create-course">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Yeni Sınıf
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {myCourses.map((course) => (
                                    <div key={course.id} className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">{course.title}</h3>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Users className="h-4 w-4" />
                                                        {course.students} öğrenci
                                                    </span>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="bg-xp/20 text-xp">
                                                {course.status === 'active' ? 'Aktif' : 'Taslak'}
                                            </Badge>
                                        </div>
                                        <Progress value={(course.completed / course.students) * 100} className="mb-3 h-2" />
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">
                                                {course.completed} / {course.students} tamamlandı
                                            </span>
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="outline">
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    Görüntüle
                                                </Button>
                                                <Button size="sm" variant="outline">
                                                    <Edit className="mr-2 h-4 w-4" />
                                                    Düzenle
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Student List */}
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" />
                                    Öğrenci Listesi
                                </CardTitle>
                                <Button size="sm" variant="outline" asChild>
                                    <Link to="/teacher/students">
                                        Tümünü Gör
                                    </Link>
                                </Button>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Öğrenci</TableHead>
                                            <TableHead>Kurs Sayısı</TableHead>
                                            <TableHead>İlerleme</TableHead>
                                            <TableHead>Son Aktivite</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {students.slice(0, 5).map((student) => (
                                            <TableRow key={student.id}>
                                                <TableCell className="font-medium">{student.name}</TableCell>
                                                <TableCell>{student.enrolledCourses.length} kurs</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <Progress value={student.totalProgress} className="w-20 h-2" />
                                                        <span className="text-sm">{student.totalProgress}%</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-muted-foreground text-sm">
                                                    {student.lastActive}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - Quick Actions & Notifications */}
                    <div className="space-y-6">
                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Hızlı İşlemler</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button className="w-full justify-start bg-gradient-to-r from-primary to-secondary" asChild>
                                    <Link to="/teacher/create-course">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Yeni Sınıf Oluştur
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link to="/teacher/add-student">
                                        <Users className="mr-2 h-4 w-4" />
                                        Öğrenci Ekle
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link to="/teacher/assign-content">
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        İçerik Ata
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link to="/teacher/analytics">
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        Detaylı İstatistikler
                                    </Link>
                                </Button>
                                <Button variant="outline" className="w-full justify-start" asChild>
                                    <Link to="/teacher/questions">
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        Bekleyen Sorular
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Pending Questions */}
                        <Card className="border-gold/30">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-gold" />
                                        Bekleyen Sorular
                                    </span>
                                    <Badge variant="secondary" className="bg-gold/20 text-gold">
                                        {stats.pendingQuestions}
                                    </Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {pendingQuestions.map((q) => (
                                    <div key={q.id} className="p-3 rounded-lg border border-border hover:border-gold/50 transition-colors">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <div className="font-semibold text-sm">{q.student}</div>
                                                <div className="text-xs text-muted-foreground">{q.course}</div>
                                            </div>
                                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Clock className="h-3 w-3" />
                                                {q.time}
                                            </div>
                                        </div>
                                        <p className="text-sm mb-2 text-muted-foreground">{q.question}</p>
                                        <Button size="sm" variant="outline" className="w-full">
                                            Cevapla
                                        </Button>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full" asChild>
                                    <Link to="/teacher/questions">Tüm Soruları Gör</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Analytics Preview */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BarChart3 className="h-5 w-5 text-primary" />
                                    Bu Ay
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Yeni Kayıtlar</span>
                                    <span className="font-bold text-xp">+124</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Tamamlanan Dersler</span>
                                    <span className="font-bold text-primary">856</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Ortalama İzlenme</span>
                                    <span className="font-bold text-secondary">4.2 saat</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
