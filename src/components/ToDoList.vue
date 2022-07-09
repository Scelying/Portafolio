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
          <v-text-field id="inputTask" label="Ingrese una tarea"></v-text-field>
          <v-btn round color="cyan" dark>Crear tarea</v-btn>
          <v-checkbox v-model="checkbox" label="Tarea 1"></v-checkbox>
          <v-checkbox v-model="checkbox" label="Tarea 2"></v-checkbox>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>
