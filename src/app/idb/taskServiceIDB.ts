import { Injectable } from "@angular/core";
import { IDBServiceToDoList } from "./IDBService";

@Injectable({
    providedIn:"root"
})
export class TaskServiceIDB {

    constructor(public dbService: IDBServiceToDoList){}

    async getTasks(): Promise<Task []> {

        const connection = await this.dbService.connectIDB();

        const tx = connection.transaction("tasks", "readonly");
        const store = tx.objectStore("tasks");
        return await store.getAll();
    }

    async deleteTask(id: number): Promise<void> {
        
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("tasks", "readwrite");

        const store = tx.objectStore("tasks");

        // Ключи типа число, а не строка. 
        // @ts-ignore
        store.delete(id);
       
        tx.commit();
    }

    async addTask(task: Task): Promise<Task> {
        delete task.id;
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const newId = await store.add(task);
        task.id = +newId;
        tx.commit();

        return task;
        
    }

    async updateTask(task: Task): Promise<void> {
        const connection = await this.dbService.connectIDB();
        const tx = connection.transaction("tasks", "readwrite");
        const store = tx.objectStore("tasks");
        const newId = await store.put(task);
    }
}