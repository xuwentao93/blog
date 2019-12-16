<template>
  <div class="carousel-container" ref='carouselContainer'
  @mouseleave="this.automatic" @mouseenter="stop">
    <img src="../../assets/imgs/carousel/left_btn.png" class="left-btn" @click='move("last")'>
    <img src="../../assets/imgs/carousel/right_btn.png" class="right-btn" @click='move("next")'>
    <div class="carousel-list" ref='carouselList'>
      <a class="carousel-content" v-for='(img, index) in imgs' :key='index' :href='img.link' target="_blank">
        <img :src="img.url" ref='carouselImg' class='carousel-img'>
      </a>
    </div>
    <ul class='toggle-button-list'>
      <li v-for='(page,index) in buttonBg' :key='index' @mouseover='togglePage(index + 1)' 
      :class={selected:buttonBg[index]}></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      page: 1, // 轮播图的页数
      controll: '', // 轮播图自动移动开关
      transition: true, // 防止轮播图一次性移动过多设定一个控制.
      buttonBg: [true] // 轮播图圆形按钮背景图控制.
    }
  },
  props: {
    imgs: { // 图片列表以及相应的地址.
      type: Array
    },
    duration: { // 设置轮播图页面停留时间.
      type: Number
    },
    autoplay: { // 是否自动播放.
      type: Boolean
    },
    size: {
      type: Number, // !!这个属性目前还未完善, 后续必须加进去.表示轮播图的大小.
      default: 100 // 自己也考虑配个默认值.
    }
  },
  methods: {
    initialStyle() { // 初始化轮播图的高度,长度.
      const carouselContainer = this.$refs.carouselContainer
      const carouselList = this.$refs.carouselList
      const carouselImg = this.$refs.carouselImg
      const height = window.getComputedStyle(carouselContainer).height

      this.imgs.unshift(this.imgs[this.imgs.length - 1])
      this.imgs.push(this.imgs[1]) // unshift 之后,第一项会更改,所以得是数组第二项.
      this.$nextTick(() => {
        carouselImg.forEach(item => {
        item.style.height = height // 必须用异步执行,否则上面unshift和push项的照片不会更新高度!
        })
      })
      carouselList.style.width = `${this.imgs.length}00%`
      let move = 100 / (this.imgs.length) // 多张图利用js将分数转化为小数.
      carouselList.style.transform = `translateX(${-move * this.page}%)`
      // 为了防止一进去就拉进度条,放在异步里修改transitionDuration.不能用$nextTick!否则还是一样拉条.
      setTimeout(() => { carouselList.style.transitionDuration = '1.2s' }, 0)
    },
    move(direction) {
      if(this.transition === false) return
      this.transition = false
      this.$set(this.buttonBg, this.page - 1, false)
      if(direction === 'last') {
        this.page--
        }
      else this.page++
      const carouselList = this.$refs.carouselList
      const carouselImg = this.$refs.carouselImg
      carouselList.style.transform = carouselList.style.transform || 'translateX(0)'
      let move = 100 / (carouselImg.length) // 多张图利用js将分数转化为小数.

      carouselList.style.transitionDuration = '1.2s'
       // 其他的各种边界情况或者其他方法会修改duration,上行代码确保移动的时候是缓慢的.
      carouselList.style.transform = `translateX(${-move * this.page}%)`

      if(this.page == 0) {
        this.$set(this.buttonBg, this.buttonBg.length - 1, true) 
        setTimeout(() => {
          carouselList.style.transitionDuration = '0s'
            this.page = this.imgs.length - 2
            carouselList.style.transform = `translateX(${-move * this.page}%)`
        }, 1200)
 
      }
      else if(this.page == this.imgs.length - 1) {
        this.$set(this.buttonBg, 0, true) 
        setTimeout(() => {
          carouselList.style.transitionDuration = '0s'
            this.page = 1
            carouselList.style.transform = `translateX(${-move * this.page}%)`
        }, 1200)

      }
      else this.$set(this.buttonBg, this.page - 1, true)
      setTimeout(() => this.transition = true, 1200)
    },
    togglePage(page) {
      if(this.transition === false) return // 在轮播图移动避免用户操作而引起错误,之后可能要修改下.
      const carouselList = this.$refs.carouselList
      let move = 100 / this.$refs.carouselImg.length

      this.$set(this.buttonBg, this.page - 1, false)
      this.page = page
      this.$set(this.buttonBg, this.page - 1, true)
      carouselList.style.transitionDuration = '0s'
      carouselList.style.transform = `translateX(${-move * page}%)`


    },
    automatic() {
      if(this.autoplay === false) return
      this.controll = setInterval(this.move, this.duration)
    },
    stop() {
      clearInterval(this.controll)
    }
  },
  mounted() {
    this.initialStyle()
    this.automatic()
    for(let i = 1; i < this.imgs.length - 2; i++) {
      this.buttonBg.push(false)
    }
  }
}
</script>

<style scoped lang='scss'>
.carousel-container {
  position: relative;
  width: 500px;
  height: 300px;
  // margin-right: 20px;
  overflow: hidden;
  background: #49f;
  border-radius: 3px;

  .carousel-list {
    display: flex;
    line-height: 0; // 消除img的底边间隙.
    background: #f00;
    transition: transform 0s;
    .carousel-content {
      display: block;
      width: 100%;
      > .carousel-img {
        width: 100%;
      }
    }
  }

  .left-btn, .right-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    cursor: pointer;
  }

  .right-btn {
    right: 0;
  }

  .toggle-button-list {
    position: absolute;
    bottom: 20px;
    right: 20px;
    li {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 6px;
      margin: 4px;
      background: #fff;
      cursor: pointer;
    }
    .selected {
      background: #000
    }
  }
}
</style>