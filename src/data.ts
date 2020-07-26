import { Project } from "./types"

export const data: {
    skills: { name: string; amount: number }[]
    projects: Project[]
} = {
    skills: [
        {
            name: "TypeScript",
            amount: 90,
        },
        {
            name: "Node.js",
            amount: 85,
        },
        {
            name: "React.js",
            amount: 85,
        },
        {
            name: "HTML - CSS",
            amount: 80,
        },
        {
            name: "Docker",
            amount: 70,
        },
        {
            name: "Linux",
            amount: 65,
        },
    ],
    projects: [
        {
            name: "Panthéon",
            tags: ["Personal Project"],
            description:
                "Panthéon is a personal project indexing bests projects released by Epita's first-year students.",
            link: "https://google.fr",
        },
        {
            name: "CryTeam",
            tags: ["Personal Project"],
            description: "test",
        },
        {
            name: "B2 Cave",
            tags: ["Personal Project"],
            description: "test",
        },
        {
            name: "Website",
            tags: ["Personal Project"],
            description: "test",
        },
        {
            name: "42sh",
            tags: ["Personal Project"],
            description: "test",
        },
    ],
}
