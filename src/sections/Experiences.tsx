import React from "react";
import Title from "../components/Title";
import { UserProps } from "../interfaces/UserProps";
import RunningTexts from "../components/RunningTexts";
import Timeline from "../components/Timeline";

interface ExperiencesProps extends UserProps { }

const events = [
  {
    title: "Project Lead",
    date: "03/2024 - 07/2024",
    description: "I led a Project-Based Learning (PBL) program at my university, managing a team of 9 students to successfully deliver a collaborative project. My responsibilities included planning, task delegation, and ensuring timely progress, which resulted in the team achieving all project milestones ahead of schedule. This experience strengthened my leadership, teamwork, and project management skills, while also fostering a culture of innovation and collaboration within the group.",
  },
  {
    title: "Module Writer",
    date: "10/2024 - 12/2024",
    description: "As a Module Writer, I assisted an instructor in developing course materials for the International Business Management study program. I researched, structured, and wrote comprehensive modules that aligned with the curriculum objectives, ensuring clarity and relevance for students. My work contributed to enhancing the quality of the program and received positive feedback from both the instructor and students.",
  },
  {
    title: "Web Developer",
    date: "11/2024 - 12/2024",
    description: "I designed and developed a professional company profile website using WordPress, customizing themes and plugins to meet the client’s requirements. After completing the development, I deployed the website on my VPS server, ensuring optimal performance and security. This project showcased my technical skills in web development, server management, and attention to detail, resulting in a fully functional and visually appealing website.",
  },
  {
    title: "Goes to Public Volunteer",
    date: "01/2024 - 02/2024",
    description: "As a Volunteer, I took on the role of timekeeper, managing schedules and ensuring the smooth execution of community outreach programs. I coordinated activities, kept track of timelines, and ensured all events ran efficiently. This experience honed my time management, communication, and teamwork abilities.",
  },
];

const Experiences: React.FC<ExperiencesProps> = ({ username }) => {
  return (
    <section id="experience" className="flex flex-col justify-between w-svw h-fit bg-theme">
      <div className="w-full py-1 h-fit bg-theme-invert">
        <RunningTexts text={username} />
      </div>

      <div className="items-center text-xl leading-loose text-center duration-150 pt-10 lg:ps-10 lg:place-self-start lg:text-left text-pretty line-clamp-3 place-self-center">
        <Title className="place-self-start" text="Experiences" />
      </div>

      <div className="flex flex-col-reverse gap-y-1 lg:gap-y-0 px-5 place-self-center max-w-5xl lg:flex-row mt-10">
        <Timeline events={events} />
      </div>

      <div className="w-full py-1 h-fit bg-theme-invert">
        <RunningTexts text={username} />
      </div>
    </section>
  );
};

export default Experiences;
