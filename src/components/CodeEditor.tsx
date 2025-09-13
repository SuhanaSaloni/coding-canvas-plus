import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, CheckCircle, AlertCircle, Lightbulb } from "lucide-react";
import { toast } from "sonner";

interface CodeError {
  line: number;
  message: string;
  type: 'error' | 'warning' | 'suggestion';
}

export const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);

  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState<CodeError[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Simulate code analysis
  useEffect(() => {
    const analyzeCode = () => {
      const newErrors: CodeError[] = [];
      
      // Basic error detection
      if (code.includes("fibonacci(n - 1)") && code.includes("fibonacci(n - 2)")) {
        newErrors.push({
          line: 3,
          message: "Consider using memoization to optimize recursive function",
          type: 'suggestion'
        });
      }
      
      if (!code.includes("return") && code.trim()) {
        newErrors.push({
          line: 1,
          message: "Function should return a value",
          type: 'warning'
        });
      }

      setErrors(newErrors);
    };

    const timer = setTimeout(analyzeCode, 500);
    return () => clearTimeout(timer);
  }, [code]);

  const runCode = async () => {
    setIsRunning(true);
    
    // Simulate code execution
    setTimeout(() => {
      try {
        // Mock execution result
        setOutput("55\n✓ Code executed successfully");
        toast.success("Code executed successfully!");
      } catch (error) {
        setOutput("Error: " + (error as Error).message);
        toast.error("Code execution failed");
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
    setOutput("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Code Editor */}
      <Card className="gradient-card border shadow-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-success"></div>
            <div className="w-2 h-2 rounded-full bg-warning"></div>
            <div className="w-2 h-2 rounded-full bg-destructive"></div>
            <span className="ml-2 text-sm font-medium">main.js</span>
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={resetCode}>
              <RotateCcw className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              onClick={runCode} 
              disabled={isRunning}
              className="gradient-accent text-accent-foreground"
            >
              <Play className="h-4 w-4 mr-1" />
              {isRunning ? "Running..." : "Run"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 p-4 font-code text-sm bg-code-bg text-code-foreground rounded-lg border-0 resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              spellCheck={false}
            />
            <div className="absolute left-0 top-0 p-4 text-code-comment text-sm pointer-events-none">
              {code.split('\n').map((_, i) => (
                <div key={i} className="h-5 leading-5">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Output & Analysis */}
      <div className="space-y-6">
        {/* Output */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Output</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="font-code text-sm bg-muted p-4 rounded-lg min-h-32 whitespace-pre-wrap">
              {output || "Click 'Run' to execute your code"}
            </pre>
          </CardContent>
        </Card>

        {/* Code Analysis */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Code Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {errors.length === 0 ? (
              <div className="flex items-center gap-2 text-success">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">No issues detected</span>
              </div>
            ) : (
              errors.map((error, index) => (
                <div key={index} className="flex items-start gap-3">
                  <AlertCircle className={`h-4 w-4 mt-0.5 ${
                    error.type === 'error' ? 'text-destructive' :
                    error.type === 'warning' ? 'text-warning' :
                    'text-accent'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge variant={
                        error.type === 'error' ? 'destructive' :
                        error.type === 'warning' ? 'secondary' :
                        'outline'
                      } className="text-xs">
                        Line {error.line}
                      </Badge>
                      <Badge variant="outline" className="text-xs capitalize">
                        {error.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {error.message}
                    </p>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};