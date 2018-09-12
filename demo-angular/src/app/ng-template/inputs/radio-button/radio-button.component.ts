import { Component, OnInit } from '@angular/core';
import {AbstractInputComponent} from '../abstract-input.component';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent extends AbstractInputComponent implements OnInit {

  ngOnInit() {
  }

}
