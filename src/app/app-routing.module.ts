import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { FuelHistoryComponent } from './fuel-history/fuel-history.component';
import { FuelQuoteComponent } from './fuel-quote/fuel-quote.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "client-registration", component: ClientRegistrationComponent},
  {path: "client-profile", component: ClientProfileComponent},
  {path: "fuel-form", component: FuelQuoteComponent},
  {path: "fuel-history", component: FuelHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
