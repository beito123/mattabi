<template>
    <div class="sidebar">
        <div id="status-content">
            <feather type="check"></feather>
            <div id="status-message">
                {{ message }}
            </div>
        </div>
        <div id="sidemenu-content">
            <button type=button id="all-update">
                <i color="white" data-feather="rotate-cw"></i>
                <div class="text">
                    Update now
                </div>
            </button>
            <div id="sidemenu-list">
                <button type=button>
                    <i color="black" data-feather="download"></i>
                    <div class="text">
                        Install
                    </div>
                </button>
                <button type=button>
                    <img src="asset/img/history-24px.svg">
                    <div class="text">
                        History
                    </div>
                </button>
                <button type=button>
                    <i color="black" data-feather="tool"></i>
                    <div class="text">
                        Settings
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
    data() {
        return {
            message: "Updated!"
        }
    }
})
</script>

<style lang="scss" scoped>
.sidebar {
    height: 100%;
    background-color: brown; // debug

    display: grid;
    grid-template-columns: auto; // 横
    grid-template-rows: 150px 1fr; // 縦
}

#status-content {
    display: flex; // 横並び
    padding: 35px 30px;

    #status-message {
        margin: auto; // auto center

        font-size: 18pt;
    }

    .feather {
        height: 80px;
        width: 80px;

        color: $green;
    }
}
</style>