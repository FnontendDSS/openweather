<template>
  <div class="container" v-if="getWeatherObj">
    <Navigation/>
    <Content/>
    <Days/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Content from '@/components/Content.vue'
import Days from '@/components/Days.vue'
import {mapActions,mapGetters} from 'vuex'
export default {
  components: {Navigation,Content,Days},
  computed: {
    ...mapGetters(['getWeatherObj'])
  },
  methods: {
    ...mapActions(['getWeather'])
  },
  async created() {
   await this.getWeather('Tashkent')
  },
}
</script>

