import { Link, useNavigate } from 'react-router-dom';
import { Brain, Bell, Search, LogOut, User, Award, Settings } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useUserStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const xpPercentage = user ? (user.xp / user.maxXp) * 100 : 0;
  const dashboardPath = isAuthenticated && user
    ? user.role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student'
    : '/landing';

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={dashboardPath} className="flex items-center gap-2 group">
            <div className="rounded-lg bg-primary p-2 glow-effect transition-all group-hover:scale-110">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">AÖYS</span>
          </Link>

          {/* Search Bar (if authenticated) */}
          {isAuthenticated && (
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="AI kursu veya proje ara..."
                  className="w-full bg-muted rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {isAuthenticated && user ? (
              <>
                {/* XP Bar */}
                <div className="hidden lg:flex flex-col gap-1 min-w-[180px]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Level {user.level}</span>
                    <span className="text-xp font-semibold">{user.xp} / {user.maxXp} XP</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-xp to-gold transition-all duration-500 xp-glow"
                      style={{ width: `${xpPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Notifications */}
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-streak rounded-full" />
                </Button>

                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10 ring-2 ring-primary">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <Badge
                        variant="secondary"
                        className="absolute -bottom-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-level text-white"
                      >
                        {user.level}
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                      <div className="flex flex-col gap-1">
                        <span className="font-semibold">{user.name}</span>
                        <span className="text-xs text-muted-foreground">{user.email}</span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/profile')}>
                      <User className="mr-2 h-4 w-4" />
                      Profilim
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/badges')}>
                      <Award className="mr-2 h-4 w-4" />
                      Rozetlerim ({user.badges})
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/settings')}>
                      <Settings className="mr-2 h-4 w-4" />
                      Ayarlar
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Çıkış Yap
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Giriş Yap</Link>
                </Button>
                <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Link to="/register">Hemen Başla</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
