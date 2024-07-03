import { Section, Content } from "./interfaces";

export const portfolioName = "Shami Tomita-Rodriguez";

const project1:Content = {
    name: "Project 1",
    image: "./assets/images/project.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

const project2:Content = {
    name: "Project 2",
    image: "./assets/images/project.avif",
    position: "string", 
    text: "Lorem impsum herm er askll moded", 
    link: "example.com"
}

export const projectSection:Section = {
    name: "Projects",
    display: true,
    content: [
        project1,
        project2
    ]
}

