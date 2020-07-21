<template>
    <div class="basket">
        <div class="basket-content">
            <h1>Товары в корзине:</h1>
            <div class="content-tableBasket">
                <div class="tableBasket_head">
                    <span></span>
                    <span class="name">Наименование</span>
                    <span>Стоимость</span>
                    <span>Количество</span>
                    <span></span>
                </div>
                <BasketItem v-for="product in basketItem[0].product" :key="product" :product="product"/>
            </div>
            <div class="content-payment">
                <p>Итого к оплате: <span>{{sum | currency}}</span></p>
                <button @click="addorder(), deleteProduct(), Payment()">Перейти к оплате</button>
            </div>
        </div>
    </div>
</template>

<script>
import BasketItem from '../components/BasketItem.vue'

export default {
    name: 'Basket',
    components: {BasketItem},
    computed:{
        basketItem(){
            return this.$store.getters.carts.filter(basket => basket.user ==  localStorage.getItem('id'))
        },
        carts(){
            return this.$store.getters.cartsItem
        },
        product(){
            return this.$store.getters.catalog
        },
        sum(){
            let products = this.basketItem[0].product;
            let sum = 0;
            for(let i = 0; i<products.length; i++) {
                for(let j = 0; j<this.product.length; j++){
                    if(products[i] == this.product[j].id){
                        if (this.product[j].new_price == null){
                            sum += this.product[j].price;
                        }
                        else {
                            sum += this.product[j].new_price
                        }
                    }
                }
            }
            return sum;
        }
    },
    mounted(){
        this.$store.dispatch('axiosCarts')
        this.$store.dispatch('axiosCatalog')
        this.$store.dispatch('axiosCartsItem')
    },
    methods: {
        Payment() {
            this.$router.push('/Payment')
        },
        addorder(){
            let date = new Date();
            this.$store.dispatch('OrderAdd',{
                user: localStorage.getItem('id'),
                product: this.basketItem[0].product,
                status: 'CD',
                date: date,
            })
        },
        deleteProduct(){
            let cart = this.carts.product;
            cart = []
            this.$store.dispatch('addCarts', {
                product: cart,
                user: Number(localStorage.getItem('id'))
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.basket {
    height: 100%;
    width: 100%;
    overflow: auto;
    .basket-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            margin-bottom: 50px;
        }
        .content-tableBasket {
            .tableBasket_head {
                display: grid;
                grid-template-columns: minmax(150px, 250px) minmax(250px, calc(50% - 250px)) minmax(200px, 20%) minmax(100px, 20%) minmax(100px, 10%);
                align-items: center;
                text-align: center;
                padding-bottom: 15px;
                margin-bottom: 15px;
                border-bottom: 1px solid $colorGrey;
                .name {
                    text-align: start;
                }
                span {
                    font-weight: bold;
                }
            }
        }
        .content-payment {
            margin-top: 35px;
            @include flex();
            justify-content: space-between;
            p {
                margin: 0;
                font-size: 18px;
                span {
                    font-size: 20px;
                    font-weight: bold;
                }
            }
            button {
                @include button();
                background: $colorGreen;
                margin: 0;
            }
            button:hover {
                @include buttonHover();
            }
        }
    }
}
</style>