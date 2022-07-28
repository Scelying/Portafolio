<template>
  <v-container>
    <br />
    <v-col class="text-center"> <h2>This is an about page!</h2></v-col>
    <HelloWorld />
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
