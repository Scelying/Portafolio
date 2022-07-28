<template>
  <div class="home">
    <MyProfile />
  </div>
</template>

<script>
// @ is an alias to /src
import MyProfile from "@/components/MyProfile.vue";

export default {
  name: "HomeView",
  components: {
    MyProfile,
  },
};
</script>
