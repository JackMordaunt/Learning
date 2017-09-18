<template>
<div id="app">
        <div class="container">
                <div class="row">
                        <div class="col-sm-12 title-block">
                                <h3>Got Jokes?</h3>
                                <button class="btn btn-primary"
                                        v-on:click="initJokes">
                                        10 Random Jokes
                                </button>
                                <button class="btn btn-success"
                                        v-on:click="addJoke">
                                        Add a joke
                                </button>
                        </div>
                </div>
                <div class="row">
                        <div class="col-sm-12 filters">
                                <span v-for="(jokeType, ii) of types" :key="ii">
                                        <input  type="checkbox"
                                                :value="jokeType"
                                                v-model="checkedTypes"
                                                checked
                                        >
                                        <label>{{jokeType}}</label>&nbsp;
                                </span>
                        </div>
                </div>
                <div class="row">
                        <div class="col-lg-4"
                                v-for="(joke, ii) of $store.state.jokes"
                                :key="ii"
                                v-show="checkedTypes.includes(joke.type)"
                        >
                                <Joke :joke="joke" :index="ii"/>
                        </div>
                </div>
        </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Joke from './Joke.vue'

export default {
        data () {
                return {
                        types: ['general', 'knock-knock', 'programming'],
                        checkedTypes: ['general', 'knock-knock', 'programming']
                }
        },
        methods: mapActions([
                'initJokes',
                'addJoke'
        ]),
        components: {
                Joke
        }
}
</script>

<style>
.title-block {
        text-align: center;
        font-size: 2em;
        padding-top: 10vh;
}

.filters {
        text-align: center;
        margin-top: 10px;
}
</style>