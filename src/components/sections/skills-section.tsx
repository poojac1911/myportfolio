import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Brain } from "lucide-react";

const technicalSkills = [
  "Kotlin", "Java", "KMM (Kotlin Multiplatform Mobile)", "Jetpack Compose", "XML",
  "Android SDK", "SQLDelight", "Ktor", "Koin", "Firebase",
  "MVVM Architecture", "Dependency Injection", "Modular Development",
  "Android UI/UX Design", "REST APIs", "Git", "GitHub"
];

const softSkills = [
  "Technical Documentation", "Code Explanation", "Problem Solving", "Teamwork",
  "Client Communication", "Adaptability", "Attention to Detail", "Time Management"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical skills and professional strengths.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="transition-transform duration-300 hover:scale-[1.02] shadow-[-4px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
             <Code className="w-6 h-6 text-primary" />
             <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {technicalSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
         <Card className="transition-transform duration-300 hover:scale-[1.02] shadow-[-4px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
             <Brain className="w-6 h-6 text-primary" />
             <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
        {/* Download Resume button removed from here */}
    </section>
  );
}
