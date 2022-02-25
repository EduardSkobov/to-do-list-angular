import { Injectable } from "@angular/core";
import { action, computed, makeAutoObservable, runInAction } from "mobx";
import { CategoryService } from "../types/services/CategoryService";

@Injectable({
  providedIn:"root"
})
class CategoryStore implements ICategoryStore {
  
    constructor(private categroySerice: CategoryService) {
      makeAutoObservable(this);
    } 
    
    private _categories: Category[] = [];

    async removeCategory(id: number): Promise<void> {
      await this.categroySerice.deleteCategory(id);

      runInAction(() => {
        const categoryIndex = this._categories.findIndex(c => c.id === id);
        if(categoryIndex >= 0){
          this._categories.splice(categoryIndex, 1);
        }
      });
    }
  
    async addCategory(category: Category): Promise<void> {
      const newCategory = await this.categroySerice.addCategory(category);

      runInAction(()=>{
        this._categories.push(newCategory);

      });
    }
  
    async updateCategroy(category: Category): Promise<void> {
      await this.categroySerice.updateCategory(category);

      runInAction(() => {
        const taskIndex = this._categories.findIndex(c => c.id === category.id);
        if(taskIndex >= 0)
          this._categories.splice(taskIndex, 1, category)
      })   
    }

    @action getCategoryName(categoryId: number): string {
      return this._categories.find(c => c.id === categoryId)?.name;
    }

    async fetchCategories(): Promise<void> {
      try {
        const categories =  await this.categroySerice.getCategories();
        runInAction(() => {
          this._categories = categories;
        })
      }
      catch(err){
        console.error(err);
      }
    }

    @computed get categories() {
      return this._categories;
    }
}

export default CategoryStore;