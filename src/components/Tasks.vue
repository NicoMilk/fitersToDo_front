<template>
  <div class="container">
    <!-- New Task -->
    <div class="card mt-2 mb-5">
      <div class="card-body input-group">
        <input
          type="text"
          class="form-control"
          v-model="form.content"
          placeholder="Type a new task..."
          aria-label="New Task"
          aria-describedby="basic-addon2"
          @keyup.enter="addTask()"
        />
        <div class="input-group-append">
          <button
            @click="addTask()"
            class="btn btn-outline-success"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </div>

    <!-- Tasks list -->
    <div v-for="(task, index) in tasks" :key="index">
      <div class="card border-info my-2">
        <div class="card-body">
          <p class="card-text">
            {{ task.content }}
          </p>
          <button @click="deleteTask(task.id)" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tasks from '@/api/tasks.js';
// import axios from 'axios';

export default {
  data() {
    return {
      form: {
        content: '',
      },
      tasks: [],
    };
  },

  mounted() {
    tasks.getTasks().then((response) => {
      this.tasks = response.data;
    });
  },

  methods: {
    async addTask() {
      await tasks.addTask(this.form);
      await tasks.getTasks().then((response) => {
        this.tasks = response.data;
      });
      this.form.content = '';
    },

    async deleteTask(id) {
      await tasks.deleteTask(id);
      await tasks.getTasks().then((response) => {
        this.tasks = response.data;
      });
    },
  },
  // computed: {
  //   updateTasks() {
  //     return this.$root.$on('update', (data) => {
  //       console.log('PLOP :', data);
  //     });
  //   },
  // },
};
</script>
