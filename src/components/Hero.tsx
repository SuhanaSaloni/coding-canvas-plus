import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Sparkles, Code2, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9ImhzbCgyMTUgODUlIDI1JSAvIDAuMDMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjQiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Badge variant="outline" className="mx-auto">
            <Sparkles className="h-3 w-3 mr-1" />
            AI-Powered Learning Platform
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Master Programming with
            <span className="gradient-hero bg-clip-text text-transparent block mt-2">
              Intelligent Code Analysis
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn to code with real-time error detection, smart debugging suggestions, 
            and interactive tutorials powered by advanced AI analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow">
              <Play className="h-5 w-5 mr-2" />
              Start Coding Now
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Real-time Analysis</h3>
              <p className="text-sm text-muted-foreground text-center">
                Get instant feedback on your code with advanced error detection and optimization suggestions
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Smart Debugging</h3>
              <p className="text-sm text-muted-foreground text-center">
                AI-powered suggestions help you understand and fix coding issues quickly
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3 p-6 rounded-lg border bg-card/50 backdrop-blur-sm">
              <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-semibold">Interactive Learning</h3>
              <p className="text-sm text-muted-foreground text-center">
                Hands-on tutorials and challenges that adapt to your learning pace
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};