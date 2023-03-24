import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit{
  public notFilled: boolean = false;
  public passwordMismatch: boolean = false;
  public registeredString: string = "Thank You For Registering!";
  constructor(private http: HttpClient) {};

  onSubmit(formData: any)
  {
    this.notFilled = false
    this.passwordMismatch = false;

    if(formData['username'] == '' || formData['password'] == '')
    {
      this.notFilled = true;
    }

    else if(formData['password'] != formData['confirmedPassword']){
      this.passwordMismatch = true;
    }
    else
    {
      this.passwordMismatch = false;

      var request = {
        "user" : formData['username'],
        "password" : formData['password'],
        "active" : "Disabled"
      };

      console.log(request);

      this.http.post("http://localhost:9196/softwaredesign/insertClient", request).subscribe(res => {
        
      });
      
    }

  }


  ngOnInit(): void {
  }

}
