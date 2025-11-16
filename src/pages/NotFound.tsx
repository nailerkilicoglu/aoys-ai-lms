import { Link } from "react-router-dom";
import { Brain, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 bg-primary rounded-full animate-glow-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="text-center relative z-10 px-4">
        <div className="flex justify-center mb-8">
          <div className="rounded-full bg-primary/10 p-6 glow-effect">
            <Brain className="h-24 w-24 text-primary animate-pulse" />
          </div>
        </div>

        <h1 className="mb-4 text-8xl font-bold text-gradient">404</h1>
        <h2 className="mb-4 text-3xl font-bold">Sayfa Bulunamadı</h2>
        <p className="mb-8 text-xl text-muted-foreground max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya dönebilir veya arama yapabilirsiniz.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Ana Sayfaya Dön
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            <Link to="/courses">
              <Search className="mr-2 h-5 w-5" />
              Kursları Keşfet
            </Link>
          </Button>
        </div>

        <Button
          asChild
          variant="ghost"
          className="mt-8"
          onClick={() => window.history.back()}
        >
          <span className="cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4 inline" />
            Geri Dön
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
