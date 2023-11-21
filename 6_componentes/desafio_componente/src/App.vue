<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-main>
      <app-carousel />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import Menu from '@/Menu.vue'
import Toolbar from '@/Toolbar.vue'
import Carousel from '@/Carousel.vue'
import Footer from '@/Footer.vue'

export default {
  components: { 'app-footer': Footer, 'app-carousel': Carousel, 'app-toolbar': Toolbar, 'app-menu': Menu }
}
</script>
