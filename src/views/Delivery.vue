<template>
    <div class="delivery">
        <div class="delivery-content">
            <h1>Доставка</h1>
            <div class="content-text">
                <p>Магазин строительной продукции ООО "Роскомтехнология" работает только на самовывоз, доставка курьером или почтой не осущетсвляется</p>
                <p>Забрать заказ Вы можете по адресу: <b>г. Краснодар, ул. Одесская, 48, Литер А3, 741</b></p>
            </div>
            <div class="content-button">
                <button @click="modal = !modal, modalCall = !modalCall">Заказать звонок</button>
                <button class="green" @click="modal = !modal, modalAsk = !modalAsk">Задать вопрос</button>
            </div>
            <div class="filter" v-show="modal" @click="modal = false, modalCall = false, modalAsk = false"></div>
            <div class="modalCall" v-show="modalCall">
                <h1>Заказать звонок</h1>
                <form action="">
                    <div class="formItem">
                        <label for="fio">Укажите Ваше ФИО:</label>
                        <input type="text" name="fio" id="fio">
                    </div>
                    <div class="formItem">
                        <label for="tel">Укажите Ваш телефон:</label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="formButton">
                        <input type="button" value="Отмена" class="button" @click="modal = !modal, modalCall = !modalCall">
                        <input type="submit" value="Отправить" class="button green">
                    </div>
                </form>
            </div>
            <div class="modalAsk" v-show="modalAsk">
                <h1>Задать вопрос</h1>
                <form action="">
                    <div class="formItem">
                        <label for="fio">Укажите Ваше ФИО:</label>
                        <input type="text" name="fio" id="fio">
                    </div>
                    <div class="formItem">
                        <label for="tel">Укажите Ваш телефон:</label>
                        <input type="tel" name="tel" id="tel">
                    </div>
                    <div class="formItem">
                        <label for="email">Укажите Ваш E-mail:</label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div class="formItem">
                        <label for="ask">Укажите Ваш вопрос:</label>
                        <textarea name="ask" id="ask"></textarea>
                    </div>
                    <div class="formButton">
                        <input type="button" value="Отмена" class="button" @click="modal = !modal, modalAsk = !modalAsk">
                        <input type="submit" value="Отправить" class="button green">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Delivery',
    data() {
        return {
            modal: false,
            modalCall: false,
            modalAsk: false
        }
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.delivery {
    height: 100%;
    overflow: auto;
    .delivery-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            font-size: 45px;
            font-weight: bold;
            grid-column: 1/3;
        }
        .content-text {
            font-size: 20px;
            width: 70%;
        }
        .content-button {
            margin-top: 50px;
            @include flex();
            justify-content: flex-end;
            button {
                @include button();
                background: $colorGrey;
            }
            .green {
                background: $colorGreen;
            }
            button:hover {
                @include buttonHover();
            }
        }
        .filter {
            @include filterModal();
        }
        .modalCall {
            @include modal();
            height: 320px;
        }
        .modalAsk {
            @include modal();
            height: 500px;
        }
    }
}
</style>