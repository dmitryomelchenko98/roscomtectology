<template>
    <div class="personalArea">
        <div class="personalArea-content">
            <h1>Личный кабинет</h1>
            <div class="content-infoUser">
                <div class="infoUser_foto">
                    <img :src="user.avatar" alt="">
                </div>
                <div class="infoUser_fio">
                    <span class="surname"><b>{{user.last_name}}</b></span>
                    <span>{{user.first_name}}</span>
                    <span>{{user.patronymic}}</span>
                </div>
                <div class="infoUser_contacts">
                    <span><b>E-mail:</b> {{user.email}}</span>
                    <span><b>Телефон:</b> {{user.phone}}</span>
                    <span><b>Город:</b> {{user.city}}</span>
                </div>
            </div>
            <div class="content-tabs">
                 <vue-tabs active-tab-color="#44a836" 
                           active-text-color="white"
                           type="pills"
                           :start-index="1"
                 >
                    <v-tab class="myOrder" title="Мои заказы">
                        <div class="orderHead">
                            <span>Заказ</span>
                            <span class="orderHead-product">Товары</span>
                            <span>Дата</span>
                            <span>Стоимость</span>
                        </div>
                        <Orders v-for="order in orders" :key="order" :order="order"/>
                    </v-tab>

                    <v-tab title="Избранное">
                        <Favorite v-for="productF in user.favourite_products" :key="productF" :productF="productF"/>
                    </v-tab>

                    <v-tab class="settings" title="Настройки">
                        <div class="settings-content">
                            <form action="" @submit.prevent="putUser()">
                                <div class="formItem">
                                    <div class="formItem_foto">
                                        <div class="foto">
                                            <img src="../assets/image/user.png" alt="">
                                        </div>
                                    </div>
                                    <input type="file" name="file" id="file" class="inputFile">
                                </div>
                                <div class="formItem">
                                    <label for="surname">Фамилия:</label>
                                    <input type="text" name="surname" id="surname" v-model="last_name">
                                </div>
                                <div class="formItem">
                                    <label for="name">Имя:</label>
                                    <input type="text" name="name" id="name" v-model="first_name">
                                </div>
                                <div class="formItem">
                                    <label for="patronymic">Отчество:</label>
                                    <input type="text" name="patronymic" id="patronymic" v-model="patronymic">
                                </div>
                                <div class="formItem">
                                    <label for="tel">Телефон:</label>
                                    <input type="tel" name="tel" id="tel" v-model="phone">
                                </div>
                                <div class="formItem">
                                    <label for="email">E-mail:</label>
                                    <input type="email" name="email" id="email" v-model="email">
                                </div>
                                <div class="formButton">
                                    <input type="submit" value="Изменить данные" class="button">
                                </div>
                            </form>
                        </div>
                    </v-tab>
                </vue-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Orders from '../components/Orders.vue'
import Favorite from '../components/Favorite.vue'

export default {
    name: 'PersonalArea',
    components: {Orders, Favorite},
    computed:{
        user(){
            return this.$store.getters.userData
        },
        orders(){
            return this.$store.getters.order.filter(ord => ord.user == localStorage.getItem('id'))
        }
    },
    data(){
        return{
            last_name: '',
            first_name: '',
            patronymic: '',
            phone: '',
            email: ''
        }
    },
    methods:{
        putUser(){
            this.$store.dispatch('userPut', {
                last_name: this.last_name,
                first_name: this.first_name,
                patronymic: this.patronymic,
                phone: this.phone,
                email: this.email
            }) 
            .then(()=>{
                this.$store.dispatch('axiosUser')
                this.last_name = this.first_name = this.patronymic = this.phone = this.email = ''
            })
        }
    },
    mounted(){
        this.$store.dispatch('axiosUser')
        this.$store.dispatch('axiosOrder')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.personalArea {
    height: 100%;
    width: 100%;
    overflow: auto;
    .personalArea-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            margin-bottom: 50px;
        }
        .content-infoUser {
            display: grid;
            grid-template-columns: 180px calc(50% - 90px) calc(50% - 90px);
            margin-bottom: 50px;
            .infoUser_foto {
                width: 180px;
                height: 180px;
                background: $colorSky;
                overflow: hidden;
                @include flex();
                border-radius: 8px;
                img {
                    width: 160px;
                    height: auto;
                    border-radius: 8px;
                }
            }
            .infoUser_fio {
                margin-left: 30px;
                @include flex();
                flex-direction: column;
                align-items: flex-start;
                span {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
                .surname {
                    font-size: 28px;
                }
            }
            .infoUser_contacts {
                @include flex();
                flex-direction: column;
                align-items: flex-start;
                span {
                    font-size: 20px;
                    margin-bottom: 10px;
                }
            }
        }
        .content-tabs {
            width: 100%;
            background: $colorSky;
            border-radius: 10px;
            min-height: 350px;
            .vue-tabs {
                .tab-content {
                    padding: 15px;
                }
                .myOrder {
                    .orderHead {
                        display: grid;
                        grid-template-columns: minmax(250px, 360px) minmax(250px, 600px) minmax(180px, 264px) minmax(150px, 216px);
                        align-items: center;
                        text-align: center;
                        margin-bottom: 10px;
                        span {
                            font-size: 18px;
                            font-weight: bold;
                        }
                        .orderHead-product {
                            text-align: start;
                            padding-left: 13px;
                        }
                    }
                }
                .settings {
                    .settings-content {
                        width: 100%;
                        background: #fff;
                        border-radius: 8px;
                        form {
                            width: 95%;
                            margin: 0 auto;
                            .formItem {
                                width: 100%;
                                @include flex();
                                margin-bottom: 15px;
                                label {
                                    width: 20%;
                                    font-weight: bold;
                                }
                                input {
                                    width: 80%;
                                    border: none;
                                    outline: none;
                                    height: 30px;
                                    background: $colorSky;
                                    font-size: 18px;
                                    font-family: inherit;
                                    border-radius: 5px;
                                }
                                .inputFile {
                                    background: #fff;
                                }
                                .formItem_foto {
                                    width: 20%;
                                    margin-top: 20px;
                                    .foto {
                                        width: 120px;
                                        height: 120px;
                                        background: $colorSky;
                                        overflow: hidden;
                                        @include flex();
                                        border-radius: 8px;
                                        img {
                                            width: 100px;
                                            height: auto;
                                            border-radius: 8px;
                                        }
                                    }
                                }
                            }
                            .formButton {
                                width: 100%;
                                @include flex();
                                justify-content: flex-end;
                                margin-top: 20px;
                                .button {
                                    width: 250px;
                                    min-width: 150px;
                                    @include button();
                                    background: $colorGreen;
                                    margin: 0;
                                    margin-left: 15px;
                                    margin-bottom: 20px;
                                }                    
                                .button:hover {
                                    @include buttonHover();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>