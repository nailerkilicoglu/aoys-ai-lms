import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    BookOpen, CheckCircle, Lock, Play, FileText, Code, Trophy,
    Clock, Users, Star, Award, ArrowLeft, ChevronRight, Download
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

export default function CourseDetail() {
    const { id } = useParams();
    const { toast } = useToast();
    const [currentLesson, setCurrentLesson] = useState(1);

    // Mock course data
    const course = {
        id: id || '1',
        title: 'ChatGPT ile Prompt Engineering',
        description: 'ChatGPT\'yi etkili kullanmak için prompt yazma tekniklerini öğrenin. Bu kurs, temel prompt yazımından ileri seviye tekniklere kadar her şeyi kapsar.',
        instructor: 'Dr. Ayşe Yılmaz',
        instructorBio: 'AI araştırmacısı, 10+ yıl deneyim',
        instructorAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ayse',
        level: 'Başlangıç',
        duration: '4 hafta',
        totalLessons: 24,
        completedLessons: 8,
        students: 1240,
        rating: 4.9,
        xpReward: 250,
        thumbnail: '🤖',
        category: 'AI Basics',
        skills: ['Prompt Engineering', 'ChatGPT', 'AI Kullanımı', 'Metin Üretimi'],
        requirements: ['Temel bilgisayar kullanımı', 'ChatGPT hesabı (ücretsiz)'],
    };

    const modules = [
        {
            id: 1,
            title: 'Giriş ve Temel Kavramlar',
            lessons: [
                { id: 1, title: 'Kursa Hoş Geldiniz', type: 'video', duration: '5 dk', completed: true, unlocked: true },
                { id: 2, title: 'ChatGPT Nedir?', type: 'video', duration: '8 dk', completed: true, unlocked: true },
                { id: 3, title: 'İlk Promptunuzu Yazın', type: 'interactive', duration: '10 dk', completed: true, unlocked: true },
                { id: 4, title: 'Quiz: Temel Kavramlar', type: 'quiz', duration: '5 dk', completed: false, unlocked: true },
            ],
        },
        {
            id: 2,
            title: 'Etkili Prompt Yazma Teknikleri',
            lessons: [
                { id: 5, title: 'Net ve Spesifik Olmak', type: 'video', duration: '12 dk', completed: true, unlocked: true },
                { id: 6, title: 'Context Sağlamak', type: 'video', duration: '10 dk', completed: true, unlocked: true },
                { id: 7, title: 'Rol Tanımlama', type: 'interactive', duration: '15 dk', completed: true, unlocked: true },
                { id: 8, title: 'Pratik: Rol Oyunları', type: 'code', duration: '20 dk', completed: true, unlocked: true },
                { id: 9, title: 'Quiz: Teknikler', type: 'quiz', duration: '5 dk', completed: false, unlocked: true },
            ],
        },
        {
            id: 3,
            title: 'İleri Seviye Stratejiler',
            lessons: [
                { id: 10, title: 'Chain of Thought', type: 'video', duration: '15 dk', completed: false, unlocked: true },
                { id: 11, title: 'Few-Shot Learning', type: 'video', duration: '12 dk', completed: false, unlocked: true },
                { id: 12, title: 'System Messages Kullanımı', type: 'interactive', duration: '18 dk', completed: false, unlocked: false },
                { id: 13, title: 'Temperature & Top-p Ayarları', type: 'code', duration: '20 dk', completed: false, unlocked: false },
                { id: 14, title: 'Quiz: İleri Teknikler', type: 'quiz', duration: '10 dk', completed: false, unlocked: false },
            ],
        },
        {
            id: 4,
            title: 'Gerçek Dünya Uygulamaları',
            lessons: [
                { id: 15, title: 'İçerik Üretimi', type: 'video', duration: '15 dk', completed: false, unlocked: false },
                { id: 16, title: 'Kod Yazımı Yardımı', type: 'code', duration: '25 dk', completed: false, unlocked: false },
                { id: 17, title: 'Veri Analizi', type: 'interactive', duration: '20 dk', completed: false, unlocked: false },
                { id: 18, title: 'Proje: Kişisel Asistan', type: 'project', duration: '60 dk', completed: false, unlocked: false },
                { id: 19, title: 'Final Quiz', type: 'quiz', duration: '15 dk', completed: false, unlocked: false },
            ],
        },
    ];

    const getLessonIcon = (type: string) => {
        switch (type) {
            case 'video': return <Play className="h-4 w-4" />;
            case 'quiz': return <FileText className="h-4 w-4" />;
            case 'code': return <Code className="h-4 w-4" />;
            case 'interactive': return <Trophy className="h-4 w-4" />;
            case 'project': return <Award className="h-4 w-4" />;
            default: return <BookOpen className="h-4 w-4" />;
        }
    };

    const handleStartLesson = (lessonId: number, unlocked: boolean) => {
        if (!unlocked) {
            toast({
                title: "Ders Kilitli 🔒",
                description: "Önceki dersleri tamamlayın.",
                variant: "destructive",
            });
            return;
        }
        setCurrentLesson(lessonId);
        toast({
            title: "Ders Başladı! 🎓",
            description: "+25 XP kazanabilirsiniz!",
        });
    };

    const progress = (course.completedLessons / course.totalLessons) * 100;

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-b border-border">
                <div className="container mx-auto px-4 py-8">
                    <Button variant="ghost" asChild className="mb-4">
                        <Link to="/courses">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Kurslara Dön
                        </Link>
                    </Button>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Course Info */}
                        <div className="md:col-span-2">
                            <Badge className="mb-4">{course.category}</Badge>
                            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
                            <p className="text-xl text-muted-foreground mb-6">
                                {course.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-6 text-sm mb-6">
                                <div className="flex items-center gap-2">
                                    <img src={course.instructorAvatar} alt={course.instructor} className="h-8 w-8 rounded-full" />
                                    <span className="font-medium">{course.instructor}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-muted-foreground" />
                                    <span>{course.students.toLocaleString()} öğrenci</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Star className="h-4 w-4 text-gold fill-gold" />
                                    <span>{course.rating} puan</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                    <span>{course.totalLessons} ders</span>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">İlerleme</span>
                                    <span className="font-semibold">{progress.toFixed(0)}%</span>
                                </div>
                                <Progress value={progress} className="h-3" />
                                <p className="text-sm text-muted-foreground">
                                    {course.completedLessons} / {course.totalLessons} ders tamamlandı
                                </p>
                            </div>
                        </div>

                        {/* Course Card */}
                        <div>
                            <Card className="sticky top-4">
                                <CardContent className="p-6">
                                    <div className="text-6xl text-center mb-4">{course.thumbnail}</div>
                                    <div className="space-y-4 mb-6">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Seviye</span>
                                            <Badge variant="secondary">{course.level}</Badge>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">XP Ödülü</span>
                                            <Badge className="bg-xp/20 text-xp">+{course.xpReward} XP</Badge>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-gradient-to-r from-primary to-secondary mb-3">
                                        <Play className="mr-2 h-4 w-4" />
                                        Kaldığın Yerden Devam Et
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <Download className="mr-2 h-4 w-4" />
                                        Sertifika İndir
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Course Content */}
                    <div className="md:col-span-2 space-y-6">
                        <Tabs defaultValue="curriculum">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="curriculum">Müfredat</TabsTrigger>
                                <TabsTrigger value="about">Hakkında</TabsTrigger>
                                <TabsTrigger value="reviews">Yorumlar</TabsTrigger>
                            </TabsList>

                            <TabsContent value="curriculum" className="space-y-4 mt-6">
                                <h2 className="text-2xl font-bold mb-4">Kurs İçeriği</h2>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {modules.map((module) => (
                                        <AccordionItem key={module.id} value={`module-${module.id}`} className="border rounded-lg">
                                            <AccordionTrigger className="px-4 hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <div className="text-2xl">{module.id}</div>
                                                    <div className="text-left">
                                                        <div className="font-semibold">{module.title}</div>
                                                        <div className="text-sm text-muted-foreground">
                                                            {module.lessons.length} ders
                                                        </div>
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="px-4 pb-4">
                                                <div className="space-y-2 mt-2">
                                                    {module.lessons.map((lesson) => (
                                                        <div
                                                            key={lesson.id}
                                                            className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${lesson.unlocked
                                                                    ? 'hover:border-primary/50 cursor-pointer'
                                                                    : 'opacity-50 cursor-not-allowed'
                                                                } ${lesson.completed ? 'bg-xp/5 border-xp/30' : ''}`}
                                                            onClick={() => handleStartLesson(lesson.id, lesson.unlocked)}
                                                        >
                                                            <div className="flex items-center gap-3 flex-1">
                                                                <div className={lesson.completed ? 'text-xp' : 'text-muted-foreground'}>
                                                                    {lesson.completed ? (
                                                                        <CheckCircle className="h-5 w-5" />
                                                                    ) : lesson.unlocked ? (
                                                                        getLessonIcon(lesson.type)
                                                                    ) : (
                                                                        <Lock className="h-5 w-5" />
                                                                    )}
                                                                </div>
                                                                <div>
                                                                    <div className="font-medium">{lesson.title}</div>
                                                                    <div className="text-xs text-muted-foreground flex items-center gap-2">
                                                                        <span>{lesson.duration}</span>
                                                                        <span>•</span>
                                                                        <span className="capitalize">{lesson.type}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {lesson.unlocked && !lesson.completed && (
                                                                <ChevronRight className="h-5 w-5 text-muted-foreground" />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </TabsContent>

                            <TabsContent value="about" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Kurs Hakkında</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div>
                                            <h3 className="font-semibold mb-2">Ne Öğreneceksiniz?</h3>
                                            <ul className="space-y-2">
                                                {course.skills.map((skill, i) => (
                                                    <li key={i} className="flex items-center gap-2">
                                                        <CheckCircle className="h-4 w-4 text-xp" />
                                                        <span>{skill}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold mb-2">Gereksinimler</h3>
                                            <ul className="space-y-2">
                                                {course.requirements.map((req, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                                        <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="font-semibold mb-2">Eğitmen</h3>
                                            <div className="flex items-start gap-4">
                                                <img
                                                    src={course.instructorAvatar}
                                                    alt={course.instructor}
                                                    className="h-16 w-16 rounded-full"
                                                />
                                                <div>
                                                    <div className="font-semibold">{course.instructor}</div>
                                                    <div className="text-sm text-muted-foreground">{course.instructorBio}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Öğrenci Yorumları</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {[
                                            { name: 'Ahmet Y.', rating: 5, comment: 'Harika bir kurs! Prompt engineering konusunda çok şey öğrendim.', date: '2 gün önce' },
                                            { name: 'Zeynep K.', rating: 5, comment: 'Dr. Ayşe\'nin anlatımı çok açık ve anlaşılır. Kesinlikle tavsiye ederim.', date: '1 hafta önce' },
                                            { name: 'Mehmet D.', rating: 4, comment: 'İyi bir başlangıç kursu. Daha fazla pratik örnek olabilirdi.', date: '2 hafta önce' },
                                        ].map((review, i) => (
                                            <div key={i} className="border-b last:border-0 pb-4 last:pb-0">
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="font-semibold">{review.name}</div>
                                                    <div className="flex items-center gap-1">
                                                        {Array.from({ length: 5 }).map((_, j) => (
                                                            <Star
                                                                key={j}
                                                                className={`h-4 w-4 ${j < review.rating ? 'text-gold fill-gold' : 'text-muted'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-muted-foreground mb-1">{review.comment}</p>
                                                <p className="text-xs text-muted-foreground">{review.date}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-gold" />
                                    Başarılarınız
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">Tamamlanan Dersler</span>
                                        <Badge className="bg-xp/20 text-xp">{course.completedLessons}</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">Kazanılan XP</span>
                                        <Badge className="bg-gold/20 text-gold">
                                            {Math.floor((course.completedLessons / course.totalLessons) * course.xpReward)} XP
                                        </Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm">Quiz Puanı</span>
                                        <Badge variant="secondary">87%</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Sıradaki Ders</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="font-medium">İleri Seviye Stratejiler</div>
                                    <p className="text-sm text-muted-foreground">Chain of Thought - 15 dk</p>
                                    <Button className="w-full" size="sm">
                                        <Play className="mr-2 h-4 w-4" />
                                        Başla
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
