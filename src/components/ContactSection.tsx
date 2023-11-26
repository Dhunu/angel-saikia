import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Container from "./ui/container";
import EmailTemplate from "./ui/EmailTemplate";

const ContactSection = () => {
    return (
        <Container
            className="flex flex-wrap justify-center mt-20 gap-10 pb-20 mx-10 sm:mx-auto"
            id="contact"
        >
            <div className="flex flex-col justify-center items-start text-start max-w-lg">
                <h1 className="font-bold text-2xl mb-2">Let&apos;s Connect</h1>
                <p>
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="flex flex-col gap-5 justify-center items-start mt-10">
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://www.linkedin.com/in/angel-saikia/" className="flex items-center justify-center w-10" target="_blank">
                            <LinkedinIcon className="w-7 h-7 text-[#0077b5]" />
                        </a>
                        <div className="font-serif">/angel-saikia</div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://github.com/Dhunu" className="flex items-center justify-center w-10" target="_blank">
                            <GithubIcon className="w-7 h-7 text-[#ffffff]" />
                        </a>
                        <div className="font-serif">/Dhunu</div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://www.facebook.com/angel.saikia.140/" className="flex items-center justify-center w-10" target="_blank">
                            <FacebookIcon className="w-7 h-7 text-[#1877F2]" />
                        </a>
                        <div className="font-serif">/angel.saikia.140</div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <a href="https://www.instagram.com/saikiaangel_/" className="flex items-center justify-center w-10" target="_blank">
                            <InstagramIcon className="w-7 h-7 text-[#d62976]" />
                        </a>
                        <div className="font-serif">/saikiaangel_</div>
                    </div>
                </div>
            </div>
            <div className="flex max-w-lg w-full">
                <EmailTemplate />
            </div>
        </Container>
    );
};

export default ContactSection;
