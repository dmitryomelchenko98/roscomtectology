<template>
    <div class="category">
        <h2>{{categories.name}}</h2>
        <div class="category-content">
            <ProductItem v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div @click="$router.push(`/Category/${categories.id}/`)">
            <div class="allProducts">
                <span>Все товары</span>
                <img src="../assets/image/arrow.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'CatalogСategory',
    components: {ProductItem},
    props:['categories'],
    computed:{
        products(){
            return this.$store.getters.catalog.filter(prod => prod.category == this.categories.id).slice(0,4)
        }
    },
    mounted(){
        this.$store.dispatch('axiosCatalog')
    }
}
</script>

<style lang="scss">
.category {
    width: calc(100% - 60px);
    overflow: hidden;
    h2 {
        font-style: italic;;
    }
    .category-content {
        width: 100%;
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: minmax(180px, min-content);
        //grid-gap: 10px;
    }
    .allProducts {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 35px; 
        cursor: pointer;
        span {
            margin-right: 10px;
        }
    }
}
</style>