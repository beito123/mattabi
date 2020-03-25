<template>
  <div id="window-view">
    <appHeader />
    <nuxt />
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

    grid-template-rows: 32px 1fr; // 縦
    grid-template-columns: auto; // 横 1frは残りの領域

    grid-template-areas: ""; // 分割した領域(area)の配置と名称を決める
}
</style>
