import { MessageSquare, Search, Filter, Clock, CheckCircle, Send, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export default function TeacherQuestions() {
    const { toast } = useToast();
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const [reply, setReply] = useState('');

    const questions = [
        {
            id: 1,
            student: 'Zeynep Özkan',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep',
            course: 'ChatGPT ile Prompt Engineering',
            question: 'Temperature parametresi nasıl kullanılır? 0 ile 1 arasındaki değerler tam olarak neyi etkiliyor?',
            time: '15 dk önce',
            status: 'pending',
            lesson: 'Temperature & Top-p Ayarları',
        },
        {
            id: 2,
            student: 'Can Arslan',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can',
            course: 'Python ile Makine Öğrenmesi',
            question: 'Overfitting sorununu nasıl çözebilirim? Model eğitim setinde çok iyi ama test setinde kötü performans gösteriyor.',
            time: '1 saat önce',
            status: 'pending',
            lesson: 'Model Değerlendirme',
        },
        {
            id: 3,
            student: 'Ayşe Demir',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ayse2',
            course: 'TensorFlow ile Derin Öğrenme',
            question: 'Batch normalization nedir ve neden kullanılır?',
            time: '3 saat önce',
            status: 'pending',
            lesson: 'CNN Mimarisi',
        },
        {
            id: 4,
            student: 'Mehmet Kaya',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet2',
            course: 'ChatGPT ile Prompt Engineering',
            question: 'Few-shot learning örnekleri için kaç tane örnek vermek idealdir?',
            time: '5 saat önce',
            status: 'answered',
            answer: 'Few-shot learning için genellikle 3-5 örnek yeterlidir. Çok fazla örnek vermek token limitini tüketebilir.',
            lesson: 'Few-Shot Learning',
        },
        {
            id: 5,
            student: 'Elif Yıldız',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif2',
            course: 'Python ile Makine Öğrenmesi',
            question: 'Random Forest ve Decision Tree arasındaki fark nedir?',
            time: '1 gün önce',
            status: 'answered',
            answer: 'Random Forest, birden fazla Decision Tree\'nin ensemble\'ıdır. Her ağaç farklı veri örnekleri ve özelliklerle eğitilir, sonuçlar ortalaması alınır.',
            lesson: 'Ensemble Methods',
        },
    ];

    const handleSendReply = (questionId: number) => {
        if (!reply.trim()) {
            toast({
                title: "Hata",
                description: "Lütfen bir yanıt yazın.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Yanıt Gönderildi! ✓",
            description: "Öğrenci email ile bilgilendirilecek.",
        });
        setReply('');
        setSelectedQuestion(null);
    };

    const pendingQuestions = questions.filter(q => q.status === 'pending');
    const answeredQuestions = questions.filter(q => q.status === 'answered');

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-3 mb-4">
                        <MessageSquare className="h-10 w-10 text-gold" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">Öğrenci Soruları</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Öğrencilerinizin sorularını yanıtlayın ve onları destekleyin
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-4">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Soru ara..."
                                    className="pl-10"
                                />
                            </div>

                            <Select defaultValue="all">
                                <SelectTrigger>
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Kurslar</SelectItem>
                                    <SelectItem value="chatgpt">ChatGPT Kursu</SelectItem>
                                    <SelectItem value="python">Python ML</SelectItem>
                                    <SelectItem value="tensorflow">TensorFlow</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select defaultValue="newest">
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="newest">En Yeni</SelectItem>
                                    <SelectItem value="oldest">En Eski</SelectItem>
                                    <SelectItem value="unanswered">Cevaplanmamış</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats */}
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <MessageSquare className="h-8 w-8 text-gold mx-auto mb-2" />
                            <div className="text-3xl font-bold">{pendingQuestions.length}</div>
                            <div className="text-sm text-muted-foreground">Bekleyen Sorular</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 text-center">
                            <CheckCircle className="h-8 w-8 text-xp mx-auto mb-2" />
                            <div className="text-3xl font-bold">{answeredQuestions.length}</div>
                            <div className="text-sm text-muted-foreground">Yanıtlanan</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6 text-center">
                            <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                            <div className="text-3xl font-bold">2.5 saat</div>
                            <div className="text-sm text-muted-foreground">Ort. Yanıt Süresi</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Questions List */}
                <Tabs defaultValue="pending" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="pending">
                            Bekleyen ({pendingQuestions.length})
                        </TabsTrigger>
                        <TabsTrigger value="answered">
                            Yanıtlanan ({answeredQuestions.length})
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="pending" className="space-y-4">
                        {pendingQuestions.map((q) => (
                            <Card
                                key={q.id}
                                className={`cursor-pointer transition-all ${selectedQuestion === q.id ? 'border-gold/50 bg-gold/5' : 'hover:border-primary/30'
                                    }`}
                                onClick={() => setSelectedQuestion(q.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={q.avatar} />
                                            <AvatarFallback>{q.student[0]}</AvatarFallback>
                                        </Avatar>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <div className="font-semibold">{q.student}</div>
                                                    <div className="text-sm text-muted-foreground">{q.course}</div>
                                                </div>
                                                <div className="text-right">
                                                    <Badge variant="outline" className="mb-1">
                                                        {q.lesson}
                                                    </Badge>
                                                    <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                                                        <Clock className="h-3 w-3" />
                                                        {q.time}
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm mb-4">{q.question}</p>

                                            {selectedQuestion === q.id && (
                                                <div className="mt-4 pt-4 border-t space-y-3">
                                                    <Textarea
                                                        placeholder="Yanıtınızı buraya yazın..."
                                                        value={reply}
                                                        onChange={(e) => setReply(e.target.value)}
                                                        rows={4}
                                                        className="resize-none"
                                                    />
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="outline" onClick={() => setSelectedQuestion(null)}>
                                                            İptal
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleSendReply(q.id)}
                                                            className="bg-gradient-to-r from-primary to-secondary"
                                                        >
                                                            <Send className="mr-2 h-4 w-4" />
                                                            Yanıtı Gönder
                                                        </Button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>

                    <TabsContent value="answered" className="space-y-4">
                        {answeredQuestions.map((q) => (
                            <Card key={q.id}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={q.avatar} />
                                            <AvatarFallback>{q.student[0]}</AvatarFallback>
                                        </Avatar>

                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <div>
                                                    <div className="font-semibold">{q.student}</div>
                                                    <div className="text-sm text-muted-foreground">{q.course}</div>
                                                </div>
                                                <div className="text-right">
                                                    <Badge className="mb-1 bg-xp/20 text-xp">
                                                        <CheckCircle className="h-3 w-3 mr-1" />
                                                        Yanıtlandı
                                                    </Badge>
                                                    <div className="text-xs text-muted-foreground flex items-center gap-1 justify-end">
                                                        <Clock className="h-3 w-3" />
                                                        {q.time}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-3">
                                                <div>
                                                    <div className="text-xs text-muted-foreground mb-1">Soru:</div>
                                                    <p className="text-sm">{q.question}</p>
                                                </div>

                                                <div className="p-3 bg-muted/50 rounded-lg">
                                                    <div className="text-xs text-muted-foreground mb-1">Yanıtınız:</div>
                                                    <p className="text-sm">{q.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
