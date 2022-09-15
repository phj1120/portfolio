<template>
  <div>
    <swiper :option="swiperOption" class="swiper">
      <swiper-slide class="slide" style="background-image: url(/image/1.jpg)">
        <v-layout fill-height align-center justify-center>
          <div class="slog">박현준</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide class="slide" style="background-image: url(/image/2.jpg)">
        <v-layout fill-height align-center justify-center>
          <div class="slog">입니다</div>
        </v-layout>
      </swiper-slide>
      <swiper-slide style="background-image: url(/image/3.jpg)"> </swiper-slide>
    </swiper>

    <div class="section">
      <div class="header">프로젝트 목록</div>
      <v-layout wrap>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/2.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/3.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/1.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/2.jpg" class="image" />
          </v-responsive>
        </v-flex>
        <v-flex xs4 class="pa-2">
          <v-responsive :aspect-raio="1 / 1">
            <img src="/image/3.jpg" class="image" />
          </v-responsive>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper";
export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 100,
        },
      },
    };
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
