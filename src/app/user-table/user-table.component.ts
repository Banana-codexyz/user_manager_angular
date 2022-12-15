import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  user: User = {} as User;
  users: User[] = [];
  rooms: Room[] = [];
  selectedUser: User | undefined;
  check: boolean = false;
  display: boolean = false;
  constructor(private userService: UserService,
    private roomService: RoomService,
    private confirmationService: ConfirmationService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getUsers();
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRooms().subscribe((rooms) => this.rooms = rooms);
  }

  showDialog() {
    console.log('a');

    this.display = true;
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  delete(user: User): void {
    this.confirmationService.confirm({
      message: 'Bạn chắc chắn muốn xóa bản ghi này?',
      accept: () => {
        //Actual logic to perform a confirmation
        this.users = this.users.filter(u => u !== user);
        this.userService.deleteUser(user.id).subscribe();
      }
    });
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    this.check = true;
  }

  onClose() {
    this.check = false;
  }

  save(): void {
    if (this.user) {
      this.userService.addUser(this.user)
        .subscribe(() => this.goBack());
    }
    this.getUsers();
  }

  goBack(): void {
    this.display = false;
  }
}
