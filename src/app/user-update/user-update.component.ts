import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {} as User;
  rooms: Room[] = [];
  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private location: Location,
    public datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.getRooms();
  }

  getRooms(){
    this.roomService.getRooms().subscribe((rooms) => this.rooms = rooms);
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    if(id != 0) {
      this.userService.getUser(id).subscribe(user => { 
        this.user = user;
      });
    }
  }

  // ngOnInit(): void {
  //   this.route.params.subscribe((params: Params) => {
  //     this.getHero(Number(params['id']));
  //   })
  // }

  // getHero(id: number): void {
  //   this.userService.getUser(id).subscribe(user => this.user = user);
  // }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.user) {
      this.userService.addUser(this.user)
        .subscribe(() => this.goBack());
    }
  }
}
