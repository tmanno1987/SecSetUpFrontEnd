import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';
import { TokenStorageService } from 'src/app/serv/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn: boolean = false;
  isFailed: boolean = false;
  errorMsg: string = '';
  roles: string[] = [];

  constructor(private auth: AuthService, private tss: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tss.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tss.getUser().roles;
    }
  }

  onSubmit(): void {
    this.auth.login(this.form).subscribe(
      data => {
        this.tss.saveToken(data.accessToken);
        this.tss.saveUser(data);
        this.isLoggedIn = true;
        this.isFailed = false;
        this.roles = this.tss.getUser().roles;
        console.log(data);
        this.reloadPage();
      },
      err => {
        this.errorMsg = err.error.message;
        this.isFailed = true;
        console.log(err);
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}