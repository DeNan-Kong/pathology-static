<template>
    <div class="hello">
        <p>{{error.code}}</p>
        <p>{{error.logId}}</p>
        <p>{{error.message}}</p>
        <p>{{error.description}}</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        computed: {
            // a computed getter
            error : function () {
                debugger
                // `this` points to the vm instance
                return this.$store.state.error
            }
        },
        mounted () {
        }
    }
</script>