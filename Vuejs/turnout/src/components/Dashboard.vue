<template>
<div>
        <h3>Events Dashboard</h3>
        <button
                class="btn btn-danger btn-sm"
                v-on:click="signOut"
        >
                Sign Out
        </button>
        {{$store.state.user}}

        <!-- {{$store.state}} -->
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
        methods: {
                signOut () {
                        this.$store.dispatch('signOut').then(() => {
                                firebaseApp.auth().signOut().catch(error => {
                                        this.$store.dispatch('logError', error)
                                })
                        })
                }
        }
}
</script>