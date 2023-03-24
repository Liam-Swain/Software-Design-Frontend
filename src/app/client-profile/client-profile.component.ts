import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit{
  public notFilled: boolean = false;
  public States = [
    "Alaska", "Alabama", "Arkansas", "American Samoa", "Arizona", "California", "Colorado", "Connecticut", "District ", "of Columbia", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland", "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Virgin Islands", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }


  onSubmit(formData: any)
  {
    this.notFilled = false;
    console.log(formData);

    if(formData['name'] == '' || formData['Address1'] == '' || formData['city'] == '' || formData['state'] == '' || formData['zipcode'] == ''){
      this.notFilled = true;
    }
    else{
      formData['user'] = sessionStorage.getItem("user");
      console.log(formData);
      this.http.put("http://localhost:9196/softwaredesign/updateClient", formData).subscribe(res => {
        if(res != null){
          alert("Thank You For Creating Your Profile");
          sessionStorage.setItem("loggedIn", "true");
          window.location.reload();
        }
      });
    }



  }





}
