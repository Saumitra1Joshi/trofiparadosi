import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    dOB: "",
    firstName: '',
    lastName: '',

    email: '',
    address: '',
    city: '',
    state: '',
    country: '',
    phoneNo: ''
  }


  constructor(private userService:UserService, private _snackbar:MatSnackBar,private route:Router) { }

  ngOnInit(): void {
  }

  ValidateEmail(inputText)
  {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(inputText).toLowerCase());
  }
  ValidatePassword(inputText2)
  {
    // console.log(inputText2);
    const regularExpression1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;    
    return regularExpression1.test(String(inputText2));
  }
    
  formSubmit() {
    // console.log(this.user);
    if(this.ValidateEmail(this.user.email)==false)
    {
      this._snackbar.open("Invalid Email",'',{
        duration:3000,
      });
      return;
    }
    if(this.ValidatePassword(this.user.password)==false)
    {
      this._snackbar.open("Invalid Password",'',{
        duration:3000,
      });
      return;
    }
    
    if(this.user.username==''||this.user.phoneNo==''||this.user.username==null)
    {
      // alert("Some detail is missing")
      this._snackbar.open("Please fill all details",'',{
        duration:3000,
      });
      return;
    }
    //validate
    //adduser:userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        
        Swal.fire('Success','Welcome '+data.firstName+' To Trofi Parodosi','success');
        // this.route.navigate(["login"]);
      },
      (error) => {
        //error
        console.log(error);
        this._snackbar.open('Invalid Details !! Try again', '', {
          duration: 3000,
        });
      }
    );
  }


}
