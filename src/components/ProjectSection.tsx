import { projectScope, projects } from "@/constants";
import Container from "./ui/container";
import ProjectCard from "./ui/project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const ProjectSection = () => {
    return (
        <Container className="md:mx-auto pt-20 mx-10" id="projects">
            <h1 className="md:text-5xl font-serif text-3xl font-extrabold text-center">
                My Projects
            </h1>
            <Tabs defaultValue="fea" className="mt-10">
                <div className="flex justify-center mb-10">
                    <TabsList>
                        <TabsTrigger value="fea">Featured</TabsTrigger>
                        <TabsTrigger value="fs">FullStack</TabsTrigger>
                        <TabsTrigger value="fe">Frontend</TabsTrigger>
                        <TabsTrigger value="be">Backend</TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent
                    value="fea"
                    className="flex flex-wrap justify-center gap-10"
                >
                    {projects
                        .sort((a, b) => a.id - b.id)
                        .filter((project) => project.featured)
                        .map((project) => (
                            <ProjectCard
                                key={project.title}
                                projectName={project.title}
                                projectImage={project.image}
                                projectLink={project.url}
                                projectGithub={project.github}
                                projectTags={project.techStack}
                            />
                        ))}
                </TabsContent>
                <TabsContent
                    value="fs"
                    className="flex flex-wrap justify-center gap-10"
                >
                    {projects
                        .sort((a, b) => a.id - b.id)
                        .filter(
                            (project) =>
                                project.scope === projectScope.FullStack
                        )
                        .map((project) => (
                            <ProjectCard
                                key={project.title}
                                projectName={project.title}
                                projectImage={project.image}
                                projectLink={project.url}
                                projectGithub={project.github}
                                projectTags={project.techStack}
                            />
                        ))}
                </TabsContent>
                <TabsContent
                    value="be"
                    className="flex flex-wrap justify-center gap-10"
                >
                    {projects
                        .filter(
                            (project) => project.scope === projectScope.BackEnd
                        )
                        .map((project) => (
                            <ProjectCard
                                key={project.title}
                                projectName={project.title}
                                projectImage={project.image}
                                projectLink={project.url}
                                projectGithub={project.github}
                                projectTags={project.techStack}
                            />
                        ))}
                </TabsContent>
                <TabsContent
                    value="fe"
                    className="flex flex-wrap justify-center gap-10"
                >
                    {projects
                        .filter(
                            (project) => project.scope === projectScope.FrontEnd
                        )
                        .map((project) => (
                            <ProjectCard
                                key={project.title}
                                projectName={project.title}
                                projectImage={project.image}
                                projectLink={project.url}
                                projectGithub={project.github}
                                projectTags={project.techStack}
                            />
                        ))}
                </TabsContent>
            </Tabs>
        </Container>
    );
};

export default ProjectSection;
