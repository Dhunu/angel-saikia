import { Button } from "./ui/button";
import Resume from "/assets/files/Angel_Saikia.pdf";

const HeroSection = () => {
    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.download = "Angel_Saikia_Resume.pdf";

        link.href = Resume;

        link.click();
    };
    return (
        <section className="mt-10 xl:h-screen flex flex-col items-center justify-center">
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
                        <Button
                            variant="default"
                            className="bg-[#EF7C4A] text-white hover:bg-[#ff7337] hover:scale-110 transition-all w-24 mt-5"
                            onClick={() => {
                                window.location.href = "#contact";
                            }}
                        >
                            Hire Me
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-black text-white hover:scale-110 transition-all w-32 mt-5"
                            onClick={() => {
                                handleDownloadCV()
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
