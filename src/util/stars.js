export function stars() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    let hue = 217
    let stars = []
    let count = 0
    let maxStars = 1000 //星星数量

    let canvas2 = document.createElement('canvas')
    let ctx2 = canvas2.getContext('2d')
    canvas2.width = 100;
    canvas2.height = 100;
    let half = canvas2.width / 2
    let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    console.log(randomColor());
    gradient2.addColorStop(0.1, `rgba(${randomColor()[1]},${randomColor()[2]},${randomColor()[3]})`)
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2;
    ctx2.beginPath();
    ctx2.arc(half, half, half, 0, Math.PI * 2);
    ctx2.fill();

    function random(min, max) {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }
        if (min > max) {
            let hold = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // 随机颜色
    function randomColor() {
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
        return color
    }

    function maxOrbit(x, y) {
        let max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter;
        //星星移动范围，值越大范围越小，
    }

    let Star = function () {
        this.orbitRadius = random(maxOrbit(w, h));
        this.radius = random(60, this.orbitRadius) / 8;
        //星星大小
        this.orbitX = 0;
        this.orbitY = h;
        // 旋转中点位置
        this.timePassed = random(0, maxStars);
        this.speed = random(this.orbitRadius) / 2000000;
        //星星移动速度
        this.alpha = random(2, 0.9);
        // 闪烁
        count++;
        stars[count] = this;
    }

    Star.prototype.draw = function () {
        let
            x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        ctx.globalAlpha = this.alpha;
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
        this.timePassed += this.speed;
    }

    for (let i = 0; i < maxStars; i++) {
        new Star();
    }

    function animation() {
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.5; //尾巴
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter';
        for (let i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
        }

        window.requestAnimationFrame(animation);
    }

    animation();
}