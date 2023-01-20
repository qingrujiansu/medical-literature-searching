<template>
    <Nav />
    <div>
        <Login v-if="flag"></Login>
        <Register v-else-if="flag"></Register>
        <div v-else>我的信息</div>
    </div>
</template>

<script setup lang='ts'>
import Login from './Login.vue';
import Register from './Register.vue';
import { ref } from 'vue';
const flag = ref(false) 

</script>

<style lang='less' scoped>

</style>