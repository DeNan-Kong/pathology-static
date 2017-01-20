 <template>
    <div>
        <div class="case-content">
            <div class="case-num">
                <div class="case-num-one">
                    <p class="floatleft p-one">HIS识别码:</p><input type="text"  class="floatleft  input-his  radium"  ref="write1">
                    <form  class="floatleft sel-his">
                        <select>
                            <option>住院号</option>
                            <option></option>
                        </select>
                    </form>
                    <button  class="floatleft  but-his">提取</button>
                    <p  class="floatleft  p-three">病人ID:</p><input type="text"  class="floatleft input-id  radium"  ref="write2">
                    <p  class="floatleft  p-mark p-four">冰冻标识:</p><input type="text"  class="floatleft  radium input-mark"  ref="write3">
                </div>
                <br>
                <div class="case-num-two">
                    <p class="floatleft p-one">病理号:</p><input type="text"  class="floatleft  p-margin  radium">
                    <p  class="floatleft  p-two">申请号:</p><input type="text"  class="floatleft  p-margin  radium"  ref="write4">
                    <p  class="floatleft  p-three">门诊号:</p><input type="text"  class="floatleft p-margin radium"  ref="write5">
                    <p  class="floatleft   p-four">住院号:</p><input type="text"  class="floatleft p-margin radium "  ref="write6">
                </div>
            </div>
            <div class="case-name">
                <div class="name-num-one">
                    <p class="p-one floatleft">姓名:</p><input type="text"  class="floatleft  p-margin  radium"  ref="write7">
                    <p  class="floatleft  p-two">性别:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>男</option>
                            <option>女</option>
                            <option>未知</option>
                        </select>
                    </form>
                    <p  class="floatleft  p-three">年龄:</p>
                    <input type="text"  class="floatleft input-age radium"  ref="write8">
                    <form  class="floatleft ">
                        <select class="sel-sup  radium-sup">
                            <option>岁</option>
                            <option>月</option>
                            <option>天</option>
                            <option>时</option>
                        </select>
                    </form>
                    <p  class="floatleft   p-four">民族:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>汉族</option>
                            <option>回族</option>
                            <option>维吾尔族</option>
                            <option>苗族</option>
                            <option>其他</option>
                        </select>
                    </form>
                </div>
                <div class="name-num-two">
                    <p class="floatleft p-one">婚否:</p>
                    <form  class="floatleft ">
                        <select class="p-margin radium-sup">
                            <option>是</option>
                            <option>否</option>
                        </select>
                    </form>
                    <p  class="floatleft  p-two">职业:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>教师</option>
                            <option>医生</option>
                            <option>程序员</option>
                            <option>公务员</option>
                            <option>其他</option>
                        </select>
                    </form>
                    <p  class="floatleft  p-three">手机号码:</p><input type="text"  class="floatleft p-margin radium"  ref="write10">
                    <p  class="floatleft   p-four">身份证号:</p><input type="text"  class="floatleft p-margin radium "  ref="write11">
                </div>
                <div class="name-num-three">
                    <p class="floatleft p-one">联系信息:</p><input type="text"  class="floatleft   p-big  radium"  ref="write12">
                    <p  class="floatleft  p-three">末次月经:</p>
                    <calendar/>
                    <p  class="floatleft  p-four">绝经:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>是</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>
                       
                </div>
            </div>
            <div class="case-hospital">
                <div class="hospital-num-one">
                    <p class="floatleft p-one">送检单位:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>北医三院</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-two">送检科室:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>手术室</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-three">送检医生:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>李伟</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft   p-four">送检日期:</p>
                    <calendar/>
                </div>
                <div class="hospital-num-two">
                    <p class="floatleft p-one">病区:</p><input type="text"  class="floatleft  p-margin  radium"  ref="write13">
                    <p  class="floatleft  p-two">床号:</p><input type="text"  class="floatleft  p-margin  radium" ref="write14">
                    <p  class="floatleft  p-three">标本类型:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>组织</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft   p-four">标本情况:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>良好</option>
                            <option>重切</option>
                            <option>深切</option>
                        </select>
                    </form>  
                </div>
                <div class="hospital-num-three">
                    <p class="floatleft p-one">标本名称:</p>
                    <form  class="floatleft ">
                        <select class="p-big  radium-sup">
                            <option>大体</option>
                            <option>小体</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-three">不合格原因:</p>
                     <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>切错</option>
                            <option>未接收</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-four">标本接收:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>已接收</option>
                            <option>未接收</option>
                            <option>未知</option>
                        </select>
                    </form>  
                </div>
                <div class="hospital-num-four">
                    <p class="floatleft p-one">费别:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>自费</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-two">收费:</p><input type="text"  class="floatleft  p-margin  radium" ref="write9">
                    <p  class="floatleft  p-three">取材医生:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium-sup">
                            <option>小明</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form>  
                    <p  class="floatleft  p-four">接收日期:</p>
                    <calendar/>
                    <!-- <input type="text"  class="floatleft p-margin radium "> -->
                </div>
                <div class="hospital-num-five">
                    <p class="floatleft p-one">临床诊断:</p>
                    <form  class="floatleft ">
                        <select class="p-margin  radium  input-doctor">
                            <option>是</option>
                            <option>否</option>
                            <option>未知</option>
                        </select>
                    </form> 
                    <!-- <input type="text"  class="floatleft  input-doctor  radium"  ref="write"> -->
                    <p  class="floatleft  p-four">术间手术:</p><input type="text"  class="floatleft  p-margin  radium"  ref="write15">
                </div>
                 <div class="hospital-num-six">
                    <p class="floatleft p-one">病史摘要:</p>
                    <textarea  class="floatleft ill-abstract radium "  ref="write16"></textarea>
                    <p class="floatleft p-one">手术所见:</p>
                    <textarea type="text"  class="floatleft ill-see radium "  ref="write17"></textarea>
                </div>
            </div>
            <div  class="left-button">
                <button  class="left-button-two"  v-on:click="refund" >退单</button>
                <button  class="left-button-two"  v-on:click="print">打印</button> 
                <button  class="left-button-two" v-on:click="save">保存</button>
                <button  class="left-button-five" v-on:click="newsave">保存且新建</button>
                <button  class="left-button-two" v-on:click="newproject">新建</button>    
            </div>
            <div class="left-bottom">
                <div  class="picture-img" v-on:click="newproject"></div> 
                <div  class="refresh-img"></div>    
            </div>
        </div>
      </div>
