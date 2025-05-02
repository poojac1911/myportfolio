import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Smartphone } from "lucide-react"; // Removed Code icon import

export default function AboutSection() {
  return (
    <section id="about" className="bg-secondary dark:bg-secondary/80">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated and passionate Android Developer focused on creating innovative, user-friendly, and cross-platform mobile experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <User className="w-8 h-8 text-primary" />
              <CardTitle>My Background</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Graduated with a BSc in Information Technology from St. John College of Humanities &amp; Sciences (CGPI 9.28). My academic foundation paved the way for specializing in Android development and exploring the power of cross-platform solutions with Kotlin Multiplatform.
              </p>
            </CardContent>
          </Card>
          <Card className="transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Smartphone className="w-8 h-8 text-primary" />
              <CardTitle>Cross-Platform Focus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                My core interest lies in building efficient and maintainable applications using Kotlin Multiplatform Mobile (KMM). I strive to share business logic effectively between Android and iOS, ensuring native performance and a consistent user experience, leveraging tools like Ktor, SQLDelight, and Koin.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
