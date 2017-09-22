<template>
<div>
        <h3>Sign In</h3>
        <div class="form-group">
                <input
                        class="form-control"
                        type="text"
                        placeholder="email"
                        v-model="email"
                />
                <input  
                        class="form-control"
                        type="password"
                        placeholder="password"
                        v-model="password"
                />
                <button
                        class="btn btn-primary"
                        v-on:click="signIn"
                >       Sign In
                </button>
        </div>
        <br>
        <router-link to="/signup">Not a user?</router-link>
        <br>
        <p>{{error.message}}</p>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'

export default {
        data () {
                return {
                        email: '',
                        password: '',
                        error: {
                                message: ''
                        }
                }
        },
        methods: {
                signIn () {
                        firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                                .catch(error => {
                                        this.error = error
                                })
                }
        }
}
</script>

<style>
</style>