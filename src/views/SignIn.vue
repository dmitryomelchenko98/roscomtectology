<template>
    <div class="reg">
        <h1>Регистрация</h1>
        <div class="reg-content">
            <form action="" @submit.prevent="sign_up()">
                <div class="formItem">
                    <label for="first_name">Фамилия:</label>
                    <input type="text" name="text" id="text" v-model="last_name">
                </div>
                <div class="formItem">
                    <label for="last_name">Имя:</label>
                    <input type="text" name="text" id="text" v-model="first_name">
                </div>
                <div class="formItem">
                    <label for="patronymic">Отчество:</label>
                    <input type="text" name="text" id="text" v-model="patronymic">
                </div>
                <div class="formItem">
                    <label for="tel">Телефон:</label>
                    <input type="tel" name="tel" id="tel" v-model="phone">
                </div>
                <div class="formItem">
                    <label for="email">E-mail:</label>
                    <input type="email" name="email" id="email" v-model="email">
                </div>
                <div class="formItem">
                    <label for="pass">Пароль:</label>
                    <input type="password" name="password" id="password" v-model="password">
                </div>
                <div class="formButton">
                    <router-link :to="'/Login'"><input type="button" value="Отмена" class="button"></router-link>
                    <input type="submit" value="Регистрация" class="button green">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data(){
        return{
            last_name: '',
            first_name: '',
            patronymic: '',
            email: '',
            phone: '',
            password: '',
        }
    },
    methods:{
        sign_up(){
            this.$store.dispatch('sign_up',{
                last_name: this.last_name,
                first_name: this.first_name,
                patronymic: this.patronymic,
                email: this.email,
                phone: this.phone,
                password: this.password,
            })
            .then(() => {
                this.$router.push('/login')
            })
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.reg {
    width: 100%;
    height: 100%;
    @include flex();
    flex-direction: column;
    .reg-content {
        width: 40%;
        height: 50%;
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
                    width: 50%;
                    min-width: 150px;
                    @include button();
                    background: $colorGrey;
                    margin: 0;
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