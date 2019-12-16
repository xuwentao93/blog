<template>
  <wt-carousel class='carousel' :imgs='carouselList' :duration='2500' :autoplay='false'></wt-carousel>
</template>

<script>
import wtCarousel from '@/components/wt-carousel'
export default {
  components: {
    wtCarousel
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
          url:require('@/assets/imgs/carousel/6.jpg'),
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