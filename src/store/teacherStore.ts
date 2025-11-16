import { create } from 'zustand';

export interface Student {
    id: number;
    name: string;
    email: string;
    avatar: string;
    enrolledCourses: number[];
    courseNames: string[];
    completedCourses: number;
    totalProgress: number;
    xp: number;
    streak: number;
    lastActive: string;
    status: 'active' | 'inactive';
    joinedDate: string;
    // Detailed performance data
    badges: number;
    totalLessonsCompleted: number;
    totalQuizzesCompleted: number;
    averageQuizScore: number;
    weeklyActivity: { day: string; lessons: number }[];
    recentActivity: { date: string; action: string; item: string }[];
}

interface TeacherStore {
    students: Student[];
    addStudent: (student: Omit<Student, 'id' | 'joinedDate' | 'lastActive' | 'status' | 'totalProgress' | 'completedCourses' | 'xp' | 'streak' | 'badges' | 'totalLessonsCompleted' | 'totalQuizzesCompleted' | 'averageQuizScore' | 'weeklyActivity' | 'recentActivity'>) => void;
    getStudentById: (id: number) => Student | undefined;
    updateStudent: (id: number, updates: Partial<Student>) => void;
}

// Mock initial students
const mockStudents: Student[] = [
    {
        id: 1,
        name: 'Ayşe Yılmaz',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ayse',
        email: 'ayse.yilmaz@email.com',
        enrolledCourses: [1, 2, 3],
        courseNames: ['ChatGPT ile Prompt Engineering', 'Python ile Makine Öğrenmesi', 'TensorFlow ile Derin Öğrenme'],
        completedCourses: 1,
        totalProgress: 78,
        xp: 2450,
        streak: 15,
        lastActive: '2 saat önce',
        status: 'active',
        joinedDate: '2024-09-15',
        badges: 8,
        totalLessonsCompleted: 45,
        totalQuizzesCompleted: 12,
        averageQuizScore: 87,
        weeklyActivity: [
            { day: 'Pzt', lessons: 3 },
            { day: 'Sal', lessons: 5 },
            { day: 'Çar', lessons: 2 },
            { day: 'Per', lessons: 4 },
            { day: 'Cum', lessons: 6 },
            { day: 'Cmt', lessons: 1 },
            { day: 'Paz', lessons: 0 },
        ],
        recentActivity: [
            { date: '16 Kas 2025, 14:30', action: 'Ders Tamamladı', item: 'Prompt Engineering Temelleri' },
            { date: '16 Kas 2025, 10:15', action: 'Quiz Çözdü', item: 'ChatGPT Temel Kavramlar - %92' },
            { date: '15 Kas 2025, 16:45', action: 'Rozet Kazandı', item: '🏆 Hızlı Öğrenen' },
            { date: '15 Kas 2025, 09:20', action: 'Ödev Teslim Etti', item: 'Hafta 2 - Pratik Uygulama' },
        ],
    },
    {
        id: 2,
        name: 'Mehmet Demir',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mehmet',
        email: 'mehmet.demir@email.com',
        enrolledCourses: [2, 4],
        courseNames: ['Python ile Makine Öğrenmesi', 'NLP & Metin Analizi'],
        completedCourses: 2,
        totalProgress: 100,
        xp: 3200,
        streak: 28,
        lastActive: '1 saat önce',
        status: 'active',
        joinedDate: '2024-08-10',
        badges: 15,
        totalLessonsCompleted: 68,
        totalQuizzesCompleted: 18,
        averageQuizScore: 94,
        weeklyActivity: [
            { day: 'Pzt', lessons: 4 },
            { day: 'Sal', lessons: 5 },
            { day: 'Çar', lessons: 6 },
            { day: 'Per', lessons: 5 },
            { day: 'Cum', lessons: 4 },
            { day: 'Cmt', lessons: 2 },
            { day: 'Paz', lessons: 3 },
        ],
        recentActivity: [
            { date: '16 Kas 2025, 15:00', action: 'Kurs Tamamladı', item: 'Python ile Makine Öğrenmesi' },
            { date: '16 Kas 2025, 12:30', action: 'Quiz Çözdü', item: 'NLP Algoritmaları - %96' },
            { date: '15 Kas 2025, 18:00', action: 'Rozet Kazandı', item: '🎓 Kurs Şampiyonu' },
        ],
    },
    {
        id: 3,
        name: 'Zeynep Kaya',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=zeynep',
        email: 'zeynep.kaya@email.com',
        enrolledCourses: [1, 2, 3, 5],
        courseNames: ['ChatGPT ile Prompt Engineering', 'Python ile Makine Öğrenmesi', 'TensorFlow ile Derin Öğrenme', 'Computer Vision Temelleri'],
        completedCourses: 0,
        totalProgress: 45,
        xp: 1680,
        streak: 7,
        lastActive: '5 saat önce',
        status: 'active',
        joinedDate: '2024-10-20',
        badges: 5,
        totalLessonsCompleted: 28,
        totalQuizzesCompleted: 6,
        averageQuizScore: 78,
        weeklyActivity: [
            { day: 'Pzt', lessons: 2 },
            { day: 'Sal', lessons: 3 },
            { day: 'Çar', lessons: 1 },
            { day: 'Per', lessons: 2 },
            { day: 'Cum', lessons: 3 },
            { day: 'Cmt', lessons: 0 },
            { day: 'Paz', lessons: 1 },
        ],
        recentActivity: [
            { date: '16 Kas 2025, 11:00', action: 'Ders Tamamladı', item: 'Temel Python Kavramları' },
            { date: '15 Kas 2025, 14:20', action: 'Quiz Çözdü', item: 'Python Syntax - %75' },
            { date: '14 Kas 2025, 16:30', action: 'Ders Tamamladı', item: 'ChatGPT Giriş' },
        ],
    },
    {
        id: 4,
        name: 'Can Öztürk',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=can',
        email: 'can.ozturk@email.com',
        enrolledCourses: [3, 4, 5],
        courseNames: ['TensorFlow ile Derin Öğrenme', 'NLP & Metin Analizi', 'Computer Vision Temelleri'],
        completedCourses: 1,
        totalProgress: 62,
        xp: 2100,
        streak: 12,
        lastActive: '1 gün önce',
        status: 'inactive',
        joinedDate: '2024-09-01',
        badges: 9,
        totalLessonsCompleted: 38,
        totalQuizzesCompleted: 10,
        averageQuizScore: 82,
        weeklyActivity: [
            { day: 'Pzt', lessons: 2 },
            { day: 'Sal', lessons: 2 },
            { day: 'Çar', lessons: 3 },
            { day: 'Per', lessons: 0 },
            { day: 'Cum', lessons: 1 },
            { day: 'Cmt', lessons: 0 },
            { day: 'Paz', lessons: 0 },
        ],
        recentActivity: [
            { date: '15 Kas 2025, 10:00', action: 'Ders Tamamladı', item: 'CNN Mimarileri' },
            { date: '14 Kas 2025, 15:00', action: 'Quiz Çözdü', item: 'Deep Learning Basics - %85' },
        ],
    },
    {
        id: 5,
        name: 'Elif Şahin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=elif',
        email: 'elif.sahin@email.com',
        enrolledCourses: [1, 2, 3, 4, 5],
        courseNames: ['ChatGPT ile Prompt Engineering', 'Python ile Makine Öğrenmesi', 'TensorFlow ile Derin Öğrenme', 'NLP & Metin Analizi', 'Computer Vision Temelleri'],
        completedCourses: 2,
        totalProgress: 88,
        xp: 4250,
        streak: 35,
        lastActive: '30 dk önce',
        status: 'active',
        joinedDate: '2024-07-15',
        badges: 18,
        totalLessonsCompleted: 82,
        totalQuizzesCompleted: 24,
        averageQuizScore: 96,
        weeklyActivity: [
            { day: 'Pzt', lessons: 6 },
            { day: 'Sal', lessons: 7 },
            { day: 'Çar', lessons: 8 },
            { day: 'Per', lessons: 6 },
            { day: 'Cum', lessons: 7 },
            { day: 'Cmt', lessons: 4 },
            { day: 'Paz', lessons: 5 },
        ],
        recentActivity: [
            { date: '16 Kas 2025, 16:00', action: 'Rozet Kazandı', item: '⭐ Süper Yıldız' },
            { date: '16 Kas 2025, 14:45', action: 'Ders Tamamladı', item: 'Advanced NLP Techniques' },
            { date: '16 Kas 2025, 11:20', action: 'Quiz Çözdü', item: 'Computer Vision Final - %98' },
            { date: '16 Kas 2025, 09:00', action: 'Kurs Tamamladı', item: 'TensorFlow ile Derin Öğrenme' },
        ],
    },
    {
        id: 6,
        name: 'Ahmet Arslan',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ahmet',
        email: 'ahmet.arslan@email.com',
        enrolledCourses: [1],
        courseNames: ['ChatGPT ile Prompt Engineering'],
        completedCourses: 0,
        totalProgress: 23,
        xp: 850,
        streak: 3,
        lastActive: '3 gün önce',
        status: 'inactive',
        joinedDate: '2024-11-01',
        badges: 2,
        totalLessonsCompleted: 12,
        totalQuizzesCompleted: 3,
        averageQuizScore: 68,
        weeklyActivity: [
            { day: 'Pzt', lessons: 1 },
            { day: 'Sal', lessons: 0 },
            { day: 'Çar', lessons: 0 },
            { day: 'Per', lessons: 1 },
            { day: 'Cum', lessons: 0 },
            { day: 'Cmt', lessons: 0 },
            { day: 'Paz', lessons: 0 },
        ],
        recentActivity: [
            { date: '13 Kas 2025, 10:00', action: 'Ders Tamamladı', item: 'ChatGPT Temelleri' },
            { date: '12 Kas 2025, 14:00', action: 'Quiz Çözdü', item: 'Giriş Testi - %65' },
        ],
    },
];

