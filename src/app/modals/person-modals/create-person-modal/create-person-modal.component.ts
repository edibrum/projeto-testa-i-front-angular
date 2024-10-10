import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cpfValidator, applyCpfMask } from '../../../validators/cpf.validator';
import { adulthoodValidator } from 'src/app/validators/adulthood.validator';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-person-modal',
  templateUrl: './create-person-modal.component.html',
  styleUrls: ['./create-person-modal.component.css']
})
export class CreatePersonModalComponent implements OnInit {
  @Input() title!: string;
  editForm!: FormGroup;
  submitted: boolean = false;

  constructor(
    public activeModal: NgbActiveModal, 
    private fb: FormBuilder,
    private apiService: ApiService, 
    private toastr: ToastrService, 
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  applyCpfMask(event: any): void {
    applyCpfMask(event);
  } 

  initForm(): void {
    this.editForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, cpfValidator()]],
      birthDate: ['', [Validators.required, adulthoodValidator()]],
      employee: [false],
      manager: [false]
    });
  }

  create() {
    this.submitted = true;

    if (this.editForm.valid) {

      console.log('Formulário válido:', this.editForm.value);

      this.apiService.savePersonRegister(this.editForm.value).subscribe(
        (result: string) => {
          this.toastr.success('', 'Registro salvo com sucesso!');
          this.activeModal.close(this.editForm.value);
        },
        (e) => {
          if (e.error.message != undefined) {
            this.toastr.error('Erro ao salvar o registro: ' + e.error.message, 'Erro');
          } else {
            this.toastr.error('Erro ao salvar o registro.', 'Erro');
          }
          this.activeModal.close(this.editForm.value);
        }
      );
    } else {

      console.log('Formulário inválido');

    }
  }
}