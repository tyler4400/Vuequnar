<template>
    <div>
        <Detail-banner
            :sightName="sightName"
            :bannerImg="bannerImg"
            :bannerImgs="gallaryImgs"
        ></Detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
    import DetailBanner from './component/Banner';
    import DetailHeader from './component/Header';
    import DetailList from './component/List';
    import axios from 'axios';
    export default {
        name: 'Detail',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                sightName: '',
                bannerImg: '',
                gallaryImgs: [],
                list: []
            }
        },
        methods: {
            getDetailInfoSucc: function (res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    this.sightName = data.sightName;
                    this.bannerImg = data.bannerImg;
                    this.gallaryImgs = data.gallaryImgs;
                    this.list = data.categoryList;
                }
            },
            getDetailInfo () {
                axios.get('/api/detail.json', {params: {
                    id: this.$route.params.id
                    }})
                    .then(this.getDetailInfoSucc);
            }
        },
        mounted () {
            this.getDetailInfo();
        }
    };
</script>

<style lang="stylus" scoped>
    .content
        height: 50rem
</style>
