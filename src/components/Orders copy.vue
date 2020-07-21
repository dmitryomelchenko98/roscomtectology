<template>
    <div class="order">
        <span>Заказ №{{order.id}}</span>
        <span class="order-products">
            <p v-for="prod in order.product" :key="prod">{{Products.filter(pr => pr.id == prod)[0].name}}</p>
        </span>
        <span>{{order.date}}</span>
        <span>{{sum | currency}}</span>
    </div>
</template>

<script>
export default {
    name: 'Orders',
    props: ['order'],
    computed:{
        Products(){
            return this.$store.getters.catalog
        },
        sum(){
            let order = this.order.product;
            let sum = 0;
            for(let i = 0; i<order.length; i++) {
                for(let j = 0; j<this.Products.length; j++){
                    if(order[i] == this.Products[j].id){
                        if (this.Products[j].new_price == null){
                            sum += this.Products[j].price;
                        }
                        else {
                            sum += this.Products[j].new_price
                        }
                    }
                }
            }
            return sum;
        }
    },
    mounted(){
        this.$store.dispatch('axiosCatalog')
    },
}
</script>

<style lang="scss">

.order {
    width: calc(100% - 16px);
    padding: 8px;
    min-height: 50px;
    background: #fff;
    border-radius: 5px;
    display: grid;
    grid-template-columns: minmax(250px, 360px) minmax(250px, 600px) minmax(180px, 264px) minmax(150px, 216px);
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    span {
        margin: 0 5px;
    }
    .order-products {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        p {
            margin: 0;
        }
    }
}
</style>