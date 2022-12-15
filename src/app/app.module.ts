import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InMemoryDataService } from './in-memory-data.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomTableComponent } from './room-table/room-table.component';
import { UserInRoomComponent } from './user-in-room/user-in-room.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

//ng-prime
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserTableComponent,
    UserUpdateComponent,
    UserDetailComponent,
    RoomTableComponent,
    RoomAddComponent,
    UserInRoomComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    TableModule,
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    DynamicDialogModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [DatePipe,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
