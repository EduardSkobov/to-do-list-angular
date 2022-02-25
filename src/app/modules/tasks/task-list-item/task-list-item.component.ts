import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import CategoryStore from 'src/app/store/category.store';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListItemComponent {

  @Input() item: Task;

  @Input() remove: (item: Task) => number;
  @Input() edit: (item: Task) => number;
  
  constructor(private categoriesStore: CategoryStore) { }
}
