<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li :class="{active:choosen==1}">
                  <a title="全部" href="#" @click="getAlllCourseList()">全部</a>
                </li>

                <li v-for="(onesubject,index) in subjectNestedList" :key="index" :class="{active:oneIndex==index}">
                  <a :title="onesubject.title" href="#" @click="seacherOne(onesubject.id,index)">{{onesubject.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">

                <li v-for="(twosubject,index) in subSubjectList" :key="index" :class="{active:twoIndex==index}">
                  <a :title="twosubject.title" href="#" @click="seacherTwo(twosubject.id,index)">{{twosubject.title}}</a>
                </li>

              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
             <li :class="{'current bg-orange':buyCountSort!=''}">
                <a title="销量" href="javascript:void(0);" @click="searchBuyCount()">销量
                <span :class="{hide:buyCountSort==''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':gmtCreateSort!=''}">
                <a title="最新" href="javascript:void(0);" @click="searchGmtCreate()">最新
                <span :class="{hide:gmtCreateSort==''}">↓</span>
                </a>
              </li>
              <li :class="{'current bg-orange':priceSort!=''}">
                <a title="价格" href="javascript:void(0);" @click="searchPrice()">价格&nbsp;
                  <span :class="{hide:priceSort==''}">↓</span>
                </a>
              </li>                        
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="data.total==0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
          </section>

          <!-- /无数据提示 结束-->
          <article class="comm-course-list" v-if="data.total!=0">
            <ul class="of" id="bna">
              <li v-for="course in data.courselist" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="course.cover" class="img-responsive" :alt="course.title">
                    <div class="cc-mask">
                      <a :href="'/course/'+course.id" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a :href="'/course/'+course.id" :title="course.title" class="course-title fsize18 c-333">{{course.title}}</a>
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">
                        {{ course.price===0?'免费':'收费'}}
                        </i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">销量：{{course.buyCount}}</i>
                      |
                      <i class="c-999 f-fA">浏览量：{{course.viewCount}}</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
      <div>
        <div class="paging">
          <!-- undisable这个class是否存在，取决于数据属性hasPrevious   @click.prevent点击时阻止默认行为-->
          <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="首页"
            @click.prevent="gotoPage(1)">首页</a>

          <a
            :class="{undisable: !data.hasPrevious}"
            href="#"
            title="前一页"
            @click.prevent="gotoPage(data.current-1)">&lt;</a>

          <a
            v-for="page in data.pages"
            :key="page"
            :class="{current: data.current == page, undisable: data.current == page}"
            :title="'第'+page+'页'"
            href="#"
            @click.prevent="gotoPage(page)">{{ page }}</a>

          <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="后一页"
            @click.prevent="gotoPage(data.current+1)">&gt;</a>

          <a
            :class="{undisable: !data.hasNext}"
            href="#"
            title="末页"
            @click.prevent="gotoPage(data.pages)">末页</a>

          <div class="clear"/>
        </div>
      </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import { getCoursePageByConditional,getSubjectList } from '/api/course'
export default {
   data(){
     return {
      page:1,
      choosen:0,

      data:{},         //课程信息列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      searchObj: {}, // 查询表单对象

      oneIndex:-1,
      twoIndex:-1,

      buyCountSort:"",
      gmtCreateSort:"",
      priceSort:""
     }
   },

   created(){
      this.getCourseList()
      this.getSubjectListInfo()
   },

   methods:{
       getCourseList(){
         getCoursePageByConditional(1,4,this.searchObj)
            .then(response =>{
               this.data = response.data.data
            })
       },

       getSubjectListInfo(){
          getSubjectList()
            .then(response =>{
              this.subjectNestedList = response.data.data.subjects
            })
       },

       getAlllCourseList(){
         this.choosen = 1

         this.searchObj = {}
         this.oneIndex = -1
         this.twoIndex = -1

         this.buyCountSort = ""
         this.gmtCreateSort = ""
         this.priceSort = ""         
         getCoursePageByConditional(1,4,this.searchObj)
            .then(response =>{
               this.data = response.data.data
            })         
       },       

      //跳转页数据显示
      gotoPage(page){
        getCoursePageByConditional(page,4,this.searchObj)
          .then(response => {
            this.data = response.data.data
          })        
      },

      //实现一级分类和二级分类联动
      seacherOne(subjectparentid,index){
               
         this.oneIndex = index

         //选择一级分类时，清空二级分类数据，情况销量、最新、价格
         this.choosen = 0
         this.twoIndex = -1
         this.searchObj.subjectId = ""
         this.buyCountSort= ""
         this.gmtCreateSort= ""
         this.priceSort= ""         

         this.searchObj.subjectParentId = subjectparentid

        //循环遍历一级课程分类id，获取联动二级分类
        for(var i=0;i<this.subjectNestedList.length;i++){
            if(subjectparentid === this.subjectNestedList[i].id){
              this.subSubjectList = []
              this.subSubjectList = this.subjectNestedList[i].children
            }
        }
        
        //获取数据
        this.gotoPage(this.page)
      },

      seacherTwo(subjectid,index){
         this.twoIndex = index
         this.searchObj.subjectId = subjectid

         //选择二级分类数据，情况销量、最新、价格
         this.buyCountSort= ""
         this.gmtCreateSort= ""
         this.priceSort= ""            
         
        //获取数据
        this.gotoPage(this.page)          
      },

      searchBuyCount(){
        this.buyCountSort = "100"
        this.gmtCreateSort = ""
        this.priceSort = ""

        this.searchObj.buyCountSort = "100"
        this.searchObj.gmtCreateSort = ""
        this.searchObj.priceSort = ""

        //获取数据
        this.gotoPage(this.page)         
      },

      searchGmtCreate(){
        this.buyCountSort = ""
        this.gmtCreateSort = "100"
        this.priceSort = ""

        this.searchObj.buyCountSort = ""
        this.searchObj.gmtCreateSort = "100"
        this.searchObj.priceSort = ""

        //获取数据
        this.gotoPage(this.page)            
      },

      searchPrice(){
        this.buyCountSort = ""
        this.gmtCreateSort = ""
        this.priceSort = "100"

        this.searchObj.buyCountSort = ""
        this.searchObj.gmtCreateSort = ""
        this.searchObj.priceSort = "100"

        //获取数据
        this.gotoPage(this.page)   
      }


   }


};
</script>
<style scoped>
  .active {
    background: #bdbdbd;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
</style>