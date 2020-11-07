import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces/user.interface';

import { UsersService } from '../../../../shared/services/users.service';

@Component({
  selector: 'app-topic4-get-find',
  templateUrl: './topic4-get-find.component.html',
  styleUrls: ['./topic4-get-find.component.scss']
})
export class Topic4GetFindComponent implements OnInit {

  user: IUser;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUserById(10).pipe(first()).subscribe(response => {
      this.user = response;
    });
  }

}
