<template>
    <Nav />
    <div class="nav-list-container">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/list-show' }">列表页</el-breadcrumb-item>
            <el-breadcrumb-item>详情页</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div>
        <div class="pdf-title-box">
            <div class="list-box-left">
                <el-icon style="color:#c00000; vertical-align: -15%">
                    <Document />
                </el-icon>
                <text style="color: #000;">2016IJC-导管组织接触对于模型的影响PentarRay FAM.pdf</text>
            </div>
            <el-button type="danger" round size="small">立即下载</el-button>
        </div>
        <div class="page-num">共4页</div>
    </div>
    <div class="search-list">
        <el-descriptions title="检测结果" :column="4" :size="size" direction="vertical" :style="blockMargin">

            <el-descriptions-item label="命中页数">第四页</el-descriptions-item>
            <el-descriptions-item label="命中的段落">the absence of anatomical contact areas was strongly
                associated with significant local distortion, independent of the CF.</el-descriptions-item>
            <el-descriptions-item label="查看" :span="2"><el-button type="danger" icon="View" size="small"
                    @click="toSearchView">查看pdf</el-button></el-descriptions-item>

            <el-descriptions-item label="命中页数">第四页</el-descriptions-item>
            <el-descriptions-item label="命中的段落">the absence of anatomical contact areas was strongly
                associated with significant local distortion, independent of the CF.</el-descriptions-item>
            <el-descriptions-item label="查看" :span="2"><el-button type="danger" icon="View" size="small"
                    @click="toSearchView">查看pdf</el-button></el-descriptions-item>

            <el-descriptions-item label="命中页数">第四页</el-descriptions-item>
            <el-descriptions-item label="命中的段落">the absence of anatomical contact areas was strongly
                associated with significant local distortion, independent of the CF.</el-descriptions-item>
            <el-descriptions-item label="查看" :span="2"><el-button type="danger" icon="View" size="small"
                    @click="toSearchView">查看pdf</el-button></el-descriptions-item>
                    
            <el-descriptions-item label="命中页数">第四页</el-descriptions-item>
            <el-descriptions-item label="命中的段落">the absence of anatomical contact areas was strongly
                associated with significant local distortion, independent of the CF.</el-descriptions-item>
            <el-descriptions-item label="查看" :span="2"><el-button type="danger" icon="View" size="small"
                    @click="toSearchView">查看pdf</el-button></el-descriptions-item>


        </el-descriptions>
    </div>

</template>

<script setup lang='ts'>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import router from '@/router';
const size = ref('')
const blockMargin = computed(() => {
    const marginMap = {
        large: '32px',
        default: '28px',
        small: '24px',
    }
    return {
        marginTop: marginMap[size.value] as string || marginMap.default
    }
})

function toSearchView() {
    router.push('/search-view')
}
</script>

<style lang='less' scoped>
.nav-list-container {
    padding: 10px;
}

.pdf-title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
}

.page-num {
    font-size: 14px;
    color: #ccc;
    margin: 10px 20px;
}
.search-list{
    padding: 0 20px;
}
</style>