"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "./button";
import { toast } from "./use-toast";

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
            .then(
                () => {
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
                },
                (error) => {
                    setLoading(false);
                    toast({
                        title: "Error",
                        description: error.text,
                        duration: 3000,
                        color: "red",
                    });
                }
            );
    };
    return (
        <div className="flex flex-col w-full">
            <h1 className="font-semibold text-2xl my-5">Contact Me</h1>
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col"
            >
                <label className="font-semibold text-xl my-2">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    className="h-10 rounded-lg p-5 text-black"
                    onChange={handleChange}
                    required
                />
                <label className="font-semibold text-xl my-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    className="h-10 rounded-lg p-5 text-black"
                    onChange={handleChange}
                    required
                />
                <label className="font-semibold text-xl my-2">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    className="rounded-lg p-5 text-black"
                    onChange={handleChange}
                    required
                />
                <Button
                    variant="outline"
                    className="bg-black text-white hover:scale-110 hover:bg-white hover:text-black hover:border-white hover:font-bold transition-all w-32 mt-5"
                    type="submit"
                >
                    {loading ? "Sending" : "Send"}
                </Button>
            </form>
        </div>
    );
};

export default EmailTemplate;
