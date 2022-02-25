import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: SelectComponent
    }
  ]
})
export class SelectComponent  implements ControlValueAccessor {

  @Input() label: string;
  @Input() data: ISelectItem[];
  @Input() selectedItem: ISelectItem | null;

  public open: boolean = false;

  constructor() { }

  writeValue(value: ISelectItem): void {
    this.selectedItem = value
  }

  onChange = (value: ISelectItem) => { this.selectedItem = value };
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

  onClick(isOpen: boolean){
    this.open = !this.open;
  }

  onClickOut(){
    this.open = false
  }

  onClickItem(item: ISelectItem){
    this.onChange(item)
    const newSelect = this.data.find(c=>c.id == item.id);
    if(newSelect){
      this.selectedItem = newSelect;
    }
  }

}
