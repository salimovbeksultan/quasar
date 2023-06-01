import { TaskStatus } from './enums';

export interface TaskItem {
  id: number;
  title: string;
  content: string;
  createdOn: number;
  deadline: number | null;
  status: TaskStatus;
}
