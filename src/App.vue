<template>
  <v-app class="section">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data: () => ({
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400&display=swap');

.section{
    margin: auto;
    max-width: 900px;
    color: rgb(55, 53, 47);
    font-family: 'Noto Sans KR', sans-serif;
}
</style>
