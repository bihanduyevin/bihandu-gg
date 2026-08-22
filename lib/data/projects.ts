export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const featuredProjects: Project[] = [
  {
    id: "project-01",
    title: "Your Web Project",
    description:
      "Placeholder for a web development project. Replace this with a real project from your portfolio.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/projects/project-01.jpg",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
  },
  {
    id: "project-02",
    title: "Your GIS Project",
    description:
      "Placeholder for a GIS or mapping project. Replace this with one of your spatial or mapping projects.",
    category: "GIS",
    technologies: ["QGIS", "Python", "GeoPandas"],
    imageUrl: "/images/projects/project-02.jpg",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "project-03",
    title: "Your Urban Project",
    description:
      "Placeholder for an urban planning, visualization, or data project.",
    category: "Urban Planning",
    technologies: ["GIS", "Data Visualization", "Python"],
    imageUrl: "/images/projects/project-03.jpg",
    githubUrl: "#",
    featured: true,
  },
];