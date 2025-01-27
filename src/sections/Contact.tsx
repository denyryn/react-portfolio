import React from "react";
import Title from "../components/Title";
import { UserProps } from "../interfaces/UserProps";
import * as Si from '@icons-pack/react-simple-icons';
import ContactForm from "../components/ContactForm";
import RunningTexts from "../components/RunningTexts";

interface ContactProps extends UserProps { }

const Contact: React.FC<ContactProps> = ({ username }) => {
    return (
        <section id="contact" className="flex flex-col justify-evenly h-fit w-svw bg-theme">
            <div className="w-full py-1 h-fit bg-theme-invert">
                <RunningTexts text={username} />
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="min-w-xs max-w-2xl text-center flex flex-col items-center p-10">
                    <div className="w-fit">
                        <Title className="text-xl leading-loose" text="Feel Free to Contact Me :)" />
                    </div>
                    <p className="mt-4">
                        I’m always open to new opportunities, collaborations, or just a friendly chat! Whether you have a project in mind, a question, or simply want to connect, I’d love to hear from you. Don’t hesitate to reach out—I’ll do my best to get back to you as soon as possible. Looking forward to connecting!
                    </p>
                </div>
                <div className="flex flex-col items-center min-w-xs max-w-full w-full lg:w-1/2 p-10">
                    <ContactForm />
                    <div className="w-full max-w-sm h-2 my-10 bg-theme-invert"></div>
                    <div className="grid grid-cols-2 gap-y-8 max-w-lg place-self-center">
                        <div>
                            <span className="block text-2xl font-semibold">Email</span>
                            <span className="block">denyryn@outlook.com</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-semibold">Based In</span>
                            <span className="block">Semarang, Central Java</span>
                        </div>
                        <div className="col-span-2 flex justify-evenly lg:order-first lg:gap-4">
                            <a href="https://github.com/denyryn" target="_blank" rel="noopener noreferrer" className="hover-target">
                                <Si.SiGithub size={32} className="text-theme-invert" />
                            </a>
                            <a href="https://instagram.com/denyryn" target="_blank" rel="noopener noreferrer" className="hover-target">
                                <Si.SiInstagram size={32} className="text-theme-invert" />
                            </a>
                            <a href="https://wa.me/6289664818032" target="_blank" rel="noopener noreferrer" className="hover-target">
                                <Si.SiWhatsapp size={32} className="text-theme-invert" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-1 h-fit bg-theme-invert">
                <RunningTexts text={username} />
            </div>
        </section>
    )
}

export default Contact;