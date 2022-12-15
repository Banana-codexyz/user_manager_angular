import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {
  // @ViewChild('postForm') postForm!: NgForm;

  room: Room = {} as Room;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getRoom();
    console.log(this.room);
  }

  getRoom(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    if(id!=0){
      this.roomService.getRoom(id).subscribe(room => { 
        this.room = room;
      });
    }
  }

  // onBack() {
  //   this.router.navigate(['../room-list'], { relativeTo: this.route });
  // }

  goBack(): void {
    this.location.back();
  }

  // onSubmit() {
  //   let name = this.postForm.value.name;
  //   let address = this.postForm.value.address;
  //   let description = this.postForm.value.address;
  //   this.roomService.addRoom({
  //     name: name, address: address, description: description,
  //   } as Room).subscribe(() => this.onCancel());
  // }

  onSubmit() {
    this.roomService.addRoom(this.room).subscribe(()=> this.goBack());
  }

}
