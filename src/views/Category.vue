<template>
    <div class="categoryProd">
        <div class="categoryProd-content">
            <div class="content-headline">
                <h1>{{CategoryMore.name}}</h1>
                <button @click="filter = !filter">Фильтр</button>
            </div>
            <div class="contentProduct">
                <ProductItem v-for="product in Products" :key="product" :product="product"/>
            </div>
        </div>
        <div class="filter" v-show="filter" @click="filter = false"></div>
        <div class="filterModal" v-show="filter">
            <h1>Фильтр</h1>
            <form action="" @submit.prevent="ProductFilter()">
                <div class="formItem">
                    <label for="price">Диапозон цен:</label>
                    <div class="input">
                        <div class="from">
                            <input type="number" name="number" id="price" placeholder="От" v-model="price_min">
                        </div>
                        <div class="before">
                            <input type="number" name="number" id="" placeholder="До" v-model="price_max">
                        </div>
                    </div>
                </div>
                <div class="formItem availability">
                    <label for="manufacturer">Товар по акции</label>
                    <input type="checkbox" name="manufacturer" id="manufacturer">
                </div>
                <div class="formItem availability">
                    <label for="availability">В наличии</label>
                    <input type="checkbox" name="availability" id="availability">
                </div>
                <div class="formButton">
                    <input type="button" value="Отмена" class="button" @click="filter = !filter">
                    <input type="submit" value="Применить" class="button green" @click="filter = false">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'Category',
    components: {ProductItem},
    data() {
        return {
            filter: false,
            price_min: '',
            price_max: '',
            new_price: '',
            available: true
        }
    },
    computed:{
        CategoryMore(){
            return this.$store.getters.CategoryMore(parseInt(this.$route.params.id))
        },
        Products(){
            return this.$store.getters.catalog.filter(prod => prod.category == this.CategoryMore.id)
        }
    },
    mounted(){
        this.$store.dispatch('axiosCatalog')
    },
    methods: {
        ProductFilter(){
            this.$store.dispatch('FiltCatalog', {
                price_min: this.price_min,
                price_max: this.price_max,
                new_price: this.new_price,
                available: this.available
            })
        }
    }
        
}

</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.categoryProd {
    height: 100%;
    overflow: auto;
    .categoryProd-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        .content-headline {
            @include flex();
            justify-content: space-between;
            margin-bottom: 50px;
            h1 {
                font-size: 45px;
                font-weight: bold;
                grid-column: 1/3;
            }
            button {
                @include button();
                background: $colorGreen;
            }
            button:hover {
                @include buttonHover();
            }
        }
        .contentProduct {
            display: grid;
            grid-template-columns: 25% 25% 25% 25%;
        }
    }
    .filter {
        @include filterModal();
    }
    .filterModal {
        @include modal();
        height: 340px;
        form {
            .formItem {
                .input {
                    width: 70%;
                    @include flex();
                    justify-content: flex-start;
                    .from, .before {
                        @include flex();
                        justify-content: flex-start;
                        width: 50%;
                        input {
                            width: 100%;
                        }
                    }
                    .from {
                        input {
                            margin-right: 10px;
                        }
                    }
                    .before {
                        input {
                            margin-left: 10px;
                        }
                    }
                }
            }
            .availability {
                justify-content: flex-start;
                input {
                    height: 32px;
                    width: 32px;
                }
            }
        }
    }
}
</style>