import { UserServiceService } from "../services/user-service.service";
export class User {
    constructor(
        public id: number,
        public name:string,
        public profilImgSrc: string,
        // Chats an denen er beteiligt ist
        // Credits am Tag je nach Model
    ){}
}
