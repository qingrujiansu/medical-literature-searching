<template>
    <Nav />
    <div>
        <PdfView :pdfUrl="jsPdf" />
    </div>
</template>

<script setup lang='ts'>
import PdfView from "../components/Pdfview.vue"
import jsPdf from "../static/test.pdf"
</script>

<style lang='less' scoped>

</style>