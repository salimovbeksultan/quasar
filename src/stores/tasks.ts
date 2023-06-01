import { defineStore } from 'pinia';
import { TaskStatus } from 'src/components/enums';
import { TaskItem } from 'src/components/models';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [] as TaskItem[],
  }),
  getters: {
    tasksLength(state) {
      return state.tasks.length;
    },
  },
  actions: {
    addTask(newTask: TaskItem) {
      this.tasks.push(newTask);
    },
    getTask(taskId: number) {
      return (
        this.tasks.find((task) => {
          return task.id === taskId;
        }) ?? null
      );
    },
    removeTask(taskId: number) {
      this.tasks = this.tasks.filter((task) => {
        return task.id !== taskId;
      });
    },
    updateTask(updatedTask: TaskItem) {
      const taskIndex = this.tasks.findIndex((task) => {
        return (task.id = updatedTask.id);
      });
      this.tasks[taskIndex] = updatedTask;
    },
    sortByStatus(status: TaskStatus) {
      return this.tasks.filter((task) => {
        return task.status === status;
      });
    },
  },
});
