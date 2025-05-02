import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string; // Optional GitHub URL
  liveUrl?: string; // Optional Live demo URL
}

const projects: Project[] = [
   {
    title: "Skill Connect",
    description: "A KMM application connecting users based on skills. Features include user profiles, skill matching, and in-app chat.",
    technologies: ["KMM", "Jetpack Compose", "Ktor", "SQLDelight", "Koin", "Firebase (Auth/Messaging)"],
    githubUrl: "https://github.com/pooja-choudhary-17/SkillConnect", // Example URL
  },
   {
    title: "Eat App",
    description: "A KMM based food ordering application featuring restaurant listings, menu browsing, order placement, and real-time tracking.",
    technologies: ["KMM", "Jetpack Compose", "Ktor", "SQLDelight", "Google Maps API"],
  },
   {
    title: "SkillSwap",
    description: "Native Android app enabling users to exchange skills and services within their community. Included user ratings and reviews.",
    technologies: ["Kotlin", "Android SDK", "Firebase Realtime DB", "MVVM", "XML Layouts"],
    githubUrl: "https://github.com/pooja-choudhary-17/SkillSwap", // Example URL
  },
  {
    title: "RideShare",
    description: "An Android application for carpooling, featuring route planning, real-time location tracking, and payment integration.",
    technologies: ["Kotlin", "Android SDK", "Google Maps SDK", "Firebase Firestore", "Node.js (Backend)"],
  },
   {
    title: "Neatflix",
    description: "A movie browsing app clone built with Android native technologies, focusing on clean UI and API integration.",
    technologies: ["Kotlin", "Android SDK", "Retrofit", "Glide", "MVVM", "TMDB API"],
    githubUrl: "https://github.com/pooja-choudhary-17/Neatflix", // Example URL
  },
  {
    title: "Placement Preparation App",
    description: "Android app designed to help students prepare for placements with resources, mock tests, and interview questions.",
    technologies: ["Java", "Android SDK", "SQLite", "XML Layouts"],
  },
   {
    title: "ExpensePal",
    description: "A simple Android expense tracker app to manage personal finances.",
    technologies: ["Kotlin", "Android SDK", "Room Persistence Library", "MVVM"],
     githubUrl: "https://github.com/pooja-choudhary-17/ExpensePal", // Example URL
  },
   {
    title: "INotes",
    description: "Note-taking application for Android with features like rich text editing and categorization.",
    technologies: ["Java", "Android SDK", "SQLite", "RecyclerView"],
     githubUrl: "https://github.com/pooja-choudhary-17/iNotes", // Example URL
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary dark:bg-secondary/80"> {/* Adjusted background */}
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02]"> {/* Removed shadow/border/bg classes, added hover */}
              <CardHeader className="pt-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                 <div> {/* Wrapper for tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 mt-auto pt-4"> {/* Ensure buttons are at the bottom */}
                   {project.githubUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      </Button>
                    )}
                     {/* Optional Live Demo Button */}
                    {/* {project.liveUrl && (
                      <Button asChild variant="default" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo
                        </a>
                      </Button>
                    )} */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
