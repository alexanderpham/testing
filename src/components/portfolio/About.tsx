import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with modern best practices"
    },
    {
      icon: Palette,
      title: "Design-Focused",
      description: "Creating beautiful, intuitive user interfaces that users love"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building fast, optimized applications that deliver great user experiences"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I'm a passionate full-stack developer with 5+ years of experience creating digital experiences 
          that combine functionality with beautiful design. I love turning complex problems into simple, 
          elegant solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            Started as a curious student tinkering with HTML and CSS, I've evolved into a full-stack developer 
            who thrives on building end-to-end solutions. My experience spans from startups to enterprise 
            applications, always with a focus on user experience and code quality.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
            or sharing knowledge with the developer community through blog posts and mentoring.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Node.js</Badge>
            <Badge variant="secondary">Python</Badge>
            <Badge variant="secondary">PostgreSQL</Badge>
            <Badge variant="secondary">AWS</Badge>
            <Badge variant="secondary">Docker</Badge>
            <Badge variant="secondary">GraphQL</Badge>
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};