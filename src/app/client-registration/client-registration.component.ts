import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit{
  public notFilled: boolean = false;
  public passwordMismatch: boolean = false;
  onSubmit(formData: any)
  {
    this.notFilled = false
    this.passwordMismatch = false;
    console.log(formData);
    
    if(formData['username'] == '' || formData['password'] == '')
    {
      this.notFilled = true;
    }

    else if(formData['password'] != formData['confirmedPassword']){
      this.passwordMismatch = true;
    }


  }


  ngOnInit(): void {
  }

}
