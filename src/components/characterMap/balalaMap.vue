<template>
    <div class="xn_map_bg">
        <canvas id='canvas'>
        </canvas>
    </div>
</template>
<script>
import { stars } from '../../util/stars.js'
export default {
    data () {
        return {
            x: 0,
            screenWidth: document.documentElement.clientWidth,
            screenHight: document.documentElement.clientHeight,
            startNum: 100
        }
    },
    mounted () {
        stars()
    },
    methods: {
        // 随机颜色
        randomColor () {
            let color = {
                1: 0,
                2: 0,
                3: 0
            }
            for (let index = 1; index < 4; index++) {
                let random = Math.random()
                if (parseInt(random * 100) > 255) {
                    color[index] = Math.ceil(random * 10)
                } else {
                    color[index] = Math.ceil(random * 100)
                }
            }
            console.log(color);
            return color
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
        #canvas {
            opacity: 0.4;
        }
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