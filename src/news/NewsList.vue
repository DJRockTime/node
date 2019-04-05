<template>
    <div>
       <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/">
						<img class="mui-media-object mui-pull-left" src="https://face.feng.com/data/avatar/002/92/91/19_avatar_big.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间: 2019-04-04 13:20:20</span>
                                <span>点击: 0次</span>
                            </p>
						</div>
					</router-link>
				</li>
				
			</ul>
    </div>
</template>

<script>

import { Toast } from 'mint-ui'
export default {
    data() {
     return {
         newslist: [],
         status: 0,
         message: [
             {
                 id: 12,
                 title: 'lorem hello world',
                 add_time: '2019-04-04 13: 20: 20',
                 zhaiyao: 'Yoo~ nihao a vanessa littleVoice',
                 click: 1,
                 img_url: 'https://face.feng.com/data/avatar/002/92/91/19_avatar_big.jpg'
             },
             {
                 id: 12,
                 title: 'lorem hello world',
                 add_time: '2019-04-04 13: 20: 20',
                 zhaiyao: 'Yoo~ nihao a vanessa littleVoice',
                 click: 1,
                 img_url: 'https://face.feng.com/data/avatar/002/92/91/19_avatar_big.jpg'
             }
         ]
     }
 },
created() {

},
 methods: {
     getNewsList() {
         this.$http.get('api/getnewslist').then(result => {
             if(result.body.status === 0) {
                this.newslist = result.body.message
             } else {
                 Toast('failed')
             }
         })
     }
 }
}
 
</script>

<style scoped lang="less">
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
            }
            .mui-ellipsis {
                    font-size: 12px;
                    color: #226aff;
                    display: flex;
                    justify-content: space-between;
            }
        }
    }
</style>