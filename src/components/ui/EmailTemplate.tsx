"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./button";
import { toast } from "./use-toast";
import { PhoneCallIcon, MailIcon } from "lucide-react";

const EmailTemplate = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: { target: { name: string; value: string } }) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_j6fag2a",
                "template_yn16ovm",
                {
                    from_name: form.name,
                    to_name: "Angel Saikia",
                    from_email: form.email,
                    to_email: "angelsaikia333@gmail.com",
                    message: form.message,
                },
                "D5YB5_pEfmFHABIzK"
            )
            .then(() => {
                setLoading(false);
                toast({
                    title: "Message Sent",
                    description: "I will get back to you soon",
                    duration: 3000,
                });
                setForm({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((error) => {
                setLoading(false);
                console.log("EMAIL_ERROR", error);
                toast({
                    title: "Error",
                    description: "Error sending message!",
                    duration: 3000,
                    color: "red",
                });
            });
    };
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col justify-center gap-5 my-10">
                <div className="flex items-center justify-start gap-5">
                    <PhoneCallIcon />
                    <div className="font-serif">+91-8011158661</div>
                </div>
                <div className="flex items-center justify-start gap-5">
                    <MailIcon />
                    <div className="font-serif">developer@angelsaikia.com</div>
                </div>
            </div>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col"
            >
                <label className="my-2 text-xl font-semibold">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    className="h-10 p-5 text-black rounded-lg"
                    onChange={handleChange}
                    required
                />
                <label className="my-2 text-xl font-semibold">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    className="h-10 p-5 text-black rounded-lg"
                    onChange={handleChange}
                    required
                />
                <label className="my-2 text-xl font-semibold">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    className="p-5 text-black rounded-lg"
                    onChange={handleChange}
                    required
                />
                <Button
                    variant="outline"
                    className="hover:scale-110 hover:bg-white hover:text-black hover:border-white hover:font-bold w-32 mt-5 text-white transition-all bg-black"
                    type="submit"
                >
                    {loading ? "Sending" : "Send"}
                </Button>
            </form>
        </div>
    );
};

export default EmailTemplate;
