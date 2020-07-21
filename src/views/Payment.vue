<template>
    <div class="pay">
        <span @click="Back()">вернуться</span>
        <iframe src="https://money.yandex.ru/quickpay/shop-widget?writer=seller&targets=%D0%9F%D0%BE%D0%B4%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0&targets-hint=&default-sum=1000&button-text=11&payment-type-choice=on&hint=&successURL=&quickpay=shop&account=4100110822785632" width="423" height="222" frameborder="0" allowtransparency="true" scrolling="no"></iframe>
    </div>
</template>

<script>
export default {
    name: 'Payment',
    methods: {
        Back(){
            this.$router.push('/Basket')
        }
    }
}
</script>

<style lang="scss">
    .pay{
        position: absolute;
        z-index: 100;
        background: white;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center; 
        span {
            position: absolute;
            top: 30px;
            left: 30px;
            cursor: pointer;
        }
    }
</style>