 <template>
  <div  class="material-main">
  <div class="material-content">
    <div class="material-top">
        <form  class="material-select-one floatleft material-margin">
            <select class="radius common">
              <option v-for="item in allMaterialData.taskSourceList">{{item.name}}
              </option>
            </select>
        </form>
         <form  class="floatleft">
            <select class="radius common material-top-input">
              <option v-for="item in allMaterialData.materialNoList">{{
                item.name
              }}
              </option>
            </select>
        </form>
        <form  class="material-top-two floatleft">
            <select class="radius common material-top-two">
              <option v-for="item in materialInitialData.nodeList">{{
                item.name
              }}</option>
            </select>
        </form>
        <input type="text"  class="material-top-ipttwo floatleft  radius common">
        <form  class="material-top-three floatleft ">
            <select class="threeradius common">
              <option v-for="item in allMaterialData.quantityUnitList">{{item.name}}</option>
            </select>
        </form> 
        <form  class="material-top-four floatleft ">
            <select class="radius common">
              <option v-for="item in allMaterialData.sampleDoctorList">{{item.name}}</option>
            </select>
        </form>
        <div class="material-top-date">
          <calendar/>
        </div>
        <button class="material-top-add radius  material-top-btn">{{$t('medicalmaterial.add')}}</button>
        <button class="material-top-del radius  material-top-btn">{{$t('medicalmaterial.deletebtn')}}</button>
    </div>
    <div class="material-middle">
        <el-table  
        border
        style="width: 100%" height="272">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          label="任务来源"
          width="100" >
          <template scope="scope">
            <span style="margin-left: 10px">{{scope.row.clevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材块号"
          width="86">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.clevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材部位"
          width="100">
          <template scope="scope">
            <span style="margin-left: 10px">{{scope.row.clevel}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材块数"
          width="86">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.clevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单位"
          width="76">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.clevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材医生"
          width="98">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.clevel }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材日期"
          width="98">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.clevel }}</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="material-information">
      <div class="informationone">
        <p class="floatleft information-la">{{$t('medicalmaterial.wax_block_num')}}666</p><p class="floatleft information-cai">{{$t('medicalmaterial.wood_block_num')}}777</p>
        <p class="floatleft information-biao">{{$t('medicalmaterial.specimen_handling')}}</p>
        <form  class="floatleft">
            <select class="radius  information-sel-one  information-sel">
              <option v-for="item in allMaterialData.specimenHandleList">{{}}</option>
            </select>
        </form> 
        <p class="floatleft">{{$t('medicalmaterial.location')}}</p>
        <form  class="floatleft">
            <select class="radius  information-sel information-sel-two">
              <option v-for="item in allMaterialData.saveLocationList">{{}}</option>
            </select>
        </form> 
        <p class="floatleft">{{$t('medicalmaterial.recorder')}}</p>
        <form  class="floatleft">
            <select class="radius  information-sel">
              <option v-for="item in allMaterialData.noterList">{{item.name}}</option>
            </select>
        </form> 
      </div>
      <div class="clear"></div>
      <div class="informationtwo">
        <p class="floatleft informationtwo-p">{{$t('medicalmaterial.eye_findings')}}</p>
        <form  class="floatleft ">
            <select class="radius  informationtwo-sel informationtwo-sel-one">
              <option></option>
              
            </select>
        </form>
        <button class="informationtwo-button">B</button>
        <p class="floatleft chooseinput">{{$t('medicalmaterial.channel_select')}}</p>
        <form  class="floatleft  ">
            <select class="radius informationtwo-sel-two informationtwo-sel">
              <option v-for="item in allMaterialData.passageWayList">{{}}</option>
            </select>
        </form>
        <button class=" radius  informationtwo-btn">{{$t('medicalmaterial.label_printing')}}</button>
        <textarea></textarea>
      </div>  
    </div>
    <div  class="mydictionary dictionary dictionary-active"  @click="myDictionary">
      <p>{{$t('medicalmaterial.mydictionary')}}</p>
    </div>
    <div  class="commondictionary  dictionary" @click="commonDictionary">
      {{$t('medicalmaterial.commondictionary')}}
    </div>
    <div  class="checkdictionary  dictionary" @click="checkDictionary">
      {{$t('medicalmaterial.checkdictionary')}}
    </div>
    <div  class="material-middle-right">
        <div   class="dictionary-input">
          <img src="../assets/images/search.png.png"  class="floatleft">
          <input type="text"  class="floatleft  dictionary-text">
          <div class="material-add  floatleft"> </div> 
          <div class="material-modify  floatleft"></div>
          <div class="material-delete  floatleft"></div>
        </div>
        <div class="dictionary-search" v-show="mydictionary">
          <materiallist :mydictionaryData="(mydictionaryData)"/>
        </div>
        <div class="commondictionary-search" v-show="commondictionary">
          <commondictionary/>
        </div>
        <div class="checkdictionary-search" v-show="checkdictionary">
          <checkdictionary/>
        </div>
    </div>
  </div>
  <div  class="material-bottom">
      <div  class="material-button">
          <button  class="left-button-two  material-button-one"> {{$t('medicalmaterial.take_doctor_advice')}}</button>
          <button  class="left-button-two">{{$t('medicalmaterial.check_template')}}</button> 
          <button  class="left-button-two">{{$t('medicalmaterial.frozen_slices')}}</button>
          <button  class="left-button-five">{{$t('medicalmaterial.check_material')}}</button>
          <button  class="left-button-two">{{$t('medicalmaterial.temporary_storage')}}</button>
          <button  class="left-button-five">{{$t('medicalmaterial.print')}}</button>
          <button  class="left-button-two">{{$t('medicalmaterial.save')}}</button>    
        </div>
        <div  class="picture-img" v-on:click="newproject"></div> 
        <div  class="refresh-img"></div>        
    </div>
  </div>
