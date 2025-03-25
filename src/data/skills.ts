export interface SkillType {
  label: string;
  src: string;
  alt: string;
  skills: string[];
}

export const skillsData: SkillType[] = [
  {
    label: "Frontend",
    src: "/icons/frontend.svg",
    alt: "Frontend Icon",
    skills: ["React", "Javascript", "HTML", "CSS", "TailwindCSS"],
  },
  {
    label: "Backend",
    src: "/icons/backend.svg",
    alt: "Backend Icon",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "PHP"],
  },
  {
    label: "Outils",
    src: "/icons/tools.svg",
    alt: "Tools Icon",
    skills: ["Git", "Github", "Postman"],
  },
  {
    label: "Data Analytics",
    src: "/icons/design.svg",
    alt: "data analytics Icon",
    skills: ["Excel", "Power BI"],
    },
]; 