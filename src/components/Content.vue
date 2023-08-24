<template>
  <div class="content">
    <div class="content-left">
      <div class="content-left__img">
        <img src="@/assets/img/sun.svg" alt="" v-if="getDesc == 'ясно'">
        <img src="@/assets/img/sunrain.svg" alt="" v-if="getDesc == 'дождь'">
        <img src="@/assets/img/rain.svg" alt="" v-if="getDesc == 'ливневый дождь'">
      </div>
      <p class="content-left__degree">{{Math.round(getWeatherObj.current.temp)}}°</p>
      <p class="content-left__day">Сегодня</p>
      <p class="content-left__time">Время: {{getTime}}</p>
      <p class="content-left__city">Город: {{getWeatherObj.name}}</p>
    </div>
    <div class="content-right">
      <img src="@/assets/img/headerBg.svg" alt="" class="content-right__img">
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/temp.svg" alt="">
        </div>
        <span class="content-right__item--text">Температура</span>
        <span>{{Math.round(getWeatherObj.current.temp)}}° - ощущается как
          {{Math.round(getWeatherObj.current.feels_like)}}°</span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/davlenie.svg" alt="">
        </div>
        <span class="content-right__item--text">Давление </span>
        <span>{{Math.round(getWeatherObj.current.pressure * 0.75)}} мм ртутного столба - нормальное</span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/osadki.svg" alt="">
        </div>
        <span class="content-right__item--text">Влажность</span>
        <span>{{getWeatherObj.current.humidity}}%</span>
      </div>
      <div class="content-right__item">
        <div class="content-right__item--icon">
          <img src="@/assets/img/wind.svg" alt="">
        </div>
        <span class="content-right__item--text">Ветер</span>
        <span>{{getWeatherObj.current.wind_speed}} м/с юго-запад - легкий ветер</span>
      </div>
    </div>
  </div>
</template>

<script>
import unix from '@/timestamp'
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      info: null
    }
  },
  computed: {
    ...mapGetters(['getWeatherObj']),
    getTime(){
     let hour = unix(this.getWeatherObj.current.dt, 'hour')
     let minute = unix(this.getWeatherObj.current.dt, 'minute')
     let weakday = unix(this.getWeatherObj.current.dt, 'weakday')
     let day = unix(this.getWeatherObj.current.dt, 'day')
     let month = unix(this.getWeatherObj.current.dt, 'month')

     return `${hour}:${minute}`
    },
    getDesc(){return this.getWeatherObj.current.weather[0].description}
  },
  created() {
    this.info = this.getWeatherObj.current
    console.log(this.info);
  },
}
</script>
