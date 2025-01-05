import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [
    MatSidenavModule, 
    MatButtonModule, 
    MatIconModule,
    MatListModule, 
    RouterLink,
    RouterModule
  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  showFiller = true;

  accountImageUrl: string = "assets/images/Roman.png";
  accountName : string = "SchrimpsMitReis"
}
