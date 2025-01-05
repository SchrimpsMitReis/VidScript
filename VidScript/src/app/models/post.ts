import { User } from "./user";
export class Post {
    constructor(
        public host: User,
        public content: string,
    ){}
}
