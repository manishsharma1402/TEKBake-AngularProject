import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManuService {
  PORT = 8080
  loggedinUser:any

  signup(url:any,body:any){
    return this.http.post(url,body)
  }

  login(url:any,body:any){
    return this.http.post(url,body)
  }
  getmyorders(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  placeOrder(url: any, body: any, options: any) {
    return this.http.post(url, body, options);
  }

  getCakedetails(url:any){
      return this.http.get(url)
  }

  searchCakes(url:any){
    return this.http.get(url)
  }

  addCakeToCart(url:any,body:any , options:any){
    return this.http.post(url,body,options)

  }
  getCartItems(url:any,body:any , options:any){
    return this.http.post(url,body,options)

  }
  uploadImage(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }
  removeCakeFromCart(url:any,body:any,options:any){
    return this.http.post(url,body,options)

  }

  cartitems:any
  price:any
  totalPrice:any
  userdetails:any

  ascending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj1.price - obj2.price
    })
    return data
  }

  descending(data:any){
    data.sort((obj1:any,obj2:any)=>{
      return obj2.price - obj1.price
    })
    return data
  }
  constructor(private http: HttpClient) { }
}
