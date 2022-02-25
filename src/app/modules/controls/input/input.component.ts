import { Component, Input } from '@angular/core';
import { 
  AbstractControl, 
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {

  @Input() label: string;
  @Input() value: string;
  @Input() required: boolean = false;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (!value) {
      return {
        valueRequire: {
          value
        }
      };
    }
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChange = (value) => { };
  onTouched = (value) => { };

  registerOnChange(onChange: any) {
     this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
