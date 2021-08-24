<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="/" title class="c-999 fsize14">首页</a>
        \
        <a href="/course" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14">{{courseinfovo.title}}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
            <img :src="courseinfovo.cover" :alt="courseinfovo.title" class="dis c-v-pic">
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{courseinfovo.title}}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size:24px;">￥{{courseinfovo.price}}</b>
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14">主讲： {{courseinfovo.teacherName}}&nbsp;&nbsp;&nbsp;</span>
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#" >收藏</a>
              </span>
            </section>
            <section class="c-attr-mt" v-if="isPay || Number(courseinfovo.price)===0">
              <a href="#" title="立即观看" class="comm-btn c-btn-3">立即观看</a>
            </section>
            <section class="c-attr-mt" v-if="Number(courseinfovo.price)>0">
              <a @click="createOrder()" title="立即购买" class="comm-btn c-btn-3">立即购买</a>
            </section>            
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseinfovo.buyCount}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseinfovo.lessonNum}}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br>
                <h6 class="c-fff f-fM mt10">{{courseinfovo.viewCount}}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseinfovo.description">
                        {{courseinfovo.description}}
                      </p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li class="lh-menu-stair" v-for="chapter in chaptervos" :key="chapter.id">
                            <a href="javascript: void(0)" :title="chapter.title" class="current-1">
                              <em class="lh-menu-i-1 icon18 mr10"></em>{{chapter.title}}
                            </a>

                            <ol class="lh-menu-ol" style="display: block;">
                              <li class="lh-menu-second ml30" v-for="video in chapter.children" :key="video.id">
                                <a :href="'/player/'+video.videoSourceId" target="_blank" title>
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em>{{video.title}}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto;">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img :src="courseinfovo.avatar" width="50" height="50" :alt="courseinfovo.teacherName">
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{courseinfovo.teacherName}}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{courseinfovo.intro}}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
   <div class="mt50 commentHtml">
      <h6 class="c-c-content c-infor-title" id="i-art-comment">
        <span class="commentTitle">课程评论</span>
      </h6>
      <section class="lh-bj-list pr mt20 replyhtml">
        <ul>
          <li class="unBr">
            <aside class="noter-pic">
              <img width="50" height="50" class="picImg" :src="comment.avatar">
              </aside>
            <div class="of">
              <section class="n-reply-wrap">
                <fieldset>
                  <textarea name="" v-model="comment.content" placeholder="输入您要评论的文字" id="commentContent"></textarea>
                </fieldset>
                <p class="of mt5 tar pl10 pr10">
                  <span class="fl "><tt class="c-red commentContentmeg" style="display: none;"></tt></span>
                  <input type="button" @click="addComment()" value="回复" class="lh-reply-btn">
                </p>
              </section>
            </div>
          </li>
        </ul>
      </section>
      <section class="">
          <section class="question-list lh-bj-list pr">
            <ul class="pr10">
              <li v-for="(comment,index) in commentlist" v-bind:key="index">
                  <aside class="noter-pic">
                    <img width="50" height="50" class="picImg" :src="comment.avatar">
                    </aside>
                  <div class="of">
                    <span class="fl"> 
                    <font class="fsize12 c-blue"> 
                      {{comment.nickname}}</font>
                    <font class="fsize12 c-999 ml5">评论：</font></span>
                  </div>
                  <div class="noter-txt mt5">
                    <p>{{comment.content}}</p>
                  </div>
                  <div class="of mt5">
                    <span class="fr"><font class="fsize12 c-999 ml5">{{comment.gmtCreate}}</font></span>
                  </div>
                </li>
              
              </ul>
          </section>
        </section>
        
        <!-- 公共分页 开始 -->
        <el-pagination
        :current-page="currentpage"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getCommentPageData"
        /> 
        <!-- 公共分页 结束 --> 
      </div>



  </div> 
</template>

<script>
import { getCourseInfoVoAndChapterVo } from '/api/course'
import { getCommentPage,saveCommentInfo } from '/api/comment'
import { createOrderIno } from '/api/order'
import cookie from 'js-cookie'
export default {

  data(){
    return {
      courseinfovo:{},
      chaptervos:[],
      isPay:false,

      comment:{},
      currentpage:1,
      limit: 4,
      total: 0,
      commentlist:[],
      
      orderno:""
    }
  },

  created(){       //模板渲染成html前调用，渲染html时，数据不一定存在，但是有数据才渲染
     this.getCourseInfoAndChapter(this.$route.params.courseid)
     this.getCommentPageData()
  },


  methods:{
     getCourseInfoAndChapter(courseid){
       getCourseInfoVoAndChapterVo(courseid)
         .then(response =>{
           this.courseinfovo = response.data.data.courseinfovo
           this.chaptervos = response.data.data.chaptervos
           this.isPay = response.data.data.isPay
         })
     },

     getCommentPageData(currentpage=1){
       this.currentpage = currentpage
       getCommentPage(this.$route.params.courseid,this.currentpage,this.limit)
        .then(response =>{
            this.commentlist = response.data.data.records
            this.total = response.data.data.total           
        })
     },

     addComment(){
       this.comment.teacherId = this.courseinfovo.teacherId
       this.comment.courseId = this.$route.params.courseid
       saveCommentInfo(this.comment)
         .then(response =>{
              //判断是否登录
              var userInfo = cookie.get("guli_ucenter")
              if(userInfo){
                  //提示信息
                  this.$message({
                    type: 'success',
                    message: '添加成功!'
                  })
                  //刷新分页数据
                  if(this.total+1 % 4 == 1){
                    this.getCommentPageData(this.currentpage+1) 
                  }else{
                    this.getCommentPageData(this.currentpage) 
                  }                
              }else{
                //如果cookie中没有信息，需要登陆才可以添加评论
                window.location.href = "/login"
              }
         })
     },

     createOrder(){
       createOrderIno(this.$route.params.courseid)
        .then(response =>{
              var userInfo = cookie.get("guli_ucenter")
              if(userInfo){
                  this.orderno = response.data.data.orderNo
                  //跳转页面
                  this.$router.push({path: '/orders/'+this.orderno})                
              }else{
                  //如果cookie中没有信息，需要登陆才可以下单
                  window.location.href = "/login"                  
              }
        })
     }   
  }

};
</script>