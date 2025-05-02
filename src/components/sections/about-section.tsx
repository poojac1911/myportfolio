import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Code, Smartphone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary dark:bg-secondary/80">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated developer driven by a passion for creating innovative and user-friendly mobile experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Changed md:grid-cols-3 to md:grid-cols-2 */}
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <User className="w-8 h-8 text-primary" />
              <CardTitle>My Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Holding a BSc in Information Technology, I've built a strong foundation in software development principles. My journey led me to specialize in Android development, where I found my niche.
              </p>
            </CardContent>
          </Card>
          {/* Removed KMM Expertise Card */}
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Smartphone className="w-8 h-8 text-primary" />
              <CardTitle>Passion for Cross-Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                My passion lies in building seamless cross-platform applications that offer native performance and a consistent user experience. I strive for clean code, modern UI, and technical precision in every project.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
