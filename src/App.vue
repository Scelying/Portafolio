<template>
  <v-app>

    <v-app-bar color="cyan" app clipped-left dark round collapse-on-scroll fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="title">Portafolio Full Stack</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Aplicaciones
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="cyan--text text--accent-4">
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

    <v-main>
      <v-sheet>
        <v-container style="height: 1000px" fluid>
          <HelloWorld />
        </v-container>
      </v-sheet>
    </v-main>

    <v-footer fixed>
      <v-col class="text-center" cols="12">
        2022 — <strong>Sebatian Cely</strong>
      </v-col>
    </v-footer>

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
