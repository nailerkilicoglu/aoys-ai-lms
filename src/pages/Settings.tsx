import { Settings as SettingsIcon, Bell, Lock, Eye, Mail, Globe, Trash2, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useUserStore } from '@/store/userStore';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export default function Settings() {
    const { user } = useUserStore();
    const { toast } = useToast();
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [dailyReminders, setDailyReminders] = useState(true);
    const [marketingEmails, setMarketingEmails] = useState(false);
    const [profileVisibility, setProfileVisibility] = useState('public');

    if (!user) return null;

    const handleSave = () => {
        toast({
            title: "Ayarlar Kaydedildi ✓",
            description: "Değişiklikler başarıyla uygulandı.",
        });
    };

    const handleExportData = () => {
        toast({
            title: "Verileriniz Hazırlanıyor...",
            description: "İndirme bağlantısı email ile gönderilecek.",
        });
    };

    const handleDeleteAccount = () => {
        toast({
            title: "Hesap Silme Talebi",
            description: "Bu işlem için destek ekibiyle iletişime geçin.",
            variant: "destructive",
        });
    };

    return (
        <div className="min-h-screen bg-background pb-12">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 border-b border-border">
                <div className="container mx-auto px-4 py-12">
                    <div className="flex items-center gap-3 mb-4">
                        <SettingsIcon className="h-10 w-10 text-primary" />
                        <h1 className="text-4xl font-bold">
                            <span className="text-gradient">Ayarlar</span>
                        </h1>
                    </div>
                    <p className="text-muted-foreground">
                        Hesap ayarlarınızı ve tercihlerinizi yönetin
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="space-y-6">
                    {/* Account Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lock className="h-5 w-5" />
                                Hesap Ayarları
                            </CardTitle>
                            <CardDescription>
                                Email adresinizi ve şifrenizi güncelleyin
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Adresi</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue={user.email}
                                    placeholder="ornek@email.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="current-password">Mevcut Şifre</Label>
                                <Input
                                    id="current-password"
                                    type="password"
                                    placeholder="••••••••"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="new-password">Yeni Şifre</Label>
                                    <Input
                                        id="new-password"
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirm-password">Yeni Şifre (Tekrar)</Label>
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <Button onClick={handleSave}>
                                Şifreyi Güncelle
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Notification Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="h-5 w-5" />
                                Bildirim Tercihleri
                            </CardTitle>
                            <CardDescription>
                                Hangi bildirimleri almak istediğinizi seçin
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Email Bildirimleri</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Önemli güncellemeler için email alın
                                    </p>
                                </div>
                                <Switch
                                    checked={emailNotifications}
                                    onCheckedChange={setEmailNotifications}
                                />
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Günlük Hatırlatıcılar</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Günlük görevler için hatırlatıcı alın
                                    </p>
                                </div>
                                <Switch
                                    checked={dailyReminders}
                                    onCheckedChange={setDailyReminders}
                                />
                            </div>

                            <Separator />

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Pazarlama Emailleri</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Yeni kurslar ve kampanyalar hakkında bilgi alın
                                    </p>
                                </div>
                                <Switch
                                    checked={marketingEmails}
                                    onCheckedChange={setMarketingEmails}
                                />
                            </div>

                            <Separator />

                            <div className="space-y-2">
                                <Label>Bildirim Sıklığı</Label>
                                <Select defaultValue="daily">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Sıklık seçin" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="realtime">Anında</SelectItem>
                                        <SelectItem value="daily">Günlük Özet</SelectItem>
                                        <SelectItem value="weekly">Haftalık Özet</SelectItem>
                                        <SelectItem value="never">Asla</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Privacy Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Eye className="h-5 w-5" />
                                Gizlilik Ayarları
                            </CardTitle>
                            <CardDescription>
                                Profilinizin görünürlüğünü kontrol edin
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Profil Görünürlüğü</Label>
                                <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="public">Herkese Açık</SelectItem>
                                        <SelectItem value="students">Sadece Öğrenciler</SelectItem>
                                        <SelectItem value="private">Gizli</SelectItem>
                                    </SelectContent>
                                </Select>
                                <p className="text-sm text-muted-foreground">
                                    Profilinizi kimler görebilir?
                                </p>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>İlerleme Durumunu Göster</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Kurs ilerlemenizi liderlik tablosunda göster
                                    </p>
                                </div>
                                <Switch defaultChecked />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Rozetleri Göster</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Kazandığınız rozetleri profilinizde göster
                                    </p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Language & Region */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5" />
                                Dil ve Bölge
                            </CardTitle>
                            <CardDescription>
                                Tercih ettiğiniz dili ve saat dilimini seçin
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label>Platform Dili</Label>
                                <Select defaultValue="tr">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tr">Türkçe</SelectItem>
                                        <SelectItem value="en">English</SelectItem>
                                        <SelectItem value="de">Deutsch</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label>Saat Dilimi</Label>
                                <Select defaultValue="istanbul">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="istanbul">İstanbul (GMT+3)</SelectItem>
                                        <SelectItem value="london">London (GMT+0)</SelectItem>
                                        <SelectItem value="newyork">New York (GMT-5)</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Data & Privacy */}
                    <Card className="border-destructive/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive">
                                <Trash2 className="h-5 w-5" />
                                Veri ve Gizlilik
                            </CardTitle>
                            <CardDescription>
                                Verilerinizi yönetin veya hesabınızı silin
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-4">
                                <div>
                                    <Button variant="outline" onClick={handleExportData} className="w-full md:w-auto">
                                        <Download className="mr-2 h-4 w-4" />
                                        Verilerimi İndir
                                    </Button>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Tüm kişisel verilerinizi indirin (GDPR uyumlu)
                                    </p>
                                </div>

                                <Separator />

                                <div>
                                    <Button
                                        variant="destructive"
                                        onClick={handleDeleteAccount}
                                        className="w-full md:w-auto"
                                    >
                                        <Trash2 className="mr-2 h-4 w-4" />
                                        Hesabımı Sil
                                    </Button>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        Bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Save Button */}
                    <div className="flex justify-end gap-4">
                        <Button variant="outline">İptal</Button>
                        <Button onClick={handleSave} className="bg-gradient-to-r from-primary to-secondary">
                            Değişiklikleri Kaydet
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
