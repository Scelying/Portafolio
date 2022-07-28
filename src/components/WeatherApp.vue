<template>
  <v-container class="text-center">
    <br />
    <p>{{ saludo }}</p>
  </v-container>
</template>

<script>
export default {
  name: "WeatherApp",
  data() {
    return {
      saludo: "Esta es una aplicación del Clima... en desarrollo!",
    };
  },
};
</script>
