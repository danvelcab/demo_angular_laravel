import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends AbstractInputComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
