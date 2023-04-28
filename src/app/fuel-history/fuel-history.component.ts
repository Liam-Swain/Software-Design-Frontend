import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-history',
  templateUrl: './fuel-history.component.html',
  styleUrls: ['./fuel-history.component.css']
})
export class FuelHistoryComponent implements OnInit{

  public response: any;
  public cols: any;
  public user = sessionStorage.getItem("user");
  public noHistory: number = 0;

  paginate(event: any){

  }

  constructor(private http: HttpClient) {}

  

  initFuelHistory(){

    var request = {
      "username" : this.user
    };

    this.http.post("http://localhost:9196/softwaredesign/quoteHistory/user", request).subscribe(res => {

      this.response = res;
      this.response = this.response.fuelQuotesFormList;
      console.log(this.response);
      if(this.response.length == 0){
        this.noHistory = 1;
      }
      else{
        this.noHistory = 2;
      }
    });
  }

  ngOnInit(): void {
    this.initFuelHistory();

    this.cols = [
      {field: 'gallonsRequested', header: 'Gallons Requested'},
      {field: 'deliveryAddress', header: 'Delivery Address'},
      {field: 'deliveryDate', header: 'Delivery Date'},
      {field: 'suggestedPrice', header: 'Suggested Price'},
      {field: 'totalAmount', header: 'Total Price'},
      {field: 'user', header: 'User'}
    ]


  }

}
