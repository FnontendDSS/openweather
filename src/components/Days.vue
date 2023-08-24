<template>
  <div class="days">
    <div class="days-controls">
        <button class="days-controls__btn btn-week">На неделю</button>
        <button class="days-controls__btn btn-cancel" @click="getWeather('Tashkent')">Отменить</button>
    </div>
    <div class="days-items">
      <PerDay
      v-for="(day, ind) in weeklist"
      :key="ind"
      :day="day"
      :id="ind"
      />
    </div>
  </div>
</template>

<script>
import PerDay from '@/components/PerDay.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  components: { PerDay },
  data() {
    return {
      weeklist: []
    }
  },
  computed: {
    ...mapGetters(['getWeatherObj'])
  },
  methods: {
  ...mapActions(['getWeather']),
  getWeekList(){
    this.getWeatherObj.daily.forEach((el, key) => {
      if(key <= 6){
        this.weeklist.push(el)
      }
    })
  }
  },
  created() {
    this.getWeekList()
  },
}
</script>

<style>

</style>