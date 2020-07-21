<template>
    <div class="productPage">
        <div class="productPage-content">
            <div class="content-infoProduct">
                <div class="infoProduct_image">
                    <img :src="productsInfo.image" alt="">
                </div>
                <div class="infoProduct_text">
                    <div class="text-headline">
                        <span>Артикул: {{productsInfo.vender_code}}</span>
                        <h1>{{productsInfo.name}}</h1>
                    </div>
                    <h2>Описание товара</h2>
                    <div class="text-character">
                        <div class="character_item">
                            <p>{{productsInfo.description}}</p>
                        </div>
                    </div>
                </div>
                <div class="infoProduct_price">
                    <span>{{productsInfo.price | currency}}</span>
                    <span v-if="productsInfo.new_price !== null" class="new_price"><span>новая цена:</span><br>{{productsInfo.new_price | currency}}</span>
                    <p v-if="productsInfo.available == true">в наличии</p>
                    <p v-else>нет в наличии</p>
                    <div class="button" @click="addFavorite()">В избранное</div>
                    <div class="button green" @click="addCarts()">В Корзину</div>
                </div>
            </div>
            <div class="content-rec">
                <h1>Похожие товары</h1>
                <div class="recItem">
                    <ProductItem v-for="product in Same" :key="product" :product="product"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'ProductPage',
    components: {ProductItem},
    computed:{
        productsInfo(){
            return this.$store.getters.productInfo(parseInt(this.$route.params.id))
        },
        Same(){
            return this.$store.getters.catalog.filter(prod => prod.category == this.productsInfo.category && prod.id !== this.productsInfo.id).slice(0,4)
        },
        carts(){
            return this.$store.getters.cartsItem
        },
        user(){
            return this.$store.getters.userData
        }
    },
    methods:{
        addCarts(){
            let cart = this.carts.product;
            cart.push(this.productsInfo.id)
            this.$store.dispatch('addCarts', {
                product: cart,
                user: Number(localStorage.getItem('id'))
            })
            alert('Товар добавлен в корзину')
        },
        addFavorite(){
            let favorite = this.user.favourite_products;
            favorite.push(this.productsInfo.id)
            this.$store.dispatch('userPut', {
                favourite_products: favorite
            })
            alert('Товар добавлен в избранное')
        }
    },
    mounted(){
        this.$store.dispatch('axiosCartsItem')
        this.$store.dispatch('axiosUser')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.productPage {
    height: 100%;
    width: 100%;
    overflow: auto;
    .productPage-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        .content-infoProduct {
            margin-top: 30px;
            margin-bottom: 100px;
            display: grid;
            grid-template-columns: 30% 55% 15%;
            .infoProduct_image {
                @include flex();
                align-items: flex-start;
                width: 100%;
                img {
                    width: auto;
                    height: 100%;
                    max-height: 200px;
                }
            }
            .infoProduct_text {
                margin-left: 30px;
                span {
                    font-size: 18px;
                }
                .text-headline {
                    h1 {
                        margin: 0;
                    }
                }
                .text-character {
                    .character_item {
                        width: 90%;
                        @include flex();
                        justify-content: space-between;
                        margin-bottom: 10px;
                    }
                }
            }
            .infoProduct_price {
                @include flex();
                justify-content: flex-start;
                flex-direction: column;
                span {
                    font-size: 35px;
                    font-weight: bold;
                    margin-bottom: 25px;
                    // margin-top: 15px;
                }
                .new_price {
                    span {
                        font-size: 15px;
                    }
                }
                p {
                    margin: 0;
                }
                .button {
                    @include button();
                    background: $colorGrey;
                    margin: 10px 0;
                    width: calc(100% - 60px);
                    text-align: center;
                }
                .green {
                    background: $colorGreen;
                }
                .button:hover {
                    @include buttonHover();
                }
            }
        }
        .content-rec {
            .recItem {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
            }
        }
    }
}
</style>