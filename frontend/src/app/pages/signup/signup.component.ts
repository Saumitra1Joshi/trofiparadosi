import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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


  constructor(private userService:UserService, private _snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if(this.user.username==''||this.user.phoneNo==''||this.user.username==null)
    {
      // alert("Some detail is missing")
      this._snackbar.open("Username is required",'',{
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
      },
      (error)=>{
        //error
        console.log(error);
        this._snackbar.open("Oops Something Went Wrong",'',{
          duration:3000,
        });
      }
    );
  }


}
