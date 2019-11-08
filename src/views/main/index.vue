<template>
  <div class="homepage">
    <div class="top">
      <div class="title">
        <span class="name">等待</span>
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
      <div class="login-button">登录</div>
      <div class="register-button">注册</div>
    </div>
    <div class="main">
      <carousel></carousel>
      <today></today>
    </div>
  </div>
</template>

<script>
import selfInput from "@/components/selfInput";
import carousel from "./childView/carousel";
import today from "./childView/today";
import {test} from "@/api/login";
export default {
  components: {
    today,
    carousel,
    selfInput
  },
  data() {
    return {
      menus: [
        { url: "test", content: "首页" },
        { url: "test", content: "学习" },
        { url: "test", content: "日志" },
        { url: "test", content: "感悟" },
        { url: "test", content: "闹钟" },
        { url: "test", content: "前端动态" },
        { url: "test", content: "生活" }
      ]
    };
  },
  methods: {
    test() {
      test({}).then(res => console.log(res.data));
      // console.log(test)
    }
  },
  mounted() {
    this.test()
  }
};
</script>

<style scoped lang='scss'>
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

.top {
  //顶部样式
  height: 120px;
  background: #49f;
  .title {
    width: 330px;
    margin: 0 auto;
    text-align: center;
    line-height: 120px;
    color: #fff;
    font-family: "time";
    .name {
      font-size: 57px;
      transition: letter-spacing 1.5s;
    }
    .theme {
      position: relative;
      left: 16px;
      font-size: 28px;
      transition: opacity 1.5s, left 1.5s;
    }
    &:hover {
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
  line-height: 52px;
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
      line-height: 52px;
      font-size: 17px;
      vertical-align: top;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.6s;
      &:hover {
        background: #fff;
      }
    }
  }
  .login-button,
  .register-button {
    width: 75px;
    text-align: center;
    height: inherit;
    cursor: pointer;
    transition: background-color 0.6s;
  }
  .login-button {
    margin-left: 80px;
    color: #f00;
    &:hover {
      background: #49f;
    }
  }
  .register-button {
    &:hover {
      background: #899;
    }
  }
}

.main {
  //主要内容样式布局
  display: grid;
  grid-template-columns: 70% 30%;
  margin: 20px 8% 0 8%;
  height: 1200px;
  .left-main {
    margin-right: 20px;
    background: #555;
  }
  .right-main {
    background: #299;
  }
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