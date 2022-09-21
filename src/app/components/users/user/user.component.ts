import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() datafromparent!: object;
 
  
  localLap:any;

  constructor() { }

  ngOnInit(): void {
    this.localLap=this.datafromparent;
    console.log(JSON.parse(JSON.stringify(this.localLap)))
    console.log(JSON.parse(JSON.stringify(this.localLap.laptop.model)))
  }

}
