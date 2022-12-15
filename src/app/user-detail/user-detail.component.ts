import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user:User | undefined;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.close.emit();
  }
}
