<template>
<div>
        <h3>Sign Up</h3>
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
                        class="btn btn-success"
                        v-on:click="signUp"
                >       Sign Up
                </button>
        </div>
        <br>
        <router-link to="/signin">All ready a user?</router-link>
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
                signUp () {
                        firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                                .catch((error) => {
                                        this.error = error
                                })
                }
        }
}
</script>
