<template>
    <div class="search-box">
        <el-input v-model="input" placeholder="请输入搜索内容" class="input-with-select" clearable prefix-icon="Search"
            autofocus @change="ToListShow(input)">

        </el-input>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import router from '../router'
const input = ref('')

function ToListShow(value: string): void {
    console.log('触发了路由跳转',value);
    
    // 带查询参数，结果是 /register?plan=private
    router.push({ path: '/list-show', query: { searchKeyWord:value } })

}
</script>

<style lang='less' scoped>
.search-box {
    width: 600px;

}
::v-deep(.is-focus){
    box-shadow: 0 0 0 1px #c00000;
}
</style>