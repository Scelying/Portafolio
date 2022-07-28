<template>
  <v-container class="text-center">
    <br />
    <h1>Hola, soy {{ devname }}</h1>
    <h2>Desarrollador Web Full Stack</h2>
    <p>Bienvenido a mi portafoliio de aplicaciones basado en el framework Vue 2.</p>
    <br />

    <v-col cols="auto" class="d-flex justify-center">
      <a
        style="text-decoration: none; color: inherit"
        href="https://vuejs.org/"
        target="_blank"
      >
        <v-card
          rounded
          elevation="4"
          max-width="200"
          class="d-flex justify-center pa-4 ma-2"
        >
          <v-img
            :src="require('../assets/logo.png')"
            transition="scale-transition"
            height="50"
            width="50"
            left
          />
          <p class="d-flex font-weight-bold mb-2 align-center ma-4" right>Vue.js</p>
        </v-card>
      </a>

      <a
        style="text-decoration: none; color: inherit"
        href="https://vuetifyjs.com/en/"
        target="_blank"
      >
        <v-card
          rounded
          elevation="4"
          max-width="200"
          class="d-flex justify-center pa-4 ma-2"
        >
          <v-img
            :src="require('../assets/logo.svg')"
            transition="scale-transition"
            height="45"
            width="45"
            left
          />
          <p class="d-flex font-weight-bold mb-2 align-center ma-4" right>Vuetify</p>
        </v-card>
      </a>
    </v-col>
    <br />
    <h4>Selecciona las tres barras del menú para ver el listado de aplicaciones.</h4>
  </v-container>
</template>

<script>
export default {
  name: "MyProfile",
  data() {
    return {
      devname: "Sebastian Cely",
    };
  },
};
</script>
