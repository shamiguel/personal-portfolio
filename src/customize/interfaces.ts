/* Interfaces */

export interface Section {
    name: string
    display: boolean 
    content: Content[]
}

export interface Link {
    name: string
    url: string
}

export interface Content {
    name: string
    id: number
    image: string
    position: string 
    text: string 
    link: string
}