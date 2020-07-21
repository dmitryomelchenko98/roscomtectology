<template>
    <div class="basketItem">
        <div class="basketItem_image">
            <img :src="prod[0].image" alt="">
        </div>
        <div class="basketItem_info">
            <span>Артикул: {{prod[0].vender_code}}</span>
            <h2>{{prod[0].name}}</h2>
        </div>
        <span v-if="prod[0].new_price == null">{{prod[0].price | currency}}</span>
        <span v-else>{{prod[0].new_price | currency}}</span>
        <div class="basketItem_options">
            <span @click="ColM()">-</span>
            <span class="col">{{ col }}</span>
            <span @click="ColP()">+</span>
        </div>
        <div class="basketItem_delete" @click="deleteProduct()">
            <button>Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BasketItem',
    props:['product'],
    computed:{
        prod(){
            return this.$store.getters.catalog.filter(prod => prod.id == this.product)
        },
        carts(){
            return this.$store.getters.cartsItem
        }
    },
    data() {
        return {
            col: 1
        }
    },
    methods: {
        ColM() {
            this.col -= 1;
        },
        ColP() {
            this.col += 1;
        },
        axiosData(){
            this.$store.dispatch('axiosCatalog')
            this.$store.dispatch('axiosCartsItem')
        },
        deleteProduct(){
            let cart = this.carts.product;
            let id = this.prod[0].id;
            for(let i = 0; i < cart.length; i++){
                if(cart[i] == id){
                    cart.splice(i, 1)
                }
            }
            this.$store.dispatch('addCarts', {
                id: id,
                product: cart,
                user: Number(localStorage.getItem('id'))
            })
            window.location.reload()
        }
    },
    mounted(){
        this.axiosData()
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.basketItem {
    display: grid;
    grid-template-columns: minmax(150px, 250px) minmax(250px, calc(50% - 250px)) minmax(200px, 20%) minmax(100px, 20%) minmax(100px, 10%);
    grid-template-rows: 120px;
    align-items: center;
    border-bottom: 1px solid $colorGrey;
    margin-top: 15px;
    .basketItem_image {
        width: 100%;
        height: 100%;
        @include flex();
        img {
            width: auto;
            height: 85%;
        }
    }
    .basketItem_info {
        span {
            font-size: 16px;
        }
        h2 {
            margin: 0;
        }
    }
    span {
        text-align: center;
        font-size: 20px;
    }
    .basketItem_options {
        @include flex();
        span {
            margin: 0 10px;
            font-size: 18px;
            cursor: pointer;
        }
        .col {
            font-size: 20px;
            font-weight: bold;
        }
    }
    .basketItem_delete {
        button {
            @include button();
            background: $colorGrey;
        }
        button:hover {
            @include buttonHover();
        }
    }
}
</style>