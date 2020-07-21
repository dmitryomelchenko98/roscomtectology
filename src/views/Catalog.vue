<template>
    <div class="catalog">
        <div class="catalog-content">
            <h1>Каталог</h1>
            <div class="content-сategory">
                <Categories v-for="categories in categori" :key="categories.id" :categories="categories"/>
            </div>
        </div>
    </div>
</template>

<script>
import Categories from '../components/CatalogСategory.vue'

export default {
    name: 'Catalog',
    components: {Categories},
    computed:{
        categori(){
            return this.$store.getters.categories
        }
    },
    mounted(){
        this.$store.dispatch('axiosCategories')
        this.$store.dispatch('axiosCartsItem')
    }
}
</script>

<style lang="scss">
.catalog {
    height: 100%;
    overflow: auto;
    .catalog-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            font-size: 45px;
            font-weight: bold;
            grid-column: 1/3;
        }
    }
}
</style>