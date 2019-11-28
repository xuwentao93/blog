<template>
  <div class="homepage">

    <header class="header" :class='{ miniHeight }'>
      <div class="cover" :class='{ miniHeight }'></div>      
      <div class='navigation-sidebar'>
        <div class="title">BARUNKA.</div>
        <div class="menu">
          <ul class="list">
            <li v-for="(menu, index) in menus" :key="menu.content" class="menu-link" 
            :class='{ borderTopColor:menu.borderTopColor }' @click='borderTopStyleChange(index)'>
              <router-link :to="menu.url" class='link'>{{ menu.content }}</router-link>
            </li>
          </ul>
          <router-link class="login-button" v-if='user === null' to='/login'>
            <span>sign in</span>
          </router-link>
          <router-link class="register-button" v-if='user === null' to='/register'>
            <span>sign up</span>
          </router-link>
          <div class="username-list" v-else @click='toSelfMsg'>
            <span>WELCOME!</span>
            <span class='username'>{{ user }}</span>
          </div>
        </div>
      </div>
      <div class="brief" :class="{ hidden: miniHeight}">
        <p class='blogger'>WT PERSONAL BLOG</p>
        <p class='tips'>A website I want to share something and record my study path and life.</p>
      </div>

    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import { menus } from '@/config'
export default {
  data() {
    return {
      menus,
      user: this.$store.state.user.user,
      borderTopStyleController: 0,
      miniHeight: false
    }
  },
  methods: {
    toSelfMsg() {
      this.$router.push('/selfMsg')
    },
    borderTopStyleChange(number) {
      // this.menus[this.borderTopStyleController].borderTopColor = false
      this.$set(this.menus[this.borderTopStyleController], 'borderTopColor', false)
      for(let i =0; i < this.menus.length; i++) {
        this.$set(this.menus[this.borderTopStyleController], 'borderTopColor', false)
      }
      this.borderTopStyleController = number
      this.$set(this.menus[this.borderTopStyleController], 'borderTopColor', true)
    }
  },
  mounted() {
    const path = this.$route
    if (path.name ==='dictionary') this.borderTopStyleChange(1)
    if (path.name ==='topic') this.borderTopStyleChange(2)
    if (path.name === 'write') {
      this.borderTopStyleChange(3)
      this.miniHeight = true
      }
    this.$router.beforeEach((to, from, next) => {
      if (to.name === 'write') this.miniHeight = true
      else this.miniHeight = false
      next()
    })
  }
  
}
</script>

<style scoped lang='scss'>

.homepage {
  background: #f4f5f5;
}

.cover {
  position: absolute;
  width: 100%;
  height: 500px;
  background: #000;
  opacity: 0.25;
  transition: height .8s;
}

.header {
  position: relative; // 用于子元素进行定位.
  width: 100%;
  height: 500px;
  font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  background: url(../../assets/imgs/home/carousel2.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: height .8s;
  .navigation-sidebar {
    position: relative;
    height: 60px;
    width: 100%;
    padding: 0 8% 0 12%;
    z-index: 99;
    .title {
      float: left;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      font-weight: 600;
      letter-spacing: 3px;
      color: #fff;
      cursor: pointer;
      transition: transform .4s;
      &:hover {
        transform: translateY(3px);
      }
    }
  }
}

.menu {
  display: flex;
  align-items: center;
  float: right;
  line-height: 60px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 1px;
  .list {
    height: 60px;
    .menu-link {
      display: inline-block;
      padding: 0 16.5px;
      height: 60px;
      border-top: 2px solid transparent;
      transition: border .2s;
      cursor: pointer;
      .link {
        display: inline-block;
      }
      &:hover {
        border-top-color: #fff;
      }
    }
    .borderTopColor {
      border-top-color: #fff ;
    }
  }
  .login-button,
  .register-button {
    display: inline-block;
    height: 36px;
    margin-right: 15px;
    padding: 0 16.5px;
    border: 1px solid #fff;
    line-height: 36px;
    transition: background-color .4s, color .4s;
    &:hover {
      background: #fff;
      color: #ef5285
    }
  }
  .username-list {
    margin-left: 25px;
    border-top: 2px solid transparent;
    line-height: 60px;
    color: #fff;
    .username {
      display: inline-block;
      margin-left: 15px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
}

.brief {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 700px;
  color: #fff;
  transform: translate(-50%, -50%);
  letter-spacing: 1px;
  .blogger {
    width: 560px;
    margin: 0 auto;
    font-size: 50px;
    font-weight: 700;
    font-family: "Roboto Condensed", Helvetica, Arial, sans-serif;
  }
  .tips {
    font-size: 20px;
  }
}

.miniHeight {
  height: 60px;
}
.hidden{
  display: none;
}
</style>