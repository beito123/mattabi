<template>
    <div id="container">
        <sidebar />
        <div id="content">
            <div id="list-content">
                <applist />
            </div>
            <div id="search-content">
                Search
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from '@/components/sidebar'
import applist from '@/components/applist'
export default {
    components: { 
        sidebar,
        applist
    }
}
</script>

<style lang="scss" scoped>
$content-search-height: 32px;
$content-list-height: calc(#{$win-content-height} - #{$content-search-height});

#container {
    display: grid;
    height: 100%;

    background-color: $white;

    grid-template-rows: auto; // 縦
    grid-template-columns: 280px 1fr; // 横 1frは残りの領域

    grid-template-areas: "sidebar content"; // 分割した領域(area)の配置と名称を決める
}

#content {
    grid-area: content; // gridシステムで分割した領域名
    height: 100%;
    //background-color: cadetblue; // debug

    display: grid;
    grid-template-rows: 1fr $content-search-height; // 縦
    grid-template-columns: auto; // 横
    grid-template-areas: // 分割した領域(area)の配置と名称を決める
        "list-content"
        "search-content";
}

#list-content {
    grid-area: list-content;

    height: $content-list-height;
}

#search-content {
    grid-area: search-content;

    background-color: blueviolet;

    height: 100%;
}

</style>
