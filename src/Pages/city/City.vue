<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet @change="handleAlphabetChange" :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './component/Header';
    import CitySearch from './component/Search';
    import CityList from './component/List';
    import CityAlphabet from './component/Alphabet';
    import axios from 'axios';

    export default {
        name: 'City',
        components: {
            cityHeader: CityHeader,
            CitySearch,
            CityList,
            CityAlphabet
        },
        data () {
            return{
                cities: [],
                hotCities: [],
                letter: ''
            }
        },
        methods: {
            getCityInfo () {
                axios.get('/api/city.json')
                    .then(this.handleGetCityInfoSucc);
            },
            handleGetCityInfoSucc (res) {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.hotCities = data.hotCities;
                    this.cities = data.cities;
                }
            },
            handleAlphabetChange (letter) {
                this.letter = letter;

            }
        },
        mounted () {
            this.getCityInfo();
        }
    }
</script>

<style scoped>

</style>
