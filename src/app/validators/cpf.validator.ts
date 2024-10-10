import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function applyCpfMask(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      event.target.value = value;
    } else if (value.length <= 6) {
      event.target.value = `${value.slice(0, 3)}.${value.slice(3)}`;
    } else if (value.length <= 9) {
      event.target.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6)}`;
    } else if (value.length <= 11) {
      event.target.value = `${value.slice(0, 3)}.${value.slice(3, 6)}.${value.slice(6, 9)}-${value.slice(9)}`;
    }
  }

export function cpfValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;

    const cpf = control.value.replace(/[^\d]/g, '');
    if (cpf.length !== 11) return { cpfInvalid: true };

    if (/^(\d)\1{10}$/.test(cpf)) return { cpfInvalid: true };

    let soma = 0;
    let i: number;

    for (i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i), 10) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9), 10)) return { cpfInvalid: true };

    soma = 0;
    for (i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i), 10) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10), 10)) return { cpfInvalid: true };

    return null;
  };
}