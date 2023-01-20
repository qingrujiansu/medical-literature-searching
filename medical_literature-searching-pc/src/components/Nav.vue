<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#D3C5C4"
            text-color="#fff" active-text-color="#ffd04b" @select="handleSelect" :router=true>
            <el-menu-item index="/">智能医学文献系统</el-menu-item>
            <el-menu-item index="/my-info">我的</el-menu-item>
            <el-menu-item index="/update-pdf">立即上传</el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang='less' scoped>

</style>