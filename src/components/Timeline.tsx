import React from "react";

interface Event {
    title: string;
    date: string;
    description: string;
}

interface TimelineProps {
    className?: string;
    events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ className, events }) => {
    return (
        <ol className={`relative  border-s border-accentblue mx-10 ${className}`}>
            {events.map((event, index) => (
                <li key={index} className="mb-10 ms-6 hover-target">
                    {/* Timeline Icon/Circle */}
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <div className="rounded-full shadow-lg bg-blue-500 w-full h-full"></div>
                    </span>

                    {/* Timeline Content Box */}
                    <div className="p-4 bg-transparent border-2 border-accentblue rounded-lg shadow-xs ">
                        <div className="items-center justify-between mb-3 sm:flex">
                            {/* Timestamp */}
                            <time className="mb-1 text-xs font-semibold text-accentblue sm:order-last sm:mb-0">
                                {event.date}
                            </time>

                            {/* Title/Description */}
                            <div className="text-base font-bold text-theme-invert">
                                {event.title}
                            </div>
                        </div>

                        {/* Optional Additional Content */}
                        {event.description && (
                            <div className="text-base">
                                {event.description}
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default Timeline;