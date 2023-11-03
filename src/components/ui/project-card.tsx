"use client";

import Tilt from "react-parallax-tilt";
import { Code2, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
    className?: string;
    projectName: string;
    projectTags: string[];
    projectImage: string;
    projectLink: string;
    projectGithub: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    className,
    projectName,
    projectTags = [],
    projectImage,
    projectLink,
    projectGithub,
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className={cn("h-64 w-96 rounded-lg", className)}>
            <Tilt
                className="parallax-effect-glare-scale h-full w-full border border-white rounded-xl"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <img
                    src={projectImage}
                    alt="project-img"
                    className="object-contain opacity-50 rounded-t-xl"
                />
                <div className="inner-element w-full h-full absolute top-0 left-0">
                    <h3 className="text-xl">{projectName}</h3>
                    <div className="text-sm">
                        {projectTags.map((tag, index) => (
                            <span key={index} className="mr-2">
                                {`#${tag}`}
                            </span>
                        ))}
                    </div>
                    <Link to={projectLink} onClick={() => {
                        window.open(projectLink, "_blank");
                    }}>
                        <Code2
                            className="absolute top-6 right-16"
                        />
                    </Link>
                    <Link to={projectGithub} onClick={() => {
                        window.open(projectGithub, "_blank");
                    }}>
                        <Github className="absolute top-6 right-7" />
                    </Link>
                </div>
            </Tilt>
        </div>
    );
};

export default ProjectCard;
