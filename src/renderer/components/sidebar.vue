<template>
  <div class="sidebar">
    <div id="status-content">
      <feather type="check" />
      <div class="text">
        {{ message }}
      </div>
    </div>
    <div id="sidemenu-content">
      <button id="all-update" type="button">
        <feather type="rotate-cw" />
        <div class="text">
          Update now
        </div>
      </button>
      <div id="sidemenu-list">
        <button type="button">
          <feather type="download" />
          <div class="text">
            Install
          </div>
        </button>
        <button type="button">
          <i class="fas fa-history" />
          <div class="text">
            History
          </div>
        </button>
        <button type="button">
          <feather type="tool" />
          <div class="text">
            Settings
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      message: 'Updated!'
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

    .text {
        margin: auto; // auto center

        font-size: 18pt;
    }

    .feather {
        height: 80px;
        width: 80px;

        color: $green;
    }
}
@mixin ibutton { // 画像付きのボタンのテンプレート
    display: flex; // 横並び
    align-items: center; // 上下 中央寄せ

    .feather, i {
        flex-basis: 30%; // 画像の位置調整
    }
}

#all-update {
    @include ibutton(); // 画像付きボタンの継承

    margin: 0 auto;

    height: 55px;
    width: 256px;

    background-color: $update;

    &:hover {
        color: darken($white, 10%);
        background-color: darken($update, 5%);
    }

    &:active {
        color: darken($white, 20%);
        background-color: darken($update, 10%);
    }

    .feather {
        color: $white;
        height: 35px;
        width: 35px;
    }

    .text {
        color: $white;
        font-size: 18pt;
    }
}

#sidemenu-list {
    margin-top: 18px;

    button {
        @include ibutton(); // 画像付きボタンの継承

        width: 100%;
        height: 58px;

        padding: 0 21px;

        background-color: $white;

        &:hover {
            background-color: darken($white, 8%);
        }

        &:active {
            background-color: darken($white, 15%);
        }

        .feather, i { // icon
            height: 35px;
            width: 35px;
        }

        .text { // text
            margin: auto; // auto center
            color: $black;
            font-size: 14pt;
        }
    }
}
</style>
