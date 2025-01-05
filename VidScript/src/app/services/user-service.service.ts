import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService{

  allUsers: User[] = []
  logedInUser!: User;

  constructor() {
    this.addUser("SchrimpsMitReis", "assets/images/Roman.png")
  }
  
  addUser(name: string, profilImgSrc: string): User {
    const id = this.generateUniqueId();
    const newUser = new User(id, name, profilImgSrc);
    this.allUsers.push(newUser);
    return newUser;
  }


  private generateUniqueId(): number {
    let id: number;
    do {
      id = Math.floor(Math.random() * 10000);
    } while (this.idExists(id));
    return id;
  }

  private idExists(id: number): boolean {
    return this.allUsers.some((user) => user.id === id);
  }
}
