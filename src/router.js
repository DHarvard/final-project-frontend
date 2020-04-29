import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import GraphQLAdd from '../views/GraphQLAdd.vue'
import GraphQLEdit from '../views/GraphQLEdit.vue'
import RestHome from '../views/RestHome.vue'
import RestAdd from '../views/RestAdd.vue'
import RestEdit from '../views/RestEdit.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { 
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/graphql-add',
            name: "graphql-add",
            component: GraphQLAdd
        },
        {
            path: '/graphql-edit',
            name: "graphql-edit",
            component: GraphQLEdit
        },
        {
            path: '/graphql-edit/:recipeId',
            name: "graphql-edit",
            component: GraphQLEdit
        },
        {
            path: '/rest-home',
            name: "rest-home",
            component: RestHome
        },
        {
            path: '/rest-add',
            name: "rest-add",
            component: RestAdd
        },
        {
            path: '/rest-edit',
            name: "rest-edit",
            component: RestEdit
        },
    ]
})