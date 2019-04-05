<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 九宫格-6宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <span class="fa fa-google-wallet"></span>
		                    <div class="mui-media-body">News</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="fa fa-modx"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Pro</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="fa fa-steam"></span>
		                    <div class="mui-media-body">Imgshare</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="fa fa-superpowers"></span>
		                    <div class="mui-media-body">Message</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="fa fa-skype"></span>
		                    <div class="mui-media-body">Video</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="#">
		                    <span class="fa fa-linkedin"></span>
		                    <div class="mui-media-body">Phone</div></router-link></li>
		        </ul> 
    </div>

    
    
</template>

<script>
import { Toast } from 'mint-ui'

    export default {
        data() {
            return {
                lunbotuList: [
                    { img: '../img/1.png', url: 1},
                    { img: '../img/2.png', url: 2},
                    { img: '../img/3.png', url: 3},
                    { img: '../img/4.png', url: 4},
                ],
            }
        },
        created() {
            // this.getLunbotu()
        },
        methods: {
            // getLunbotu () {
            //     this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
            //        if (result.body.status === 0) {
            //            this.lunbotuList = result.body.message
            //            Toast('Load Img successfully!')
            //        } else {
            //            Toast('failed to load Img!')
            //        }
            //     })
            // }
        }
    }
</script>

<style scoped lang="less">
    .mint-swipe {
        height: 200px;
        .mint-swipe-item:nth-child(1) {
            background: #000;
        }
        .mint-swipe-item:nth-child(2) {
            background: rgb(179, 38, 38);
        }
        .mint-swipe-item:nth-child(3) {
            background: rgb(35, 89, 182);
        }
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: none;
    }
</style>
