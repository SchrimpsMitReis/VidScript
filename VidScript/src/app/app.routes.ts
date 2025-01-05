import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'account', component: AccountComponent },
];
