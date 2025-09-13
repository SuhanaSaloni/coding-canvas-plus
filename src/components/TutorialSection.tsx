import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star, ArrowRight } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming with hands-on exercises",
    duration: "2 hours",
    level: "Beginner",
    progress: 75,
    topics: ["Variables", "Functions", "Loops", "Objects"]
  },
  {
    id: 2,
    title: "Algorithm Design Patterns",
    description: "Master common algorithms and data structures used in programming",
    duration: "3 hours",
    level: "Intermediate",
    progress: 30,
    topics: ["Recursion", "Dynamic Programming", "Trees", "Graphs"]
  },
  {
    id: 3,
    title: "React Fundamentals",
    description: "Build modern web applications with React and modern JavaScript",
    duration: "4 hours",
    level: "Intermediate",
    progress: 0,
    topics: ["Components", "State", "Props", "Hooks"]
  }
];

export const TutorialSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Interactive Tutorials</h2>
          <p className="text-muted-foreground">Learn by doing with our hands-on coding tutorials</p>
        </div>
        <Button variant="outline">
          View All
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map((tutorial) => (
          <Card key={tutorial.id} className="gradient-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-accent-foreground" />
                </div>
                <Badge variant={
                  tutorial.level === 'Beginner' ? 'secondary' :
                  tutorial.level === 'Intermediate' ? 'outline' :
                  'destructive'
                }>
                  {tutorial.level}
                </Badge>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {tutorial.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {tutorial.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {tutorial.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  4.8
                </div>
              </div>

              {tutorial.progress > 0 && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{tutorial.progress}%</span>
                  </div>
                  <Progress value={tutorial.progress} className="h-2" />
                </div>
              )}

              <div className="flex flex-wrap gap-1">
                {tutorial.topics.slice(0, 3).map((topic, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {topic}
                  </Badge>
                ))}
                {tutorial.topics.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{tutorial.topics.length - 3} more
                  </Badge>
                )}
              </div>

              <Button 
                className="w-full gradient-primary text-primary-foreground group-hover:shadow-glow"
                size="sm"
              >
                {tutorial.progress > 0 ? 'Continue' : 'Start'} Tutorial
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};