<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="IsSwiper">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="item.id">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            swiperList: Array
        },
        data () { // =-> data: function()
            return {
                swiperOption: {
                    pagination: '.swiper-pagination'
                    , loop: true
                }
            };
        },
        computed: {
            /**
             * @return {number}
             */
            IsSwiper () {
                return this.swiperList.length;
            }
        }
    };

</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff

    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 31.25%
        background-color: #ccc

    .swiper-img
        width: 100%
</style>
