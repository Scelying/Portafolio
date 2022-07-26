<template>
  <v-container>
    <v-parallax
      height="120"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <br />
      <h1>Aplicación Lista de Tareas</h1>
    </v-parallax>
    <div style="height: 40px"></div>
    <v-layout align-center justify-center column fill-height>
      <v-card elevation="6" width="500">
        <v-card-text>
          <v-col class="text-center">
            <v-text-field
              v-model="task"
              v-on:keyup.native.enter="addTask()"
              id="inputTask"
              placeholder="Agregar una tarea"
            ></v-text-field>
            <v-alert
              v-model="alertState"
              type="info"
              color="yellow darken-3"
              dense
              dismissible
            >
              Ingrese el nombre de la tarea.
            </v-alert>

            <v-btn class="mx-5" v-on:click="addTask()" rounded color="blue" dark
              >Crear tarea</v-btn
            >
          </v-col>

          <!-- TAREAS NUEVAS -->
          <v-list dense>
            <v-list-item-group dense>
              <h2 class="text-h6" v-if="listTask.length == 0">
                No se han creado tareas nuevas
              </h2>

              <v-list-item v-for="(newTask, index) of listTask" :key="index">
                <v-simple-checkbox
                  color="success"
                  @input="completeTask(index)"
                ></v-simple-checkbox>
                &nbsp;{{ newTask.name }}
                <v-spacer></v-spacer>
                <div>
                  <v-dialog v-model="dialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" color="error darken-1" v-on="on" right>{{
                        icons.mdiDelete
                      }}</v-icon>
                    </template>

                    <v-card>
                      <v-card-title class="red darken-2 white--text" text-color="white">
                        Precaución
                      </v-card-title>
                      <br />
                      <v-card-text> ¿Desea borrar la tarea seleccionada?</v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="deleteTask(index)"> Si</v-btn>
                        <v-btn @click="dialog = false"> No</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </div>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>

      <!-- TAREAS COMPLETADAS -->
      <br />
      <v-card elevation="6" width="500" min-height="100">
        <v-card-text>
          <h2 class="text-h5">Tareas completadas</h2>
          <v-list-item-group>
            <v-list dense>
              <v-list-item-group dense>
                <h3 class="mx-5" v-if="completedTask.length == 0">
                  No hay tareas completadas
                </h3>
                <v-list-item v-for="(taskCompleted, index) of completedTask" :key="index">
                  <v-simple-checkbox
                    color="success"
                    value="true"
                    @input="resetTask(index)"
                  ></v-simple-checkbox>
                  <div class="text-decoration-line-through">
                    &nbsp; {{ taskCompleted.name }}
                  </div>
                  <v-spacer></v-spacer>
                  <div>
                    <v-dialog v-model="dialog" max-width="500px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" color="error darken-1" v-on="on" right>{{
                          icons.mdiDelete
                        }}</v-icon>
                      </template>

                      <v-card>
                        <v-card-title class="red darken-2 white--text">
                          Precaución
                        </v-card-title>
                        <br />
                        <v-card-text> ¿Desea borrar la tarea seleccionada?</v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn @click="deleteCompleteTask(index)"> Si</v-btn>
                          <v-btn @click="dialog = false"> No</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-list-item-group>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { mdiDelete } from "@mdi/js";

export default {
  name: "ToDoList",
  data() {
    return {
      task: "",
      listTask: [],
      completedTask: [],
      alertState: false,
      dialog: false,
      icons: {
        mdiDelete,
      },
    };
  },
  methods: {
    addTask() {
      const taskObj = {
        name: this.task,
        completed: false,
      };

      if (taskObj.name == "") {
        this.alertState = true;
      } else {
        this.alertState = false;
        this.listTask.push(taskObj);
        this.task = "";
      }
    },
    deleteTask(index) {
      this.listTask.splice(index, 1);
      this.dialog = false;
    },
    completeTask(index) {
      this.listTask[index].completed = true;
      this.completedTask.push(this.listTask[index]);
      this.deleteTask(index);
    },
    deleteCompleteTask(index) {
      this.completedTask.splice(index, 1);
      this.dialog = false;
    },

    resetTask(index) {
      this.listTask.push(this.completedTask[index]);
      this.deleteCompleteTask(index);
    },
  },
};
</script>
