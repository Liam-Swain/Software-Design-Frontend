import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'software-design';
  public isMenuOpen: boolean = false;

  showPage() {
    
  }

  constructor() {}

  ngOnInit(): void {

  }

}
