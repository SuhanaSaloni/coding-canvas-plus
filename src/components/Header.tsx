import { Code2, BookOpen, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
            <Code2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CodeCraft
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Tutorials
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Challenges
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Progress
          </Button>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="gradient-primary text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};