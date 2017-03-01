 <template>
     <div>{{data.name}}</div>


 </template>
<style>

</style>
 <script>
     export default {
         data() {
             return {
                 data: {"name": ""}
             };
         },
         methods: {
             handleNodeClick(data) {
                 console.log(data);
             }
         },created(){
             this.data.name = "<script>alert(1);<" + "/script>";
         }
     };
 </script>