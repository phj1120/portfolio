<template>
  <div>
  <div>
      <h1>소개</h1>
    </div>

    <div>
      <h2>기술</h2>
      <h2>언어</h2>
      <h2>프레임워크</h2>
    </div>

    <div>
      <h1> 프로젝트 </h1>
        <h2 @click="moveProjectDetail('haenaem')">해냄</h2>
        <h2 @click="moveProjectDetail('doing')">두잉</h2>
        <h2 @click="moveProjectDetail('mogakco')">모각코</h2>
    </div>

    <div class="section">
      <div class="header">프로젝트 목록</div>
      <v-layout wrap>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/2.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/3.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/2.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="../image/3.jpg" class="image" />
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    moveProjectDetail(name){
      console.log(name)
      this.$router.push("/projects/"+name)
    },
  },
};
</script>

<style scoped lang="less">
.swiper {
  height: 100vh;
  .slide {
    background-size: cover;
    background-position: center center;
    .slog {
      font-size: 60px;
      font-weight: bold;
      color: #fff;
    }
  }
}

.section {
  width: 1190px;
  margin: 0 auto;
  padding-top: 40px;
  padding-bottom: 40px;
  .header {
    text-align: center;
    font-size: 40px;
    font-weight: bold;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
