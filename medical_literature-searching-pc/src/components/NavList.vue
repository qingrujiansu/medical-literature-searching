<template>
    <div class="nav-list-container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/list-show' }">列表页</el-breadcrumb-item>
            <el-breadcrumb-item >详情页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>

</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<style lang='less' scoped>
.nav-list-container {
    padding: 10px;
}
</style>