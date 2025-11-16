import { useState } from 'react';
import { Brain, Users, Clock, Award, Star, Filter, Search, BookOpen, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Link } from 'react-router-dom';

export default function Courses() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const courses = [
        {
            id: 1,
            title: 'ChatGPT ile Prompt Engineering',
            description: 'ChatGPT\'yi etkili kullanmak için prompt yazma tekniklerini öğrenin',
            instructor: 'Dr. Ayşe Yılmaz',
            level: 'beginner',
            category: 'AI Basics',
            duration: '4 hafta',
            lessons: 24,
            students: 1240,
            rating: 4.9,
            xp: 250,
            price: 'Ücretsiz',
            image: '🤖',
        },
        {
            id: 2,
            title: 'Python ile Makine Öğrenmesi',
            description: 'Sıfırdan makine öğrenmesi algoritmalarını Python ile kodlayın',
            instructor: 'Prof. Mehmet Demir',
            level: 'intermediate',
            category: 'Machine Learning',
            duration: '8 hafta',
            lessons: 42,
            students: 856,
            rating: 4.7,
            xp: 500,
            price: '₺299',
        },
        {
            id: 3,
            title: 'TensorFlow ile Derin Öğrenme',
            description: 'Sinir ağları ve derin öğrenme modellerini TensorFlow ile oluşturun',
            instructor: 'Dr. Zeynep Kaya',
            level: 'advanced',
            category: 'Deep Learning',
            duration: '12 hafta',
            lessons: 68,
            students: 432,
            rating: 4.8,
            xp: 1000,
            price: '₺499',
        },
        {
            id: 4,
            title: 'Doğal Dil İşleme (NLP)',
            description: 'Metin analizi, sentiment analysis ve dil modelleri',
            instructor: 'Dr. Can Arslan',
            level: 'intermediate',
            category: 'NLP',
            duration: '6 hafta',
            lessons: 36,
            students: 624,
            rating: 4.6,
            xp: 400,
            price: '₺349',
        },
        {
            id: 5,
            title: 'Computer Vision Temelleri',
            description: 'Görüntü işleme ve nesne tanıma algoritmaları',
            instructor: 'Prof. Elif Özkan',
            level: 'intermediate',
            category: 'Computer Vision',
            duration: '7 hafta',
            lessons: 38,
            students: 518,
            rating: 4.7,
            xp: 450,
            price: '₺399',
        },
        {
            id: 6,
            title: 'AI Ethics ve Responsible AI',
            description: 'Yapay zeka etiği ve sorumlu AI geliştirme prensipleri',
            instructor: 'Dr. Ahmet Yıldız',
            level: 'beginner',
            category: 'AI Basics',
            duration: '3 hafta',
            lessons: 18,
            students: 892,
            rating: 4.8,
            xp: 200,
            price: 'Ücretsiz',
        },
    ];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = selectedDifficulty === 'all' || course.level === selectedDifficulty;
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        return matchesSearch && matchesDifficulty && matchesCategory;
    });

    const getDifficultyBadge = (level: string) => {
        const colors = {
            beginner: 'bg-xp/20 text-xp',
            intermediate: 'bg-secondary/20 text-secondary',
            advanced: 'bg-streak/20 text-streak',
        };
        const labels = {
            beginner: 'Başlangıç',
            intermediate: 'Orta',
            advanced: 'İleri',
        };
        return (
            <Badge className={colors[level as keyof typeof colors]}>
                {labels[level as keyof typeof labels]}
            </Badge>
        );
    };

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-gradient">AI Kursları</span>
                        </h1>
                        <p className="text-xl text-muted-foreground mb-6">
                            Yapay zeka dünyasına adım atın! Başlangıçtan ileri seviyeye kadar tüm kurslar burada.
                        </p>
                        <div className="flex gap-4 text-sm">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <span><strong>15+</strong> Kurs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-secondary" />
                                <span><strong>5,000+</strong> Öğrenci</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="h-5 w-5 text-gold" />
                                <span><strong>4.8</strong> Ortalama Puan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Filters */}
                <Card className="mb-8">
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Kurs ara..."
                                    className="pl-10"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>

                            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                                <SelectTrigger>
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="Seviye" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Seviyeler</SelectItem>
                                    <SelectItem value="beginner">Başlangıç</SelectItem>
                                    <SelectItem value="intermediate">Orta</SelectItem>
                                    <SelectItem value="advanced">İleri</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <Filter className="mr-2 h-4 w-4" />
                                    <SelectValue placeholder="Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Tüm Kategoriler</SelectItem>
                                    <SelectItem value="AI Basics">AI Temelleri</SelectItem>
                                    <SelectItem value="Machine Learning">Makine Öğrenmesi</SelectItem>
                                    <SelectItem value="Deep Learning">Derin Öğrenme</SelectItem>
                                    <SelectItem value="NLP">Doğal Dil İşleme</SelectItem>
                                    <SelectItem value="Computer Vision">Bilgisayarlı Görü</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-muted-foreground">
                        <strong className="text-foreground">{filteredCourses.length}</strong> kurs bulundu
                    </p>
                    <Select defaultValue="popular">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sırala" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="popular">En Popüler</SelectItem>
                            <SelectItem value="rating">En Yüksek Puan</SelectItem>
                            <SelectItem value="newest">En Yeni</SelectItem>
                            <SelectItem value="price-low">Fiyat: Düşük-Yüksek</SelectItem>
                            <SelectItem value="price-high">Fiyat: Yüksek-Düşük</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Courses Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <Card key={course.id} className="group hover:border-primary/50 transition-all hover:-translate-y-1 overflow-hidden">
                            <CardHeader className="pb-4">
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                                    {course.image || '📚'}
                                </div>
                                <div className="flex items-center justify-between mb-2">
                                    {getDifficultyBadge(course.level)}
                                    <Badge variant="outline">{course.category}</Badge>
                                </div>
                                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                                    {course.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {course.description}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Brain className="h-4 w-4" />
                                    <span>{course.instructor}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="flex items-center gap-1">
                                        <Users className="h-4 w-4 text-muted-foreground" />
                                        <span>{course.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-4 w-4 text-muted-foreground" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                                        <span>{course.lessons} ders</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 text-gold fill-gold" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <div>
                                        <div className="text-xs text-muted-foreground">Kazanç</div>
                                        <div className="font-bold text-xp">+{course.xp} XP</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-muted-foreground">Fiyat</div>
                                        <div className="font-bold text-lg">{course.price}</div>
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90" asChild>
                                    <Link to={`/course/${course.id}`}>
                                        Kursa Başla
                                        <TrendingUp className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <h3 className="text-xl font-bold mb-2">Kurs Bulunamadı</h3>
                        <p className="text-muted-foreground">
                            Aradığınız kriterlere uygun kurs bulunamadı. Filtreleri değiştirmeyi deneyin.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
