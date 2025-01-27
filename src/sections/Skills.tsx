// import React from "react";
import Title from "../components/Title";
import * as Si from '@icons-pack/react-simple-icons';

const iconSize = 64;

const Skills = ({ }) => {
    return (
        <section id="skills" className="flex flex-col w-svw bg-theme h-fit lg:h-svh pb-10">
            <div className="flex flex-col w-full items-center text-xl leading-loose text-center duration-150 py-10 lg:ps-10 lg:items-baseline lg:text-left text-pretty line-clamp-3">
                <Title text="Skills" className="hover-target" />
            </div>
            <div className="flex lg:grid grid-cols-3 flex-col gap-y-6 w-full">
                <div className="flex flex-col items-center gap-y-6 hover-target">
                    <span className="title-h2">Language</span>
                    <div className="grid grid-cols-3 gap-10">
                        <Si.SiPhp size={iconSize} color="currentColor" className="text-purple-700" />
                        <Si.SiHtml5 size={iconSize} color="currentColor" className="text-orange-600" />
                        <Si.SiCss3 size={iconSize} color="currentColor" className="text-blue-600" />
                        <Si.SiDart size={iconSize} color="currentColor" className="text-blue-400" />
                        <Si.SiPython size={iconSize} color="currentColor" className="text-yellow-500" />
                        <Si.SiJavascript size={iconSize} color="currentColor" className="text-yellow-400" />
                        <Si.SiTypescript size={iconSize} color="currentColor" className="text-blue-500" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-6 hover-target">
                    <span className="title-h2">Framework</span>
                    <div className="grid grid-cols-3 gap-10">
                        <Si.SiTailwindcss size={iconSize} color="currentColor" className="text-sky-500" />
                        <Si.SiLaravel size={iconSize} color="currentColor" className="text-red-600" />
                        <Si.SiFlutter size={iconSize} color="currentColor" className="text-blue-500" />
                        <Si.SiVuedotjs size={iconSize} color="currentColor" className="text-green-500" />
                        <Si.SiExpress size={iconSize} color="currentColor" className="text-theme-invert" />
                        <Si.SiReact size={iconSize} color="currentColor" className="text-blue-600" />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-6 hover-target">
                    <span className="title-h2">Tool</span>
                    <div className="grid grid-cols-3 gap-10">
                        <Si.SiGithub size={iconSize} color="currentColor" className="text-black" />
                        <Si.SiFigma size={iconSize} color="currentColor" className="text-[#F24E1E]" />
                        <Si.SiArduino size={iconSize} color="currentColor" className="text-[#00979D]" />
                        <Si.SiVercel size={iconSize} color="currentColor" className="text-[#000000]" />
                        <Si.SiUnity size={iconSize} color="currentColor" className="text-theme-invert" />
                        <Si.SiLaragon size={iconSize} color="currentColor" className="text-blue-600" />
                        <Si.SiDbeaver size={iconSize} color="currentColor" className="text-[#a38874]" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;