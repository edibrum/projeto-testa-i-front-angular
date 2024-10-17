import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { Person } from 'src/app/models/person.model';
import { DeletePersonModalComponent } from 'src/app/modals/person-modals/delete-person-modal/delete-person-modal.component';
import { PersonModalComponent } from 'src/app/modals/person-modals/person-modal/person-modal.component';
import { format } from 'date-fns';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  title: string = 'Pessoas'
  message: string = 'Registros de Pessoas';
  
  peopleList: Person [] = [];
  
  columns = [
    {'Title': 'ID', 'Value': 'id' },
    {'Title': 'NOME', 'Value': 'name' },
    {'Title': 'CPF', 'Value': 'cpf' },
    {'Title': 'NASCIMENTO', 'Value': 'birthDate' },
    {'Title': 'AÇÕES', 'Value': '' } 
  ];

  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList() {
    this.apiService.getPeopleListAll().subscribe(
      (result: any) => {
        this.peopleList = result.content.map((person: any) => {
          return {
            ...person,
            birthDate: person.birthDate ? format(new Date(person.birthDate), 'dd/MM/yyyy') : null
          };
        });
      },
      (error) => {
        console.error('Erro ao carregar a lista de Pessoas', error);
      }
    );
  }

  viewPerson(item: any) {
    const modalRef = this.modalService.open(PersonModalComponent, { centered: true });
    modalRef.componentInstance.title = 'Visualizar Registro de Pessoa';
    modalRef.componentInstance.person = { ...item};
    modalRef.componentInstance.onlyView = true;
  }

  editPerson(item: any) {
    const modalRef = this.modalService.open(PersonModalComponent, { centered: true });
    modalRef.componentInstance.title = 'Editar Registro de Pessoa';
    modalRef.componentInstance.person = { ...item };
    modalRef.componentInstance.onlyView = false;
    modalRef.componentInstance.loadDataList = this.loadDataList;
  }

  createNewPerson() {
    const modalRef = this.modalService.open(PersonModalComponent, { centered: true });
    modalRef.componentInstance.title = 'Novo Registro de Pessoa';
    modalRef.componentInstance.person = null;
    modalRef.componentInstance.onlyView = false;
    modalRef.componentInstance.loadDataList = this.loadDataList;
  }

  deletePerson(item: any) {
    const modalRef = this.modalService.open(DeletePersonModalComponent, { centered: true });
    modalRef.componentInstance.title = 'Você tem certeza que deseja deletar o registro?';
    modalRef.componentInstance.person = { ...item };
    modalRef.componentInstance.loadDataList = this.loadDataList;
  }
}
