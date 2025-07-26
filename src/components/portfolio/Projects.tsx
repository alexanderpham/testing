import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, order management, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Socket.io"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard displaying weather patterns and analytics with interactive charts and location-based forecasting.",
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered content creation tool that helps users generate blog posts, social media content, and marketing copy with natural language processing.",
      technologies: ["Next.js", "OpenAI API", "Prisma", "Vercel"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A showcase of my recent work, from full-stack applications to creative experiments. 
          Each project demonstrates different aspects of modern web development.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="group overflow-hidden shadow-card hover:shadow-elegant transition-smooth border-border/50"
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-4">
                <Button variant="glass" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
                <Button variant="glass" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="hover:bg-primary/10">
          <Github className="h-5 w-5 mr-2" />
          View All Projects on GitHub
        </Button>
      </div>
    </section>
  );
};