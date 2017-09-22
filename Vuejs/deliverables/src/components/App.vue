<template>
<div class="container">
        <!-- <navbar></navbar> -->
        <div class="row">
                <div class="col-sm-12 branding">
                        <h3>Build Assist Alpha</h3>
                </div>
        </div>
        <div class="row">
                <div class="col-sm-12 content">
                        <router-view></router-view>
                </div>
        </div>
        <!-- <footer></footer> -->
</div>
</template>

<script>
import VueRouter from 'vue-router'
import ScopeofworksPage from './ScopeofworksPage'

const router = new VueRouter({
        mode: 'history',
        routes: [
                { path: '/scopeofworks', component: ScopeofworksPage }
        ]
})

export default {
        router
}
</script>

<style>
.branding {
        text-align: center;
}
.content {
        text-align: center;
}
</style>