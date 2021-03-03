import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentViewModel } from "../api/src/models";
import { StudentsService } from "../api/src/services";
import { ToastrService } from "ngx-toastr";
import { BroadcasterService } from "../core/services/broadcaster.service";

@Component({
  selector: "app-edit-student",
  templateUrl: "./edit-student.component.html",
  styleUrls: ["./edit-student.component.css"]
})
export class EditStudentComponent implements OnInit, OnDestroy {

  public student: StudentViewModel;
  public studentId: number;
  public sub: Subscription;

  constructor(
    private broadcaster: BroadcasterService,
    private readonly toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
    private readonly StudentsService: StudentsService
    ) {
    this.studentId = 0;
    this.sub = new Subscription();
    this.sub.add(this.route.params.subscribe(params => (this.studentId = params["id"])));
  }

  ngOnInit() {
    this.loadStudentInfo();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public loadStudentInfo = async () => {
    this.student = await this.StudentsService.getApiStudentsId({ id: this.studentId}).toPromise();
  }

  public saveStudentInfo = async () => {
    try{
      await this.StudentsService.putApiStudentsId({ id: this.studentId, body: this.student}).toPromise();
      this.broadcaster.broadcast("reload-students")
      this.router.navigate(["students"]);
    } catch (exception) {
      this.toastr.error(exception.error);
    }

  }
}
