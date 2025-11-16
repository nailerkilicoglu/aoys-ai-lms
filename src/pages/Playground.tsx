import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Download, Upload, Save, RotateCcw, Settings, Code2, Terminal as TerminalIcon, FileCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';

export default function Playground() {
    const [language, setLanguage] = useState('python');
    const [code, setCode] = useState(`# Python AI Playground
# ChatGPT API örneği

import openai

def chat_with_gpt(prompt):
    """ChatGPT ile sohbet et"""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

# Kullanım
prompt = "Makine öğrenmesi nedir?"
answer = chat_with_gpt(prompt)
print(answer)
`);
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const { toast } = useToast();

    const templates = {
        python: {
            'Boş Dosya': '# Python kodu buraya yazın\n\n',
            'ChatGPT API': `# Python AI Playground
# ChatGPT API örneği

import openai

def chat_with_gpt(prompt):
    """ChatGPT ile sohbet et"""
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response.choices[0].message.content

# Kullanım
prompt = "Makine öğrenmesi nedir?"
answer = chat_with_gpt(prompt)
print(answer)
`,
            'Makine Öğrenmesi': `# Basit Lineer Regresyon

import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# Veri oluştur
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 5, 4, 5])

# Model eğit
model = LinearRegression()
model.fit(X, y)

# Tahmin yap
predictions = model.predict(X)
print("Tahminler:", predictions)

# Skorları göster
score = model.score(X, y)
print(f"R² Skoru: {score:.2f}")
`,
            'Sentiment Analysis': `# Sentiment Analysis (Duygu Analizi)

from textblob import TextBlob

def analyze_sentiment(text):
    """Metinin duygusunu analiz et"""
    blob = TextBlob(text)
    polarity = blob.sentiment.polarity
    
    if polarity > 0:
        return "Pozitif 😊"
    elif polarity < 0:
        return "Negatif 😞"
    else:
        return "Nötr 😐"

# Test et
texts = [
    "Bu kurs harika, çok şey öğrendim!",
    "Berbat bir deneyimdi, hiç beğenmedim.",
    "Fena değil, idare eder."
]

for text in texts:
    sentiment = analyze_sentiment(text)
    print(f"{text} -> {sentiment}")
`,
        },
        javascript: {
            'Boş Dosya': '// JavaScript kodu buraya yazın\n\n',
            'TensorFlow.js': `// TensorFlow.js ile Basit Model

import * as tf from '@tensorflow/tfjs';

// Basit bir model oluştur
const model = tf.sequential({
  layers: [
    tf.layers.dense({inputShape: [1], units: 1})
  ]
});

// Modeli derle
model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
});

// Eğitim verisi
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]);

// Modeli eğit
model.fit(xs, ys, {
  epochs: 100
}).then(() => {
  // Tahmin yap
  const output = model.predict(tf.tensor2d([5], [1, 1]));
  output.print();
});
`,
        },
    };

    const handleRun = () => {
        setIsRunning(true);
        setOutput('Kod çalıştırılıyor...\n');

        // Simüle edilmiş çıktı - gerçek bir backend'e bağlanabilir
        setTimeout(() => {
            setOutput(`Kod başarıyla çalıştırıldı! ✅

Örnek çıktı:
------------------
Makine öğrenmesi, bilgisayarların verilerden öğrenmesini 
sağlayan yapay zeka dalıdır.

XP Kazandınız: +25 XP 🎉
Süre: 0.42s
`);
            setIsRunning(false);
            toast({
                title: "Başarılı! 🎉",
                description: "+25 XP kazandınız!",
            });
        }, 1500);
    };

    const handleReset = () => {
        setCode(templates[language as keyof typeof templates]['Boş Dosya']);
        setOutput('');
    };

    const handleDownload = () => {
        const extension = language === 'python' ? 'py' : 'js';
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `playground.${extension}`;
        a.click();
        toast({
            title: "Dosya İndirildi",
            description: `Kod ${extension} dosyası olarak indirildi.`,
        });
    };

    const handleSave = () => {
        localStorage.setItem('playground_code', code);
        localStorage.setItem('playground_language', language);
        toast({
            title: "Kod Kaydedildi",
            description: "Kodunuz tarayıcıda saklandı.",
        });
    };

    return (
        <div className="h-screen bg-background flex flex-col">
            {/* Header */}
            <div className="border-b border-border bg-card">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Code2 className="h-6 w-6 text-primary" />
                                <h1 className="text-xl font-bold">
                                    <span className="text-gradient">Code Playground</span>
                                </h1>
                            </div>

                            <Select value={language} onValueChange={setLanguage}>
                                <SelectTrigger className="w-[150px]">
                                    <FileCode className="mr-2 h-4 w-4" />
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="python">Python</SelectItem>
                                    <SelectItem value="javascript">JavaScript</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select
                                onValueChange={(value) => setCode(templates[language as keyof typeof templates][value as keyof typeof templates['python']])}
                            >
                                <SelectTrigger className="w-[200px]">
                                    <SelectValue placeholder="Şablon Seç" />
                                </SelectTrigger>
                                <SelectContent>
                                    {Object.keys(templates[language as keyof typeof templates]).map((template) => (
                                        <SelectItem key={template} value={template}>
                                            {template}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={handleSave}>
                                <Save className="mr-2 h-4 w-4" />
                                Kaydet
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleDownload}>
                                <Download className="mr-2 h-4 w-4" />
                                İndir
                            </Button>
                            <Button variant="outline" size="sm">
                                <Upload className="mr-2 h-4 w-4" />
                                Yükle
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleReset}>
                                <RotateCcw className="mr-2 h-4 w-4" />
                                Sıfırla
                            </Button>
                            <Button
                                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                                onClick={handleRun}
                                disabled={isRunning}
                            >
                                <Play className="mr-2 h-4 w-4" />
                                {isRunning ? 'Çalışıyor...' : 'Çalıştır'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex overflow-hidden">
                {/* Editor */}
                <div className="flex-1 flex flex-col border-r border-border">
                    <div className="flex-1">
                        <Editor
                            height="100%"
                            language={language}
                            value={code}
                            onChange={(value) => setCode(value || '')}
                            theme="vs-dark"
                            options={{
                                minimap: { enabled: true },
                                fontSize: 14,
                                lineNumbers: 'on',
                                roundedSelection: false,
                                scrollBeyondLastLine: false,
                                automaticLayout: true,
                                tabSize: 4,
                                wordWrap: 'on',
                            }}
                        />
                    </div>
                </div>

                {/* Output Panel */}
                <div className="w-[400px] flex flex-col bg-card">
                    <Tabs defaultValue="output" className="flex-1 flex flex-col">
                        <TabsList className="w-full justify-start rounded-none border-b">
                            <TabsTrigger value="output" className="gap-2">
                                <TerminalIcon className="h-4 w-4" />
                                Çıktı
                            </TabsTrigger>
                            <TabsTrigger value="console" className="gap-2">
                                <Settings className="h-4 w-4" />
                                Konsol
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="output" className="flex-1 p-4 overflow-auto mt-0">
                            <div className="font-mono text-sm whitespace-pre-wrap">
                                {output || (
                                    <div className="text-muted-foreground text-center py-12">
                                        <TerminalIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                        <p>Kodu çalıştırın ve sonuçları burada görün</p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="console" className="flex-1 p-4 overflow-auto mt-0">
                            <div className="space-y-2">
                                <Badge variant="outline">Bilgi</Badge>
                                <p className="text-sm text-muted-foreground">
                                    Monaco Editor kullanılıyor
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Tema: VS Dark
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Dil: {language}
                                </p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>

            {/* Info Bar */}
            <div className="border-t border-border bg-card px-4 py-2">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <span>Satır: 1, Sütun: 1</span>
                        <span>Karakter: {code.length}</span>
                        <Badge variant="outline" className="bg-xp/10 text-xp">
                            Kodlama ile +25 XP kazan!
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>UTF-8</span>
                        <span>•</span>
                        <span>{language.toUpperCase()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
