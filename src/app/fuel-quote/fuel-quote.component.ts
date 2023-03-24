import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-quote',
  templateUrl: './fuel-quote.component.html',
  styleUrls: ['./fuel-quote.component.css']
})
export class FuelQuoteComponent implements OnInit{

  public notFilled: boolean = false;

  constructor(private http: HttpClient) {}

  onSubmit(formData: any)
  {
    this.notFilled = false;
    console.log(formData);

    if(formData['gallons'] == '' || formData['date'] == '')
    {
      this.notFilled = true;
    }

    this.http.post("http://localhost:9196/softwaredesign/quoteHistory/user", formData).subscribe(res => {
    console.log(res);

  });

  }








  ngOnInit(): void {
    
  }





}
