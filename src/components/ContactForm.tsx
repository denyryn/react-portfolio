import React, { useRef, useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!form.current) return false;

        const formData = new FormData(form.current);

        if (!formData.get("from_name")) {
            newErrors.from_name = "Please enter your full name";
        }

        if (!formData.get("from_email")) {
            newErrors.from_email = "Please enter your email";
        } else if (!/\S+@\S+\.\S+/.test(formData.get("from_email") as string)) {
            newErrors.from_email = "Please enter a valid email address";
        }

        if (!formData.get("subject")) {
            newErrors.subject = "Please enter a subject";
        }

        if (!formData.get("message")) {
            newErrors.message = "Please enter your message";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.REACT_APP_EMAILJS_SERVICE_ID!,
                    process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
                    form.current,
                    process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        alert("Message sent successfully!");
                        form.current?.reset(); // Reset the form after submission
                        setErrors({}); // Clear errors after successful submission
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
        <form ref={form} onSubmit={sendEmail} className="flex flex-col min-w-full gap-y-2">
            {/* Name Field */}
            <TextInput
                id="from_name"
                name="from_name"
                placeholder="Full Name"
                className="hover-target"
                required
                errorMessage={errors.from_name}
            />

            {/* Email Field */}
            <TextInput
                id="from_email"
                name="from_email"
                placeholder="Email"
                className="hover-target"
                required
                type="email"
                errorMessage={errors.from_email}
            />

            {/* Subject Field */}
            <TextInput
                id="subject"
                name="subject"
                placeholder="Subject"
                className="hover-target"
                required
                errorMessage={errors.subject}
            />

            {/* Message Field */}
            <label htmlFor="message" className="form-control w-full h-full row-span-2">
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    className="bg-transparent border-b-4 border-theme-invert flex-1 py-2 placeholder-gray-800 dark:placeholder-gray-500 outline-none focus:border-accentblue hover-target"
                />
                {errors.message && <div className="label">
                    <span className="label-text-alt">{errors.message}</span>
                </div>}
            </label>

            {/* Submit Button */}
            <Button
                className="max-w-md p-2 lg:place-self-end place-self-center hover-target"
                text="Send Message"
                type="submit"
                disabled={isLoading}
            />
        </form>
    );
};

export default ContactForm;