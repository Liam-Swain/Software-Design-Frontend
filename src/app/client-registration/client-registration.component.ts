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

  constructor(private http: HttpClient) {};

  onSubmit(formData: any)
  {
    this.notFilled = false
    this.passwordMismatch = false;
    console.log(formData);
    console.log(formData['password']);
    console.log(formData['confirmedPassword']);
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

      this.http.post("http://localhost:9196/softwaredesign/registerUser", formData).subscribe(res => {
        console.log(res);
      })
      
    }




  }


  ngOnInit(): void {
  }

}
