import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
import {Coffee} from 'src/app/logic/coffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Coffee[] = [];
  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.getList(list => {
      this.list = list;
    });
  }
}
