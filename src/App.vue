<template>
  <v-app>
    <v-navigation-drawer clipped v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Aplicaciones </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group active-class="cyan--text text--accent-4">
          <router-link style="text-decoration: none; color: inherit" to="/">
            <v-list-item>
              <v-list-item-title>Lista de Tareas</v-list-item-title>
            </v-list-item>
          </router-link>

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

    <v-app-bar color="grey darken-3" clipped-left dark shaped collapse-on-scroll fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-no-wrap">Portafolio en Vue</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-sheet>
        <v-container style="height: 1000px">
          <div style="height: 40px"></div>
          <router-view></router-view>
          <v-divider></v-divider>

          <v-col class="text-center">
            <p>
              <router-link to="/about">Go to About</router-link>
            </p>
          </v-col>
        </v-container>
      </v-sheet>
    </v-main>

    <v-footer fixed>
      <v-col class="text-center text-sm-subtitle-2" style="height: 80px">
        Desarrollado con Vue/Vuetify
        <br />Contacto LinkedIn:
        <a style href="https://www.linkedin.com/in/sebastian-cely/" target="_blank">
          Sebastian Cely</a
        ><br />2022
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
    drawer: false,
  }),

  // watch: {
  //   group() {
  //     this.drawer = false;
  //   },
  // },
};
</script>
