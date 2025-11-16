import { PlusCircle, BookOpen, ArrowRight, ArrowLeft, Check, Users, Settings as SettingsIcon, Sparkles, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useTeacherStore } from '@/store/teacherStore';
import { Checkbox } from '@/components/ui/checkbox';

export default function CreateCourse() {
    const { toast } = useToast();
    const navigate = useNavigate();
    const students = useTeacherStore((state) => state.students);
    const [currentStep, setCurrentStep] = useState(1);
    const [courseType, setCourseType] = useState<'individual' | 'classroom'>('individual');
    const [learningPath, setLearningPath] = useState('');
    const [selectedStudents, setSelectedStudents] = useState<number[]>([]);

    const steps = [
        { number: 1, title: 'Öğrenim Modeli', icon: BookOpen },
        { number: 2, title: 'Türkçe K-12 YZÖ Müfredatı', icon: SettingsIcon },
        { number: 3, title: 'Dil ve Altyazı', icon: Sparkles },
        { number: 4, title: 'Takvim ve Program', icon: Users },
        { number: 5, title: 'Kurs Bilgileri', icon: BookOpen },
        { number: 6, title: 'Öğrenci Davet', icon: Users },
        { number: 7, title: 'Önizle ve Yayınla', icon: Check },
    ];

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        toast({
            title: "Kurs Oluşturuldu! 🎉",
            description: "Kursunuz başarıyla oluşturuldu ve öğrencilere açıldı.",
        });
        setTimeout(() => navigate('/dashboard/teacher'), 1500);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-br from-gold/20 via-background to-primary/20 border-b border-border">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex items-center gap-3 mb-2">
                        <PlusCircle className="h-8 w-8 text-gold" />
                        <h1 className="text-3xl font-bold">
                            <span className="text-gradient">Sınıf Oluştur</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Adım {currentStep} / {steps.length}: {steps[currentStep - 1].title}
                    </p>
                </div>
            </div>

            {/* Progress Steps */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between max-w-4xl mx-auto mb-8">
                    {steps.map((step, index) => (
                        <div key={step.number} className="flex items-center">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${currentStep > step.number
                                        ? 'bg-xp text-white'
                                        : currentStep === step.number
                                            ? 'bg-primary text-white ring-4 ring-primary/20'
                                            : 'bg-muted text-muted-foreground'
                                        }`}
                                >
                                    {currentStep > step.number ? (
                                        <Check className="h-5 w-5" />
                                    ) : (
                                        step.number
                                    )}
                                </div>
                                <span className="text-xs mt-2 text-center hidden md:block max-w-[80px]">
                                    {step.title}
                                </span>
                            </div>
                            {index < steps.length - 1 && (
                                <div
                                    className={`h-1 w-12 md:w-20 mx-2 transition-all ${currentStep > step.number ? 'bg-xp' : 'bg-muted'
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="max-w-3xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                        </CardHeader>
                        <CardContent className="min-h-[400px]">
                            {/* Step 1: Sınıf Türü */}
                            {currentStep === 1 && (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground mb-6">
                                        Öğrencileriniz için en uygun öğrenme modelini seçin. Bireysel ilerlemede AI destekli kişiselleştirilmiş yol, eğitimci eşliğinde ise classroom planları ve öğretmen asistanı sizi destekler.
                                    </p>
                                    <RadioGroup value={courseType} onValueChange={(v) => setCourseType(v as any)}>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <label
                                                htmlFor="individual"
                                                className={`relative flex flex-col items-center p-8 border-2 rounded-lg cursor-pointer transition-all ${courseType === 'individual'
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-border hover:border-primary/50'
                                                    }`}
                                            >
                                                <RadioGroupItem value="individual" id="individual" className="sr-only" />
                                                <div className="w-32 h-32 mb-4 bg-muted rounded-lg flex items-center justify-center">
                                                    <BookOpen className="h-16 w-16 text-primary" />
                                                </div>
                                                <h3 className="text-lg font-semibold mb-2">Bireysel İlerleme</h3>
                                                <p className="text-sm text-muted-foreground text-center">
                                                    Oyun tabanlı öğrenme, AI destekli kişiselleştirilmiş yol, performansa göre ilerleme
                                                </p>
                                                {courseType === 'individual' && (
                                                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                                        <Check className="h-4 w-4 text-white" />
                                                    </div>
                                                )}
                                            </label>

                                            <label
                                                htmlFor="classroom"
                                                className={`relative flex flex-col items-center p-8 border-2 rounded-lg cursor-pointer transition-all ${courseType === 'classroom'
                                                    ? 'border-primary bg-primary/5'
                                                    : 'border-border hover:border-primary/50'
                                                    }`}
                                            >
                                                <RadioGroupItem value="classroom" id="classroom" className="sr-only" />
                                                <div className="w-32 h-32 mb-4 bg-muted rounded-lg flex items-center justify-center">
                                                    <Users className="h-16 w-16 text-secondary" />
                                                </div>
                                                <h3 className="text-lg font-semibold mb-2">Eğitimci Eşliğinde</h3>
                                                <p className="text-sm text-muted-foreground text-center">
                                                    Classroom planları mevcut, AI öğretmen asistanı, veri bilimi odaklı classrooms paneli
                                                </p>
                                                {courseType === 'classroom' && (
                                                    <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                                        <Check className="h-4 w-4 text-white" />
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            )}

                            {/* Step 2: Kurs Seç */}
                            {currentStep === 2 && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="learning-path">Türkçe K-12 YZÖ Müfredatı - Öğrenme Yolunu Seçin</Label>
                                        <Select value={learningPath} onValueChange={setLearningPath}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Bir öğrenme yolu seçin" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="k12-ai-fundamentals">📚 K-12 Yapay Zeka Temelleri (YZÖ Müfredatı)</SelectItem>
                                                <SelectItem value="k12-coding">💻 K-12 Kodlama ve Algoritma</SelectItem>
                                                <SelectItem value="ai-fundamentals">🤖 Yapay Zeka Temelleri (Üniversite)</SelectItem>
                                                <SelectItem value="machine-learning">📊 Makine Öğrenmesi</SelectItem>
                                                <SelectItem value="deep-learning">🧠 Derin Öğrenme</SelectItem>
                                                <SelectItem value="nlp">💬 Doğal Dil İşleme</SelectItem>
                                                <SelectItem value="computer-vision">👁️ Bilgisayarlı Görü</SelectItem>
                                                <SelectItem value="custom">✨ Özel Kurs Oluştur</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {learningPath && (
                                        <Card className="bg-muted/50">
                                            <CardContent className="pt-6">
                                                <h4 className="font-semibold mb-2">🎯 Seçilen Yol Hakkında</h4>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Bu öğrenme yolu Türkçe K-12 YZÖ müfredatına uygun olarak 12 modül ve 48 dersten oluşmaktadır. Oyun tabanlı öğrenme ile öğrenciler rozetler kazanır ve liderlik tablosunda ilerler.
                                                </p>
                                                <div className="grid grid-cols-4 gap-3 text-center">
                                                    <div>
                                                        <div className="text-2xl font-bold text-primary">12</div>
                                                        <div className="text-xs text-muted-foreground">Modül</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-secondary">48</div>
                                                        <div className="text-xs text-muted-foreground">Ders</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-gold">6-8</div>
                                                        <div className="text-xs text-muted-foreground">Hafta</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-2xl font-bold text-xp">🎮</div>
                                                        <div className="text-xs text-muted-foreground">Oyunlaştırma</div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Sparkles className="h-4 w-4 text-primary" />
                                                        <span className="font-medium">AI Özellikler:</span>
                                                        <span className="text-muted-foreground">Performansa göre kişiselleştirilmiş yol, akıllı soru üretimi</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            )}

                            {/* Step 3: Dil Seç */}
                            {currentStep === 3 && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label>Kurs Dili (K-12 Türkçe YZÖ Müfredatı Destekli)</Label>
                                        <RadioGroup defaultValue="tr">
                                            <div className="space-y-3">
                                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                                                    <RadioGroupItem value="tr" id="tr" />
                                                    <div className="flex-1">
                                                        <div className="font-medium">Türkçe (Önerilen)</div>
                                                        <div className="text-sm text-muted-foreground">K-12 YZÖ müfredatına uygun, uzman seviyesi Türkçe içerik</div>
                                                    </div>
                                                    <span className="text-2xl">🇹🇷</span>
                                                </label>
                                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                                                    <RadioGroupItem value="en" id="en" />
                                                    <div className="flex-1">
                                                        <div className="font-medium">English</div>
                                                        <div className="text-sm text-muted-foreground">English as primary language</div>
                                                    </div>
                                                    <span className="text-2xl">🇬🇧</span>
                                                </label>
                                                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                                                    <RadioGroupItem value="both" id="both" />
                                                    <div className="flex-1">
                                                        <div className="font-medium">Çift Dilli</div>
                                                        <div className="text-sm text-muted-foreground">Türkçe ve İngilizce altyazı</div>
                                                    </div>
                                                    <span className="text-2xl">🌐</span>
                                                </label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Takvim */}
                            {currentStep === 4 && (
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="start-date">Başlangıç Tarihi</Label>
                                            <Input id="start-date" type="date" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="end-date">Bitiş Tarihi</Label>
                                            <Input id="end-date" type="date" />
                                        </div>
                                    </div>

                                    {courseType === 'classroom' && (
                                        <>
                                            <div className="space-y-2">
                                                <Label>Ders Günleri</Label>
                                                <div className="grid grid-cols-7 gap-2">
                                                    {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                                                        <Button
                                                            key={day}
                                                            variant="outline"
                                                            className="h-12"
                                                            type="button"
                                                        >
                                                            {day}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="lesson-time">Ders Saati</Label>
                                                    <Input id="lesson-time" type="time" defaultValue="09:00" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="duration">Süre (Dakika)</Label>
                                                    <Input id="duration" type="number" defaultValue="90" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Step 5: İçerik Detayları */}
                            {currentStep === 5 && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="course-name">Kurs Adı *</Label>
                                        <Input
                                            id="course-name"
                                            placeholder="Örn: Yapay Zeka Temelleri - 2024 Güz"
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Kurs Açıklaması</Label>
                                        <Textarea
                                            id="description"
                                            placeholder="Kursunuz hakkında kısa bir açıklama..."
                                            rows={4}
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="category">Kategori</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Kategori seçin" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ai">Yapay Zeka</SelectItem>
                                                    <SelectItem value="ml">Makine Öğrenmesi</SelectItem>
                                                    <SelectItem value="dl">Derin Öğrenme</SelectItem>
                                                    <SelectItem value="programming">Programlama</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="level">Seviye</Label>
                                            <Select>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seviye seçin" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="beginner">Başlangıç</SelectItem>
                                                    <SelectItem value="intermediate">Orta</SelectItem>
                                                    <SelectItem value="advanced">İleri</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 6: Davet Et */}
                            {currentStep === 6 && (
                                <div className="space-y-6">
                                    <p className="text-muted-foreground">
                                        Kursa eklemek istediğiniz öğrencileri seçin veya yeni öğrenci ekleyin
                                    </p>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <Label>Mevcut Öğrencileriniz ({students.length})</Label>
                                            <Button
                                                type="button"
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    if (selectedStudents.length === students.length) {
                                                        setSelectedStudents([]);
                                                    } else {
                                                        setSelectedStudents(students.map(s => s.id));
                                                    }
                                                }}
                                            >
                                                {selectedStudents.length === students.length ? 'Hiçbirini Seçme' : 'Tümünü Seç'}
                                            </Button>
                                        </div>
                                        <div className="border rounded-lg p-3 max-h-[300px] overflow-y-auto space-y-2">
                                            {students.length === 0 ? (
                                                <div className="text-center py-8 text-muted-foreground">
                                                    <p className="mb-2">Henüz öğrenciniz yok</p>
                                                    <Button size="sm" variant="outline" asChild>
                                                        <a href="/teacher/add-student" target="_blank">
                                                            <UserPlus className="mr-2 h-4 w-4" />
                                                            Yeni Öğrenci Ekle
                                                        </a>
                                                    </Button>
                                                </div>
                                            ) : (
                                                students.map((student) => (
                                                    <div
                                                        key={student.id}
                                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
                                                        onClick={() => {
                                                            setSelectedStudents(prev =>
                                                                prev.includes(student.id)
                                                                    ? prev.filter(id => id !== student.id)
                                                                    : [...prev, student.id]
                                                            );
                                                        }}
                                                    >
                                                        <Checkbox
                                                            checked={selectedStudents.includes(student.id)}
                                                            onCheckedChange={() => {
                                                                setSelectedStudents(prev =>
                                                                    prev.includes(student.id)
                                                                        ? prev.filter(id => id !== student.id)
                                                                        : [...prev, student.id]
                                                                );
                                                            }}
                                                        />
                                                        <div className="flex-1">
                                                            <div className="font-medium text-sm">{student.name}</div>
                                                            <div className="text-xs text-muted-foreground">{student.email}</div>
                                                        </div>
                                                        <Badge variant="outline" className="text-xs">
                                                            {student.enrolledCourses.length} kurs
                                                        </Badge>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        {selectedStudents.length > 0 && (
                                            <p className="text-sm text-primary font-medium">
                                                ✓ {selectedStudents.length} öğrenci seçildi
                                            </p>
                                        )}
                                    </div>

                                    <Card className="bg-muted/50">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <Sparkles className="h-4 w-4 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-1">Otomatik Davet</h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Girdiğiniz email adreslerine otomatik olarak davet gönderilecek. Öğrenciler daveti kabul edince kursa erişim sağlayacaklar.
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* Step 7: Önizle ve Yayınla */}
                            {currentStep === 7 && (
                                <div className="space-y-6">
                                    <div className="text-center py-8">
                                        <div className="w-20 h-20 bg-xp/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="h-10 w-10 text-xp" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2">Hadi Başlayalım!</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Kursunuz oluşturulmaya hazır. Aşağıdaki özeti kontrol edin.
                                        </p>
                                    </div>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="text-lg">Kurs Özeti</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-3">
                                            <div className="flex justify-between py-2 border-b">
                                                <span className="text-muted-foreground">Sınıf Türü:</span>
                                                <span className="font-medium">
                                                    {courseType === 'individual' ? 'Bireysel İlerleme' : 'Eğitimci Eşliğinde'}
                                                </span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b">
                                                <span className="text-muted-foreground">Öğrenme Yolu:</span>
                                                <span className="font-medium">Yapay Zeka Temelleri</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b">
                                                <span className="text-muted-foreground">Dil:</span>
                                                <span className="font-medium">Türkçe 🇹🇷</span>
                                            </div>
                                            <div className="flex justify-between py-2 border-b">
                                                <span className="text-muted-foreground">Tahmini Süre:</span>
                                                <span className="font-medium">6-8 Hafta</span>
                                            </div>
                                            <div className="flex justify-between py-2">
                                                <span className="text-muted-foreground">Öğrenci Sayısı:</span>
                                                <span className="font-medium">{selectedStudents.length} öğrenci</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-6">
                        <Button
                            variant="outline"
                            onClick={handlePrev}
                            disabled={currentStep === 1}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            İptal Et
                        </Button>

                        {currentStep < steps.length ? (
                            <Button
                                onClick={handleNext}
                                className="bg-gradient-to-r from-primary to-secondary"
                            >
                                Sonraki
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        ) : (
                            <Button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-xp to-gold"
                            >
                                <Check className="mr-2 h-4 w-4" />
                                Sonraki
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
