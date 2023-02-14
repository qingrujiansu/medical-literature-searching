<template>
    <Nav />
    <div>
        <Login v-if="flag == 1" @change-flag = "changeFlag"></Login>
        <Register v-else-if="flag == 2"></Register>
        <div class="info-container" v-else>
            <el-avatar :size="100" :src="circleUrl" />
            <div class="info-box">
                <div>用户名:清如笺素</div>
                <div>手机号:1234567899</div>
            </div>
            <UploadPdf></UploadPdf>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Login from './Login.vue';
import Register from './Register.vue';
import { ref,reactive,toRefs } from 'vue';
import UploadPdf from './UploadPdf.vue';
const flag = ref(3) 

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
const { circleUrl } = toRefs(state)
function changeFlag (){
    flag.value = 3    
}

</script>

<style lang='less' scoped>
.info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    .info-box{
        margin: 20px;
        background-color: #cccccc;
        font-size: 14px;
        div{
            padding: 10px;
        }
    }
}
</style>