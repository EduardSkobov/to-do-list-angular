import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import CategoryStore from 'src/app/store/category.store';

@Component({
  selector: 'app-task-modal',
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css']
})
export class TaskModalComponent implements OnInit {

  taskForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: [''],
    category: ['']
  });

  @Input() public modalTitle: string;
  
  @Input() public task: Task;
  @Input() public close: () => void;
  @Input() public save: (task: Task) => void;

  public categories: ISelectItem [];
  public selectedCategory: ISelectItem;
  public isEditModalMode: boolean;
  
  constructor(private categoriesStore: CategoryStore, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.categories = this.categoriesStore.categories
      .map(c=> {return {id: c.id, value: c.name} as ISelectItem});

    // Если есть задача, то режим редактирование
    // Иначе добавление
    this.isEditModalMode = !!this.task;

    // Заполняем форму только при наличии задачи
    if(this.task) {
      this.selectedCategory = this.categories.find(c => c.id == this.task.categoryId)

      this.taskForm.patchValue({
        id: this.task.id,
        name: this.task.name,
        description: this.task.description,
        category: this.selectedCategory
      })
    }
  }

  onSubmit(){
    this.save({
        id: this.taskForm.value["id"],
        name: this.taskForm.value["name"],
        description: this.taskForm.value["description"],
        categoryId: this.taskForm.value["category"].id
      } as unknown as Task);

    this.close();
  }
}
