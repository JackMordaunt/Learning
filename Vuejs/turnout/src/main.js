import Vue from 'vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

import store from './store'
import App from './components/App'
import Dashboard from './components/Dashboard'
import Signin from './components/Signin'
import Signup from './components/Signup'

Vue.use(VueRouter)
const router = new VueRouter({
        mode: 'history',
        routes: [
            { path: '/dashboard', component: Dashboard },
            { path: '/signin', component: Signin },
            { path: '/signup', component: Signup }
        ]
})

firebaseApp.auth().onAuthStateChanged(user => {
        if (!user) {
                router.replace('/signin')
                return
        }
        store.dispatch('signIn', user)
        router.push('/dashboard')
})

new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
})