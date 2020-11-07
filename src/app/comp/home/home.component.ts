import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/serv/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  context: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getPublicContent().subscribe(
      data => {this.context = data; console.log(data);},
      err => {this.context = JSON.parse(err.error).message; console.log(err);}
    );
  }
}