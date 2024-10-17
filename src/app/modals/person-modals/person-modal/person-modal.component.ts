import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator, applyCpfMask } from '../../../validators/cpf.validator';
import { adulthoodValidator } from 'src/app/validators/adulthood.validator';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Person } from 'src/app/models/person.model';
import { format } from 'date-fns';

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.css']
})
export class PersonModalComponent implements OnInit {
  @Input() title!: string;
  @Input() person!: Person;
  @Input() onlyView!: boolean;
  @Input() loadDataList: any;

  editForm!: FormGroup;
  submitted: boolean = false;
  isOnlyView: boolean = false;

  constructor(
    public activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private apiService: ApiService, 
    private toastr: ToastrService, 
  ) {}

  ngOnInit(): void {
    if(this.person == null) {
      this.person = new Person();
      this.person.id = null;
      this.person.name = null;
      this.person.cpf = null;
      this.person.birthDate = null;
      this.person.employee = null;
      this.person.manager = null;
    }

    this.isOnlyView = this.onlyView;

    this.initForm();
  }

  applyCpfMask(event: any): void {
    applyCpfMask(event);
  } 

  initForm(): void {
    this.editForm = this.fb.group({
      id: [this.person.id],
      name: [this.person.name, [Validators.required, Validators.minLength(3)]],
      cpf: [this.person.cpf, [Validators.required, cpfValidator()]],
      birthDate: [this.person.birthDate, [Validators.required, adulthoodValidator()]],
      employee: [this.person.employee],
      manager: [this.person.manager]
    });
  }


  save() {
    this.submitted = true;

    if (this.editForm.valid) {
      //console.log('Formulário válido:', this.editForm.value);     
      this.saveRegister();
      this.loadDataList();
      this.activeModal.close(this.editForm.value);
    } else {
      //console.log('Formulário inválido');
    }
  }


  saveRegister() {
    this.apiService.savePersonRegister(this.editForm.value).subscribe(
      (result: string) => {
        this.toastr.success('', 'Registro salvo com sucesso!');
      },
      (e) => {
        if (e.error.message != undefined) {
          this.toastr.error('Erro ao salvar o registro: ' + e.error.message, 'Erro');
        } else {
          this.toastr.error('Erro ao salvar o registro.', 'Erro');
        }
      }
    );
  }
}