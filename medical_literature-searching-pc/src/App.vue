<template>
    <div class="bg">
        <router-view></router-view>
    </div>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.bg {
  position: fixed;
  // position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/bg.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>