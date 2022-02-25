interface ICategoryStore {
    fetchCategories(): Promise<void>;
    categories: Category[];
    removeCategory(id: number): void;
    addCategory(task: Category): void;
    updateCategroy(task: Category): void;
    getCategoryName(categoryId: number): string;
}