import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-person-modal',
  templateUrl: './delete-person-modal.component.html',
  styleUrls: ['./delete-person-modal.component.css']
})
export class DeletePersonModalComponent implements OnInit {
  @Input() title!: string;
  @Input() person!: Person;

  constructor(
    private apiService: ApiService, 
    private toastr: ToastrService, 
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
  }

  delete() {
    if(this.person.id != null){
      this.apiService.deletePerson(this.person.id).subscribe(
        (result: string) => {
          this.toastr.success('Sucesso: ' + result, 'Sucesso');
          this.activeModal.close(this.person);
        },
        (e) => {
          if (e.error.message != undefined) {
            this.toastr.error('Erro ao deletar o registro: ' + e.error.message, 'Erro');
          } else {
            this.toastr.error('Erro ao deletar o registro.', 'Erro');
          }
          this.activeModal.close(this.person);
        }
      );
    }
  }

}