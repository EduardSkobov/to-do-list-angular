
export abstract class TaskService {
    getTasks: () => Promise<Task []>;
    deleteTask: (id: number) => Promise<void>;
    updateTask: (task: Task) => Promise<void>;
    addTask: (task: Task) => Promise<Task>;
  }