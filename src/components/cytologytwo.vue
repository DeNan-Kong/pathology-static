<template>
    <div>
        <div class="cytology-content">
            <div class="cytologysecond-row">
               <span class="floatleft">1.标本类型&nbsp;：&nbsp;</span>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytology-col-two">&nbsp;&nbsp;涂片</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytology-col-two">&nbsp;&nbsp;液基</p>
               <input type="radio" class="floatleft cytology-col-radio" name="cytologytype">
               <p class="floatleft cytology-col-two">&nbsp;&nbsp;其他</p>
               <span class="floatleft">检测方法&nbsp;：&nbsp;</span>
               <form class="floatleft cytology-form">
                    <select class="cytology-form">
                        <option></option>
                    </select>
                </form>
            </div>
            <div class="cytologysecond-row">
                
            </div>
            <div class="cytologysecond-row">
                
            </div>
            <div class="cytologysecond-row">
                
            </div>
            <div class="cytologysecond-row">
                
            </div>
            <div class="cytologysecond-row">
                
            </div>
        </div>
    </div>
</template>
<style>
body{
   background-color: #edeef2; 
}
.cytology-content{
    width: 1026px;
    height: 570px;     
    margin:10px auto;
    color:#333;
}
.cytologysecond-row{
    width: 100%;
    height: 30px;
    border:1px solid #ccc;
    margin-bottom: 5px;
}   
</style>
<script>
    export default{
        data(){
            return{
               
            }
        },
        components:{
            
        }
    }
</script>
