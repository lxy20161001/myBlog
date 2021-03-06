import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/home/Index'
import ArticleDetail from '@/components/single/Detail'
import ArticleSingle from '@/components/single/Single'
import AuthorInfo from '@/components/author/Info'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: `/detail_:id`,
            name: 'article',
            component: ArticleDetail
        },
        {
            path: '/single',
            name: 'single',
            component: ArticleSingle
        },
        {
            path: `/tag_:id`,
            name: 'tag',
            component: Index
        },
        {
            path: `/category_:id`,
            name: 'category',
            component: Index
        },
        {
            path: `/search`,
            name: 'search',
            component: Index
        },
        {
            path: `/chat`,
            name: 'chat',
            component: Index
        },
        {
            path: `/author/:author_name`,
            name: 'author_info',
            component: AuthorInfo
        },
    ]
})