import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styles: []
})
export class ProgresComponent implements OnInit {
 porcentaje1: number = 40;
 porcentaje2: number = 70;
  constructor() { }

  ngOnInit() {
  }
}
