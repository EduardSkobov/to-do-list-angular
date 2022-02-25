import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import CategoryStore from 'src/app/store/category.store';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent implements OnInit {

  public editingCategry: Category | null = null;
  public deletingCategroy: Category | null = null;

  public showCategoryModal: boolean = false;
  public showConfirmModal: boolean = false;

  public categryModalTitle: string;

  constructor(private categoriesStore: CategoryStore) { }

  showAddModal = () => {
    this.showCategoryModal = true;
    this.categryModalTitle = "Создание категории";
  }

  closeConfirmModal = () => {
    this.showConfirmModal = false;
  }

  closeCategoryModal = () =>{
    this.showCategoryModal = false;
  }

  ngOnInit(): void {
    this.categoriesStore.fetchCategories();
  }

  addCategory = (category: Category) => {
    this.categoriesStore.addCategory(category);
  }

  markDeleting = (category: Category) => {
    this.showConfirmModal = true;
    this.deletingCategroy = category;
  }

  removeCategory = (category: Category) =>
  {
    this.categoriesStore.removeCategory(this.deletingCategroy.id);
    this.showConfirmModal = false;
    this.deletingCategroy = null;
  }

  saveCategory = (category: Category) =>{
    this.categoriesStore.updateCategroy(category);
    this.editingCategry = null;
  }

  editCategory = (category: Category) => {
    this.editingCategry = category;
    this.showCategoryModal = true;
    this.categryModalTitle = "Редактирование категории"
  }
}
