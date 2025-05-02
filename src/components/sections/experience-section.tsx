import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
   {
    title: "Associate Software Developer",
    company: "Wharf Street Studios",
    duration: "Feb 2024 – Present",
    description: "Developing innovative cross-platform solutions using Kotlin Multiplatform Mobile (KMM). Focused on building shared logic for Android and iOS, implementing modern UI with Jetpack Compose, and integrating various KMM libraries.",
    technologies: ["Kotlin", "KMM", "Jetpack Compose", "Ktor", "SQLDelight", "Koin", "Android SDK", "iOS (Basic)", "Git"],
  },
  {
    title: "Android Developer",
    company: "Wharf Street Strategies",
    duration: "Jun 2023 – Feb 2024",
    description: "Contributed to native Android application development. Gained experience in Android architecture components, UI/UX implementation, and working within agile development cycles.",
    technologies: ["Kotlin", "Android SDK", "XML Layouts", "Retrofit", "Room", "MVVM", "Git"],
  },
  {
    title: "Freelance Android Developer",
    company: "Self-Employed",
    duration: "Jan 2023 – May 2023",
    description: "Worked on various freelance projects, developing custom Android applications for clients. Handled requirements gathering, development, testing, and deployment.",
    technologies: ["Kotlin", "Java", "Android SDK", "Firebase", "REST APIs", "UI/UX Design"],
  },
  {
    title: "Android Developer Intern",
    company: "PHN Technology Pvt. Ltd.",
    duration: "Jul 2022 – Dec 2022",
    description: "Assisted senior developers in building and maintaining Android applications. Gained practical experience in the software development lifecycle and collaborated with team members on feature implementation and bug fixing.",
    technologies: ["Java", "Android SDK", "XML", "Git", "Debugging"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="container">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey in software development.
        </p>
      </div>
      <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted after:left-0 after:dark:bg-muted/40">
        {experiences.map((exp, index) => (
           <div key={index} className="grid gap-4 md:grid-cols-[1fr_3fr] md:gap-10 items-start mb-8">
             <div className="flex items-center gap-4 md:justify-end">
               <div className="absolute w-3 h-3 rounded-full -left-[calc(0.375rem-1px)] mt-1 bg-primary border-2 border-background dark:border-card"></div>
                <p className="text-sm text-muted-foreground text-right">{exp.duration}</p>
             </div>
            <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary hidden md:inline" />
                   {exp.title}
                </CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
