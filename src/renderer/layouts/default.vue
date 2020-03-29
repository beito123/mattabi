<template>
    <div id="window-view">
        <div id="window-header">
            <appHeader />
        </div>
        <div id="window-content">
            <nuxt />
        </div>
    </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  components: { appHeader }
}
</script>

<style lang="scss">

body {
    margin: 0; // これがないと、ウィンドウ全体に枠が出る
}

</style>

<style lang="scss" scoped>
#window-view {
    display: grid;
    height: 100vh;

    grid-template-rows: $win-header-height 1fr; // 縦 1frは残りの領域
    grid-template-columns: auto; // 横

    grid-template-areas: 
        "window-header"
        "window-content"; // 分割した領域(area)の配置と名称を決める
    
    overflow: hidden;
}

#window-header {
    grid-area: window-header;

    height: 100%;
}

#window-content {
    grid-area: window-content;

    height: $win-content-height;
}
</style>
