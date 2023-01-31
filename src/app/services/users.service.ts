import { Injectable } from '@angular/core';
import * as data from '../../../customer-list.json'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  customers = data;
  newUser = JSON.stringify(this.customers);
  newParced = JSON.parse(this.newUser);
  constructor() {}
}
