
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ManuService } from '../manu.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userdetails: any = {

  }
  signupForm:any

  users: any = []
  constructor(private manu: ManuService , private formbuilder : FormBuilder, private http : HttpClient) {
     
       
    
   }

   responseError: any;
  signup() {
    var temp = { ...this.userdetails };
    this.users.push(temp);
    var url = 'https://apifromashu.herokuapp.com/api/register';
    this.http.post(url, this.users).subscribe({
      next: (response: any) => {
        console.log('Response from users api', response);
        if (response.message === 'User Already Exists') {
          this.responseError = 'User Already Exists';
        }
      },
      error: (error) => {
        console.log('Error from users api', error);
      },
    });
  }
  deleteUser(index: any) {
    alert(index)
  }

  ngOnInit(): void {
  }
}
