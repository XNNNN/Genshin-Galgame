<template>
    <div class="xn_map_bg">
        <canvas id='canvas'>
        </canvas>
        <div class="slider">
            <el-slider
            v-model="sliderValue"
            vertical
            height="200px">
            </el-slider>
        </div>
        <v-chart
            class="xn_map_relation"
            ref="lesMiserables"
            :options="GLOptions"
            :init-options="initOptions"
            autoresize
        />
    </div>
</template>
<script>
import { stars } from '../../util/stars.js'
import testJson from '../../assets/character/balala.json'
export default {
    data () {
        return {
            x: 0,
            screenWidth: document.documentElement.clientWidth,
            screenHight: document.documentElement.clientHeight,
            startNum: 100,
            sliderValue: 50,
            GLOptions: null,
            initOptions: {
                renderer: 'canvas'
            },
        }
    },
    mounted () {
        stars() // 加载星星canvas背景
        this.loadOptions()
        console.log(1111, testJson);
    },
    methods: {
        // 加载关系图
        loadOptions () {
            testJson.nodes.forEach(function (node) {
                node.label = {
                    show: node.symbolSize > 30
                };
            });
            this.GLOptions = {
                title: {
                    text: 'Les Miserables',
                    subtext: 'Default layout',
                    top: 'bottom',
                    left: 'right'
                },
                tooltip: {},
                legend: [{
                    // selectedMode: 'single',
                    data: testJson.categories.map(function (a) {
                        return a.name;
                    })
                }],
                animationDuration: 1500,
                animationEasingUpdate: 'quinticInOut',
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data: testJson.nodes,
                        links: testJson.links,
                        categories: testJson.categories,
                        roam: true,
                        label: {
                            position: 'right',
                            formatter: '{b}'
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.3
                        },
                        emphasis: {
                            focus: 'adjacency',
                            lineStyle: {
                                width: 10
                            }
                        }
                    }
                ]
            }
        }
    }
}
</script>
<style lang='scss' scoped>
    .xn_map_bg {
        width: 100vw;
        height: 100vh;
        z-index: 1;
        position: relative;
        // animation: kenburns-right 80s ease-out both;
        &:after {
            width: 100vw;
            height: 100vh;
            content:'';
            position:absolute;
            top:0;
            left:0;
            background-image: url(../../assets/picture/008.jpeg);
            filter:blur(5px);
            z-index:-1;
            background-size:cover;
        }
        #canvas {
            opacity: 0.4;
        }
        .xn_map_relation {
            width: 100%;
            height: 100%;
            z-index: 10;
            position: absolute;
            top: 0px;
        }
    }
    @media screen and(min-width: 800px){
        // style
        .slider {
            position: absolute;
            z-index: 10;
            top: 30%;
            left: 2em;
        }
    }
    @media screen and(max-width: 799px){
        // style
        .slider {
            position: absolute;
            z-index: 10;
            top: 2vh;
            left: 50vw;
        }
    }
    @keyframes kenburns-right {
        0% {
            transform: scale(1) translate(0, 0);
            transform-origin: 84% 50%;
        }
        100% {
            transform: scale(1.25) translateX(20px);
            transform-origin: right;
        }
    }
</style>