import { Project } from "./types"

const pictureFolder = process.env.PUBLIC_URL + "/pictures/"

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
            name: "HTML / CSS",
            amount: 80,
        },
        {
            name: "JavaScript",
            amount: 75,
        },
        {
            name: "Docker",
            amount: 70,
        },
        {
            name: "Linux / Shell",
            amount: 65,
        },
        {
            name: "C#",
            amount: 70,
        },
        {
            name: "Kubernetes",
            amount: 35,
        },
        {
            name: "Python",
            amount: 35,
        },
        {
            name: "Terraform",
            amount: 40,
        },
    ],
    projects: [
        {
            name: "Nectar",
            tags: ["Personal project", "In development"],
            description:
                "Personal project aiming to be a platform for french freelance students.",
            picture: pictureFolder + "nectar.png",
        },
        {
            name: "Planify",
            tags: [
                "School project",
                "TypeScript",
                "Node.js",
                "React.js",
                "In development",
            ],
            description: "Platform that allow people to mange their budgets.",
            picture: pictureFolder + "planify.png",
        },
        {
            name: "Ticket / Neutrinos",
            tags: ["School project", "React.js", "Django", "PostgresSQL"],
            description: "Platform to manage events from our school",
            link: "https://neutrinos.tamtanguy.fr/",
            picture: pictureFolder + "ticket.png",
        },
        {
            name: "Panthéon",
            tags: [
                "Personal project",
                "School project",
                "React.js",
                "Node.js",
                "CouchDB",
            ],
            description:
                "Panthéon is a personal project indexing bests projects released by Epita's first-year students.",
            link: "https://pantheon.acdc.epita.fr/",
            picture: pictureFolder + "pantheon.png",
        },
        {
            name: "Fizualizer",
            tags: ["School Project", "Personal Project", "GoLang", "React.js", "TypeScript", "Open Source", "Cloud Firestore"],
            description:
                "Open source project allowing to visualize data in the Cloud Firestore emulator.",
            link: "https://github.com/atomgenie/fizualizer",
            picture: pictureFolder + "fizualizer.png",
        },
        {
            name: "CryTeam",
            tags: ["School Project", "Video game", "Unity"],
            description:
                "Cryteam is the website introducing our group. Its product is Prism, a videogame built for our first project at school.",
            picture: pictureFolder + "cryteam.png",
        },
        {
            name: "B2 Cave",
            tags: ["Personal Project", "PHP", "HTML/CSS"],
            description: "Agenda of my class",
            link: "https://github.com/atomgenie/B2cave",
        },
        {
            name: "Tâm-Tanguy",
            tags: ["Personal Project", "Personal Website", "This website"],
            description: "This website introduce me.",
            link: "https://github.com/atomgenie/tam-tanguy",
            picture: pictureFolder + "personal.png",
        },
        {
            name: "42sh",
            tags: ["School Project", "C", "Bash"],
            description: "Bash like program built during the third year of EPITA",
        },
        {
            name: "OCR",
            tags: ["School project", "C", "IA"],
            description:
                "Second-year project. Program that aim to recognize printed characters",
        },
    ],
}
