import { UserPlus, Mail, User, BookOpen, Send, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useTeacherStore } from '@/store/teacherStore';

export default function AddStudent() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const addStudent = useTeacherStore((state) => state.addStudent);
    const [selectedCourses, setSelectedCourses] = useState<number[]>([]);
    const [studentName, setStudentName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');

    const myCourses = [
        { id: 1, name: 'ChatGPT ile Prompt Engineering', students: 450 },
        { id: 2, name: 'Python ile Makine Öğrenmesi', students: 380 },
        { id: 3, name: 'TensorFlow ile Derin Öğrenme', students: 220 },
        { id: 4, name: 'NLP & Metin Analizi', students: 180 },
        { id: 5, name: 'Computer Vision Temelleri', students: 150 },
    ];

    const handleCourseToggle = (courseId: number) => {
        setSelectedCourses(prev =>
            prev.includes(courseId)
                ? prev.filter(id => id !== courseId)
                : [...prev, courseId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Add student to store without courses
        addStudent({
            name: studentName,
            email: studentEmail,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${studentEmail}`,
            enrolledCourses: [],
            courseNames: [],
        });

        toast({
            title: "Öğrenci Eklendi! ✓",
            description: `${studentName} başarıyla öğrenci listenize eklendi. İçerik ataması yapmak için İçerik Ata bölümünü kullanabilirsiniz.`,
        });
        setTimeout(() => navigate('/teacher/students'), 1500);
    };

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
                        Geri Dön
                    </Button>
                    <div className="flex items-center gap-3 mb-4">
                        <UserPlus className="h-10 w-10 text-gold" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">Yeni Öğrenci Ekle</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Öğrenciye davet gönderin. İçerik atamasını daha sonra İçerik Ata bölümünden yapabilirsiniz.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle>Öğrenci Bilgileri</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Student Info */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">
                                            Öğrenci Adı Soyadı *
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="name"
                                                placeholder="Örn: Ahmet Yılmaz"
                                                className="pl-10"
                                                value={studentName}
                                                onChange={(e) => setStudentName(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">
                                            Email Adresi *
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="ornek@email.com"
                                                className="pl-10"
                                                value={studentEmail}
                                                onChange={(e) => setStudentEmail(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            Öğrenciye bu adrese davet emaili gönderilecek
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">
                                            Davet Mesajı (Opsiyonel)
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Öğrenciye gönderilecek özel mesaj..."
                                            rows={4}
                                        />
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="flex-1"
                                        onClick={() => navigate('/teacher/students')}
                                    >
                                        İptal
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="flex-1 bg-gradient-to-r from-primary to-secondary"
                                    >
                                        <Send className="mr-2 h-4 w-4" />
                                        Davet Gönder
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Info Card */}
                    <Card className="mt-6">
                        <CardContent className="p-6">
                            <h3 className="font-semibold mb-3 flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                Davet Süreci Nasıl İşler?
                            </h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">1.</span>
                                    <span>Öğrenciye email ile davet linki gönderilir</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">2.</span>
                                    <span>Öğrenci hesap oluşturur ve email adresini doğrular</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">3.</span>
                                    <span>Öğrenci sisteme giriş yapar</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary">4.</span>
                                    <span>İçerik Ata bölümünden öğrenciye ders/ödev/quiz atayabilirsiniz</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
