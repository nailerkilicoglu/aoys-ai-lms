import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  avatar: string;
  level: number;
  xp: number;
  maxXp: number;
  badges: number;
  streak: number;
}

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: 'student' | 'teacher') => void;
  register: (name: string, email: string, password: string, role: 'student' | 'teacher') => void;
  logout: () => void;
  gainXp: (amount: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: (email, password, role) => {
    // Mock login - in real app, call API
    const mockUser: User = {
      id: '1',
      name: 'Ahmet Yılmaz',
      email,
      role,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
      level: 15,
      xp: 2340,
      maxXp: 3000,
      badges: 12,
      streak: 7,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  
  register: (name, email, password, role) => {
    // Mock register - in real app, call API
    const mockUser: User = {
      id: '1',
      name,
      email,
      role,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + email,
      level: 1,
      xp: 0,
      maxXp: 100,
      badges: 0,
      streak: 0,
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  
  gainXp: (amount) => {
    set((state) => {
      if (!state.user) return state;
      
      const newXp = state.user.xp + amount;
      const newLevel = newXp >= state.user.maxXp ? state.user.level + 1 : state.user.level;
      const finalXp = newXp >= state.user.maxXp ? newXp - state.user.maxXp : newXp;
      
      return {
        user: {
          ...state.user,
          xp: finalXp,
          level: newLevel,
          maxXp: newLevel > state.user.level ? state.user.maxXp + 100 : state.user.maxXp,
        }
      };
    });
  },
}));
