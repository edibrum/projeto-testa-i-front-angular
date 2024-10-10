import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-edit-person-modal',
  templateUrl: './edit-person-modal.component.html',
  styleUrls: ['./edit-person-modal.component.css']
})
export class EditPersonModalComponent implements OnInit {
  @Input() title!: string;
  @Input() person!: Person;
  @Input() onlyView!: boolean;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  save() {
    this.activeModal.close(this.person);
  }
}