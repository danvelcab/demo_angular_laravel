import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-action-confirmation-modal',
  templateUrl: './action-confirmation-modal.component.html',
  styleUrls: ['./action-confirmation-modal.component.css']
})
export class ActionConfirmationModalComponent implements OnInit {

  @Input() message: string;
  @Input() modal_id: string;

  @Output() confirmEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  private openModal(): void {
    $( '#' + this.modal_id ).modal( 'show' );
  }
  private closeModal(): void {
    $( '#' + this.modal_id ).modal( 'hide' );
  }
  confirm(): void {
    this.confirmEmitter.emit();
  }

}
