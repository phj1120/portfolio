<template>
    <div>mogakco
        <div>
            <LineChartGenerator v-if ="loaded" :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
            :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
            :height="height" />
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
      loaded: true,
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
  methods:{
    moveProjectDetail(name){
      console.log(name)
      this.$router.push("/projects/"+name)
    },
  },
  async mounted() {
    this.loaded = false
    try {
      await this.axios
        .get("https://mogakco.parkh.today/api/users/1")
        .then((result) => {
          this.chartData.labels= result.data.data.total.dateList
          this.chartData.datasets[0].data = result.data.data.total.studyTimeList
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
