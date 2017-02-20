<template>
    <div class="hello">
        <p>错误代码：{{error.logId}}</p>
        <p>错误种类代码：{{error.code}}</p>
        <p>错误消息：{{error.message}}</p>
        <p>错误描述：{{error.description}}</p>
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
                // `this` points to the vm instance
                return this.$store.state.error
            }
        },
        mounted () {
        }
    }
</script>