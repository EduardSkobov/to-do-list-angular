
export abstract class CategoryService {
    getCategories: () => Promise<Task []>;
    deleteCategory: (id: number) => Promise<void>;
    addCategory: (category: Category) => Promise<Category>;
    updateCategory: (category: Category) => Promise<void>
}