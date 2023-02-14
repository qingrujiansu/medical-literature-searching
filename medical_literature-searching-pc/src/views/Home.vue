<template>
    <div class="common-layout">
      <el-container>
        <Nav />
        <el-header class="header-container">
            <Search />
        </el-header>
        <el-main class="main">
          <h1 class ="animate__animated animate__backInDown">医学文献智能识别与检索系统</h1>
        </el-main>
        <el-footer></el-footer>
      </el-container>
    </div>
  </template>
  

<script setup lang='ts'>
import 'animate.css';

import Search from '@/components/Search.vue';


</script>

<style lang='less' scoped>
.header-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555D70;
  font-size: 45px;
  font-weight: 700;
}
</style>