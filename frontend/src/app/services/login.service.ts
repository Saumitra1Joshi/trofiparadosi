import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();
  constructor(private http:HttpClient) { }
    //current user: which is loggedin
    public getCurrentUser() {
      return this.http.get(`${baseurl}/current-user`);
    }
  //generate token
  public generateToken(loginData:any)
  {
    return this.http.post(`${baseurl}/generate-token`,loginData);
  }
  //login user:set token in localStorage
  public loginUser(token)
  {
    localStorage.setItem("token",token);
    return true;
  }

  //islogin: user is loggedin or not
  public isLoggedIn()
  {
    let tokenstr=localStorage.getItem("token")
    if(tokenstr==undefined|| tokenstr==''||tokenstr==null)
    {
      return false;
    }else{
      return true;
    }
  }
  //logout : remove token from local

  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    return true;
  }

  //gettoken
  public getToken()
  {
    return localStorage.getItem('token');
  }

  //ser user details
  public setUser(user)
  {
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr!=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }
  // getUser role
  public getUserRole()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }
  
}
