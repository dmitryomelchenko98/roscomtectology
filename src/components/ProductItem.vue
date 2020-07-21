<template>
    <div @click="$router.push(`/ProductPage/${product.id}/`)">
        <div class="product">
            <img :src="product.image" alt="">
            <span>{{product.name}}</span>
            <span class="price">{{product.price | currency}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductItem',props:['product']
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.product {
    padding: 10px;
    @include flex();
    flex-direction: column;
    cursor: pointer;
    overflow: hidden;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    margin: 10px;
    img {
        height: 100%;
        max-height: 150px;
        width: auto;
        margin-bottom: 5px;
    }
    .price {
        font-weight: bold;
    }
    span {
        text-align: center;
    }
}
.product:hover {
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.2);
}
</style>