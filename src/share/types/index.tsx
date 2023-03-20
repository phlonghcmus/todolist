export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
  priority: string;
}
export interface IFilter {
  search: string;
  status: string;
  priority: string[];
}
