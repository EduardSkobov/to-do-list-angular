import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase, OpenDBCallbacks } from 'idb';

export interface ToDoListSchema extends DBSchema {
  'tasks': {key: string, value: Task};
  'categories': { key: string; value: Category };
}

export class IDBService<T extends DBSchema>  {
  async connectIDB(dbName: string, callback: OpenDBCallbacks<T>): Promise<IDBPDatabase<T>> {
    return await openDB<T>(dbName, 1, callback);
  }
}

@Injectable({
  providedIn: "root"
})
export class IDBServiceToDoList extends IDBService<ToDoListSchema> {

  private dbName: string = "to-do-db"

  async connectIDB() {
    const dbConnection = await super.connectIDB(this.dbName, {
      upgrade: (db, oldVersion) => {
        const v1Db = db;
    
        if (oldVersion < 1) {
          const taskStore = v1Db.createObjectStore("tasks", { keyPath: "id", autoIncrement: true });
          taskStore.add({id:1, categoryId: 1, description: "myDesc", name: "myTaskName1"});
          taskStore.add({id:2, categoryId: 2, description: "myDesc2", name: "myTaskName2"});
          taskStore.add({id:3, categoryId: 3, description: "myDesc3", name: "myTaskName3"});

          const categoriesStore = v1Db.createObjectStore("categories", { keyPath: "id", autoIncrement: true  });
          categoriesStore.add({id:1, description: "myDesc", name: "myCategoryName1"});
          categoriesStore.add({id:2, description: "myDesc2", name: "myCategoryName2"});
          categoriesStore.add({id:3, description: "myDesc3", name: "myCategoryName3"})
        }
      }
    });

    return dbConnection;
  }
}
