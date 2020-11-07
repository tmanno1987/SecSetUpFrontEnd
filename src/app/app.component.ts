import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './serv/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SecSetUpFrontEnd';
  private roles: string[];
  isLoggedIn: boolean = false;
  showAdmin: boolean = false;
  showMod: boolean = false;
  username: string;

  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;

      this.showAdmin = this.roles.includes('ADMIN');
      this.showMod = this.roles.includes('MOD');

      this.username = user.username;
    }
  }

  logout(): void {
    this.token.signOut();
    window.location.reload();
  }
}