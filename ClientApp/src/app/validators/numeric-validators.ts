import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isNotANumberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const invalidValue = isNaN(parseFloat(control.value));
        return invalidValue ? {isNotANumber: {value: control.value}} : null;
      };
}

export function isNotAWholeNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const invalidValue = (control.value % 1 != 0);
        return invalidValue ? {isNotAWholeNumber: {value: control.value}} : null;
    }
}