<template>
    <div class="navBar">
        <div class="navBar-options">
            <router-link tag="div" :to="'/Login'">
                <div class="options_item">
                    <img src="../assets/image/logIn.png" alt="">
                    <span v-if="!sign">ВХОД</span>
                    <span v-else @click="sign_out()">ВЫХОД</span>
                </div>
            </router-link>
            <router-link tag="div" :to="'/basket'">
                <div class="options_item">
                    <img src="../assets/image/basket.png" alt="">
                    <span>КОРЗИНА</span>
                </div>
            </router-link>
            <router-link tag="div" :to="'/PersonalArea'">
                <div class="options_item">
                    <img src="../assets/image/favorites.png" alt="">
                    <span>ИЗБРАННОЕ</span>
                </div>
            </router-link>
            <router-link tag="div" :to="'/Search'">
                <div class="options_item">
                    <img src="../assets/image/search.png" alt="">
                    <span>ПОИСК</span>
                </div>
            </router-link>
        </div>
        <div class="options-social">
            <img src="../assets/image/telegram.png" alt="">
            <img src="../assets/image/whatsapp.png" alt="">
            <img src="../assets/image/instagram.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    computed:{
        sign(){
            return localStorage.getItem('id')
        }
    },
    methods:{
        sign_out(){
            this.$store.dispatch('sign_out')
            .then(() => {
                this.out()
            })
        },
        async out(){
            await this.$router.push('/login')
            window.location.reload()
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.navBar {
    height: 100%;
    width: 80px;
    grid-column: 2/3;
    grid-row: 1/3;
    position: fixed;
    right: 0;
    box-shadow: -10px 0px 6px 0px rgba(0, 0, 0, 0.06);
    @include flex();
    flex-direction: column;
    justify-content: space-between;
    .navBar-options {
        .options_item {
            @include flex();
            flex-direction: column;
            width: 80px;
            height: 80px;
            cursor: pointer;
            img {
                width: 25px;
                height: auto;
                margin-bottom: 3px;
            }
            span {
                font-size: 9px;
            }
        }
    }
    .options-social {
        @include flex();
        flex-direction: column;
        margin-bottom: 25px;
        img {
            margin-bottom: 15px;
            cursor: pointer;
        }
    }
}
</style>