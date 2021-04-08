import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/galgameIndex'
import balalaMap from '../components/characterMap/balalaMap'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'galgameIndex',
            component: index
        },
       {
           path: '/balalaMap',
           name: 'balalaMap',
           component:balalaMap
       },
    ]
})