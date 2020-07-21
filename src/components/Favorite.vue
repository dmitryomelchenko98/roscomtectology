<template>
    <div class="favorite">
        <div @click="$router.push(`/ProductPage/${products[0].id}/`)" class="imageProduct"><img :src="products[0].image"  alt=""></div>
        <div class="favorite-info">
             <span>Артикул: {{products[0].vender_code}}</span>
            <h1>{{products[0].name}}</h1>
        </div>
        <div class="button">
            <button @click="addCarts()">В корзину</button>
            <button class="butGrey" @click="deleteProduct()">Удалить</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Favorite',
    props: ['productF'],
    computed:{
        products(){
            return this.$store.getters.catalog.filter(prod => prod.id == this.productF)
        },
        carts(){
            return this.$store.getters.cartsItem
        },
        user(){
            return this.$store.getters.userData
        }
    },
    mounted(){
        this.$store.dispatch('axiosCatalog')
        this.$store.dispatch('axiosCartsItem')
        this.$store.dispatch('axiosUser')
    },
    methods:{
        addCarts(){
            let cart = this.carts.product;
            cart.push(this.products[0].id)
            this.$store.dispatch('addCarts', {
                product: cart,
                user: Number(localStorage.getItem('id'))
            })
            alert('Товар добавлен в корзину')
        },
        deleteProduct(){
            let favorite = this.user.favourite_products;
            let id = this.products[0].id;
            for(let i = 0; i < favorite.length; i++){
                if(favorite[i] == id){
                    favorite.splice(i, 1)
                }
            }
            this.$store.dispatch('userPut', {
                favourite_products: favorite
            })
            window.location.reload()
        }
    },
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.favorite {
    width: 100%;
    height: 180px;
    background: #fff;
    display: grid;
    grid-template-columns: 250px minmax(350px, calc(50% - 125px)) minmax(350px, calc(50% - 125px));
    align-items: center;
    border-radius: 8px;
    margin-bottom: 10px;
    .imageProduct {
        @include flex();
        width: 240px;
        height: 150px;
        overflow: hidden;
        cursor: pointer;
        img {
            width: auto;
            height: 100%;
        }
    }
    .favorite-info {
        margin-left: 30px;
        h1 {
            margin: 0;
        }
    }
    .button {
        width: 100%;
        @include flex();
        justify-content: flex-end;
        flex-wrap: wrap;
        button {
            @include button();
            background: $colorGreen;
            margin-right: 30px;
            width: 200px;
            margin-bottom: 5px;
        }
        button:hover {
            @include buttonHover();
        }
        .butGrey {
            background: $colorGrey;
        }
    }
}
</style>