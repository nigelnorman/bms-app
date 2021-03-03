import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { NewStudentComponent } from "./new-student/new-student.component";
import { EditStudentComponent } from "./edit-student/edit-student.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  {
    path: "students",
    component: StudentListComponent,
    children: [
      { path: "new", component: NewStudentComponent },
      { path: ":id", component: EditStudentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
