import { BrowserModule } from "@angular/platform-browser";
import { APP_INITIALIZER, Provider } from '@angular/core';
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ApiModule } from "../app/api/src/api.module";
import { ApiConfiguration } from "../app/api/src/api-configuration";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BusinessListComponent } from './business-list/business-list.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { environment } from '../environments/environment';

export function initApiConfiguration(apiConfig: ApiConfiguration): Function {
  return () => {
    apiConfig.rootUrl = environment.apiUrl;
  };
}

export const INIT_API_CONFIGURATION: Provider = {
  provide: APP_INITIALIZER,
  useFactory: initApiConfiguration,
  deps: [ApiConfiguration],
  multi: true,
};

@NgModule({
  declarations: [AppComponent, BusinessListComponent, EditBusinessComponent, UserListComponent, EditUserComponent, HomeComponent, NewUserComponent, NewBusinessComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ApiModule],
  providers: [
    INIT_API_CONFIGURATION
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
