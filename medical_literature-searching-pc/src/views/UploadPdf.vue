<template>
    <!-- <Nav /> -->
    <div class="upload-container">
        <div class="upload-pdf">
            <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                multiple>
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    Drop file here or <em>click to upload pdf</em>
                </div>
            </el-upload>
        </div>
        <search></search>
    </div>

</template>

<script setup lang='ts'>
import search from '@/components/Search.vue'
</script>

<style lang='less' scoped>

.upload-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .upload-pdf{
        width: 600px;
    }
}

</style>