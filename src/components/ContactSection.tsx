import Container from "./ui/container";
import EmailTemplate from "./ui/EmailTemplate";

const ContactSection = () => {
    return (
        <Container className="flex flex-wrap justify-center mt-20 gap-10 pb-20" id="contact">
            <div className="flex flex-col justify-center items-start text-start max-w-lg">
                <h1 className="font-bold text-2xl mb-2">Let&apos;s Connect</h1>
                <p>
                    I&apos;m currently looking for new opportunities, my inbox
                    is always open. Whether you have a question or just want to
                    say hi, I&apos;ll try my best to get back to you!
                </p>
            </div>
            <div className="flex max-w-lg w-full">
                <EmailTemplate />
            </div>
        </Container>
    );
};

export default ContactSection;
