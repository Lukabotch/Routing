import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss'],
})
export class UsersListsComponent implements OnInit {
  get users() {
    return this.UsersService.newParced;
  }

  constructor(public UsersService: UsersService) {}
  ngOnInit(): void {}
}