export const useTeacherStore = create<TeacherStore>((set, get) => ({
    students: mockStudents,

    addStudent: (studentData) => {
        const newStudent: Student = {
            ...studentData,
            id: Date.now(), // Simple ID generation
            joinedDate: new Date().toISOString().split('T')[0],
            lastActive: 'Az önce',
            status: 'active',
            completedCourses: 0,
            totalProgress: 0,
            xp: 0,
            streak: 0,
            badges: 0,
            totalLessonsCompleted: 0,
            totalQuizzesCompleted: 0,
            averageQuizScore: 0,
            weeklyActivity: [
                { day: 'Pzt', lessons: 0 },
                { day: 'Sal', lessons: 0 },
                { day: 'Çar', lessons: 0 },
                { day: 'Per', lessons: 0 },
                { day: 'Cum', lessons: 0 },
                { day: 'Cmt', lessons: 0 },
                { day: 'Paz', lessons: 0 },
            ],
            recentActivity: [
                { date: new Date().toLocaleString('tr-TR'), action: 'Platforma Katıldı', item: 'Hoş geldiniz!' },
            ],
        };

        set((state) => ({
            students: [...state.students, newStudent],
        }));
    },

    getStudentById: (id) => {
        return get().students.find((s) => s.id === id);
    },

    updateStudent: (id, updates) => {
        set((state) => ({
            students: state.students.map((s) =>
                s.id === id ? { ...s, ...updates } : s
            ),
        }));
    },
}));
