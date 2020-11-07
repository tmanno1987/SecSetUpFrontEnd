import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/serv/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  content: string;

  constructor(private us: UserService) { }

  ngOnInit(): void {
    this.us.getAdminBoard().subscribe(
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
