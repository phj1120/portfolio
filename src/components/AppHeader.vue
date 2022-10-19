<template>
  <div class="header">
    <v-layout align-center>
      <mark class="highlight-blue">
        <span @click="moveHome()" class="name">박현준</span>
        <span class="divide-name">|</span>
        <span class="titleInfo">바꿀 수  있는 것을 바꾸려 하는  박현준입니다.</span>
      </mark>
    </v-layout>
    <hr />
  </div>
</template>

<script>
export default {
  methods: {
    moveHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.header {
  padding: 50px 0px 0px 0px;
  font-size: 25px;
  font-weight: bold;
}
.name{
  font-size: 30px;
}
.divide-name{
  padding: 0px 20px 0px 20px;
}
hr{
  padding: 10px 0px 10px 0px;
}
</style>
