<template>
<div>
        <h3>Scope of Works Page</h3>
        <br>
        <ul class="list-group">
                <li     
                        :class="['list-group-item', { 'active': hovered[ii.toString()] === true }]"
                        v-for="(deliverableCategory, ii) of categories"
                        :key="ii"

                        @mouseover="log('mouseover'); hovered[ii.toString()] = true"
                        @mouseout="log('mouseout'); hovered[ii.toString()] = false"
                >       {{ii}} - {{deliverableCategory}}
                </li>
        </ul>
</div>
</template>

<script>
export default {
        created () {
                for (let ii = 0; ii < 100; ii++) {
                        this.categories.push(ii.toString())
                        this.hovered[ii.toString()] = false
                }
                // console.log(this.hovered)
        },
        data () {
                return {
                        hovered: {},
                        categories: []
                }
        },
        methods: {
                log (msg) {
                        console.log(msg)
                        console.log(this.hovered)
                }
        }
}
</script>

<style>
ul.list-group {
        overflow: auto;
        max-height: 80vh; /* How should it be sized? */
}
</style>