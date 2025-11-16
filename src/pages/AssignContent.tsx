import { BookOpen, Send, Calendar, Clock, FileText, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

export default function AssignContent() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]);
    const [assignmentType, setAssignmentType] = useState<'lesson' | 'homework' | 'quiz'>('lesson');

    const students = [
        { id: 1, name: 'Ayşe Yılmaz', email: 'ayse@email.com', course: 'ChatGPT Kursu' },
        { id: 2, name: 'Mehmet Demir', email: 'mehmet@email.com', course: 'Python ML' },
        { id: 3, name: 'Zeynep Kaya', email: 'zeynep@email.com', course: 'ChatGPT Kursu' },
        { id: 4, name: 'Can Öztürk', email: 'can@email.com', course: 'TensorFlow' },
        { id: 5, name: 'Elif Şahin', email: 'elif@email.com', course: 'Python ML' },
    ];

    const courses = [
        {
            id: 1,
            name: 'ChatGPT ile Prompt Engineering',
            modules: [
                {
                    id: 1,
                    name: 'Giriş & Temel Kavramlar',
                    lessons: [
                        { id: 1, name: 'ChatGPT Nedir?', type: 'video' },
                        { id: 2, name: 'İlk Promptunuzu Yazın', type: 'interactive' },
                        { id: 3, name: 'Temel Kavramlar Quiz', type: 'quiz' },
                    ],
                },
                {
                    id: 2,
                    name: 'İleri Teknikler',
                    lessons: [
                        { id: 4, name: 'Temperature & Top-p', type: 'video' },
                        { id: 5, name: 'Few-Shot Learning', type: 'video' },
                    ],
                },
            ],
        },
    ];

    const handleStudentToggle = (studentId: number) => {
        setSelectedStudents(prev =>
            prev.includes(studentId)
                ? prev.filter(id => id !== studentId)
                : [...prev, studentId]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const typeLabels = {
            lesson: 'Ders',
            homework: 'Ödev',
            quiz: 'Quiz',
        };

        toast({
            title: `${typeLabels[assignmentType]} Atandı! ✓`,
            description: `${selectedStudents.length} öğrenciye bildirim gönderildi.`,
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
                        <BookOpen className="h-10 w-10 text-gold" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">İçerik Ataması</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Öğrencilerinize ders, ödev veya quiz atayın
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="max-w-5xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Left Column - Content Selection */}
                            <div className="lg:col-span-2 space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>İçerik Seçimi</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <Tabs value={assignmentType} onValueChange={(v) => setAssignmentType(v as any)}>
                                            <TabsList className="grid w-full grid-cols-3">
                                                <TabsTrigger value="lesson">Ders Ata</TabsTrigger>
                                                <TabsTrigger value="homework">Ödev Gönder</TabsTrigger>
                                                <TabsTrigger value="quiz">Quiz Gönder</TabsTrigger>
                                            </TabsList>

                                            {/* Lesson Assignment */}
                                            <TabsContent value="lesson" className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <Label>Kurs Seçin</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Kurs seçin" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">ChatGPT ile Prompt Engineering</SelectItem>
                                                            <SelectItem value="2">Python ile Makine Öğrenmesi</SelectItem>
                                                            <SelectItem value="3">TensorFlow ile Derin Öğrenme</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Modül</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Modül seçin" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">Giriş & Temel Kavramlar</SelectItem>
                                                            <SelectItem value="2">İleri Teknikler</SelectItem>
                                                            <SelectItem value="3">Pratik Uygulamalar</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label>Ders/Dersler</Label>
                                                    <div className="border rounded-lg p-3 space-y-2 max-h-[300px] overflow-y-auto">
                                                        {[1, 2, 3, 4, 5].map((i) => (
                                                            <div key={i} className="flex items-center space-x-3 p-2 hover:bg-muted rounded">
                                                                <Checkbox id={`lesson-${i}`} />
                                                                <label htmlFor={`lesson-${i}`} className="flex-1 cursor-pointer text-sm">
                                                                    Ders {i}: Örnek Ders İçeriği
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="deadline">Tamamlanma Tarihi (Opsiyonel)</Label>
                                                    <Input id="deadline" type="date" />
                                                </div>
                                            </TabsContent>

                                            {/* Homework Assignment */}
                                            <TabsContent value="homework" className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="hw-title">Ödev Başlığı *</Label>
                                                    <Input
                                                        id="hw-title"
                                                        placeholder="Örn: Hafta 1 - Prompt Engineering Uygulaması"
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="hw-description">Ödev Açıklaması *</Label>
                                                    <Textarea
                                                        id="hw-description"
                                                        placeholder="Ödev detaylarını yazın..."
                                                        rows={6}
                                                        required
                                                    />
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="hw-deadline">Teslim Tarihi *</Label>
                                                        <Input id="hw-deadline" type="datetime-local" required />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="hw-points">Puan</Label>
                                                        <Input
                                                            id="hw-points"
                                                            type="number"
                                                            placeholder="100"
                                                            defaultValue="100"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="hw-files">Ek Dosyalar (URL)</Label>
                                                    <Input
                                                        id="hw-files"
                                                        placeholder="https://..."
                                                    />
                                                </div>

                                                <div className="flex items-center space-x-2">
                                                    <Checkbox id="allow-late" />
                                                    <label
                                                        htmlFor="allow-late"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        Geç teslime izin ver
                                                    </label>
                                                </div>
                                            </TabsContent>

                                            {/* Quiz Assignment */}
                                            <TabsContent value="quiz" className="space-y-4 mt-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="quiz-title">Quiz Başlığı *</Label>
                                                    <Input
                                                        id="quiz-title"
                                                        placeholder="Örn: Modül 1 - Değerlendirme Testi"
                                                        required
                                                    />
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="quiz-course">Kurs</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Kurs seçin" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="1">ChatGPT ile Prompt Engineering</SelectItem>
                                                            <SelectItem value="2">Python ile Makine Öğrenmesi</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="quiz-questions">Soru Sayısı</Label>
                                                        <Input
                                                            id="quiz-questions"
                                                            type="number"
                                                            placeholder="10"
                                                            defaultValue="10"
                                                        />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="quiz-duration">Süre (Dakika)</Label>
                                                        <Input
                                                            id="quiz-duration"
                                                            type="number"
                                                            placeholder="30"
                                                            defaultValue="30"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="quiz-deadline">Son Giriş Tarihi</Label>
                                                        <Input id="quiz-deadline" type="datetime-local" />
                                                    </div>

                                                    <div className="space-y-2">
                                                        <Label htmlFor="quiz-pass">Geçme Puanı (%)</Label>
                                                        <Input
                                                            id="quiz-pass"
                                                            type="number"
                                                            placeholder="70"
                                                            defaultValue="70"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    <Label>Quiz Ayarları</Label>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="shuffle" defaultChecked />
                                                            <label htmlFor="shuffle" className="text-sm">
                                                                Soruları karıştır
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="show-answers" />
                                                            <label htmlFor="show-answers" className="text-sm">
                                                                Test bitince cevapları göster
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <Checkbox id="multiple-attempts" />
                                                            <label htmlFor="multiple-attempts" className="text-sm">
                                                                Birden fazla deneme hakkı
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle>Ek Bilgiler</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="note">Not (Öğrencilere Mesaj)</Label>
                                            <Textarea
                                                id="note"
                                                placeholder="Öğrencilere gösterilecek ek açıklama veya motivasyon mesajı..."
                                                rows={3}
                                            />
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="notify" defaultChecked />
                                            <label htmlFor="notify" className="text-sm font-medium">
                                                Öğrencilere email bildirimi gönder
                                            </label>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column - Student Selection */}
                            <div className="space-y-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-base">
                                            Öğrenci Seçimi
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <div className="space-y-2">
                                            <Label>Kurs Filtrele</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Tüm kurslar" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="all">Tüm Kurslar</SelectItem>
                                                    <SelectItem value="1">ChatGPT Kursu</SelectItem>
                                                    <SelectItem value="2">Python ML</SelectItem>
                                                    <SelectItem value="3">TensorFlow</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <Label>Öğrenciler</Label>
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => {
                                                        if (selectedStudents.length === students.length) {
                                                            setSelectedStudents([]);
                                                        } else {
                                                            setSelectedStudents(students.map(s => s.id));
                                                        }
                                                    }}
                                                >
                                                    {selectedStudents.length === students.length ? 'Hiçbiri' : 'Tümü'}
                                                </Button>
                                            </div>

                                            <div className="border rounded-lg p-2 max-h-[400px] overflow-y-auto">
                                                {students.map((student) => (
                                                    <div
                                                        key={student.id}
                                                        className="flex items-center space-x-3 p-2 hover:bg-muted rounded"
                                                    >
                                                        <Checkbox
                                                            id={`student-${student.id}`}
                                                            checked={selectedStudents.includes(student.id)}
                                                            onCheckedChange={() => handleStudentToggle(student.id)}
                                                        />
                                                        <label
                                                            htmlFor={`student-${student.id}`}
                                                            className="flex-1 cursor-pointer"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                handleStudentToggle(student.id);
                                                            }}
                                                        >
                                                            <div className="font-medium text-sm">{student.name}</div>
                                                            <div className="text-xs text-muted-foreground">
                                                                {student.course}
                                                            </div>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedStudents.length > 0 && (
                                            <div className="p-3 bg-primary/10 rounded-lg">
                                                <p className="text-sm text-primary font-medium">
                                                    ✓ {selectedStudents.length} öğrenci seçildi
                                                </p>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Action Buttons */}
                                <div className="space-y-3">
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary to-secondary"
                                        disabled={selectedStudents.length === 0}
                                    >
                                        <Send className="mr-2 h-4 w-4" />
                                        Ata & Bildir
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                        onClick={() => navigate('/teacher/students')}
                                    >
                                        İptal
                                    </Button>
                                </div>

                                {/* Summary */}
                                <Card className="bg-muted/50">
                                    <CardContent className="p-4 space-y-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">Seçili Öğrenci:</span>
                                            <span className="font-bold">{selectedStudents.length}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-muted-foreground">İçerik Tipi:</span>
                                            <span className="font-bold capitalize">
                                                {assignmentType === 'lesson' && 'Ders'}
                                                {assignmentType === 'homework' && 'Ödev'}
                                                {assignmentType === 'quiz' && 'Quiz'}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
