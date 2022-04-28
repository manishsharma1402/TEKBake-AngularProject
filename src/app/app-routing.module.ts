import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './address/address.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentComponent } from './payment/payment.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SearchComponent } from './search/search.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { CartComponent } from './cart/cart.component';
import { CakedetailComponent } from './cakedetail/cakedetail.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgot",component:ForgotComponent},
  {path:"search",component:SearchComponent},
  {path:"addcake",component:AddcakeComponent},
  {path:"cart", component:CartComponent},
  {path:"detail/:cakeid", component:CakedetailComponent},
  { path: "myorders", component: MyordersComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
    children: [
      { path: "", component: AddressComponent },
      { path: "address", component: AddressComponent },
      { path: "payment", component: PaymentComponent },
    ]},  
  {path:"**",component:PagenotfoundComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
