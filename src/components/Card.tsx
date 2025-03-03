import React from "react";
import ArrowTopRight from "../assets/arrow-top-left.svg";

interface CardProps {
    Title: string,
    Description: string,
    Images: string[],
    Tags: string[],
}


const Card: React.FC<CardProps> = ({ Title, Description, Images, Tags }) => {

    return (
        <div className="flex flex-col size-fit duration-150 ease-in-out rounded-sm hover-target hover:rounded-none outline-accentblue outline p-6 group">
            <span className="place-self-end mb-6">
                <img src={ArrowTopRight} alt="Arrow" className="size-4 dark:invert scale-0 p group-hover:scale-100" />
            </span>
            <div className="flex flex-nowrap overflow-x-auto snap-x">
                {Images.map((image: string, index: number) => (
                    <img key={index} src={image} alt="Project Name" className="snap-center w-full" />
                ))}
            </div>
            <span className="mt-3 font-bold text-xl">
                {Title}
            </span>
            <div className="mt-3 flex flex-row space-x-2">
                {Tags.map((tag: string, index: number) => (
                    <div key={index} className="rounded-full size-fit h-fit p-1 text-xs font-semibold outline outline-2 outline-accentblue">
                        {tag}
                    </div>
                ))}
            </div>
            <span className="mt-3 text-sm ">
                {Description}
            </span>
        </div>
    );
}

export default Card;