import Container from "@/components/ui/container";
import { projectScope, projects } from "@/constants";

import { ExternalLink, Github } from "lucide-react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import { Separator } from "@/components/ui/separator";

const ProjectPage = () => {
    const { name } = useParams();
    const project = projects.find(
        (project) => project.title.toLowerCase().replace(/\s/g, "-") === name
    );
    return (
        <Container className="h-full flex flex-col mx-2 lg:mx-auto">
            <div className="pt-24"></div>
            <div className="flex justify-between items-center">
                <h1 className="text-xl lg:text-5xl flex justify-between items-center gap-5">
                    {project?.title}
                </h1>
                <div className="flex items-center justify-between w-20">
                    <a href={project?.github} target="_blank">
                        <Github />
                    </a>
                    <a href={project?.url} target="_blank">
                        <ExternalLink className="ml-2" />
                    </a>
                </div>
            </div>
            <div className="w-full">
                {project?.scope === projectScope.FrontEnd ||
                projectScope.FullStack ? (
                    <img src={project?.image} className="my-10 border rounded-lg"/>
                ) : (
                    <div className="my-10 w-full h-60 md:h-[600px]">
                        <ReactPlayer
                            url={project?.url}
                            controls={true}
                            width="100%"
                            height="100%"
                        />
                    </div>
                )}
            </div>
            <Separator className="mt-5" />
            <div className="my-5">
                <h2 className="text-xl lg:text-3xl">Description</h2>
                <p className="text-slate-300">{project?.description}</p>
                <Separator className="my-5" />
                <h2 className="text-xl lg:text-3xl">Tech Stack</h2>
                <p className="w-full flex flex-wrap gap-2 mt-2">
                    {project?.allTechStack.map((stack) => (
                        <span className="bg-slate-300 text-slate-900 px-2 py-1 rounded-md mr-2">
                            {stack}
                        </span>
                    ))}
                </p>
                <Separator className="my-5"/>
            </div>
        </Container>
    );
};

export default ProjectPage;
