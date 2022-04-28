import { Component, OnInit } from '@angular/core';
import { ManuService } from '../manu.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  userdetails: any = {};

  constructor(private manu:ManuService) {}

  addAddress(){
    this.manu.userdetails = this.userdetails
  }

   

  ngOnInit(): void {
  }

}
