import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { StudentViewModel } from "../api/src/models";
import { StudentsService } from "../api/src/services";
import { BroadcasterService } from "../core/services/broadcaster.service";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit, OnDestroy {

  public students: StudentViewModel[];
  public subscription: Subscription;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private readonly StudentsService: StudentsService,
    private broadcaster: BroadcasterService
    ) {
      this.subscription = new Subscription();
      this.subscription.add(this.broadcaster.receive<string>("reload-students").subscribe(() => {
        this.loadStudents();
      }))
    }

  ngOnInit() {
    this.loadStudents();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public loadStudents = async () => {
    this.students = await this.StudentsService.getApiStudents().toPromise();
  }

  public editStudent = (studentId: number) => {
    this.router.navigate([studentId], { relativeTo: this.route});
  }

  public newStudent = () => {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  public deleteStudent = async (studentId: number) => {
    await this.StudentsService.deleteApiStudentsId({ id: studentId }).toPromise();
    this.loadStudents();
  }
}
