<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="icon in page" :key="icon.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="icon.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{icon.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        props: {
            iconList: Array
        },
        data () {
            return {
                swiperOption: {
                    // pagination: '.swiper-pagination'
                    // , loop: true
                }
            };
        },
        computed: {
            pages () {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const pageIndex = Math.floor(index / 8);
                    if (!pages[pageIndex]) pages[pageIndex] = [];
                    pages[pageIndex].push(item);
                });
                return pages;
            }
        }
    };
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .icons >>> .swiper-container
        height: 0
        padding-bottom: 50%

    .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        padding-top: .1rem
        .icon
            overflow: hidden
            position: relative
            float: left
            width: 25%
            height: 0
            padding-bottom: 25%
            .icon-img
                position: absolute
                top: 0
                right: 0
                bottom: .44rem
                left: 0
                box-sizing border-box
                padding: .1rem
                .icon-img-content
                    display: block
                    margin: auto
                    height: 100%
            .icon-desc
                position: absolute
                right: 0
                bottom: 0
                left: 0
                height: .44rem
                text-align: center
                line-height: .44rem
                color: $darkTxtColor
                ellipsis()
</style>
