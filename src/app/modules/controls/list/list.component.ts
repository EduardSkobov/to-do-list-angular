import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input() data: IBaseEntity[];
  @Input() removeItem: (item: IBaseEntity) => number;
  @Input() editItem: (item: IBaseEntity) => number;
}
