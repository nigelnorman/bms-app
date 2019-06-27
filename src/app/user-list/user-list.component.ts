import { Component, OnInit } from '@angular/core';
import { UsersService } from '../api/src/services';
import { UserViewModel } from '../api/src/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users: UserViewModel[];

  constructor( private readonly usersEndpointService: UsersService) { 

  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers = async () => {
    this.users = await this.usersEndpointService.Get().toPromise();
  }

}
