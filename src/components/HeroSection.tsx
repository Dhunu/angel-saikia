import {
    FacebookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
} from "lucide-react";
import { SocialIcon } from "react-social-icons";

import { Button } from "./ui/button";
import Resume from "/assets/files/Angel_Saikia.pdf";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const HeroSection = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.download = "Angel_Saikia_Resume.pdf";

        link.href = Resume;

        link.click();
    };
    return (
        <section className="pt-16 md:pt-20 xl:h-screen flex flex-col items-center justify-center" id="hero">
            <div className="flex justify-between flex-wrap-reverse">
                <div className="w-min-[500px] w-full xl:w-auto flex justify-center">
                    <img
                        src="/assets/images/hero-image.png"
                        height={600}
                        width={600}
                        alt="hero-image"
                    />
                </div>
                <div className="flex w-full xl:w-auto justify-center items-center xl:items-start flex-col pt-10 xl:pr-16">
                    <h1 className="text-white mb-4 text-2xl sm:text-3xl xl:text-5xl font-extrabold text-center sm:text-left">
                        Hi! I&apos;m{" "}
                        <span className="text-[#EF7C4A]">Angel</span>
                    </h1>
                    <h1 className="text-white mb-4 text-2xl xl:text-6xl sm:text-4xl text-center sm:text-left font-extrabold xl:max-w-[450px]">
                        Full Stack Web Developer
                    </h1>
                    <div className="flex flex-wrap gap-x-5 justify-center">
                        <Dialog>
                            <DialogTrigger>
                                <Button
                                    variant="default"
                                    className="bg-[#EF7C4A] text-white hover:bg-[#ff7337] hover:scale-110 transition-all w-24 mt-5"
                                >
                                    Hire Me
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-black border-0 w-80 sm:w-96 text-white">
                                <DialogHeader>
                                    <DialogTitle className="text-white">
                                        You can contact me at
                                    </DialogTitle>
                                    <DialogDescription className="flex flex-col">
                                        <div className="flex gap-5 h-10 items-center justify-center sm:justify-start">
                                            <a
                                                href="https://www.linkedin.com/in/angel-saikia/"
                                                target="_blank"
                                            >
                                                <LinkedinIcon color="#0072b1" />
                                            </a>
                                            <a
                                                href="https://www.facebook.com/angel.saikia.140/"
                                                target="_blank"
                                            >
                                                <FacebookIcon color="#1877F2" />
                                            </a>
                                            <a
                                                href="https://twitter.com/AngelSaikia1"
                                                target="_blank"
                                                className="h-full"
                                            >
                                                <SocialIcon
                                                    network="x"
                                                    url=""
                                                    style={{
                                                        height: "40px",
                                                        width: "40px",
                                                    }}
                                                />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/saikiaangel_/"
                                                target="_blank"
                                            >
                                                <InstagramIcon color="#d62976" />
                                            </a>
                                            <a
                                                href="https://github.com/Dhunu"
                                                target="_blank"
                                            >
                                                <GithubIcon color="#fff" />
                                            </a>
                                            
                                        </div>
                                        <h2 className="mt-3 text-xl text-white">
                                            +91-8011158661
                                        </h2>
                                        <Link
                                            to="mailto:angelsaikia333@gmail.com"
                                            className="mt-2 text-xl text-white"
                                        >
                                            angelsaikia333@gmail.com
                                        </Link>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        <Button
                            variant="outline"
                            className="bg-black text-white hover:scale-110 transition-all w-32 mt-5"
                            onClick={() => {
                                handleDownloadCV();
                            }}
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
