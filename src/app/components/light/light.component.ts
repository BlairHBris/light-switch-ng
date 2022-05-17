import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {

  lightStatus: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  toggleLight(){
    this.lightStatus = !this.lightStatus
  }

}
