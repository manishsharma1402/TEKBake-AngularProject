import { Component } from '@angular/core';
import { ManuService } from './manu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private manu : ManuService){}
  // title = 'tekangular';
  // friends = ["Arun" ,"Ayush" ,"Rishabh" ,"Kartar" , "Amondal" ,"Sanskar" , "Pragati"]
  // trainees : any = [{
  //   name:"Arun",
  //   salary:"1 Crore"
  // },{
  //   name:"Arun 1",
  //   salary:"1 Crore"
  // },{
  //   name:"Arun 2",
  //   salary:"1 Crore"
  // },{
  //   name:"Arun 3",
  //   salary:"1 Crore"
  // },{
  //   name:"Arun 4",
  //   salary:"1 Crore"
  // }]
}
