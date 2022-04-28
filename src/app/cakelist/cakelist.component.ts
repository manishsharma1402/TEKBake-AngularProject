import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ManuService } from '../manu.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {
  //    ascSort(){
  //    this.cakes.sort((obj1:any,obj2:any)=>{
  //      obj1.price-obj2.price
     
  //    })
  //  }
  //  descSort(){
  //    this.cakes.sort((obj1 : any , obj2:any)=>{
  //      obj2.price-obj1.price

  //    })
  //  }  

  constructor(private manuangular : ManuService, private http : HttpClient){
    var url = "https://apifromashu.herokuapp.com/api/allcakes"
    this.http.get(url).subscribe({
      next:(response:any)=>{
        console.log("Response from all cakes api",response)
        this.cakes = response.data
      },
      error:(error)=>{
        console.log("Error from all cakes api", error)
      }
    })
  }

  ascSort(){
    this.manuangular.PORT= 4200
    this.cakes = this.manuangular.ascending(this.cakes)
  }
  descSort(){
    
    this.cakes = this.manuangular.descending(this.cakes)
  }


  cakes:any=[
   
  ]


  ngOnInit(): void {
  }

}
