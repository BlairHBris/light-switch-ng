import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Output() switchThrow = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.switchThrow.emit()
  }

}
