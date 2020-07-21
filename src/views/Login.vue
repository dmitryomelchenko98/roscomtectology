<template>
    <div class="logIn">
        <h1>Вход</h1>
        <div class="logIn-content">
            <form action="" @submit.prevent="sign_in()">
                <div class="formItem">
                    <label for="email">Введите E-mail</label>
                    <input type="email" name="email" id="email" v-model.trim="email">
                </div>
                <div class="formItem">
                    <label for="pass">Пароль</label>
                    <input type="password" name="password" id="password" v-model.trim="password">
                </div>
                <div class="formButton">
                    <router-link :to="'/SignIn'"><input type="button" value="Регистрация" class="button"></router-link>
                    <input type="submit" value="Войти" class="button green">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {http} from '../axios-config.js'

export default {
    name: 'Login',
    data() {
        return{
            email: '',
            password: '' 
        }
    },
    methods: {
        async sign_in(){
            await this.$store.dispatch('sing_in', {
                email: this.email,
                password: this.password
            })
            .then(() => {
                this.$router.push('/Catalog')
                http.post(`/carts/`, {
                    user: localStorage.getItem('id')
                })
            })
        },
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.logIn {
    width: 100%;
    height: 100%;
    @include flex();
    flex-direction: column;
    .logIn-content {
        width: 40%;
        height: 40%;
        background: $colorSky;
        border-radius: 25px;
        @include flex();
        form {
            width: 80%;
            .formItem {
                width: 100%;
                @include flex();
                margin-bottom: 25px;
                label {
                    width: 30%;
                    font-weight: bold;
                }
                input,textarea {
                    width: 70%;
                    border: none;
                    outline: none;
                    height: 30px;
                    background: $colorSky;
                    font-size: 18px;
                    font-family: inherit;
                    border-bottom: 1px solid $colorBlack;
                }
            }
            .formButton {
                width: 100%;
                @include flex();
                margin-top: 50px;
                .button {
                    min-width: 150px;
                    @include button();
                    background: $colorGrey;
                    margin: 0;
                    padding: 10px 70px;
                }
                .green {
                    background: $colorGreen;
                    margin-left: 15px;
                }
                .button:hover {
                    @include buttonHover();
                }
            }
        }
    }
}
</style>