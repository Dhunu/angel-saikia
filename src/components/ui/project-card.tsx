"use client";

import Tilt from "react-parallax-tilt";
import { Code2, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    const handleProjectClick = () => {
        navigate(`/projects/${projectName.toLowerCase().replace(/\s/g, "-")}`);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div
            className={cn(
                "h-64 w-96 rounded-lg hover:cursor-pointer",
                className
            )}
            onClick={handleProjectClick}
        >
            <Tilt
                className="parallax-effect-glare-scale rounded-xl w-full h-full border border-white"
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.02}
            >
                <img
                    src={projectImage}
                    alt="project-img"
                    className="rounded-xl object-cover opacity-50"
                />
                <div className="inner-element absolute top-0 left-0 w-full h-full">
                    <h3 className="text-xl">{projectName}</h3>
                    <div className="text-sm">
                        {projectTags.map((tag, index) => (
                            <span key={index} className="mr-2">
                                {`#${tag}`}
                            </span>
                        ))}
                    </div>
                    <Link
                        to={projectLink}
                        onClick={() => {
                            window.open(projectLink, "_blank");
                        }}
                    >
                        <Code2 className="top-6 right-16 absolute" />
                    </Link>
                    <Link
                        to={projectGithub}
                        onClick={() => {
                            window.open(projectGithub, "_blank");
                        }}
                    >
                        <Github className="top-6 right-7 absolute" />
                    </Link>
                </div>
            </Tilt>
        </div>
    );
};

export default ProjectCard;
