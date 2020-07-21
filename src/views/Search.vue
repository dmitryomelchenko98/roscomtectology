<template>
    <div class="search">
        <div class="search-content">
            <h1>Поиск</h1>
            <div class="content-searchInput">
                <form action="" @submit.prevent="searchProduct()">
                    <input type="search" name="" id="" class="searchInput" v-model="Search">
                    <input type="submit" value="Поиск" class="button">
                </form>
            </div>
            <div class="content-result">
                <h2>Результаты поиска</h2>
                <div class="result-conainer">
                    <ProductItem v-for="product in Products" :key="product" :product="product"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'Search',
    components: {
        ProductItem
    },
    data() {
        return {
            Search: ''
        }
    },
    computed: {
        Products(){
            return this.$store.getters.catalog
        }
    },
    methods: {
        searchProduct(){
            this.$store.dispatch('SearchProduct', {
                search: this.Search
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.search {
    height: 100%;
    width: 100%;
    overflow: auto;
    .search-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            margin-bottom: 50px;
        }
        .content-searchInput {
            width: 100%;
            form {
                width: 100%;
                @include flex();
                .searchInput {
                    width: 85%;
                    height: 40px;
                    background: $colorSky;
                    border: none;
                    outline: none;
                    border-radius: 5px;
                    font-size: 20px;
                    font-family: inherit;
                }
                .button {
                    @include button();
                    background: $colorGreen;
                    width: calc(15% - 20px);
                    padding: 0;
                    height: 40px;
                    font-size: 20px;
                    font-family: inherit;
                }
            }
        }
        .content-result {
            margin-top: 50px;
            .result-conainer {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
            }
        }
    }
}
</style>