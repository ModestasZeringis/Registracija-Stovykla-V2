import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[carYear]',
  providers:[
    { provide: NG_VALIDATORS, useExisting:CarYearDirective, multi:true}
  ]
})
export class CarYearDirective implements Validator{

  constructor() { }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    let year:number=control.value;
    if (year> 1999  && year<= ( (new Date()).getFullYear() -5) ){
      return null;
    }else{
      return { error:"Metai neteisingi"}
    }
  }

}
