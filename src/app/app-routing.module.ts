import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { NewBusinessComponent } from './new-business/new-business.component';
import { EditBusinessComponent } from './edit-business/edit-business.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: HomeComponent},
  { path: "users", component: UserListComponent, children: [
    { path: "new", component: NewUserComponent},
    { path: ":id", component: EditUserComponent}
  ]},
  { path: "businesses", component: BusinessListComponent, children: [
    { path: "new", component: NewBusinessComponent},
    { path: ":id", component: EditBusinessComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
