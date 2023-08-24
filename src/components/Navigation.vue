<template>
  <div class="navigation">
    <a href="" class="navigation-logo">
      <img src="@/assets/img/logo.svg" alt="">
      <span>vue weather</span>
    </a>
    
    <div class="navigation-input">
      <img src="@/assets/img/gulp.svg" alt="">
      <input type="text" 
      placeholder="Выбрать город"
      v-model="query"
      @keydown.enter="getWeather(query)"
      >
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions(['getWeather'])
  },
}
</script>

<style>

</style>