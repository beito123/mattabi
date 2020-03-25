<template>
  <header class="main-header">
    <div class="title">
      Monaka
    </div>
    <div class="button-box">
      <button type="button" class="button-update" v-on:click="min">
        <feather type="minus"></feather>
      </button>
      <button type="button" class="button-update" v-on:click="max">
        <feather type="square"></feather>
      </button>
      <button type="button" class="button-update" v-on:click="close">
        <feather type="x"></feather>
      </button>
    </div>
  </header>
</template>

<script>
import { remote } from "electron"

export default {
    methods: {
        min: function() {
            var window = remote.getCurrentWindow()
            window.minimize();
        },
        max: function() {
            var window = remote.getCurrentWindow()
            if (!window.isMaximized()) {
                window.maximize()
            } else {
                window.unmaximize();
            }
        },
        close: function() {
            var window = remote.getCurrentWindow()
            window.close();
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-header {
        display: flex;
        justify-content: space-between; // 左右両端に配置

        height: 100%;
        background-color: $base;

        -webkit-app-region: drag;
    }

    .title {
        color: $white;
        font-weight: bold;

        margin: auto 15px; // 上下
    }

    .button-box {
        display: flex;

        -webkit-app-region: no-drag;

        button {
            height: 100%;
            width: 100%;
            padding: 0 10px;

            background-color: $base;
            border: none;

            .feather {
                margin: auto; // 上下左右中央寄せ

                height: 18px;
                width: 18px;

                color: $white;
            }

            &:hover {
                background-color: darken($base, 8%);
            }
            
            &:active {
                background-color: darken($base, 15%);
            }
        }

    }
</style>
