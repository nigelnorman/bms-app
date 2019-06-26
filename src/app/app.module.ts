import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusinessListComponent } from './business-list/business-list.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewBusinessComponent } from './new-business/new-business.component';

@NgModule({
  declarations: [AppComponent, BusinessListComponent, EditBusinessComponent, UserListComponent, EditUserComponent, HomeComponent, NewUserComponent, NewBusinessComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
