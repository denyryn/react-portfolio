import React, { useRef, useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (form.current) {
            emailjs
                .sendForm(
                    "service_0fc2wum", // Replace with your EmailJS Service ID
                    "template_he5cxps", // Replace with your EmailJS Template ID
                    form.current,
                    "dJlrQZ2WyWCmtJ2Vf" // Replace with your EmailJS Public Key
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Message sent successfully!");
                        form.current?.reset(); // Reset the form after submission
                    },
                    (error) => {
                        console.log(error.text);
                        alert("Failed to send message. Please try again.");
                    }
                )
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col min-w-full gap-y-2 ">
            {/* Name Field */}
            <TextInput
                id="from_name"
                name="from_name"
                placeholder="Full Name"
                className=""
                required
                errorMessage="Please enter your full name"
            />

            {/* Email Field */}
            <TextInput
                id="from_email"
                name="from_email"
                placeholder="Email"
                className=""
                required
                type="email"
                errorMessage="We'll never share your email"
            />

            {/* Subject Field */}
            <TextInput
                id="subject"
                name="subject"
                placeholder="Subject"
                className=""
                required
                errorMessage="What is your message about?"
            />

            {/* Message Field */}
            <label htmlFor="message" className="form-control w-full h-full row-span-2">
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="bg-transparent border-b-4 border-theme-invert flex-1 py-2 placeholder-gray-800 dark:placeholder-gray-500 outline-none focus:border-accentblue"
                />
                {/* <div className="label">
                    <span className="label-text-alt">Write your message here</span>
                </div> */}
            </label>

            {/* Submit Button */}
            <Button className="max-w-md p-2 lg:place-self-end place-self-center" text="Send Message" type="submit" disabled={isLoading} />
        </form>
    );
};

export default ContactForm;