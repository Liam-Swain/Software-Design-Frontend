import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit{
  public notFilled: boolean = false;
  loggedIn = sessionStorage.getItem("loggedIn");
  public alreadyRegistered: any;
  public change: boolean = false;
  public currentUser: any;

  public States = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    if(this.loggedIn == 'true'){
        this.alreadyRegistered = true;
      }
      else{
        this.alreadyRegistered = false;
      }
  
      this.currentUser = sessionStorage.getItem("userInfo");
      this.currentUser = JSON.parse(this.currentUser);
      console.log(this.currentUser);    

  }

    updateUser(formData: any) {
        var allBlank = true;
        console.log(formData);
        if (formData['password'] != formData['confirmPassword']) {
            alert("Passwords Are Not The Same");
        }
        else {
            for (var i in formData) {
                if(formData['password'] != ''){
                    delete formData['confirmPassword'];
                }
                if (formData[i] == '' || formData[i] == undefined) {
                    formData[i] = this.currentUser[i];
                    console.log(i);
                }
                else {
                    allBlank = false;
                }
            }
            console.log(allBlank);
            if (!allBlank) {
                formData['user'] = sessionStorage.getItem("user");
                if(formData['state'] != '' && formData['state'].length != 2)
                    formData['state'] = formData['state']['abbreviation'];
                formData['active'] = 'Enabled';
                console.log(formData['state']);
                this.http.put("http://localhost:9196/softwaredesign/updateClient", formData).subscribe(res => {
                    console.log(res);
                    if (res != null) {
                        alert("Updated Complete");
                        window.location.reload();
                        sessionStorage.setItem("userInfo", JSON.stringify(res));
                    }
                });
            }
        }

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
      formData['state'] = formData['state']['abbreviation'];
      console.log(formData);
      this.http.put("http://localhost:9196/softwaredesign/updateClient", formData).subscribe(res => {
        if(res != null){
          alert("Thank You For Creating Your Profile");
          sessionStorage.setItem("loggedIn", "true");
          window.location.reload();
          sessionStorage.setItem("userInfo", JSON.stringify(res));
        }
      });
    }



  }





}
