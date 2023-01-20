<template>
    <div class="common-layout">
      <el-container>
        <Nav />
        <el-header class="header-container">
            <Search />
        </el-header>
        <el-main></el-main>
        <el-footer></el-footer>
      </el-container>
    </div>
  </template>
  

<script setup lang='ts'>

import Search from '@/components/Search.vue';


</script>

<style lang='less' scoped>

.header-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>