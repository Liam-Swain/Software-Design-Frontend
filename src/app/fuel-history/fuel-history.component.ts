import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-history',
  templateUrl: './fuel-history.component.html',
  styleUrls: ['./fuel-history.component.css']
})
export class FuelHistoryComponent implements OnInit{

  public response: any;
  public cols: any;

  paginate(event: any){

  }

  constructor() {}


  ngOnInit(): void {
    this.response = [
      {
        'gallons': 10, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 100,
        'total': 150,
        'user': 'Liam Swain'
      },
      {
        'gallons': 13, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 130,
        'total': 180,
        'user': 'Liam Swain'
      },
      {
        'gallons': 15, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 150,
        'total': 200,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 25, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 250,
        'total': 300,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
      {
        'gallons': 20, 
        'address': '123 street',
        'date': 'Janurary 1st',
        'price': 200,
        'total': 250,
        'user': 'Liam Swain'
      },
    ]

    this.cols = [
      {field: 'gallons', header: 'Gallons Requested'},
      {field: 'address', header: 'Delivery Address'},
      {field: 'date', header: 'Delivery Date'},
      {field: 'price', header: 'Suggested Price'},
      {field: 'total', header: 'Total Price'},
      {field: 'user', header: 'User'}
    ]

    console.log(this.response);
    console.log(this.cols);

  }

}
