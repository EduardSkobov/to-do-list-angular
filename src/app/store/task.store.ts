import { Injectable } from "@angular/core";
import {action, computed, makeAutoObservable, runInAction } from "mobx";
import { TaskService } from "../types/services/TaskService";

@Injectable({
  providedIn:"root"
})
class TasksStore implements ITaskStore {

  private _tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    makeAutoObservable(this); 
  } 

  @action async removeTask(id: number): Promise<void> {
    const taskIndex = this._tasks.findIndex(c => c.id === id);
    await this.taskService.deleteTask(id);
    if(taskIndex >= 0){
      this._tasks.splice(taskIndex, 1);
    }
  }

  async addTask(task: Task): Promise<void> {
    const newTask = await this.taskService.addTask(task);

    runInAction(() => {
      this._tasks.push(newTask);
    })
  }

  async updateTask(task: Task): Promise<void> {
    await this.taskService.updateTask(task);

    runInAction(() => {
      const taskIndex = this._tasks.findIndex(c=>c.id === task.id);
  
      if(taskIndex >= 0)
        this._tasks.splice(taskIndex, 1, task);
    })
  }

  async fetchTasks(): Promise<void> {
    try
    {
      const tasks = await this.taskService.getTasks()
      runInAction(() => {
        this._tasks = tasks;
      })
    }
    catch(err)
    {
      console.error(err);
    }  
  }

   @computed get tasks() {
    return this._tasks;
  }
}

export default TasksStore;