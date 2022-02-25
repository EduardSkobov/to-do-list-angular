import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: TextareaComponent
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {

  @Input() label: string;
  @Input() value: string

  constructor() { }

  onTouched = (value) => {};
  onChange = (value) => { console.log(value); this.value = value};

  writeValue(value: string): void {
    this.value = value
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

}
