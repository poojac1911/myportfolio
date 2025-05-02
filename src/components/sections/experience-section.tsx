import { Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  projects?: string[]; // Optional list of key projects
  technologies: string[];
}

const experiences: ExperienceItem[] = [
   {
    title: "Android Developer",
    company: "Wharf Street Studios",
    duration: "Approx. 1 Year (Current)", // Duration derived from resume, specific dates not provided
    description: "Developing cross-platform applications using Kotlin Multiplatform Mobile (KMM), sharing business logic across Android and iOS. Implementing features, optimizing performance, and leveraging Ktor, SQLDelight, and Koin for seamless architecture.",
    projects: [
        "Skill Connect App: Blockchain-powered EdTech social network (KMM, Ktor, Decompose, Jetpack Compose, Camera/Gallery, PDF handling, PayPal, WebSockets, Deep Linking).",
        "Eat App: Food ordering/reservation app (MVVM, Google Maps API, Stripe Integration)."
    ],
    technologies: ["Kotlin", "KMM", "Jetpack Compose", "Ktor", "SQLDelight", "Koin", "Android SDK", "iOS (Basic)", "Git", "Decompose", "WebSockets"],
  },
  {
    title: "Android Development Intern",
    company: "Wharf Street Strategies",
    duration: "4 Months",
    description: "Contributed to KMM projects, working on shared codebases. Developed Android UIs using XML and Jetpack Compose, ensuring responsive designs.",
    technologies: ["KMM", "Kotlin", "Android SDK", "XML Layouts", "Jetpack Compose", "Git"],
  },
   {
    title: "Freelance Android Developer",
    company: "Self-Employed",
    duration: "Jan 2023 – May 2023", // Retained from previous data as resume lacks specifics
    description: "Developed custom Android applications for clients. Responsibilities included requirements gathering, development, testing, deployment, and creating technical documentation/presentations.",
     projects: [
        "SkillSwap App: Skill-exchange platform with user profiles and matching.",
        "RideShare App: Carpooling app with real-time tracking and route optimization.",
        "Neatflix App: Streaming app clone with offline downloads."
     ],
    technologies: ["Kotlin", "Java", "Android SDK", "Firebase", "REST APIs", "UI/UX Design", "Technical Documentation"],
  },
  {
    title: "Web Development Intern", // Updated role
    company: "PHN Technology Pvt. Ltd.",
    duration: "Apr 2023 – Jun 2023", // Updated duration
    description: "Gained experience in web development principles and practices.", // Generic description as specifics are missing
    technologies: ["Web Development (General)"], // Generic skill as specifics are missing
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
            <Card className="transition-transform duration-300 hover:scale-[1.02] shadow-[-4px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary hidden md:inline" />
                   {exp.title}
                </CardTitle>
                <CardDescription>{exp.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">{exp.description}</p>
                {exp.projects && exp.projects.length > 0 && (
                    <div className="mt-2 space-y-1">
                        <h4 className="font-medium text-sm text-foreground/80">Key Projects:</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                            {exp.projects.map((proj, projIndex) => (
                                <li key={projIndex}>{proj}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex flex-wrap gap-2 pt-2">
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
