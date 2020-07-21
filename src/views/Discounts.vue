<template>
    <div class="discounts">
        <div class="discounts-content">
            <h1>Скидки и акции</h1>
            <div class="content-text">
                <p>
                    В данном зазделе представлены товары участвующие в акции и имеющие пониженную цену
                </p>
            </div>
            <div class="content-discountItem">
                <ProductItem v-for="product in Products" :key="product" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'Discounts',
    components: {       
        ProductItem
    },
    computed:{
        Products(){
            return this.$store.getters.catalog.filter(prod => prod.new_price !== null)
        }
    },
    mounted(){
        this.$store.dispatch('axiosCatalog')
    }
}
</script>

<style lang="scss">
.discounts {
    height: 100%;
    overflow: auto;
    .discounts-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            font-size: 45px;
            font-weight: bold;
            grid-column: 1/3;
        }
        .content-text {
            font-size: 20px;
            margin-bottom: 50px;
        }
        .content-discountItem {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
            //grid-gap: 10px;
        }
    }
}
</style>

