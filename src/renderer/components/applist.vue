<template>
    <div id="listview">
        <div v-for="val of list" :key="val.Name" class="list-item">
            <div class="icon">
                <i class="feather icon-cloud-drizzle"></i>
            </div>
            <div class="des">
                <div class="title-box">
                    <div class="title">{{ val.Name }}</div>
                    <div class="ver">{{ val.Version }}</div>
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
    Name: string;
    Version: string;
    Link: string;
    Description: string;
}
var testdata: App[] = [
    {
        Name: "Kaffa Smell",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell2",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell3",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell4",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell5",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell6",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell7",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell8",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell9",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell10",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell11",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell12",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell13",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell14",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell15",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell16",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell17",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell18",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell19",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell20",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell21",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell22",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell23",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell24",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell25",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell26",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell27",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell28",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell29",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell30",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell31",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell32",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell33",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell34",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    },
    {
        Name: "Kaffa Smell35",
        Version: "v1.5.3",
        Link: "http://kaffa-kaffa.smell",
        Description: "This is a great drink. It can be drunk anytime anywhere anyone. So it means that's a great super ultra power drink.",
    }
]
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

        .title-box {
            display: flex; // 横並び
            align-items: center; // 上下 中央寄せ
        }

        .title {
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
        border-color: $gray;
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
            padding: 0 0 0 4px;
            margin: auto;
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