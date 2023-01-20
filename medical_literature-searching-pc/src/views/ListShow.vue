<template>
    <div>
        <Nav />
    <div class="nav-list-container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >列表页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="search-container">
        <search></search>
    </div>


    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
        <li v-for="i in count" :key="i" class="infinite-list-item">
            <div class="list-box">
                <div class="list-box-left">
                    <el-icon style="vertical-align: -15%">
                        <Document />
                    </el-icon>
                    <text style="color: blue;">2016IJC-导管组织接触对于模型的影响PentarRay FAM.pdf</text>
                    <el-button type="danger" size="small" @click="toSearchListDetail">查看详情</el-button>
                    <!-- <el-button type="danger" size="small"><router-link to="/search-list-detail">查看详情</router-link></el-button> -->
                </div>
                <div class="list-box-right">
                    <el-button type="danger" icon="View" size="small" @click="toSearchView">查看pdf</el-button>
                    <p class="detail">ior studies have shown that the CF is one of the important determinants for the
                        radiofrequency (RF) ablation lesion size [1]. A high CF
                      </p>
                </div>

            </div>
        </li>
    </ul>

    </div>
    
   
</template>

<script setup lang='ts'>
import search from '@/components/Search.vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { ref } from 'vue'
import router from '@/router';
const count = ref(0)
const load = () => {
    count.value += 2
}
function toSearchListDetail() {
    router.push('/search-list-detail')
}
function toSearchView() {
    router.push('/search-view')
}
</script>

<style lang='less' scoped>
.search-container {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav-list-container {
    padding: 10px;
}

.infinite-list {
    height: 600px;
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list .infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background: rgba(135, 148, 170,0.7);
    margin: 10px;
    color: #ed0808;
}

.infinite-list .infinite-list-item+.list-item {
    margin-top: 10px;
}

.list-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 14px;
    padding: 0 10px;

    .list-box-left {
        display: flex;
        justify-content: center;
        align-items: center;
        text {
            margin: 0 10px;
        }
    }

    .list-box-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;

        .detail {
            color: #000;
            font-size: 12px;
            margin-top: 10px;
        }
    }

}
</style>