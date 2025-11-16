import { Users, Search, Filter, TrendingUp, Award, Clock, BookOpen, Target, UserPlus, Send, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router-dom';
import { useTeacherStore } from '@/store/teacherStore';

export default function TeacherStudents() {
    const students = useTeacherStore((state) => state.students);

    // Old mock data removed, now using store
    const _oldStudents = [
        {
            id: 1,
            name: 'Ayşe Yılmaz',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ayse',
            email: 'ayse.yilmaz@email.com',
            enrolledCourses: 3,
            completedCourses: 1,
            totalProgress: 78,
            xp: 2450,
            streak: 15,
            lastActive: '2 saat önce',
            status: 'active',
        },
        {
            id: 2,
            name: 'Mehmet Demir',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet',
            email: 'mehmet.demir@email.com',
            enrolledCourses: 2,
            completedCourses: 2,
            totalProgress: 100,
            xp: 3200,
            streak: 28,
            lastActive: '1 saat önce',
            status: 'active',
        },
        {
            id: 3,
            name: 'Zeynep Kaya',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep',
            email: 'zeynep.kaya@email.com',
            enrolledCourses: 4,
            completedCourses: 0,
            totalProgress: 45,
            xp: 1680,
            streak: 7,
            lastActive: '5 saat önce',
            status: 'active',
        },
        {
            id: 4,
            name: 'Can Öztürk',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can',
            email: 'can.ozturk@email.com',
            enrolledCourses: 3,
            completedCourses: 1,
            totalProgress: 62,
            xp: 2100,
            streak: 12,
            lastActive: '1 gün önce',
            status: 'inactive',
        },
        {
            id: 5,
            name: 'Elif Şahin',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif',
            email: 'elif.sahin@email.com',
            enrolledCourses: 5,
            completedCourses: 2,
            totalProgress: 88,
            xp: 4250,
            streak: 35,
            lastActive: '30 dk önce',
            status: 'active',
        },
        {
            id: 6,
            name: 'Ahmet Arslan',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet',
            email: 'ahmet.arslan@email.com',
            enrolledCourses: 1,
            completedCourses: 0,
            totalProgress: 23,
            xp: 850,
            streak: 3,
            lastActive: '3 gün önce',
            status: 'inactive',
        },
    ]; // Mock data - now from store

    const activeStudents = students.filter(s => s.status === 'active').length;
    const totalXP = students.reduce((sum, s) => sum + s.xp, 0);
    const avgProgress = Math.round(students.reduce((sum, s) => sum + s.totalProgress, 0) / students.length);

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <Users className="h-10 w-10 text-gold" />
                                <h1 className="text-4xl font-bold">
                                    <span className="text-gradient">Öğrenci Listesi</span>
                                </h1>
                            </div>
                            <p className="text-muted-foreground">
                                Öğrencilerinizin performansını ve ilerlemesini takip edin
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <Button variant="outline" asChild>
                                <Link to="/dashboard/teacher/assign-content">
                                    <Send className="mr-2 h-4 w-4" />
                                    İçerik Ata
                                </Link>
                            </Button>
                            <Button className="bg-gradient-to-r from-primary to-secondary" asChild>
                                <Link to="/teacher/add-student">
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    Öğrenci Ekle
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>            <div className="container mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Toplam Öğrenci</div>
                                    <div className="text-3xl font-bold">{students.length}</div>
                                </div>
                                <Users className="h-10 w-10 text-gold/50" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Aktif Öğrenci</div>
                                    <div className="text-3xl font-bold text-xp">{activeStudents}</div>
                                </div>
                                <TrendingUp className="h-10 w-10 text-xp/50" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Ort. İlerleme</div>
                                    <div className="text-3xl font-bold text-primary">{avgProgress}%</div>
                                </div>
                                <Target className="h-10 w-10 text-primary/50" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm text-muted-foreground mb-1">Toplam XP</div>
                                    <div className="text-3xl font-bold text-gold">{totalXP.toLocaleString()}</div>
                                </div>
                                <Award className="h-10 w-10 text-gold/50" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="relative md:col-span-2">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Öğrenci ara (isim veya email)..."
                                    className="pl-10"
                                />
                            </div>

                            <Select defaultValue="all">
                                <SelectTrigger>
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Öğrenciler</SelectItem>
                                    <SelectItem value="active">Aktif</SelectItem>
                                    <SelectItem value="inactive">Pasif</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="recent">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="recent">Son Aktivite</SelectItem>
                                    <SelectItem value="progress">İlerleme (Yüksek)</SelectItem>
                                    <SelectItem value="xp">XP (Yüksek)</SelectItem>
                                    <SelectItem value="name">İsim (A-Z)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Students Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>Öğrenciler</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Öğrenci</TableHead>
                                        <TableHead>Email / Kurslar</TableHead>
                                        <TableHead className="text-center">İstatistikler</TableHead>
                                        <TableHead className="text-center">İlerleme</TableHead>
                                        <TableHead className="text-center">XP</TableHead>
                                        <TableHead className="text-center">Streak</TableHead>
                                        <TableHead>Son Aktivite</TableHead>
                                        <TableHead>Durum</TableHead>
                                        <TableHead className="text-right">İşlemler</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {students.map((student) => (
                                        <TableRow key={student.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar>
                                                        <AvatarImage src={student.avatar} />
                                                        <AvatarFallback>{student.name[0]}</AvatarFallback>
                                                    </Avatar>
                                                    <div className="font-medium">{student.name}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm text-muted-foreground mb-1">{student.email}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    {student.courseNames?.slice(0, 2).join(', ')}
                                                    {student.courseNames?.length > 2 && ` +${student.courseNames.length - 2}`}
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <div className="flex flex-col items-center">
                                                    <div className="text-sm font-medium">
                                                        {student.enrolledCourses} kayıtlı
                                                    </div>
                                                    <div className="text-xs text-muted-foreground">
                                                        {student.completedCourses} tamamlandı
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center justify-between text-xs">
                                                        <span className="text-muted-foreground">İlerleme</span>
                                                        <span className="font-medium">{student.totalProgress}%</span>
                                                    </div>
                                                    <Progress value={student.totalProgress} className="h-2" />
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant="outline" className="bg-gold/10 text-gold">
                                                    {student.xp.toLocaleString()} XP
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant="outline" className="bg-primary/10 text-primary">
                                                    🔥 {student.streak} gün
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                    <Clock className="h-3 w-3" />
                                                    {student.lastActive}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={student.status === 'active' ? 'default' : 'secondary'}
                                                    className={student.status === 'active' ? 'bg-xp/20 text-xp' : ''}
                                                >
                                                    {student.status === 'active' ? 'Aktif' : 'Pasif'}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex gap-1 justify-end">
                                                    <Button size="sm" variant="ghost" asChild title="Detaylı İncele">
                                                        <Link to={`/teacher/student/${student.id}`}>
                                                            <Eye className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                    <Button size="sm" variant="ghost" asChild title="İçerik Ata">
                                                        <Link to="/dashboard/teacher/assign-content">
                                                            <Send className="h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
