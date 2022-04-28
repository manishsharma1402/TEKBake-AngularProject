
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ManuService } from '../manu.service';
import { truncate } from 'fs';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  projecttitle:any = "TEK Bake!"
  searchtext:any
  length:any
  color:any
  isloggedin:any
  faSearch:any = faSearch
  faCartShopping = faCartShopping
  faSignout= faSignOut
  faUpload = faUpload
  constructor(private manu : ManuService , private router : Router){
        this.isloggedin = localStorage["token"]?true:false
        if(this.isloggedin){
           var url = "https://apifromashu.herokuapp.com/api/cakecart"
           var headers = new HttpHeaders()
           headers = headers.append("authtoken",localStorage["token"])
           var body = {}
           var options = {
              headers:headers
           }
           this.manu.getCartItems(url,body,options).subscribe({
              next:(response:any)=>{
                 console.log("response from cart items api in navbar", response)
                 this.manu.cartitems = response.data
                 this.length =  response.data?.length
              }
           })
        }
        
  }
  isAdmin:any = false

  adminUsers:any = ["ashu.lekhi0540@gmail.com"]

  ngDoCheck(){
     this.length =  this.manu.cartitems?.length

     if(localStorage["token"]){
        this.isloggedin = true
        if(this.adminUsers.includes(localStorage["loggedinUser"])){
           this.isAdmin = true
        }
     }
     else{
        this.isloggedin =  false
        this.isAdmin = false
     }
  }


  logout(){
     localStorage.clear()
     window.location.href = "/"
  }
  search(){
     if(this.searchtext)
     this.router.navigate(["/search"], {queryParams:{q:this.searchtext}})
  }

}
