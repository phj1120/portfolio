<template>
  <div>
    <div class="page-body">
      <h2><mark class="highlight-blue"><b>모각코</b></mark></h2>
      <hr />
      <p>동아리 친구들과 각자 하루에 몇 시간씩 스터디 하기로 해, 이를 확인 할 만한 <b>서비스가 필요</b> 했음.</p>
      <p>그러던 중 디스코드 봇을 알게 되었고, 이를 이용해 필요한 서비스를 만들었음.</p>
      <p>새로운 것을 학습 하는 방법을 익히고 싶어서, 처음 들어본 Go 를 이용했고, 공식 문서 위주로 보고 개발 했음.</p>
      <h2><mark class="highlight-blue"><b>사용 기술</b></mark></h2>
      <hr />
      <p>웹 서비스 : Spring Boot, JPA</p>
      <p>비즈니스 : Go, MySQL</p>
      <p>배포 : AWS EC2</p>
      <h2><mark class="highlight-blue"><b>배운점</b></mark></h2>
      <hr />
      <ul class="bulleted-list">
        <li style="list-style-type:disc">처음 해보는 것이라 어색하게 느껴졌지만, 개발 하다보니 기본적인 틀은 같다는 것을 알 수 있었음.</li>
      </ul>
      <ul class="bulleted-list">
        <li style="list-style-type:disc">
          <p>운영 중 에러가 발생해 로그를 읽고, 필요한 정보를 추려, 구글에 검색 해 문제를 해결함</p>
          <p>이를 통해 개발자의 무지가 서비스에 큰 영향을 미칠 수 있다는 것을 느껴 많이 배워야겠다 생각했음</p>
        </li>
      </ul>
      <ul class="bulleted-list">
        <li style="list-style-type:disc">새로운 것을 배우기 위해서는 원하는 것을 만들라는 말의 의미를 알게 됐음.</li>
      </ul>

      <h2><mark class="highlight-blue"><b>사용 방법</b></mark></h2>
      <hr />
      <ul class="bulleted-list">
        <li style="list-style-type:disc"><b>공부 / 휴식 시간 체크</b>
          <p>공부 채널에 있으면 공부 시간이 카운트 되고, 휴식 채널에 있으면 휴식 채널 카운트 됨</p>
          <p>분 단위로 기록이 체크 되고, 채널 이동시 마다 채팅으로 이동 내역을 전송 함</p>
          <figure class="image">
            <img style="width:1083px" src="../../image/projects/mogakco/timecheck.png" />
          </figure>
        </li>
      </ul>
      <br />
      <ul class="bulleted-list">
        <li style="list-style-type:disc"><b>공부 기록 확인</b>
          <ul class="bulleted-list">
            <li style="list-style-type:circle">봇<p>채팅으로 특정 명령어를 전송할 경우 상황에 맞는 정보 응답</p>
              <figure class="image">
                <img style="width:1083px" src="../../image/projects/mogakco/chatbot.png" />
              </figure>
            </li>
          </ul>
          <br />
          <ul class="bulleted-list">
            <li style="list-style-type:circle">웹 사이트
              <p>
                사용자 전체, 각자의 공부 기록 볼 수 있는 페이지 제작</p>
              <figure class="image">
                <img style="width:1083px" src="../../image/projects/mogakco/website.png">
              </figure>
            </li>
          </ul>
        </li>
      </ul>

      <h2><mark class="highlight-blue"><b>기타</b></mark></h2>
      <hr />
      <p><a href="https://github.com/phj1120/bbaddabot" class="link">[깃허브]</a></p>
      <p><a href="https://mogakco.parkh.today/users/1/" class="link">[사이트]</a></p>
      <p><a href="https://www.notion.so/Discord-Bot-da3f8fe5a214450386461b4e2f7f33e6" class="link">[개발 기록]</a></p>
      <h2><mark class="highlight-blue"><b>사용 기록</b></mark></h2>
      <div v-if="loaded">
        <p>{{totalDate}} 일 중 {{studyDate}} 동안</p>
        <p>평균 {{toHoursAndMinutes(averageStudyTime)}} 씩 공부</p>
        <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
          :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
          :height="height" />
      </div>
    </div>
  </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  components: {
    LineChartGenerator
  },
  data() {
    return {
      loaded: false,
      totalDate: 0,
      studyDate: 0,
      averageStudyTime: 0,
      chartData: {
        labels: [],
        datasets: [
          {
            label: '공부 시간(분)',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    };
  },
  methods: {
    moveProjectDetail(name) {
      console.log(name)
      this.$router.push("/projects/" + name)
    },
    padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    },
    toHoursAndMinutes(totalMinutes) {
      const minutes = totalMinutes % 60;
      const hours = Math.floor(totalMinutes / 60);

      return `${this.padTo2Digits(hours)}시간 ${this.padTo2Digits(minutes)} 분`;
    },
  },
  async mounted() {
    this.loaded = false
    try {
      await this.axios
        .get("https://mogakco.parkh.today/api/users/1")
        .then((result) => {
          this.chartData.labels = result.data.data.total.dateList
          this.chartData.datasets[0].data = result.data.data.total.studyTimeList
          this.totalDate = result.data.data.total.totalDate
          this.studyDate = result.data.data.total.studyDate
          this.averageStudyTime = result.data.data.total.averageStudyTime
        })
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => { }
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
};
</script>

<style scoped>
@import url("../../css/notion.css");

.link {
    color: black;
}

.link:hover {
    text-decoration: underline;
}
</style>
