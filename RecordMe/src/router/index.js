import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Blogs from '../views/Blogs.vue'
import BlogDetail from '../views/BlogDetail.vue'
import BlogEdit from '../views/BlogEdit.vue'
import IndexPage from '../views/IndexPage.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)
const routes = [{
        // path: '/',
        // name: 'index',
        // redirect: {name: Blogs}
        path: '/',
        name: 'index',
        component: IndexPage,
        meta: { title: 'RecordMe' }
    },
    {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs,
        meta: { title: 'RecordMe' }
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        meta: { title: 'RecordMe' }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: 'RecordMe' }
    }, {
        path: '/blog/add',
        name: 'BlogEdit',
        component: BlogEdit,
        meta: { title: 'RecordMe' }
    }, {
        path: '/blog/:blogId',
        name: 'BlogDetail',
        component: BlogDetail,
        meta: { title: 'RecordMe' }
    }, {
        path: '/blog/:blogId/edit',
        name: 'BlogEdit',
        component: BlogEdit,
        meta: { title: 'RecordMe' }
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router