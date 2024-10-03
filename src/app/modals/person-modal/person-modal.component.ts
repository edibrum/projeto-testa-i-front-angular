import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person.model';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {
    Title: string = 'Editar Pessoa'
  @Input() person!: Person;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  save() {
    this.activeModal.close(this.person);
  }
}