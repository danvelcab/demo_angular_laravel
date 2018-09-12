import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectFormModalComponent } from '../../components/modals/project-form-modal/project-form-modal.component';
import { ActionConfirmationModalComponent } from '../../components/modals/action-confirmation-modal/action-confirmation-modal.component';
import { ProjectTableComponent } from '../../components/tables/project-table/project-table.component';
import {ProjectService} from '../../services/project.service';
import {ResponseHelper} from '../../app/ng-template/responses/response.helper';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  @ViewChild(ProjectFormModalComponent) projectFormModalComponent;
  @ViewChild(ProjectTableComponent) projectTableComponent;
  @ViewChild(ActionConfirmationModalComponent) actionConfirmationModalComponent;

  public aux_id_to_delete: any;

  constructor(
    private projectService: ProjectService,
    private responseHelper: ResponseHelper,
  ) { }

  ngOnInit() {
  }

  updateTable(): void {
    let component = this;
    setTimeout(function(){
      component.projectTableComponent.list();
    })
  }

  create(): void {
    this.projectFormModalComponent.show('create', null);
  }
  edit(id: any): void {
    this.projectFormModalComponent.show('edit', id);
  }
  delete(id: any): void {
    this.aux_id_to_delete = id;
    this.actionConfirmationModalComponent.openModal();
  }
  confirmDelete(): void {
    this.projectService.delete(this.aux_id_to_delete).subscribe(
      res => {
        this.updateTable();
        this.actionConfirmationModalComponent.closeModal();
      },
      error => {
        this.responseHelper.handleError(error);
      }
    );
  }

}
