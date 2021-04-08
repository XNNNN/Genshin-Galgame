<template>
    <div class="xn_gal_index_bg">
        <div class="xn_card_container">
            <div 
                :class="[ {'mouse_enter': hoverCardIndex === index}, {'mouse_leave': leaveCardIndex === index}, 'xn_card']" 
                v-for="(item, index) in cardInfo" 
                :key="index"
                @mouseenter="mouseEnterFn(index)"
                @mouseleave="mouseLeaveFn(index)"
                @click.stop.prevent="clickCardFn(index)"
            >
                <img class="xn_card_img" :src="item.imgPath" />
                <div class="xn_card_name">{{item.characterName}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'galgameIndex',
    data () {
        return {
            hoverCardIndex: -1,
            leaveCardIndex: -1,
            clickCardIndex: -1,
            cardInfo: [
                {
                    characterName: '1',
                    imgPath: ''
                },
                {
                    characterName: '2',
                    imgPath: ''
                },
                {
                    characterName: '3',
                    imgPath: ''
                },
                {
                    characterName: '4',
                    imgPath: ''
                }
            ]
        }
    },
    methods: {
        mouseEnterFn (index) {
            console.log(111, index);
            this.hoverCardIndex = index
            this.leaveCardIndex = -1
        },
        mouseLeaveFn (index) {
            this.leaveCardIndex = index
            this.hoverCardIndex = -1
        },
        clickCardFn (index) {
            this.clickCardIndex = index
            this.$router.push({ name: 'balalaMap'})
        }
    }
}
</script>
<style lang="scss" scoped>
    .xn_gal_index_bg {
        width: 100vw;
        height: 100vh;
        color: red;
        z-index: 1;
        position: relative;
        &:after {
            width: 100vw;
            height: 100vh;
            content:'';
            position:absolute;
            top:0;
            left:0;
            // background:transparent url('../assets/picture/202131721254.png') center center no-repeat;
            filter:blur(5px);
            z-index:-1;
            background-size:cover;
        }
        .xn_card_container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .xn_card {
                width: 17vw;
                height: 50vh;
                margin: 0 20px;
                position: relative;
                border-style: double;
                border-color: gainsboro;
                cursor: pointer;
                .xn_card_img {
                    background: '#fffff';
                    width: 100%;
                    height: 100%;
                }
                .xn_card_name {
                    width: 100%;
                    height: 30px;
                    position: absolute;
                    bottom: 0;
                    line-height: 30px;
                    text-align: center;
                    background-color: antiquewhite;
                }
            }
            .mouse_enter {
                animation: mouse_enter_animation 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
            .mouse_leave {
                animation: mouse_leave_animation 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            }
        }
    }
    @keyframes mouse_enter_animation {
        0% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            transform: translateY(0);
        }
        100% {
            box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
            transform: translateY(-10px);
        }
    }
    @keyframes mouse_leave_animation {
        0% {
            box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.35);
            transform: translateY(-10px);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            transform: translateY(0);
        }
    }
</style>
