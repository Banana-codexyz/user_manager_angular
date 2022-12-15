import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInRoomComponent } from './user-in-room.component';

describe('UserInRoomComponent', () => {
  let component: UserInRoomComponent;
  let fixture: ComponentFixture<UserInRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
