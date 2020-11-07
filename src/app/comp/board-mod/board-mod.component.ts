import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/serv/user.service';

@Component({
  selector: 'app-board-mod',
  templateUrl: './board-mod.component.html',
  styleUrls: ['./board-mod.component.css']
})
export class BoardModComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getModBoard().subscribe(
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
