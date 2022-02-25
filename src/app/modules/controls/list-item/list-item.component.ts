import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() item: IBaseEntity;

  @Input() remove: (item: IBaseEntity) => number;
  @Input() edit: (item: IBaseEntity) => number;
}
