<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ props.task.title }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { TaskItem } from './models';

interface Props {
  task: TaskItem;
}

const props = defineProps<Props>();
</script>
