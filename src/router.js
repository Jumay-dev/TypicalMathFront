import Vue from "vue"
import Router from "vue-router"

import Home from "./views/Home"
import Task from "./views/Task"

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            props: {
                default: true, 
            }
        },
        {
            path: '/task/:id',
            component: Task,
            name: "Task",
            props: {
                default: true, 
            }
        }
    ]
})