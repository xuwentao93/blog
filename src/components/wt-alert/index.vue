<template>
  <div>
    <div class="wt-alert fixed">
      {{ theme }}
      <slot></slot>
    </div>
    <div class="cover"></div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String, // alert的主题(danger, warning, safe).
      default: "normal"
    },
    position: {
      type: String, // 绝对定位于中央还是相对于父元素进行定位. // center, relative.
      default: 'center'
    },
    size: {
      type: String, // alert的大小, mini, small, medium, big, huge.
      default: "medium"
    },
    automaticClose: {
      type: Boolean, // 如果是自动关闭的类型, 一段时间会自动关闭, 否则出现 close 按钮遮罩层, 需要点击才能关闭.
      default: true
    }
  }
}
</script>

<style scoped lang='scss'>
.wt-alert {
  position: fixed;
  left: 50%;
  top: 100px;
  width: 420px;
  min-height: 40px;
  border: 1px solid #eee;
  background: #fff;
  transform: translateX(-50%);
}
</style>