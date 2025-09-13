import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Clock, Award } from "lucide-react";

const stats = [
  {
    title: "Challenges Solved",
    value: "23",
    change: "+5 this week",
    trend: "up",
    icon: Target,
    color: "text-success"
  },
  {
    title: "Learning Streak",
    value: "12 days",
    change: "Personal best!",
    trend: "up",
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    title: "Code Quality Score",
    value: "87%",
    change: "+12% improvement",
    trend: "up",
    icon: Award,
    color: "text-primary"
  },
  {
    title: "Time Spent",
    value: "24.5h",
    change: "This month",
    trend: "neutral",
    icon: Clock,
    color: "text-warning"
  }
];

export const StatsGrid = () => {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Your Progress</h2>
        <p className="text-muted-foreground">Track your learning journey and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="gradient-card hover:shadow-glow transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <IconComponent className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center gap-1 mt-1">
                  {stat.trend === "up" && (
                    <Badge variant="outline" className="text-xs border-success text-success">
                      {stat.change}
                    </Badge>
                  )}
                  {stat.trend === "neutral" && (
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};