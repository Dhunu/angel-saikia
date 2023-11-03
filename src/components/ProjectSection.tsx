import Container from "./ui/container"
import ProjectCard from "./ui/project-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"

const ProjectSection = () => {
  return (
    <Container className="pt-20" id="projects">
            <h1 className="text-center font-extrabold text-3xl md:text-5xl underline">
                My Projects
            </h1>
            <Tabs defaultValue="fs" className="mt-10">
                <div className="flex justify-center mb-10">
                    <TabsList>
                        <TabsTrigger value="fs">Full Stack</TabsTrigger>
                        <TabsTrigger value="be">Backend</TabsTrigger>
                        <TabsTrigger value="fe">Frontend</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent
                    value="fs"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                </TabsContent>
                <TabsContent
                    value="be"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />

                </TabsContent>
                <TabsContent
                    value="fe"
                    className="flex flex-wrap gap-2 justify-evenly"
                >
                   <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                    <ProjectCard
                        projectName="BrightLine - Clone"
                        projectImage="https://dhunu.github.io/resources/brightline.png"
                        projectLink="https://peppy-valkyrie-ddd5ab.netlify.app/index.html"
                        projectGithub="https://github.com/Roshan-Patro/fallacious-company-8720"
                        projectTags={["html", "css", "js", "bootstrap"]}
                    />
                </TabsContent>
            </Tabs>
        </Container>
  )
}

export default ProjectSection