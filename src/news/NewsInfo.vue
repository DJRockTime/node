<template>
    <div class="newsinfo-container">
        <!-- <h3>新闻详情 --- {{ $router.params.id }} </h3> --> 
        <h3 class="title">新闻详情</h3>
        <p class="subtitle">
            <span>发表时间:</span>
            <span>点击: 0次</span>
        </p>
        <br>
        <div class="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Aliquam quas voluptatum suscipit enim, eligendi error praesentium 
            sequi ab quo vitae dolore laboriosam, provident repellendus, 
            ipsam reprehenderit tempora alias facere consequatur nulla. 
            Dolorem ipsa voluptates sed? Suscipit maxime tenetur debitis 
            mollitia, vitae rem veritatis id aut eos, sequi incidunt 
            quas ipsam doloremque maiores iste sapiente ipsa minima 
            voluptatibus quos et. Eveniet consequatur ipsam accusamus 
            quas et harum ducimus, vero sapiente obcaecati mollitia iste 
            hic reprehenderit commodi dicta aspernatur earum. Cum earum 
            quasi sapiente perspiciatis in dolores deleniti eum aperiam 
            accusantium, a quam illum consectetur, nobis ex at iusto ad 
            consequatur officia recusandae nostrum alias dolore ipsum. 
            Praesentium vel, vitae dignissimos ea recusandae esse deleniti, 
            rem vero porro sint sunt! Enim rerum excepturi, temporibus 
            perferendis labore dicta mollitia repellat tempora reprehenderit 
            repudiandae, consequuntur officia eum asperiores. Atque rerum 
            rem ex iste quia, ut id ab. Ab sequi harum magni consectetur 
            voluptatum optio sit qui quod excepturi ducimus similique 
            reiciendis maxime dolor, quibusdam dolore sapiente, officiis 
            eaque sint soluta omnis nemo ipsam, vel illo. Neque blanditiis 
            ea fugit dolores unde sint, facere facilis recusandae illo 
            perferendis nam molestias quam distinctio adipisci fuga excepturi 
            tempore reprehenderit animi minima aliquid eveniet, amet 
            commodi dicta. Dolorum?
        </div>
        <comment></comment>
    </div>
</template>

<script>
    import Comment from '../subcomponents/comment.vue'
    export default {
        data() {
            return {
                // id: this.$router.params.id
            }
        },
        created() {
            // getNewsInfo()
        },
        methods: {
            // getNewsInfo() {
            //     this.$http.get('/' + this.id).then(result => {
            //         if(result.body.status === 0) {
            //             this.newsinfo = result.body.message[0]
            //         } else {
            //             Toast('get news failed!')
            //         }
            //     })
            // }
        },
        components: {
            'comment': Comment
        }
    }
</script>

<style scoped lang="less">
    .newsinfo-container {
        padding: 0 4px;
        .title {
            font-size: 16px;
            text-align: center;
            margin: 15px;
        }
        .subtitle {
            font-size: 13px;
            color: #226aff;
            display: flex;
            margin: 0 5px;;
            justify-content: space-between;
        }
        .content {
            margin: 0 5px;
        }
    }
</style>