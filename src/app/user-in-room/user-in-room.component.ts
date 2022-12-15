import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room } from '../room';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-in-room',
  templateUrl: './user-in-room.component.html',
  styleUrls: ['./user-in-room.component.css']
})
export class UserInRoomComponent implements OnInit,OnChanges {

  users!: User[];
  @Input() room!: Room;
  @Output() close = new EventEmitter();
  constructor(private userService: UserService) { }


  ngOnChanges(): void {
    this.getUsersByRoomId(this.room.id);
  }

  ngOnInit(): void {
    this.getUsersByRoomId(this.room.id);
  }

  getUsersByRoomId(roomId: number) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.filter((user) => user.roomId === roomId);
    });
  }

  onClose() {
    this.close.emit();
  }

  delete(user:User){
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }

}
