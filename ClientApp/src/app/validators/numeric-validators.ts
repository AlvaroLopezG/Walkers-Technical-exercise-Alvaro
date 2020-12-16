import { AbstractControl, ValidatorFn } from "@angular/forms";

export function isNotANumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return null;
    }
}

export function isNotAWholeNumberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        return null;
    }
}