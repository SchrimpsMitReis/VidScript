import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: { id: number; name: string; token: string } | null = null;

  constructor() {}

  login(id: number, name: string, token: string): void {
    this.currentUser = { id, name, token };
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser)); // Optional: Lokale Speicherung
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): { id: number; name: string; token: string } | null {
    if (!this.currentUser) {
      const savedUser = localStorage.getItem('currentUser');
      if (savedUser) {
        this.currentUser = JSON.parse(savedUser);
      }
    }
    return this.currentUser;
  }
}
