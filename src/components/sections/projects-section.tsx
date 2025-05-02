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
    description: "A blockchain-powered KMM social networking platform for EdTech. Features: cross-platform logic, camera/gallery, PDF handling, PayPal, WebSockets, deep linking.", // Description from Experience
    technologies: ["KMM", "Kotlin", "Jetpack Compose", "Ktor", "SQLDelight", "Koin", "Decompose", "Firebase (Auth/Messaging)", "WebSockets", "PayPal API"], // Combined tech
    githubUrl: "https://github.com/pooja-choudhary-17/SkillConnect",
  },
   {
    title: "Eat App",
    description: "Intuitive KMM food ordering and reservation app with real-time tracking, MVVM architecture, Google Maps, and Stripe integration.", // Description from Experience
    technologies: ["KMM", "Kotlin", "Jetpack Compose", "Ktor", "SQLDelight", "MVVM", "Google Maps API", "Stripe API"], // Combined tech
  },
   {
    title: "SkillSwap",
    description: "Native Android skill-exchange platform with user profiles, matching algorithm, ratings, and reviews.", // Combined description
    technologies: ["Kotlin", "Android SDK", "Firebase Realtime DB", "MVVM", "XML Layouts"],
    githubUrl: "https://github.com/pooja-choudhary-17/SkillSwap",
  },
  {
    title: "RideShare",
    description: "Android carpooling application featuring real-time location tracking, route optimization, and potentially payment integration.", // Combined description
    technologies: ["Kotlin", "Android SDK", "Google Maps SDK", "Firebase Firestore", "Node.js (Backend)"], // Added Node.js from previous
  },
   {
    title: "Neatflix",
    description: "A movie browsing app clone (Android native) focusing on clean UI, API integration, recommendations, and offline downloads.", // Combined description
    technologies: ["Kotlin", "Android SDK", "Retrofit", "Glide", "MVVM", "TMDB API", "XML Layouts"], // Added XML
    githubUrl: "https://github.com/pooja-choudhary-17/Neatflix",
  },
  {
    title: "Placement Preparation App",
    description: "Android app aiding students in interview preparation with resources, leaderboards, notifications, feedback, etc.", // Description from resume project list
    technologies: ["Java", "Android SDK", "Firebase", "XML Layouts"], // Updated tech
  },
   {
    title: "ExpensePal",
    description: "Android expense tracker with personalized budgeting, reports, real-time tracking, offline storage, and Firebase integration.", // Description from resume project list
    technologies: ["Kotlin", "Android SDK", "Room Persistence Library", "MVVM", "Firebase"], // Updated tech
     githubUrl: "https://github.com/pooja-choudhary-17/ExpensePal",
  },
   {
    title: "INotes",
    description: "Note-taking application using Python, FastAPI & MongoDB for backend storage, likely with an Android frontend.", // Description from resume project list
    technologies: ["Python", "FastAPI", "MongoDB", "Android SDK (Frontend)", "Java/Kotlin"], // Updated tech, assumed Android frontend
     githubUrl: "https://github.com/pooja-choudhary-17/iNotes", // Kept existing link, might need verification
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary dark:bg-secondary/80">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects I've worked on, showcasing my skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-[-4px_4px_12px_rgba(0,0,0,0.08)] dark:shadow-[-4px_4px_15px_rgba(0,0,0,0.2)]">
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
