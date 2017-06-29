/**
 * @Author: linuxers
 * @Date:   2017-06-29T08:59:37+07:00
 * @Email:  kunhernowoputra@gmail.com
 * @Filename: index.js
 * @Last modified by:   linuxers
 * @Last modified time: 2017-06-29T17:36:46+07:00
 */



import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Blog from '@/pages/Blog'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
    ]
})
