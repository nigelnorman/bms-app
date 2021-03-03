import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, APP_INITIALIZER, Provider } from "@angular/core";
import { ApiConfiguration } from "./api/src/api-configuration";
import { FormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { ToastrModule } from "ngx-toastr";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { NewStudentComponent } from "./new-student/new-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";
import { HomeComponent } from "./home/home.component";
import { BroadcasterService } from "./core/services/broadcaster.service";
import { ApiModule } from "./api/src/api.module";
import { environment } from "src/environments/environment";
import { BookListComponent } from './book-list/book-list.component';

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
  declarations: [
    AppComponent,
    HomeComponent,
    StudentListComponent,
    NewStudentComponent,
    EditStudentComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ApiModule
  ],
  providers: [
    INIT_API_CONFIGURATION,
    BroadcasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
