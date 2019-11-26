<template>
  <div>
    <div class="wt-alert" @click='test' :class='theme ? `wt-alert-${theme}` : ""'>
      <i class="fa fa-exclamation-triangle" v-if='theme === "Warning"'></i>
      <i class="fa fa-times-circle" v-if='theme === "Error"'></i>
      <i class="fa fa-info-circle" v-if='theme === "Information"'></i>
      <i class="fa fa-check-circle" v-if='theme === "Success"'></i>
      <i class="el-icon-close"></i>
      <div class='title'>{{ theme }}!</div>
      <slot></slot>
    </div>
    <!-- <div class="cover"></div> -->
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String, // alert的主题: error, warning, information, success. 首字母必须大写.
      default: 'Information'
    },
    position: {
      type: String, // 定位于浏览器中央还是顶部. // center, top.
      default: 'center'
    },
    size: {
      type: String, // alert的大小, mini, small, medium, big, huge.
      default: "medium"
    },
    automaticCloseTime: {
      type: Number // 如果设置了该值, 那就会根据相应的时间自动关闭, 否则, 永远不会自动关闭.
    }
  },
  data() {
    return {
      themeList: this.theme,
      show: true
    }
  },
  methods: {
    test() {
      console.log(this.theme)
    }
  }
}
</script>

<style scoped lang='scss'>
.wt-alert {
  position: fixed;
  left: 50%;
  top: 100px;
  z-index: 9999;
  width: 420px;
  padding: 8px 15px 8px 40px;
  min-height: 40px;
  border: 1px solid #eee;
  color: #000;
  background: #fff;
  transform: translateX(-50%);
}

.fa {
  position: absolute;
  top: 8.5px;
  left: 18px;
  font-size: 16px;
}

.fa-exclamation-triangle {
  color: #faad14;
}

.fa-times-circle {
  color: #f5222d;
}

.fa-info-circle {
  color: #1890ff;
}

.fa-check-circle {
  color: #52c41a;
}

.el-icon-close {
  position: absolute;
  top: 5px;
  right: 7px;
  cursor: pointer;
}
.title {
  font: 700 16px Consolas, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.wt-alert-Warning {
  background: #fffbe6;
}

.wt-alert-Error {
  background: #fff1f0;
}

.wt-alert-Success {
  background: #f6ffed;
}

.wt-alert-Information {
  background: #e6f7ff;
}
</style>