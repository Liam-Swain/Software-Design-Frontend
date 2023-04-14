import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-quote',
  templateUrl: './fuel-quote.component.html',
  styleUrls: ['./fuel-quote.component.css']
})
export class FuelQuoteComponent implements OnInit {

  public notFilled: boolean = false;
  public gotPrice: boolean = false;
  public currentUser: any;
  public displayError: boolean = false;
  response: any;
  constructor(private http: HttpClient) { }


  getPrice() {
    this.displayError = false;
    var gallon: any = document.getElementById("gallons");
    var date: any = document.getElementById("date");
    gallon = gallon.value;
    date = date.value;
    if (gallon == "" || gallon == "" || date == "" || date == "") {
      this.displayError = true;
    }
    else {
      var request = {
        'gallonsRequested': gallon,
        'date': date,
        'username': this.currentUser['user'],
        'state': this.currentUser['state']
      }
      this.http.post("http://localhost:9196/softwaredesign/createQuote", request).subscribe(res => {
        this.response = res;
        console.log(this.response);
        this.gotPrice = true;
      });
    }



  }

  onSubmit(formData: any) {
    this.notFilled = false;
    console.log(formData);

    if (formData['gallons'] == '' || formData['date'] == '') {
      this.notFilled = true;
    }

    this.http.post("http://localhost:9196/softwaredesign/quoteHistory/user", formData).subscribe(res => {
      console.log(res);

    });

  }








  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem("userInfo");
    this.currentUser = JSON.parse(this.currentUser);
    console.log(this.currentUser);
  }





}
