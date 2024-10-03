import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { ApiService } from 'src/app/services/api.service';
import { PersonModalComponent } from '../../modals/person-modal/person-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
    {'Title': 'NOME', 'Value': 'name' },
    {'Title': 'CPF', 'Value': 'cpf' },
    {'Title': 'Nascimento', 'Value': 'birthDate' },
    {'Title': 'Funcionário', 'Value': 'employee' } ,
    {'Title': 'AÇÕES', 'Value': '' } 
  ];

  constructor(private apiService: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadDataList();
  }

  loadDataList() {
    this.apiService.getPeopleListAll().subscribe(
      (result: any) => {
        this.peopleList = result.content;
      },
      (error) => {
        console.error('Erro ao carregar a lista de Pessoas', error);
      }
    );
  }

  viewPerson(item: any) {
    debugger;
  }

  editPerson(item: any) {
    const modalRef = this.modalService.open(PersonModalComponent);
    modalRef.componentInstance.person = { ...item };

    modalRef.result.then((updatedPerson: Person) => {
      if (updatedPerson) {
        this.apiService.updatePerson(updatedPerson).subscribe(() => {
          this.loadDataList();
        });
      }
    }).catch(() => {
    });
  }

  deletePerson(item: any) {
    debugger;
  }
}
