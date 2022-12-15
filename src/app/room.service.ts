import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomsUrl = 'api/rooms';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);  
  }

  getRoom(id: number): Observable<Room> {
    const url = `${this.roomsUrl}/${id}`;
    return this.http.get<Room>(url);
  }

  /** PUT: update the user on the server */
  updateRoom(room: Room): Observable<any> {
    return this.http.put(this.roomsUrl, room, this.httpOptions);
  }

  /** POST: add a new user to the server */
  addRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.roomsUrl, room, this.httpOptions);
  }

  /** DELETE: delete the user from the server */
  deleteRoom(id: number): Observable<Room> {
    const url = `${this.roomsUrl}/${id}`;
    return this.http.delete<Room>(url, this.httpOptions);
  }
}
