export class Project {
    id: any;
    title: string;
    description: string;
    status: number;
    status_name: string;
    visible: boolean;
    estimated_start_date: string;
    estimated_end_date: string;

    constructor(){
      this.id = null;
      this.title = null;
      this.description = null;
      this.status = null;
      this.visible = null;
      this.estimated_start_date = null;
      this.estimated_end_date = null;
    }
}
