import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})
export class CategoryModalComponent implements OnInit {

  categoryForm = this.fb.group({
    id: [''],
    name: ['', [Validators.required]],
    description: ['']
  });

  @Input() public modalTitle: string;
  
  @Input() public category: Category;
  @Input() public close: () => void;
  @Input() public save: (category: Category) => void;

  public isEditModalMode: boolean;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    // Если есть задача, то режим редактирование
    // Иначе добавление
    this.isEditModalMode = !!this.category;

    // Заполняем форму только при наличии задачи
    if(this.category) {

      this.categoryForm.patchValue({
        id: this.category.id,
        name: this.category.name,
        description: this.category.description,
      })
    }
  }

  onSubmit(){
    this.save({
        id: this.categoryForm.value["id"],
        name: this.categoryForm.value["name"],
        description: this.categoryForm.value["description"],
      } as unknown as Category);

    this.close();
  }
}
