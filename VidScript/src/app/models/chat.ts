import { Post } from "./post"
import { User } from "./user"
export class Chat {
    posts: Post[] = []
    name : string = "Untiteled"
    user: User = []

    makePost(user: User, url: string): void{
        // this.posts.push(new Post(""))

    }
}
