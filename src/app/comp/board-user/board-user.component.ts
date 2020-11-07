import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/serv/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getUserBoard().subscribe(
      data => {
        this.content = data;
        console.log(data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
        console.log(err);
      }
    );
  }
}