import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import CategoryStore from 'src/app/store/category.store';
import TasksStore from 'src/app/store/task.store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent implements OnInit {

  public deletingTask: Task | null;
  public editingTask: Task | null;

  public showTaskModal: boolean = false;
  public showConfirmModal: boolean = false;
  public taskModalTitle: string;

  constructor(private taskStore: TasksStore, private categoryStore: CategoryStore) {}

  showAddModalTask(){
    this.showTaskModal = true;
    this.taskModalTitle = "Создание задачи";
  }

  closeTaskModal = () => {
    this.showTaskModal = false;
    this.editingTask = null;
  }

  closeConfirmModal = () => {
    this.showConfirmModal = false;
    this.deletingTask = null;
  }

  markDeletingTask = (task: Task) => {
    this.showConfirmModal = true;
    this.deletingTask = task;
  }

  removeTask = () => {
    this.taskStore.removeTask(this.deletingTask.id);
    this.showConfirmModal = false;
    this.deletingTask = null;
  }

  saveTask = async (task: Task) => {
    await this.taskStore.updateTask(task);
    this.editingTask = null;
  }

  addTask = async (task: Task) => {
    await this.taskStore.addTask(task);
  }
  
  editTask = (task: Task) => { 
    this.editingTask = task;
    this.showTaskModal = true;
    this.taskModalTitle = "Редактирование задачи"
  }

  ngOnInit(): void {
    this.taskStore.fetchTasks();
    this.categoryStore.fetchCategories();
  }

}
