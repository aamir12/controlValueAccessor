import { FormGroup, ValidationErrors } from '@angular/forms';

export function matchingInputsValidator(firstKey: string, secondKey: string) {
  return function (group: FormGroup): ValidationErrors | null {
    if (group.controls[firstKey].value !== group.controls[secondKey].value) {
      return {
        'missmatch': true
      };
    }
    return null;
  };
}
