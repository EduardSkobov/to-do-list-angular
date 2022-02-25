import { Injectable } from "@angular/core";
import { IDBServiceToDoList } from "./IDBService";

@Injectable({
    providedIn: "root"
})
export class CategoryServiceIDB {

    constructor(public dbService: IDBServiceToDoList){
    }

    async getCategories(): Promise<Category []> {

        const connection = await this.dbService.connectIDB();

        const tx = connection.transaction("categories", "readonly");
        const store = tx.objectStore("categories");
        return await store.getAll();

    }

    async deleteCategory(id: number): Promise<void> {
        
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("categories", "readwrite");

        const store = tx.objectStore("categories");

        // Ключи типа число, а не строка. 
        // @ts-ignore
        store.delete(id);
       
        tx.commit();
    }

    async addCategory(category: Category): Promise<Category> {
        delete category.id;
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("categories", "readwrite");
        const store = tx.objectStore("categories");
        const newId = await store.add(category);
        category.id = +newId;
        tx.commit();

        return category;
        
    }

    async updateCategory(category: Category): Promise<void> {
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("categories", "readwrite");
        const store = tx.objectStore("categories");
        const newId = await store.put(category);
    }
}