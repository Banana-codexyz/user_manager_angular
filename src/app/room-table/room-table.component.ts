import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent implements OnInit {

  selectedRoom!: Room;
  rooms: Room[] = [];
  check: boolean = false;
  
  constructor(private roomService:RoomService) { }

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms(): void {
    this.roomService.getRooms().subscribe(rooms => this.rooms = rooms);
  }

  delete(room: Room): void {
    this.rooms = this.rooms.filter(u => u !== room);
    this.roomService.deleteRoom(room.id).subscribe();
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
    this.check = true;
  }

  onClose(){
    this.check = false;
  }
}
