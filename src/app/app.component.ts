import { Component } from '@angular/core';

import { AccountService } from './_services/account.service';
import { User } from './_models/user';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  [x: string]: any;
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
