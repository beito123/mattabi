<template>
  <div id="container">
    <sidebar />
    <div id="content" />
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  components: { sidebar }
}
</script>

<style lang="scss" scoped>
#container {
    display: grid;
    height: 100%;

    grid-template-rows: auto; // 縦
    grid-template-columns: 280px 1fr; // 横 1frは残りの領域

    grid-template-areas: "sidebar content"; // 分割した領域(area)の配置と名称を決める
}

#content {
    grid-area: content; // gridシステムで分割した領域名
    height: 100%;
    //background-color: cadetblue; // debug

    display: grid;
    grid-template-columns: auto; // 横
    grid-template-rows: 1fr 50px; // 縦
    grid-template-areas: // 分割した領域(area)の配置と名称を決める
        "list-content"
        "search-content";
}

</style>
