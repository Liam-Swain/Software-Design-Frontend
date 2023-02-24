import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-quote',
  templateUrl: './fuel-quote.component.html',
  styleUrls: ['./fuel-quote.component.css']
})
export class FuelQuoteComponent implements OnInit{

  public notFilled: boolean = false;

  constructor() {}

  onSubmit(formData: any)
  {
    this.notFilled = false;
    console.log(formData);

    if(formData['gallons'] == '' || formData['date'] == '')
    {
      this.notFilled = true;
    }

  }








  ngOnInit(): void {
    
  }





}
