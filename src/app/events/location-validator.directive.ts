import { Directive } from '@angular/core';
import { FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({ 
    selector: '[validateLocation]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting:LocationValidator, multi:true //include LocationValidator along with the list
        }
    ]
})
export class LocationValidator implements Validator {
    validate(formGroup: FormGroup): ValidationErrors | null {
        const addressControl = formGroup.controls['address'];
        const cityControl = formGroup.controls['city'];
        const countryControl = formGroup.controls['country'];
        const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

        if((addressControl && addressControl.value && cityControl && cityControl.value && 
        countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
                return null;
        } else {
            return {validateLocation : false}
        }
    }
}