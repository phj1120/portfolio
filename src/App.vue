<template>
  <v-app class="section">
    <app-header></app-header>
    <router-view />
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
.section{
    margin: auto;
    max-width: 900px;
    color: rgb(55, 53, 47);
  }
</style>
