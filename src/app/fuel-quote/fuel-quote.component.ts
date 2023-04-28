import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common';

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
  public currentDate: any = new Date();
  response: any;
  constructor(private http: HttpClient) {}


  

  getPrice() {
    this.displayError = false;
    var gallon: any = document.getElementById("gallons");
    var date: any = document.getElementById("date");
    gallon = gallon.value;
    date = date.value;
    if (gallon == "" || gallon == "" || date == "" || date == "" || gallon < 1) {
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

    var request = {
      'gallonsRequested' : formData['gallons'],
      'deliveryAddress': this.currentUser['address1'],
      'deliveryDate' : formData['date'],
      'suggestedPrice': this.response['suggestedPrice'],
      'totalAmount': this.response['totalPrice'],
      'user': this.currentUser['user']
    }

    this.http.post("http://localhost:9196/softwaredesign/insertQuote", request).subscribe(res => {
      console.log(res);
      alert("Quote Saved");
      window.location.reload();
    });

  }








  ngOnInit(): void {
    this.currentUser = sessionStorage.getItem("userInfo");
    this.currentUser = JSON.parse(this.currentUser);
    console.log(this.currentUser);
    this.currentDate = formatDate(this.currentDate, "yyyy-MM-dd", "en-US");
    console.log(this.currentDate);
  }





}
