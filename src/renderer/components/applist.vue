<template>
    <div id="listview">
        <div v-for="(val, index) in list" :key="val.ID" class="list-item">
            <div class="icon">
                <i class="feather" :class="`icon-${list[index].Icon}`"></i>
            </div>
            <div class="des">
                <div class="name-content">
                    <div class="name">{{ val.Name }}</div>
                    <div class="ver">v{{ val.Version }}</div>
                </div>
                <span class="link">{{ val.Link }}</span>
                <div class="content">
                    {{ val.Description }}
                </div>
            </div>
            <div class="item-buttons">
                <button type=button class="button-update">
                    <i class="feather icon-rotate-ccw"></i>
                    <div class="text">
                        Update
                    </div>
                </button>
                <hr>
                <div class="button-bottom">
                    <button type=button class="button-run">
                        <i class="feather icon-play"></i>
                        <div class="text">
                            Run
                        </div>
                    </button>
                    <button type=button class="button-icon uninstall">
                        <i class="feather icon-trash"></i>
                    </button>
                    <button type=button class="button-icon info">
                        <i class="feather icon-info"></i>
                    </button>
                    <button type=button class="button-icon settings">
                        <i class="feather icon-settings"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
interface App {
    ID: number,
    Name: string;
    Version: string;
    Link: string;
    Description: string;
    Icon: string;
}
var testdata: App[] = [
{
  "ID": 1,
  "Name": "Alpha",
  "Version": "0.8.8",
  "Link": "http://simplemachines.org",
  "Description": "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in",
  "Icon": "globe"
}, {
  "ID": 2,
  "Name": "Cookley",
  "Version": "6.9.0",
  "Link": "http://w3.org",
  "Description": "lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id",
  "Icon": "home"
}, {
  "ID": 3,
  "Name": "Opela",
  "Version": "4.0",
  "Link": "http://psu.edu",
  "Description": "primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
  "Icon": "bluetooth"
}, {
  "ID": 4,
  "Name": "Bigtax",
  "Version": "2.3.7",
  "Link": "https://angelfire.com",
  "Description": "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae",
  "Icon": "server"
}, {
  "ID": 5,
  "Name": "Fixflex",
  "Version": "0.8.5",
  "Link": "https://google.pl",
  "Description": "at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
  "Icon": "sunset"
}, {
  "ID": 6,
  "Name": "Rank",
  "Version": "7.29",
  "Link": "https://youtu.be",
  "Description": "imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis",
  "Icon": "dollar-sign"
}, {
  "ID": 7,
  "Name": "Cardguard",
  "Version": "4.8",
  "Link": "https://bing.com",
  "Description": "justo sollicitudin ut suscipit a feugiat et eros vestibulum ac",
  "Icon": "moon"
}, {
  "ID": 8,
  "Name": "Voltsillam",
  "Version": "2.9.4",
  "Link": "http://tuttocitta.it",
  "Description": "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
  "Icon": "unlock"
}, {
  "ID": 9,
  "Name": "Flexidy",
  "Version": "2.91",
  "Link": "http://lycos.com",
  "Description": "elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget",
  "Icon": "link-2"
}, {
  "ID": 10,
  "Name": "Bytecard",
  "Version": "0.86",
  "Link": "https://cargocollective.com",
  "Description": "sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec",
  "Icon": "user-minus"
}, {
  "ID": 11,
  "Name": "Solarbreeze",
  "Version": "0.4.4",
  "Link": "https://ning.com",
  "Description": "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed",
  "Icon": "slash"
}, {
  "ID": 12,
  "Name": "Konklux",
  "Version": "0.2.1",
  "Link": "https://oakley.com",
  "Description": "vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus",
  "Icon": "git-commit"
}, {
  "ID": 13,
  "Name": "Tampflex",
  "Version": "4.7",
  "Link": "http://google.ca",
  "Description": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit",
  "Icon": "align-left"
}, {
  "ID": 14,
  "Name": "Duobam",
  "Version": "2.7.6",
  "Link": "http://youku.com",
  "Description": "morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in",
  "Icon": "refresh-cw"
}, {
  "ID": 15,
  "Name": "Job",
  "Version": "0.1.5",
  "Link": "http://usgs.gov",
  "Description": "montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque",
  "Icon": "folder-minus"
}]
export default Vue.extend({
    data: function() {
        return {
            list: testdata
        };
    },
})
</script>

