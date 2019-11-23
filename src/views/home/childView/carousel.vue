<template>
  <self-carousel class='carousel' :imgs='carouselList' :duration='2500' :autoplay='false'></self-carousel>
</template>

<script>
import selfCarousel from '@/components/selfCarousel'
export default {
  components: {
    selfCarousel
  },
  data () {
    return {
      carouselList: [
        {
          url:require('@/assets/imgs/carousel/1.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('@/assets/imgs/carousel/2.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('@/assets/imgs/carousel/3.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('@/assets/imgs/carousel/4.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('@/assets/imgs/carousel/5.jpg'),
          link:'https://www.baidu.com'
        },
        {
          url:require('@/assets/imgs/carousel/6.jpeg'),
          link:'https://www.baidu.com'
        }
      ]
    }
  },
  methods: {
    hello() {
      console.log(1)
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang='scss'>
.carousel {
  width: 100%;
  height: 300px;
}
</style>