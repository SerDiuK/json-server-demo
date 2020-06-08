import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[];

  constructor(private readonly service: AppService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.service.get().subscribe(users => this.users = users);
  }

  create(userName: string): void {
    const newUser: User = { name: userName };
    this.service.create(newUser).subscribe(user => {
      this.get();
    });
  }

  delete(id: number): void {
    this.service.delete(id).subscribe(() => this.get());
  }
}
