<template>
  <q-page class="row justify-around q-pt-lg">
    <div class="col-10 col-sm-6 col-md-4 col-lg-3 column">
      <div class="text-h5">New Tasks</div>
      <task-card
        v-for="task in createdTasks"
        :key="task.id"
        :task="task"
      ></task-card>
    </div>
    <div class="col-10 col-sm-6 col-md-4 col-lg-3 column">
      <div class="text-h5">Tasks In Progress</div>
      <task-card
        v-for="task in tasksInProgress"
        :key="task.id"
        :task="task"
      ></task-card>
    </div>
    <div class="col-10 col-sm-6 col-md-4 col-lg-3 column">
      <div class="text-h5">Finished Tasks</div>
      <task-card
        v-for="task in finishedTasks"
        :key="task.id"
        :task="task"
      ></task-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import TaskCard from 'src/components/TaskCard.vue';
import { TaskStatus } from 'src/components/enums';
import { TaskItem } from 'src/components/models';
import { useTasksStore } from 'src/stores/tasks';
import { ref } from 'vue';

const tasksStore = useTasksStore();
const createdTasks = ref<TaskItem[]>(
  tasksStore.sortByStatus(TaskStatus.Created)
);
const tasksInProgress = ref<TaskItem[]>(
  tasksStore.sortByStatus(TaskStatus.InProgress)
);
const finishedTasks = ref<TaskItem[]>(
  tasksStore.sortByStatus(TaskStatus.Finished)
);
</script>
