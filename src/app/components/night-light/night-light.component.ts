import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent implements OnInit {
  
  lightStatus: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleLight(){
    this.lightStatus = !this.lightStatus
  }
}
