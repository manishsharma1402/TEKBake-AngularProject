import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ManuService } from '../manu.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitems:any = []
  totalPrice:any = 0
  faTrash= faTrash
  constructor(private router : Router,private manu : ManuService , private loader: NgxUiLoaderService) {
    var url = "https://apifromashu.herokuapp.com/api/cakecart"
    let myheaders = new HttpHeaders()
    myheaders = myheaders.append("authtoken", localStorage["token"])
    var options = {
      headers:myheaders
    }
    var body = {}
    this.manu.getCartItems(url,body,options).subscribe({
      next:(response:any)=>{
        console.log("Response from cart items  api" , response)
        this.cartitems = response.data
        this.cartitems.forEach((each:any)=>{
           this.totalPrice=this.totalPrice+each.price*each.quantity
         
        })
        
      },
      error:(error)=>{
        console.log("Error from  cart api" , error)
      }
    })
   }


   removeCakeFromCart(index:any){
      // hit the api
      var body = {
        cakeid:this.cartitems[index]["cakeid"]
      }
      var url = "https://apifromashu.herokuapp.com/api/removecakefromcart"

      var myheaders = new HttpHeaders()
      myheaders = myheaders.append("authtoken", localStorage["token"])
      var options = {
        headers:myheaders
      }
      this.loader.start()
      this.manu.removeCakeFromCart(url,body,options).subscribe({
        next:(response:any)=>{
          this.loader.stop()

          console.log("Response from remove from cart api", response)
          if(response.message=="Removed whole cake  item from cart"){
            this.totalPrice = this.totalPrice-this.cartitems[index].quantity*this.cartitems[index].price
            this.cartitems.splice(index,1)
          }
        },
        error:(error:any)=>{
          this.loader.stop()

          console.log("Error from remove from cart api")
        }
      })
   }

   increaseQuantity(index:any){
     // hit the api
     var url = "https://apifromashu.herokuapp.com/api/addcaketocart"
     var myheaders = new HttpHeaders()
     myheaders = myheaders.append("authtoken",localStorage["token"])
     var options = {
       headers:myheaders
     }
     this.loader.start()
     this.manu.addCakeToCart(url,this.cartitems[index],options).subscribe({
       next:(response:any)=>{
         this.loader.stop()
         if(response.data){
          this.totalPrice = this.totalPrice+this.cartitems[index].price
          this.cartitems[index].quantity++
         }
       },
       error:(error:any)=>{
        this.loader.stop()

         console.log("error from decrease quantity api" , error)
       }
     })

   }

   decreaseQuantity(index:any){
     // hit the api
     var url = "https://apifromashu.herokuapp.com/api/removeonecakefromcart"
     var myheaders = new HttpHeaders()
     myheaders = myheaders.append("authtoken",localStorage["token"])
     var options = {
       headers:myheaders
     }
     var body = {
       cakeid:this.cartitems[index].cakeid
     }
     this.loader.start()
     this.manu.removeCakeFromCart(url,body,options).subscribe({
       next:(response:any)=>{
         this.loader.stop()
         console.log("Respose from remove one item api" , response)
         this.totalPrice = this.totalPrice-this.cartitems[index].price
         this.cartitems[index].quantity--
       },
       error:(error:any)=>{
        this.loader.stop()
         console.log("Errror fromapi  ," , error)
       }
     })
   }

   checkout(){
     this.manu.cartitems = this.cartitems
     this.manu.price = this.totalPrice
     this.router.navigate(["/checkout"])
   }


  ngOnInit(): void {
  }

}

