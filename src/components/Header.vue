<template>
    <div class="header">
        <router-link tag="div" :to="'/'">
            <div class="header-logo">
                <img src="../assets/image/logo.png" alt="">
                <span>РОСКОМТЕХНОЛОГИЯ</span>
            </div>
        </router-link>
        <div class="header-nav">
            <router-link tag="span" :to="'/AboutCompany'">О компании</router-link>
            <router-link tag="span" :to="'/Catalog'">Каталог</router-link>
            <router-link tag="span" :to="'/Discounts'">Скидки и акции</router-link>
            <router-link tag="span" :to="'/Delivery'">Доставка</router-link>
            <router-link tag="span" :to="'/Contacts'">Контакты</router-link>
            <router-link tag="span" :to="'/PersonalArea'" v-if="link">Личный кабинет</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            link: localStorage.getItem('id')
        }
    },
    computed: {
        Auth() {
            return this.$store.getters.Auth
        }
    }

}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.header {
    height: 80px;
    width: calc(100% - 80px);
    max-width: 1840px;
    grid-column: 1/2;
    grid-row: 1/2;
    position: fixed;
    @include flex();
    justify-content: space-between;
    box-shadow: 0px 10px 6px 0px rgba(0, 0, 0, 0.06);
    z-index: 100;
    //border-bottom: 1px solid $colorGrey;
    .header-logo {
        @include flex();
        margin-left: 20px;
        cursor: pointer;
        span {
            margin-left: 10px;
            font-size: 22px;
            font-weight: bold;
        }
    }
    .header-nav {
        margin-right: 20px;
        span {
            margin: 0 20px;
            font-size: 16px;
            cursor: pointer;
        }
    }
}
</style>