import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Clock, Code } from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: string;
  participants: number;
  tags: string[];
  points: number;
  completed: boolean;
}

interface ChallengeCardProps {
  challenge: Challenge;
}

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success text-success-foreground';
      case 'Medium': return 'bg-warning text-warning-foreground';
      case 'Hard': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Card className="gradient-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 gradient-accent rounded-lg flex items-center justify-center">
            {challenge.completed ? (
              <Trophy className="h-5 w-5 text-accent-foreground" />
            ) : (
              <Code className="h-5 w-5 text-accent-foreground" />
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className={getDifficultyColor(challenge.difficulty)}>
              {challenge.difficulty}
            </Badge>
            <div className="text-sm font-medium text-accent">
              {challenge.points} pts
            </div>
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {challenge.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {challenge.description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {challenge.timeLimit}
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {challenge.participants.toLocaleString()}
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {challenge.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Button 
          className={`w-full ${
            challenge.completed 
              ? 'bg-success text-success-foreground hover:bg-success/90' 
              : 'gradient-primary text-primary-foreground group-hover:shadow-glow'
          }`}
          size="sm"
        >
          {challenge.completed ? 'Completed ✓' : 'Start Challenge'}
        </Button>
      </CardContent>
    </Card>
  );
};