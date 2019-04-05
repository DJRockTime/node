<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea name="" id="" cols="30" rows="10" placeholder="please input your content(最多吐槽120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间: 2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午, 汗滴禾下土
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间: 2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午, 汗滴禾下土
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间: 2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午, 汗滴禾下土
                </div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户: 匿名用户&nbsp;&nbsp;发表时间: 2012-12-12 12:12:12
                </div>
                <div class="cmt-body">
                    锄禾日当午, 汗滴禾下土
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data() {
        // return {
        //     pageIndex: 1,
        //     comments: []
        // }
    },
    created: {
        // getComments()
    },
    methods: {
        // getComments() {
        //     this.$http.get('api/getcmooents/' + this.id + '?pageindex=1' + this.pageIndex)
        //     .then(resulet => {
        //         if(result.body.status === 0) {
        //             this.comments = result.body.message
        //             this.comments = this.comments.concat( result.body.message )  //获取新评论数据，不要清空老数据，拼接上新数据
        //         } else {
        //             Toast('Failed!')
        //         }
        //     })
        // }
        getMore() {
            // this.pageIndex++
            // this.getComments()
        }
    },
    // props: ['id']
}
</script>
<style lang="less" scoped>
    .cmt-container {
        h3 {
            font-size: 16px;
        }
        textarea {
            font-size: 14px;
            height: 85px;
        }
        .cmt-list {
            margin: 10px 0;
            .cmt-item {
                font-size: 13px;
                .cmt-title {
                    background-color: #ccc;
                }
                .cmt-body {
                    line-height: 35px; 
                    text-indent: 2em;
                }
            }
        }
    }
</style>