</template>
<style>
.menus-img{
   background: url('../assets/images/materials.png')  -10px -20px no-repeat;
   width:10px;
   height: 10px;
   margin-right: 5px;
   margin-top: -16px;
}
.dictionary-search,.commondictionary-search,.checkdictionary-search{
  width: 266px;
  height: 500px;
  border: 1px solid #ccc;
  overflow-y: scroll;
}
.dictionary-search ul li{
  margin-left: -30px;
  height: 30px;
  list-style: none;
  cursor: pointer;
}
.dictionary-search  p{
  display: block;
  width: 10px;
  height: 10px;
  margin-left: 220px;
}
.dictionary-text{
  width:140px;
  height:28px; 
  margin-top: 2px;
  border: none;
}
.material-modify{
  float:left;
  background: url('../assets/images/material.png')  -40px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-left: 208px;
  margin-top: -27px;
}
.material-main button:hover{
  background:#3577af;
}
.material-modify:hover{
  background: url('../assets/images/material.png')  -40px -40px no-repeat;
}
.material-delete{
  background: url('../assets/images/material.png')  -72px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-left: 236px;
  margin-top: -27px;
}
.material-delete:hover{
  background: url('../assets/images/material.png')  -72px -40px no-repeat;
}
.material-add{
  background: url('../assets/images/material.png')  -8px -5px no-repeat;
  width:26px;
  height: 26px;
  margin-left: 180px;
  margin-right: 2px;
  margin-top: -27px;
}
.material-add:hover{
  background: url('../assets/images/material.png')  -8px -40px no-repeat;
  cursor:pointer;
}
.material-middle-right img{
  margin-top: 8px;
  margin-left: 10px;
}
.dictionary-input{
  width: 266px;
  height: 32px;
  border-right: 1px solid #ccc !important;
  border-left: 1px solid #ccc !important;
  border:none;
}
.checkdictionary{
  right: 276px;
  top:140px;
  border-bottom-left-radius: 3px;
}
.commondictionary{
  right: 276px;
  top:70px;
}
.dictionary:hover{
  background: #c6e4ee;
  color:#666;
}
.mydictionary{ 
  right: 276px;
  top:0px;
  border-top-left-radius: 3px; 
}
.dictionary{
  position: absolute;
  width: 18px;
  height: 68px;
  background: #edf5f9;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 12px;
  color:#999;
}
.dictionary-active{
  background: #c6e4ee;
  color:#666;
}
.material-middle-right{
  width: 266px;
  height: 535px;
  border-top: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top:0px;
}
.material-main{
  width: 1052px;
  position: relative;
}
.material-image{
  margin-top: -41px;
  margin-left: 34px;
}
.material-bottom .refresh-img,.material-bottom .picture-img{
  bottom:20px;
}
.material-bottom .refresh-img{
  left:56px;
}
.material-bottom{
  width: 1052px;
}
.material-button-one{
  margin-left: 470px;
}
.material-button{
  margin-top: 510px;
}
.material-button button{
  height: 34px;
  background: #428bca;
  color:#fff;
  border-radius: 3px;
}
.material-content{
    width: 730px;
    height: 68px;
    margin-top: 10px;
    margin-left: 14px;
    color:#333333;
}
.material-top{
  height: 42px;
  border-top: 1px solid #5cbdde;
}
.radius{
  border-radius:3px;
}
.common{
  border:1px solid #ccc;
  margin-top: 8px;
  height: 24px;
}
.material-select-one{ 
  width: 54px; 
}
.material-top-input{
  width: 40px; 
  margin-left: 22px;  
}
.material-top-two{
  width:116px;
  margin-left: 6px;
  width: 68px;
}
.material-margin{
  margin-left: 16px;
}
.material-top-ipttwo{
  margin-left: 25px;
  width: 44px;
  border:1px solid #ccc;
  border-right: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.material-top-three{
  width: 35px;
}
.threeradius{
  margin-left:-1px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.material-top-four{
  margin-left: 18px;
  width:65px;
  margin-right: 10px;
}
.material-top-date{
  margin-top: 8px;
}
.material-top-btn{
  width:54px;
  height: 26px;
  background: #428bca;
  color:#fff;
}
.material-top-add{
  margin-left: 16px;
}
.material-top-del{
  margin-left: 16px;
}
.material-middle{
  width: 714px;
  height: 272px;
  margin-top: 10px;
  margin-left: 14px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc; 
  color:#333333;
}
.material-information{
  margin-top: 10px;
  width: 730px;
  height: 190px;
}
.material-information p{
  display: block;
  line-height: 28px;
}
.information-la{
  margin-left: 16px;
  margin-right: 18px;
}
.information-cai{
  margin-right: 18px;
}
.informationtwo-button{
  width:22px;
  height: 22px;
  background: #428bca;
  border-radius: 3px;
  margin-left: 6px;
  margin-top: 3px;
  color:#fff;
  float: left;
}
.information-sel{
  width:82px;
  height:24px;
  margin-top: 2px;
}
.information-sel-one,.information-sel-two{
    margin-right: 23px;
}
.informationtwo-p{
  display: block;
  margin-left: 16px;
}
.informationtwo-sel{
  width: 82px;
  height: 24px;
  margin-top: 2px;
}
.chooseinput{
  display: block;  
  height: 24px;
  margin-left: 298px;
}
.informationtwo-btn{
  width: 82px;
  height: 24px;
  background: #428bca;
  border-radius: 3px;
  margin-top: 2px;
  margin-left: 2px;
  color:#fff;
}
textarea{
  width: 730px;
  height: 125px;
  border: 1px solid #ccc;
  border-radius: 3px;
  overflow: auto;
  resize:none;
}
 .dictionary-search::-webkit-scrollbar-track,.commondictionary-search::-webkit-scrollbar-track,.checkdictionary-search::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
} 
 .dictionary-search::-webkit-scrollbar,.commondictionary-search::-webkit-scrollbar,.checkdictionary-search::-webkit-scrollbar{
    width: 10px;
    height: 12px;
    background-color: #F5F5F5;
}
 .dictionary-search::-webkit-scrollbar-thumb,.commondictionary-search::-webkit-scrollbar-thumb,.checkdictionary-search::-webkit-scrollbar-thumb{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #ccc;
}
.el-tree{
  border:none;
}
</style>
<script>
  import $ from "jQuery";
  import Calendar from 'components/calendar';
  import Medicalmessage from 'components/medicalmessage';
  import Materiallist from 'components/materiallist';
  import Commondictionary from 'components/commondictionary';
  import Checkdictionary from 'components/checkdictionary';
  export default {
     data() {
      return {
                materialPartsList:{},
                materialInitialData:{},
                allMaterialData:{},
                mydictionaryData:{},
                mydictionary:true,
                commondictionary:false,
                checkdictionary:false,
                value1: [],
                datass: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
    },
      // props: ['materialInitialData','get'],
     components:{
           "calendar":Calendar,
           "medicalmessage":Medicalmessage, 
           "materiallist":Materiallist,
           "commondictionary":Commondictionary,
           "checkdictionary":Checkdictionary
        },
        created(){ // 生命周期 created,获取数据
          this.loadMaterialData();
        },
        methods:{
          async loadMaterialData () {
                const self=this;
                const response = await fetch('/material/load',{ 
                    method: 'POST',
                    headers: { 
                        "Content-type": "application/json; charset=UTF-8" 
                    }, 
                    body: JSON.stringify({ 
                    })
                });
                const json = await response.text();
                const data = JSON.parse(json);
                self.allMaterialData=data;
                self.materialInitialData = data.materialPartsList;
                self.mydictionaryData=data.materialPartsList.nodeList;
                console.log(self.mydictionaryData)
            },
          myDictionary:function(){
            this.commondictionary=false;
            this.mydictionary=true;
            this.checkdictionary=false;
            console.log(this.mydictionary)
            $(".mydictionary").addClass('dictionary-active');
            $(".mydictionary").siblings().removeClass('dictionary-active');
          },
          commonDictionary:function(){
            this.commondictionary=true;
            this.mydictionary=false;
            this.checkdictionary=false;
             console.log(this.commondictionary)
             console.log(this.mydictionary)
            $(".commondictionary").addClass('dictionary-active');
            $(".commondictionary").siblings().removeClass('dictionary-active');
          },
          checkDictionary:function(){
            console.log("check")
            this.commondictionary=false;
            this.mydictionary=false;
            this.checkdictionary=true;
             console.log(this.checkdictionary)
             console.log(this.mydictionary)
            $(".checkdictionary").addClass('dictionary-active');
            $(".checkdictionary").siblings().removeClass('dictionary-active');
          },
          refund:function(){

          },
          print:function(){

          },
          save:function(){

          },
          newsave:function(){

          },
          newproject:function(){

          },
        // mounted(){
        //     this.loadMaterialData();
        // }

        }
  };
</script>