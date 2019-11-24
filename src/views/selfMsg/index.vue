<template>
  <div class="self-msg">
    <div class="left-sidebar">
      <ul class="menu-list">
        <li class="menu-item" v-for='menu in selfMsgMenuList' :key='menu.name'>
          <router-link :to='menu.to' class='menu-link'>{{ menu.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="show-msg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { selfMsgMenuList } from '@/config'
export default {
  data() {
    return {
      selfMsgMenuList
    }
  },
  mounted() {
    console.log(this.selfMsgMenuList)
  }
}
</script>

<style scoped lang='scss'>
.self-msg {
  display: flex;
  padding: 20px 18%;
}

.menu-list {
  width: 200px;
  margin-right: 20px;
  background: #fff;
  .menu-item {
    width: 200px;
    .menu-link {
      display: block;
      width: inherit;
      height: inherit;
      padding: 20px;
      color: #000;
    }
    &:hover {
      background: #eee;
      cursor: pointer;
      .menu-link {
        color: #2a2;
      }
    }
  }
}

.show-msg {
  padding: 20px;
  width: 728px;
  background: #fff;
}
</style>