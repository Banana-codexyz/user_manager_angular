import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items!: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Trang chủ', icon: 'pi pi-fw pi-home',routerLink:"/" },
      { label: 'Người dùng', icon: 'pi pi-fw pi-user',routerLink:"/user-list" },
      { label: 'Phòng ban', icon: 'pi pi-fw pi-pencil',routerLink:"/room-list" },
      // { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      // { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];
  }

}