</template>
<style>
.case-tabs>a{
    display:block;
    width:62px;
    height:22px;
    background:#d0eaf8;
    float:left;
    margin-left: 3px;
    text-align:center;
    line-height:22px;
    color:#999;
    border-bottom-right-radius:7px;
    border-bottom-left-radius:7px;
    cursor: pointer;
    text-decoration: none;
}
.case-tabs .active{
    background:#57bdde;
    color:#fff;
}
.case-content{
    width: 1020px;
    height: 68px;
    margin-left:14px;
    border-bottom: 1px solid #e5e5e5; 
}
.case-num{
    height:66px;
    width: 1020px;
    margin-top: 25px;
}
.radium-sup{
    border-radius:5px;
    border-color:#cccccc; 
}
.input-his{
    width:234px;
    height:24px;
    margin-left: 10px;
    border:1px solid #cccccc;
}
.sel-his{
    width:80px;
    height:23px;
    margin-left: 14px;
}
.but-his{
    width:58px;
    height:24px; 
    margin-left:9px;
    background:#428bca;
    border:1px solid #428bca;
    border-radius:3px;
    color:#fff;
}
.input-id{
    margin-left: 9px;
    width: 155px;
    height:24px;    
}
.input-mark{
    width:155px;
    margin-left: 13px;
}
.case-num-one,.case-num-two,.name-num-one,.name-num-two,.name-num-three{
    height:33px;
}
.case-num-two{
    margin-top: -15px;
}
.case-name{
    height:100px;
    margin-top: 10px;
    border-bottom: 1px solid #e5e5e5;
}
.case-hospital{
    margin-top: 10px;
}
.sel-sup{
    margin-left: 5px;
    width: 38px;
}
.input-age{
    margin-left: 10px;
    width: 111px;
}
.input-doctor{
    width:659px;
    margin-left: 10px;
}
.ill-abstract{
    width:920px;
    height: 100px;
    margin-left: 10px;
    margin-top: 5px;
    overflow-y: scroll;
}
.ill-see{
    width: 920px;
    height: 54px;
    margin-left: 10px;
    margin-top: 5px;
    overflow-y: scroll;
}
.left-button button{
    background:#428bca;
    color:#fff;
    height:34px;
    border:1px solid #428bca;
    border-radius:3px;
    margin-top: 24px;
    float: right;
    margin-left: 15px;
}
.left-button{
    width: 996px;
    height: 68px;
    margin-left:14px; 
    clear: both;
}
.left-button-two{
    width:74px;
}
.left-button-four{
    width:74px;
}
.left-button-five{
    width:88px;
}
.left-bottom .picture-img,.left-bottom .refresh-img{
    margin-left: 6px;
}
.left-bottom .picture-img{
    background: url('../assets/images/refresh.png.png')no-repeat;
    width:26px;
    height:26px;
    border-radius: 3px;
    float: left;
}
.big-search-img{
    margin-left: -240px;
    margin-top: 8px;
}
.left-button button:hover{
    background:#3577af;
    border:1px solid #3577af;
}
.table-show .th-three{
    width:66px;
}
#header {
    width: 100%;
    height: 45px;
    position: absolute;
    top: 0;
}
#middle-left{
    width:1043px;
    height:100%;
    margin-top: -655px;
    float: left;
}
.middle-message{
    width:1052px;
    height:30px;
    margin:6px 7px;
    background:#fff;
    line-height: 30px;
    font-size: 14px;
    color: #83a8dc;
    position:relative;
    font-weight: bold;
}
.middle-message>span{
    margin-left: 20px;
}
.middle-message>p{
    display: block;
    width:82px;
    height:24px;
    background:#4d7cbe;
    position:absolute;
    right:10px;
    line-height:24px;
    text-align:center;
    top:3px;
    color:#fff;
}
</style>
<script>
    import TopMenu from 'components/topmenu';
    import SearchTable from 'components/searchtable';
    import $ from "jQuery"
    import Calendar from 'components/calendar';
    import Medicalmessage from 'components/medicalmessage';
    export default{
        data(){
            return{
                pickerOptions0: {
               disabledDate(time) {
                 return time.getTime() < Date.now() - 8.64e7;
            }
        }
    }
        },
        components:{
            "top-menu":TopMenu,
            "searchtable":SearchTable,
            "calendar":Calendar,
            "medicalmessage":Medicalmessage
        },
        methods:{
           newproject:function(){
                $("textarea").val('');
                $("input").val(''); 
            },
            newsave:function(){
                $("textarea").val('');
                $("input").val(''); 
            },
            save:function(){
                console.log("save")
            },
            print:function(){
                console.log("print")
            },
            refund:function(){
                console.log("refund")
            }
        }
      }
</script>



