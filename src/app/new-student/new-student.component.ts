import { Component, ErrorHandler, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BookViewModel, StudentViewModel } from "../api/src/models";
import { StudentsService } from "../api/src/services";
import { ToastrService } from "ngx-toastr";
import { BroadcasterService } from "../core/services/broadcaster.service";

@Component({
  selector: "app-new-student",
  templateUrl: "./new-student.component.html",
  styleUrls: ["./new-student.component.css"]
})
export class NewStudentComponent implements OnInit {

  public newStudent: StudentViewModel;

  constructor(
    private broadcaster: BroadcasterService,
    private readonly toastr: ToastrService,
    private readonly StudentsService: StudentsService,
    private router: Router
    )
    {
      this.newStudent = {
        favoriteBooksList: [] as BookViewModel[]
      } as StudentViewModel;
    }

  ngOnInit() {
  }

  public saveNewUser = async () => {
    try {
      await this.StudentsService.postApiStudents({ body: this.newStudent}).toPromise();
      this.broadcaster.broadcast("reload-students")
      this.router.navigate(["students"]);
    } catch (exception) {
      this.toastr.error(exception.error);
    }

  }
}
