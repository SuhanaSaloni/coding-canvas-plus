import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CodeEditor } from "@/components/CodeEditor";
import { TutorialSection } from "@/components/TutorialSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { StatsGrid } from "@/components/StatsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="space-y-20">
        <Hero />
        
        <div className="container mx-auto px-4">
          <StatsGrid />
        </div>
        
        <div className="container mx-auto px-4">
          <section className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Try Our Code Editor</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience real-time code analysis, error detection, and intelligent suggestions 
                in our interactive programming environment.
              </p>
            </div>
            <CodeEditor />
          </section>
        </div>
        
        <div className="container mx-auto px-4">
          <TutorialSection />
        </div>
        
        <div className="container mx-auto px-4">
          <ChallengesSection />
        </div>
        
        <footer className="bg-card/50 border-t">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <div className="w-8 h-8 gradient-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-foreground font-bold">CC</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">CodeCraft</h3>
              <p className="text-muted-foreground">
                Empowering developers with intelligent code analysis and interactive learning
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
