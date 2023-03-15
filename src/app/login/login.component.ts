import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public notFilled: boolean = false;

  constructor() {}



  onSubmit(formData: any)
  {
    this.notFilled = false
    console.log(formData);
    if(formData['username'] == '' || formData['password'] == '')
    {
      this.notFilled = true;
    }
    

    //make a http request

  }





  ngOnInit(): void {
    console.log("Hello");
  }

}
