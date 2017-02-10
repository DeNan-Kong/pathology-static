<template>
    <div>
        <div>
            <textarea rows="10" cols="50" v-model="data">

            </textarea>
        </div>
        <div>
            <input type="button" value="提交" v-on:click="submit"/>
        </div>
    </div>
</template>


<script>

    export default{
        data(){
            return {
                data: ""
            }
        },
        components: {},
        methods: {
            async submit(){
                /*
                 const response = fetch('/register/load');
                 const json = await response.text();*/
                const response = await fetch('/dict/import', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        data: this.data
                    })
                });
                const json = await response.text();
                alert(json);

            }
        },

        mounted () {

        }
    }
</script>