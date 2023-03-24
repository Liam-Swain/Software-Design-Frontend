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
  private userObject: any = null;
  
  constructor(private http: HttpClient) {};

  async onSubmit(formData: any){
    this.username = formData['username'];
    this.password = formData['password'];

    this.errorString = await this.checkLogin(formData);
    this.userObject = await this.getLoggedInUser();
    this.errorString = await this.getErrorString();

  }

  async getErrorString(){
    console.log(this.userObject);
    if(this.username == '' || this.password == ''){
      console.log('3');
      return 'You have not entered a username or password'
    }
    else if(this.userObject == null){
      console.log('3');
      return 'logged in'
    }
    // elif statement to check database for matching login info would go here
    else{
      console.log('3');
      return 'incorrect username or password'
    }
  }
  async getLoggedInUser(){
    console.log("2")
    console.log(this.userObject);
    return this.http.get("http://localhost:9196/softwaredesign/getLoggedInUser");
  }

  //returns error string for when user enters wrong login
  async checkLogin(formData: any){
        this.http.post("http://localhost:9196/softwaredesign/verifyLogin", formData).subscribe( async res =>{
        this.userObject = res;
        
      })
      console.log("1")
      return this.userObject;
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

