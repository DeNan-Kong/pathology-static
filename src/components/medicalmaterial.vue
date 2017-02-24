 <template>
  <div  class="material-main">
  <div class="material-content">
    <div class="material-top">
      <div class="material-row-one">
        <p style="width:100px; padding-left:7px;">任务来源</p>
        <p style="width:86px;">材块号</p>
        <p style="width:96px;">取材部位</p>
        <p style="width:56px;">材块数</p>
        <p style="width:66px;">单位</p>
        <p style="width:114px;">取材医生</p>
        <p style="width:136px;">取材日期</p>
        <button class="material-top-add radius material-top-btn floatleft" @click="addMaterialsTable">{{$t('medicalmaterial.add')}}</button>
      </div>
      <div class="material-row-two">
        <form  class="material-select-one floatleft" style="width:90px;">
            <select class="radius common" style="width:70px;" v-model="materialsContent.taskSource">
              <option v-for="item in allMaterialData.taskSourceList">{{item.name}}
              </option>
            </select>
        </form>
         <form  class="floatleft" style="width:83px;">
            <select class="radius common material-top-input" v-model="materialsContent.materialsNum">
              <option v-for="item in allMaterialData.materialNoList">{{
                item.name
              }}
              </option>
            </select>
        </form>
        <form  class="material-top-two floatleft" style="width:78px;">
            <select class="radius common material-top-two" v-model="materialsContent.materialsSite">
              <option v-for="item in materialInitialData.nodeList">{{
                item.name
              }}</option>
            </select>
        </form>
        <input type="text"  class="material-top-ipttwo floatleft  radius common" v-model="materialsContent.materialsCount">
        <form  class="material-top-three floatleft" style="width:65px;">
            <select class="threeradius common" v-model="materialsContent.materialsUnit">
              <option v-for="item in allMaterialData.quantityUnitList">{{item.name}}</option>
            </select>
        </form> 
        <form  class="floatleft">
            <select class="radius common material-top-four" v-model="materialsContent.materialsDoctor">
              <option v-for="item in allMaterialData.sampleDoctorList">{{item.name}}</option>
            </select>
        </form>
        <div class="material-top-date">
          <calendar/>
        </div>
        <button class="material-top-del radius material-top-btn" style="margin-top:6px;line-height:26px;" @click="deleteTable">{{$t('medicalmaterial.deletebtn')}}</button>
      </div>
    </div>
    <div class="material-middle">
        <el-table 
        :data="materialsTable" 
        border
        row-key
        style="width: 100%" 
        height="272"
         @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="40"
          >
        </el-table-column>
        <el-table-column
          label="任务来源"
          width="90" >
          <template scope="scope">
            <span style="margin-left: 10px">{{scope.row.taskSource}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材块号"
          width="84">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.materialsNum}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材部位"
          width="120">
          <template scope="scope">
            <span style="margin-left: 10px">{{scope.row.materialsSite}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="材块数"
          width="76">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.materialsCount}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="单位"
          width="76">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.materialsUnit}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材医生"
          width="98">
          <template scope="scope">
            <span style="margin-left: 10px">{{ scope.row.materialsDoctor }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="取材日期"
          width="120">
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
              <option v-for="item in allMaterialData.specimenHandleList"></option>
            </select>
        </form> 
        <p class="floatleft">{{$t('medicalmaterial.location')}}</p>
        <form  class="floatleft">
            <select class="radius  information-sel information-sel-two">
              <option v-for="item in allMaterialData.saveLocationList"></option>
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
       <!--  <form  class="floatleft ">
            <select class="radius  informationtwo-sel informationtwo-sel-one">
              <option></option>
              
            </select>
        </form>
        <button class="informationtwo-button">B</button> -->
        <p class="floatleft chooseinput">{{$t('medicalmaterial.channel_select')}}</p>
        <form  class="floatleft  ">
            <select class="radius informationtwo-sel-two informationtwo-sel">
              <option v-for="item in allMaterialData.passageWayList"></option>
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
    <!-- <div  class="checkdictionary  dictionary" @click="checkDictionary">
      {{$t('medicalmaterial.checkdictionary')}}
    </div> -->
    <div  class="material-middle-right">
        <div   class="dictionary-input">
          <img src="../assets/images/search.png.png"  class="floatleft">
          <input type="text"  class="floatleft  dictionary-text">
          <div class="material-add  floatleft"> </div> 
          <div class="material-modify  floatleft"></div>
          <div class="material-delete  floatleft"></div>
        </div>
        <div class="dictionary-search scroll-flow" v-show="mydictionary">
          <materiallist :mydictionaryData="(mydictionaryData)"/>
        </div>
        <div class="commondictionary-search scroll-flow" v-show="commondictionary">
          <commondictionary/>
        </div>
        <div class="checkdictionary-search scroll-flow" v-show="checkdictionary">
          <checkdictionary/>
        </div>
    </div>
  </div>
  <div  class="material-bottom">
      <div  class="material-button">
          <!-- <button  class="left-button-two  material-button-one"> {{$t('medicalmaterial.take_doctor_advice')}}</button> -->
          <button  class="left-button-two material-button-one">{{$t('medicalmaterial.check_template')}}</button> 
          <button  class="left-button-two">{{$t('medicalmaterial.frozen_slices')}}</button>
          <button  class="left-button-five">{{$t('medicalmaterial.check_material')}}</button>
          <button  class="left-button-two">{{$t('medicalmaterial.temporary_storage')}}</button>
          <button  class="left-button-two">{{$t('medicalmaterial.save')}}</button>
          <button  class="left-button-five">{{$t('medicalmaterial.print')}}</button>
              
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
  margin-left: 495px;
}
.material-button{
  margin-top: 510px;
}
.material-button button{
  height: 34px;
  background: #428bca;
  color:#fff;
  border-radius: 3px;
  margin-right: 10px;
}
.material-content{
    width: 730px;
    height: 68px;
    margin-top: 10px;
    margin-left: 14px;
    color:#333333;
}
.material-top{
  height: 70px;
  border-top: 1px solid #5cbdde;
}
.material-row-one,.material-row-two{
  height: 30px;
  line-height: 40px;
  padding-left: 10px;
}
.material-row-one p{
  display: block;
  height:24px;
  float: left; 
}
.material-row-two{
  margin-top: -6px;
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
  width: 56px;   
}
.material-top-two{
  width: 80px;
}
.material-top-ipttwo{
  margin-left: 25px;
  width: 52px;
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
  width:75px;
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
  margin-top: 6px;
  line-height: 24px;
}
.material-top-del{
  margin-left: 20px;
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
  margin-left: 407px;
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
                materialsContent:{
                  "taskSource":null,
                  "materialsNum":null,
                  "materialsSite":null,
                  "materialsCount":null,
                  "materialsUnit":null,
                  "materialsDoctor":null,
                  "materialsDate":null
                },
                materialsTable:[],
                multipleSelection:[],
                checkedRow:[]
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
                    credentials: 'include',
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
            },
            addMaterialsTable:function(){
              let item ={};
              for(let p in this.materialsContent)
              {
                item[p]=this.materialsContent[p];
              }
                   this.materialsTable.push(item);


            },
          myDictionary:function(){
            this.commondictionary=false;
            this.mydictionary=true;
            this.checkdictionary=false;
            $(".mydictionary").addClass('dictionary-active');
            $(".mydictionary").siblings().removeClass('dictionary-active');
          },
          commonDictionary:function(){
            this.commondictionary=true;
            this.mydictionary=false;
            this.checkdictionary=false;
            $(".commondictionary").addClass('dictionary-active');
            $(".commondictionary").siblings().removeClass('dictionary-active');
          },
          checkDictionary:function(){
            console.log("check")
            this.commondictionary=false;
            this.mydictionary=false;
            this.checkdictionary=true;
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
      //     handleSelectionChange() {
      //   this.multipleSelection = index;
      //   console.log(this.multipleSelection.length)
      //   console.log(check);
      //   console.log(index, row);
      // },
      handleSelectionChange:function(val) {
        this.multipleSelection = val;
        
      },
      deleteTable:function(){
       for(var i=0;i<this.materialsTable.length;i++){
        for(var j=0;j<this.multipleSelection.length;j++){
          if(this.materialsTable[i]=this.multipleSelection[j]){
            this.materialsTable.splice(i,1);
            var list=[];
            for(var z=0;z<this.materialsTable.length;z++){
              list[z]=this.materialsTable[z]
            }
            this.materialsTable=list
            // this.multipleSelection.splice(j,1);
             console.log(list)
          }
        }
       }
      }

        // mounted(){
        //     this.loadMaterialData();
        // }

        }
  };
</script>