import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {
  myGroup: FormGroup;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  @Input() public params: any;

  constructor(public activeModal: NgbActiveModal,
              public formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    console.log(this.params);
  }

  createForm() {
    this.myGroup = this.formBuilder.group({
      action: ['', Validators.required],
      details: ['']
    });
  }

  // Get FormControls For Validation Reference
  get name() {
    return this.myGroup.get('action');
  }
  get details() {
    return this.myGroup.get('details');
  }
  get f() {
    return this.myGroup.controls;
  }

  onSubmit() {
    // console.log(this.myGroup.value);
    this.params.formData = this.myGroup.value;
    this.activeModal.close(this.params);
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
