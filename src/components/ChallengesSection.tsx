import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ChallengeCard } from "./ChallengeCard";

const challenges = [
  {
    id: 1,
    title: "Two Sum Problem",
    description: "Find two numbers in an array that add up to a target sum",
    difficulty: 'Easy' as const,
    timeLimit: "30 min",
    participants: 1247,
    tags: ["Arrays", "Hash Table"],
    points: 100,
    completed: true
  },
  {
    id: 2,
    title: "Binary Tree Traversal",
    description: "Implement different methods to traverse a binary tree structure",
    difficulty: 'Medium' as const,
    timeLimit: "45 min",
    participants: 892,
    tags: ["Trees", "Recursion", "DFS"],
    points: 250,
    completed: false
  },
  {
    id: 3,
    title: "Dynamic Programming",
    description: "Solve the classic knapsack problem using dynamic programming",
    difficulty: 'Hard' as const,
    timeLimit: "60 min",
    participants: 341,
    tags: ["DP", "Optimization"],
    points: 500,
    completed: false
  }
];

export const ChallengesSection = () => {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Coding Challenges</h2>
          <p className="text-muted-foreground">Test your skills with algorithmic problems</p>
        </div>
        <Button variant="outline">
          View All Challenges
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </section>
  );
};