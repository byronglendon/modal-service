import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoModalComponent } from '../modals/todo-modal/todo-modal.component';
import { ReportService } from './report.service';

@Injectable({
  providedIn: 'root'
})
export class TodoModalService {
  public params: any;

  constructor(private modalService: NgbModal,
              private reportService: ReportService) { }

  openModal(reportId: string, answerId: string) {
    // medium.com/@izzatnadiri/how-to-pass-data-to-and-receive-from-ng-bootstrap-modals-916f2ad5d66e
    this.params = { 'reportId': reportId, 'answerId': answerId };
    // Send
    const modalRef = this.modalService.open(TodoModalComponent);
    modalRef.componentInstance.params = this.params;
    // Receive
    modalRef.componentInstance.passEntry.subscribe((receivedEntry:any) => {
      console.log(receivedEntry);
      });

    modalRef.result.then((result) => {
      if (result) {
      // Update Inspection
      const resolved = new Date().toISOString().split('T')[0];
      console.log('reportId:' + this.params.reportId);
      console.log('formData:' + this.params.formData);
      this.reportService.updateReport(this.params.reportId', this.params.formData);
      console.log(resolved);
      console.log(result);
      }
      });
    }
}
