import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  private username: string = '';
  private password: string = '';
  public errorString: string = '';
  
  constructor() {}

  onSubmit(formData: any)
  {
    this.username = formData['username'];
    this.password = formData['password'];

    this.errorString = this.checkLogin();
  }

  //returns error string for when user enters wrong login
  checkLogin(){
    if(this.username == '' || this.password == ''){
      return 'You have not entered a username or password'
    }
    // elif statement to check database for matching login info would go here
    else{
      return  ''
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

