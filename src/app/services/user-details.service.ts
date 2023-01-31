import { Injectable } from '@angular/core';
import * as data from '../../../customer-details.json'
@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  userParsed = JSON.stringify(data);
  userInfo = JSON.parse(this.userParsed);
  constructor() {}
}
