<template>
<div class="joke-card">
        <div class="card-block">
                <button class="close" v-on:click="removeJoke(index)">
                        <i class="fa fa-times" aria-hidden="true"></i>
                </button>
                <p><u>{{joke.setup}}</u></p>
                <p><em>{{joke.punchline}}</em></p>
        </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
        props: ['joke', 'index'],
        methods: mapActions([
                'removeJoke'
        ])
}
</script>

<style>
.joke-card {
        border: 2px solid green;
        border-radius: 2px;
        padding: 5px;
        margin: 10px;
}
</style>