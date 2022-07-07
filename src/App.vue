<template>
  <v-app>
    <v-app-bar color="deep-purple accent-4" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Portafolio Full Stack</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>



    <v-main>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Lista de Tareas</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>App del clima</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Ubicación en tiempo real</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Chat en vivo</v-list-item-title>
          </v-list-item>

                    <v-list-item>
            <v-list-item-title>Tienda en linea</v-list-item-title>
          </v-list-item>

                    <v-list-item>
            <v-list-item-title>Juego embebido</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
    drawer: false,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
