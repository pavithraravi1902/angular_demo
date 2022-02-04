import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  rank = 1;
  data: any = {
    first: {
      name: "Pavithra",
      dept: "BSc Maths",
      medal: "Gold",
    },
    second: {
      name: "Yamuna",
      dept: "BBA"
    }
  };

  constructor() { }

  ngOnInit(): void {

  }

}
