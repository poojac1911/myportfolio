import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomeSection() {
  return (
    <section id="home" className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-3.5rem)] pt-16 pb-8 md:pt-0 md:pb-0">
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Pooja Choudhary
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium">
          Android Developer | Kotlin Multiplatform
        </p>
        <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">
          Passionate about building seamless cross-platform applications using KMM with a focus on clean UI and robust architecture. Based in Mumbai, India.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <Button asChild variant="default">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <a href="https://linkedin.com/in/poojachoudhary1911" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon">
            {/* Assuming GitHub username is derived from previous links or standard convention */}
            <a href="https://github.com/pooja-choudhary-17" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
           <Button asChild variant="outline" size="icon">
            <a href="mailto:poojachoudhary8067@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
         <Image
            src="https://picsum.photos/500/500"
            alt="Android Development Concept"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            data-ai-hint="android developer code"
         />
      </div>
    </section>
  );
}
