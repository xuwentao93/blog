<template>
  <div class="homepage">
    <div class="navigation-bar">
      <div class="title">
        <span class="name">徐文韬</span>
        <span class="theme">的个人博客</span>
      </div>
    </div>

    <div class="menu">
      <ul class="list">
        <li v-for="menu in menus" :key="menu.content" class="menu-link">
          <router-link :to="menu.url">{{menu.content}}</router-link>
        </li>
      </ul>
      <self-input>
        <i class="fa fa-search"></i>
      </self-input>
      <router-link class="login-button" v-if='user === null' to='/login'>
        登录
      </router-link>
      <router-link class="register-button" v-if='user === null' to='/register'>
        注册
      </router-link>
      <div class="username" v-else @click='toSelfMsg'>你好,{{user}}</div>
    </div>
    <div class="main">
      <router-view></router-view>
      <decoration-home></decoration-home>
    </div>
  </div>
</template>

<script>
import selfInput from "@/components/selfInput"
import { menus } from '@/config'
import decorationHome from "../home/childView/decoration"
export default {
  components: {
    // today,
    // carouselContent,
    selfInput,
    decorationHome,
  },
  data() {
    return {
      menus,
      user: this.$store.state.user.user
    }
  },
  methods: {
    toSelfMsg() {
      this.$router.push('/selfMsg')
    }
  }
};
</script>

<style scoped lang='scss'>
.homepage {
  background: #f4f5f5;
}
a {
  //some basic modify
  color: #fff;
}
.fa-search {
  position: absolute;
  right: 10px;
  top: 21px;
  color: #99a;
}

.navigation-bar {
  //顶部样式
  width: 100%;
  height: 90px;
  z-index: 999;
  background: #49f;
  .title {
    width: 350px;
    margin: 0 auto;
    text-align: center;
    line-height: 90px;
    color: #fff;
    font-family: "time";
    .name {
      font-size: 45px;
      transition: letter-spacing 1.5s;
    }
    .theme {
      position: relative;
      left: 16px;
      font-size: 22px;
      transition: opacity 1.5s, left 1.5s;
    }
    &:hover {
      width: 500px;
      cursor: pointer;
      .name {
        letter-spacing: 10px;
      }
      .theme {
        left: 30px;
        opacity: 0.5;
      }
    }
  }
}

.menu {
  //菜单栏布局
  display: flex;
  align-items: center;
  height: 52px;
  width: 100%;
  line-height: 52px;
  z-index: 999;
  background: #000;
  color: #fff;
  .list {
    width: 700px;
    height: inherit;
    margin-left: 20%;
    margin-right: 20px;
    text-align: center;
    .menu-link {
      display: inline-block;
      width: 75px;
      height: 52px;
      line-height: 52px;
      font-size: 17px;
      vertical-align: top;
      cursor: pointer;
      transition: background-color .6s;
      a {
        display: block;
        width: 75px;
        height: 52px;
      }
      &:hover {
        border-top: 4px solid #f77825;
        line-height: 44px;
        color: #49f;
        background: #fff;
      }
    }
  }
  .login-button,
  .register-button {
    display: block;
    width: 75px;
    text-align: center;
    height: inherit;
    cursor: pointer;
    transition: background-color .6s;
  }
  .login-button {
    margin-left: 80px;
    color: #f00;
    &:hover {
      background: #49f;
    }
  }
  .register-button:hover {
    background: #899;
  }
  .username {
    position: absolute;
    right: 20px;
    height: 52px;
    line-height: 52px;
    text-align: center;
    color: #49f;
    cursor: pointer;
    &:hover {
      color: #7cf
    }
  }
}

.main {
  //主要内容样式布局
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 300px 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  width: calc(84% - 16px);
  height: inherit;
  margin: 0 8%;
  padding: 20px;
  // height: 1200px;
}
</style>

<style lang='scss'>
.self-input-container {
  position: relative;
}
.homepage .self-input {
  width: 220px;
  height: 20px;
  vertical-align: middle;
}
</style>