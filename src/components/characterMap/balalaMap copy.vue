<template>
    <div class="xn_map_bg">
        <canvas id='canvas' width="100vw" height="100vh">
        </canvas>
    </div>
</template>
<script>
export default {
    data () {
        return {
            canvas: '',
            context: '',
            screenW: '',
            screenH: '',
            stars: [],
            numStars: 500
        }
    },
    mounted () {        this.canvas = document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')
        this.render()
        for (let i = 0; i < this.numStars; i++) {
            let x = Math.round(Math.random() * this.screenW);
            let y = Math.round(Math.random() * this.screenH);
            let length = 1 + Math.random() * 5;
            let opacity = Math.random();

            // 创建星星实例
            let star = this.star(x, y, length, opacity);
            this.stars.push(star);
        }
        requestAnimationFrame(this.animate)
        // this.animate()
    },
    methods: {
        render () {
            this.screenW = this.getScreenInfo().winWidth
            this.screenH = this.getScreenInfo().winHeight
            this.canvas.width = this.screenW
            this.canvas.height = this.screenH
            window.addEventListener('resize', this.render)
        },
        star(x, y, length, opacity) {
            this.x = parseInt(x);
            this.y = parseInt(y);
            this.length = parseInt(length);
            this.opacity = opacity;
            this.factor = 1;
            this.increment = Math.random() * 0.03;
            return {
                x: this.x,
                y: this.y,
                length: this.length,
                opacity: this.opacity,
                factor: this.factor,
                increment: this.increment
            }
        },
        getScreenInfo () {
            let winWidth = 0
            let winHeight = 0
            if (window.innerWidth) {
                winWidth = window.innerWidth;
            } else if ((document.body) && (document.body.clientWidth)) {
                winWidth = document.body.clientWidth;
            }
            if (window.innerHeight) {
                winHeight = window.innerHeight;
            } else if ((document.body) && (document.body.clientHeight)) {
                winHeight = document.body.clientHeight;
            }
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                winHeight = document.documentElement.clientHeight;
                winWidth = document.documentElement.clientWidth;
            }
            return {
                winWidth: winWidth,
                winHeight: winHeight
            }
        },
        animate() {
            this.context.clearRect(0, 0, this.screenW, this.screenH);
            for (let i = 0; i < this.stars.length; i++) {
                let obj = this.stars[i]
                this.draw(this.context, obj.x, obj.y, obj.length, obj.opacity, obj.factor, obj.increment)
            }
        },
        draw (context, x, y, length, opacity) {
            context.rotate(Math.PI * 1 / 10);
            //save the context
            context.save();
            //move into the middle of the canvas,just make room
            context.translate(x, y);
                        //change the opacity
            // if (this.opacity > 1) {
            //     this.factor = -1;
            // } else if (this.opacity <= 0) {
            //     this.factor = 1;

            //     // 更新一次星星位置
            //     this.x = Math.round(Math.random() * screenW);
            //     this.y = Math.round(Math.random() * screenH);
            // }

            // // factor 控制方面，淡入淡出，每次重绘，星星的透明度都在变化
            // this.opacity += this.increment * this.factor;
            context.beginPath();
            //画线
            for (var i = 5; i > 0; i--) {
                context.lineTo(0, length);
                context.translate(0, length);
                context.rotate(Math.PI * 2 / 10);
                context.lineTo(0, -length);
                context.translate(0, -length);
                context.rotate(-(Math.PI * 6 / 10));
            }
            context.lineTo(0, length);
            context.closePath();
            context.fillStyle = 'rgba(255,255,200, ' + opacity + ')';
            context.shadowBlur = 5;
            context.shadowColor = '#ffff33';
            context.fill();

            context.restore();
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
        animation: kenburns-right 80s ease-out both;
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