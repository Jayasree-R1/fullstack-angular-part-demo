import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input()
  user: any = {};

  count = 0;

  @Output() nameEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  updateData() {
    this.count = this.count++;
    this.nameEvent.emit(this.count + '');
  }
}
