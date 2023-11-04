import {
    projectsBackEnd,
    projectsFrontEnd,
    projectsFullStack,
} from "@/constants";
import Container from "./ui/container";
import ProjectCard from "./ui/project-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

const ProjectSection = () => {
    return (
        <Container className="pt-20" id="projects">
            <h1 className="text-center font-extrabold text-3xl md:text-5xl underline">
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
                    {projectsFullStack.map(() => (
                        <ProjectCard
                            projectName="BrightLine - Clone"
                            projectImage="https://dhunu.github.io/resources/brightline.png"
                            projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                            projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                            projectTags={["html", "css", "js", "bootstrap"]}
                        />
                    ))}
                    {projectsFrontEnd.map((project) => (
                        <ProjectCard
                            projectName={project.title}
                            projectImage={project.image}
                            projectLink={project.url}
                            projectGithub={project.github}
                            projectTags={project.techStack}
                        />
                    ))}
                    {projectsBackEnd.map((project) => (
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
                    value="fs"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projectsFullStack.map(() => (
                        <ProjectCard
                            projectName="BrightLine - Clone"
                            projectImage="https://dhunu.github.io/resources/brightline.png"
                            projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                            projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                            projectTags={["html", "css", "js", "bootstrap"]}
                        />
                    ))}
                </TabsContent>
                <TabsContent
                    value="be"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    {projectsBackEnd.map((project) => (
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
                    {projectsFrontEnd.map((project) => (
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
