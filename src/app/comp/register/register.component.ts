import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful: boolean = false;
  isFailed: boolean = false;
  errorMsg: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.auth.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMsg = err.error.message;
        this.isFailed = true;
        console.log(err);
      }
    );
  }
}
