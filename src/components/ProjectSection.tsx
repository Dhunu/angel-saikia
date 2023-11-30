import { projectScope, projects } from "@/constants";
import Container from "./ui/container";
import ProjectCard from "./ui/project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const ProjectSection = () => {
    return (
        <Container className="pt-20 mx-10 md:mx-auto" id="projects">
            <h1 className="text-center font-extrabold text-3xl md:text-5xl font-serif">
                My Projects
            </h1>
            <Tabs defaultValue="all" className="mt-10">
                <div className="flex justify-center mb-10">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="fe">Frontend</TabsTrigger>
                        <TabsTrigger value="be">Backend</TabsTrigger>
                        {/* <TabsTrigger value="fs">Full Stack</TabsTrigger> */}
                    </TabsList>
                </div>
                <TabsContent
                    value="all"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projects.map((project) => (
                         <ProjectCard
                         projectName={project.title}
                         projectImage={project.image}
                         projectLink={project.url}
                         projectGithub={project.github}
                         projectTags={project.techStack}
                     />
                    ))}
                </TabsContent>

                {/* <TabsContent
                    value="fs"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projects.filter(project => project.scope==projectScope.FullStack).map((project) => (
                         <ProjectCard
                         projectName={project.title}
                         projectImage={project.image}
                         projectLink={project.url}
                         projectGithub={project.github}
                         projectTags={project.techStack}
                     />
                    ))}
                </TabsContent> */}
                <TabsContent
                    value="be"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projects.filter(project => project.scope===projectScope.BackEnd).map((project) => (
                        <ProjectCard
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
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projects.filter(project => project.scope===projectScope.FrontEnd).map((project) => (
                        <ProjectCard
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
