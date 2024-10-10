import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function adulthoodValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const birthDate = new Date(control.value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (age < 18 || (age === 18 && monthDifference < 0)) {
      return { adulthoodInvalid: true };
    }

    return null;
  };
}