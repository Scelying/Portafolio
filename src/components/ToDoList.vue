<template>
  <v-container>
    <v-parallax height="120" dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <br />
      <h1>Aplicación Lista de Tareas</h1>
    </v-parallax>
    <div style="height: 40px"></div>
    <v-layout align-center justify-center column fill-height>
      <v-card elevation="6" width="500">
        <v-card-text>
          <v-col class="text-center">
            <v-text-field v-model="task" id="inputTask" placeholder="Agregar una tarea"></v-text-field>
            <v-btn v-on:click="addTask()" round color="cyan" dark>Crear tarea</v-btn>
            <v-btn v-on:click="deleteTask()" round color="cyan" dark>Eliminar tarea</v-btn>
          </v-col>

          <v-list dense>
            <v-list-item-group dense>
              <h2 v-if="listTask.length == 0">No hay tareas</h2>
              <v-list-item v-for="(task, index) of listTask" :key="index">
                <v-checkbox v-model="task.completed" :label="` ${task.name}`"></v-checkbox>
              </v-list-item>
              <br>
            </v-list-item-group>
          </v-list>



        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ToDoList',
  data() {
    return {
      task: '',
      listTask: [],
    }
  },
  methods: {
    addTask() {
      const taskObj = {
        name: this.task,
        completed: true
      }

      this.listTask.push(taskObj);
      this.task = '';

    },
    deleteTask(index) {
      this.listTask.splice(index, 1);
    },
    completeTask(index, task) {
      this.listTask[index].completed = !task.completed;
    }
  }
};
</script>