<style lang="scss" scoped>
#listview {
    padding: 0 5px;
    background-color: $background;

    height: 100%;
    
    overflow: hidden scroll; // 表示領域を超えた部分を左右は隠し、上下はスクロールできるように。
}

.list-item {
    align-items: center; // 上下 中央寄せ
    
    height: 120px;

    background-color: $white;

    overflow: hidden; // 表示領域外の非表示

    // grid

    display: grid;
    grid-template-rows: auto; // 縦
    grid-template-columns: 100px 1fr 190px; // 横

    grid-template-areas: "icon doc buttons"; // 分割した領域(area)の配置と名称を決める

    .icon {
        margin: auto; // 上下左右 中央寄せ

        overflow: hidden; // 表示領域外の非表示

        height: 80px;
        width: 80px;

        .feather {
            font-size: 80px;
            font-weight: 200;
        }
    }

    .des {
        overflow: hidden; // 表示領域外の非表示

        transform: rotate(0.028deg); // Firefoxでもフォントを綺麗に表示するやつ // Hate Firefox

        padding-right: 8px;

        .name-content {
            display: flex; // 横並び
            align-items: center; // 上下 中央寄せ
        }

        .name {
            font-size: 22px;
            font-weight: normal;

            max-width: 80%;
            text-overflow: ellipsis; // 領域外に出たテキストを ... にする
            overflow: hidden; // 表示領域外の非表示
            white-space: nowrap; // 改行禁止
        }

        .ver {
            color: $clay;
            font-size: 18px;
            white-space: nowrap; // 改行禁止
        }

        .ver::before { // .verの前に - を挿入
            content: " - ";
        }

        .link {
            display: block;
            
            margin-top: -3px; // 文字の位置調整 (上の文字と被るように)
            margin-bottom: 5px;

            color: $clay;
            font-size: 13px;

            text-overflow: ellipsis; // 領域外に出たテキストを ... にする
            overflow: hidden; // 表示領域外の非表示
            white-space: nowrap; // 改行禁止
        }

        .content {
            height: 2.8em;
            
            // 見切れる文章に...をつけるやつ 以下4行 // 互換性に難あり
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; // 2行目までは表示する。(3行目に入る場合は ... になる)
            overflow: hidden; // 表示領域外の非表示
        }
    }
}

.item-buttons {
    background-color: $white;
    
    margin: auto; // 上下左右 中央寄せ

    hr {
        margin: 5px 18px;
        border-color: $lite-gray;
        border-radius: 6px;
        border-width: 0.5px 0 0.5px 0;
    }
}

.button-update {
    display: flex; // 横並び
    width: 100%;

    background-color: $white;

    .feather {
        height: 35px;
        width: 35px;

        margin: 5px;
        stroke: $update;

        color: $update;
        font-size: 35px;
    }

    .text {
        margin: auto;

        color: $update;
        font-size: 16px;
    }
    
    &:hover {
        background-color: darken($white, 8%);
    }
    
    &:active {
        background-color: darken($white, 15%);
    }
}

.button-bottom {
    display: flex; // 横並び
    
    transform: rotate(0.028deg); // Firefoxでもフォントを綺麗に表示するやつ // Hate Firefox

    .button-run {
        display: flex; // 横並び

        background-color: $white;
        
        .feather {
            height: 24px;
            width: 24px;

            stroke: $gray;
            stroke-width: 2.5px;

            font-size: 24px;
            color: $gray;
        }

        .text {
            margin: auto;
            padding-left: 4px;

            font-size: 15px;
        }
        
        &:hover {
            background-color: darken($white, 8%);

        
            .feather {
                color: $green;
                stroke: $green;
            }
        }
        
        &:active {
            background-color: darken($white, 15%);
        }
    }

    .button-icon {
        margin: auto;
        background-color: $white;
        
        .feather {
            height: 21px;
            width: 21px;

            font-size: 21px;

            color: $gray;

            //stroke: $gray;
            //stroke-width: 2.5px;
        }
    }

    .icon-trash:hover {
        color: $red;
        svg {
            //stroke: $red;
        }
    }
    
    .icon-info:hover {
        color: $blue;
        svg {
            //stroke: $blue;
        }
    }

    .icon-settings:hover {
        color: $clay;
        svg {
            //stroke: $clay;
        }
    }
}
</style>