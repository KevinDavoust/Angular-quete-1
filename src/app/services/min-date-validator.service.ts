import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';


export function MinDateValidator(minDate: Date): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const date = new Date(control.value);

    if (minDate.getTime() < date.getTime()) {
      return null
    } else {
      return { 'min': {value: control.value, expected: minDate}}
    }
    }
 
}
