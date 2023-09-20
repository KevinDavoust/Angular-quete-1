import { Input } from "@angular/core";
import { Skill } from "./skill";

export class Developer {
    constructor(
        public lastname: string,
        public firstname: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: Skill[]
        ) {}
    }
