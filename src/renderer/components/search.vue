<template>
    <div id="search">
        <div class="group-input">
            <div class="pre">
                <i class="feather icon-search"></i>
            </div>
            <input type="text" placeholder="Search applications...">
        </div>
    </div>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
#search {
    display: flex;

    height: 100%;
    width: 100%;
}

.group-input {
    // var
    $height: 24px;

    // sharps
    display: flex;
    
    height: 60%;
    width: 100%;

    margin: 4px 15px 0 0; // top, right, bottom, left
    padding-bottom: 8px;
    
    // border
    border-style: none;

    .pre, input {
        // sharps
        height: $height;

        padding: 1px 0;
        
        // design
        background-color: $background;
    }

    .pre {
        // border
        border-right: 0;
        
        i {
            font-size: $height;
        }
    }

    input {
        width: 100%;
        margin-left: 5px;

        // border
        border-style: solid;
        border-width: 0 0 2px 0;
        border-color: $lite-gray;
        border-radius: 1px;
        
        // font
        font-size: 14px;
    }
}
</style>