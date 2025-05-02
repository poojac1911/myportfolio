import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Brain } from "lucide-react"; // Removed unused Users import
import { Button } from "@/components/ui/button";

const technicalSkills = [
  "Kotlin", "KMM (Kotlin Multiplatform Mobile)", "Jetpack Compose", "Android SDK", "Java",
  "Ktor (Networking)", "SQLDelight (Database)", "Koin (DI)", "Firebase", "REST APIs",
  "MVVM, MVI Architectures", "Git", "XML Layouts", "Room DB", "Retrofit", "Unit Testing (Basic)", "iOS (Basic)"
];

const softSkills = [
  "Problem Solving", "Team Collaboration", "Communication", "Agile Methodologies",
  "Adaptability", "Attention to Detail", "Time Management", "Eagerness to Learn"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My technical expertise and professional strengths.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="transition-transform duration-300 hover:scale-[1.02]"> {/* Removed shadow-sm, added hover */}
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
         <Card className="transition-transform duration-300 hover:scale-[1.02]"> {/* Removed shadow-sm, added hover */}
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
        <div className="text-center mt-12">
           <Button variant="default" size="lg" asChild>
             <a href="/pooja_choudhary_resume.pdf" download>
              Download My Resume
             </a>
           </Button>
        </div>
    </section>
  );
}
