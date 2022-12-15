import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomTableComponent } from './room-table/room-table.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserUpdateComponent } from './user-update/user-update.component';


const routes: Routes = [
  { path: 'user-list', component: UserTableComponent },
  { path: 'user-add', component: UserUpdateComponent },
  { path: 'user-update/:id', component: UserUpdateComponent },
  { path: 'room-list', component: RoomTableComponent },
  { path: 'room-add', component: RoomAddComponent },
  { path: 'room-update/:id', component: RoomAddComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
