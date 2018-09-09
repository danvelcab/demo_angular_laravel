import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ProjectFormComponent } from '../../forms/project-form/project-form.component';
declare var $;

@Component({
  selector: 'app-project-form-modal',
  templateUrl: './project-form-modal.component.html',
  styleUrls: ['./project-form-modal.component.css']
})
export class ProjectFormModalComponent implements OnInit {

  @ViewChild(ProjectFormComponent) projectFormComponent;

  @Output() success: EventEmitter<any> = new EventEmitter();

  public current_action;
  public next_action; // save_and_close , save_and_continue or update_and_continue

  public modal_id = 'project_form_modal';

  constructor() { }

  ngOnInit() {
  }

  show(action: string, id: any = null): void {
    this.current_action = action;
    this.openModal();
    if (action === 'create') {
      this.projectFormComponent.new();
    } else if (action === 'edit') {
      this.projectFormComponent.edit(id);
    }
  }
  saveAndClose(): void {
    this.next_action = 'save_and_close';
    this.projectFormComponent.store(this.next_action);
  }
  saveAndContinue(): void {
    this.next_action = 'save_and_continue';
    this.projectFormComponent.store(this.next_action);
  }
  updateAndClose(): void {
    this.next_action = 'update_and_continue';
    this.projectFormComponent.update();
  }

  successCreation($event): void {
    this.closeModal();
    this.success.emit();
  }
  successEdition($event): void {
    this.closeModal();
    this.success.emit();
  }
  private openModal(): void {
    $('#' + this.modal_id).modal('show');
  }
  private closeModal(): void {
    $('#' + this.modal_id).modal('hide');
  }

}
