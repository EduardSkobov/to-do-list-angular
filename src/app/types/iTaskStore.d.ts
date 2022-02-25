interface ITaskStore {
    fetchTasks(): Promise<void>;
    removeTask(id: number): void;
    updateTask(task: Task): Promise<void>;
    addTask(task: Task): Promise<void>
}