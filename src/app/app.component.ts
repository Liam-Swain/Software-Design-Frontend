import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'software-design';
  public isMenuOpen: boolean = false;
  public loggedIn:any = sessionStorage.getItem("loggedIn");


  showPage() {
    
  }

  constructor() {}

  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem("loggedIn");
  }

  signOut(){
    window.location.replace("/login");
    sessionStorage.setItem("loggedIn", "false");
    sessionStorage.setItem("user", "");
    sessionStorage.setItem("userInfo", "");
  }

}
