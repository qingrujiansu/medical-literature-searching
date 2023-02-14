<template>
    <!-- <canvas ref="canvas" width="1519.2" height="2025" ></canvas> -->
    <div class="pdf-preview">
        <canvas ref="canvas" width="1519.2" height="2025" ></canvas>
        <div class="pdf-wrap">
            <vue-pdf-embed  :source="state.source" class="vue-pdf-embed" :style="scaleFun" :page="state.pageNum" />
        </div>
        
    </div>
    <div class="page-tool">
        <div class="page-tool-item" @click="lastPage">上一页</div>
        <div class="page-tool-item" @click="nextPage">下一页</div>
        <div class="page-tool-item">{{ state.pageNum }}/{{ state.numPages }}</div>
        <div class="page-tool-item" @click="pageZoomOut">放大</div>
        <div class="page-tool-item" @click="pageZoomIn">缩小</div>
        <el-button type="success" icon="Document" circle class="downLoad" size="small" />
    </div>
</template>

<script setup lang='ts'>

import { reactive, onMounted, computed, ref } from 'vue';
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs";

/** @type {HTMLCanvasElement} */ 
const canvas = ref() 

const props = defineProps({
    pdfUrl: {
        type: String,
        required: true
    }
})

const state = reactive({
    source: props.pdfUrl, //预览pdf文件地址
    pageNum: 1, //当前页面
    scale: 1, // 缩放比例
    numPages: 0, // 总页数
});

const scaleFun = computed(() => `transform:scale(${state.scale})`)
function lastPage() {
    if (state.pageNum > 1) {
        state.pageNum -= 1;
    }
}
function nextPage() {
    if (state.pageNum < state.numPages) {
        state.pageNum += 1;
    }
}
function pageZoomOut() {
    if (state.scale < 2) {
        state.scale += 0.1;
    }
}
function pageZoomIn() {
    if (state.scale > 1) {
        state.scale -= 0.1;
    }
}

onMounted(() => {
    //canvas
    const ctx = canvas.value.getContext('2d');
    ctx.fillStyle = 'rgba(231,246,19,0.3)'
    // ctx.fillRect(100,711,1400,600)
    // ctx.fillRect(100,711,100,100)
    // ctx.translate(100, 711)
    // ctx.fillRect(0,0,100,600)
    ctx.fillRect(103, 509, 1321, 48);

    //pdf
    const loadingTask = createLoadingTask(state.source);
    loadingTask.promise.then((pdf: { numPages: number }) => {
        state.numPages = pdf.numPages;
    });
});
</script>

<style lang='less' scoped>

canvas {
    position:absolute;
  
    z-index: 998;
}
.pdf-preview {
    position: relative;
    height: 100vh;
    box-sizing: border-box;
    background-color: e9e9e9;
}

.pdf-wrap {
    overflow-y: scroll;
    height: 100%;
}

.vue-pdf-embed {
    text-align: center;
    width: 100%;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    box-sizing: border-box;
}


.page-tool {
    position: absolute;
    bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    z-index: 999;
    cursor: pointer;
    margin-left: 50%;
    transform: translateX(-50%);
}

.page-tool-item {
    padding: 8px 15px;
    padding-left: 10px;
    cursor: pointer;
}
</style>