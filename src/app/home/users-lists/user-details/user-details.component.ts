import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { UserDetails } from 'src/app/models/user.model';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  get userInfo() {
    return this.userDetailsService.userInfo.customerInfo;
  }
  users: UserDetails | undefined;
  constructor(
    private activatedRout: ActivatedRoute,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit(): void {
    const userId = this.activatedRout.snapshot.params['userId'];
    this.users = this.userInfo[userId - 1];
  }
}
