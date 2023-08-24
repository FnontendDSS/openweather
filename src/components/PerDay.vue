<template>
    <div class="card">
            <p class="card-title">
                {{id==0?'Сегодня':id==1?'Завтра':getWeekDay}}
            </p>
            <p class="card-date">{{getDay}} {{getMonth}}</p>
            <div class="card-img">
                <img src="@/assets/img/sunrain.svg" alt="">
            </div>
            <p class="card-temp">{{Math.round(day.temp.max)}}°</p>
            <p class="card-temp__nigt">{{Math.round(day.temp.min)}}°</p>
            <p class="card-weather">{{getDesc}}</p>
        </div>
</template>

<script>
import unix from '@/timestamp'
export default {
 props: ['day', 'id'],
 computed: {
    getWeekDay(){return unix(this.day.dt, 'weekday')},
    getDay(){return unix(this.day.dt, 'day')},
    getMonth(){return unix(this.day.dt, 'month')},
    getDesc(){return this.day.weather[0].description},
 },
}
</script>

<style>

</style>