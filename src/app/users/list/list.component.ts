import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Users } from '../../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: Users[] = [];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.list().subscribe(item => {
      this.users = item;
      console.log(this.users);
    })
  }

}
