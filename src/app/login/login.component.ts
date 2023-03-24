import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormArray } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public notFilled: boolean = false;

  constructor(private http: HttpClient) {}
  public loggedIn: boolean = false;
  public wrongUser: string = "This User Does Not Exist";

  public displayWrongUser: boolean = false;

  onSubmit(formData: any)
  {
    this.displayWrongUser = false;
    this.notFilled = false
    console.log(formData);
    if(formData['username'] == '' || formData['password'] == '')
    {
      this.notFilled = true;
    }
    

    var request = {
      "user" : formData['username'],
      "password" : formData['password']
    }
    console.log(formData);
    this.http.post("http://localhost:9196/softwaredesign/authenticate", request).subscribe(res => {
      var response: any = res;
      if(response == null || response == undefined){
        this.displayWrongUser = true;
      }
      else{
        if(response['active'] == "Disabled"){
          window.location.replace("/client-profile");
        }
        else if(response['active'] == "Enabled"){
          window.location.replace("/fuel-history");
          sessionStorage.setItem("loggedIn", "true");
        }
      }
    });

  }





  ngOnInit(): void {
    console.log("Hello");
  }

}
