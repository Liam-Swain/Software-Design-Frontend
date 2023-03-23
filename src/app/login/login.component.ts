import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private username: string = '';
  private password: string = '';
  public errorString: string = '';
  private userObject: any;
  
  constructor(private http: HttpClient) {};

  onSubmit(formData: any)
  {
    this.username = formData['username'];
    this.password = formData['password'];

    this.errorString = this.checkLogin(formData);

  }

  //returns error string for when user enters wrong login
  checkLogin(formData: any){
    this.http.post("http://localhost:9196/softwaredesign/verifyLogin", formData).subscribe(res => {
        this.userObject = res;
        console.log(this.userObject);
      })
    if(this.username == '' || this.password == ''){
      return 'You have not entered a username or password'
    }
    else if(this.userObject){
      return 'incorrect user or password'
    }
    // elif statement to check database for matching login info would go here
    else{
      return  'logged in'
    }
  }
  
  // getter function for username and password
  getLogin(){
    let loginData = {
      'username': this.username,
      'password': this.password
    };

    return loginData;
  }




  ngOnInit(): void {
    console.log("Hello");
  }

}

