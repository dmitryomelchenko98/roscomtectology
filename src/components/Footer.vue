<template>
    <div class="footer">
        <div class="footerInfo-item">
            <div class="logo">
                <img src="../assets/image/logo.png" alt="">
                <span>РОСКОМТЕХНОЛОГИЯ</span>
            </div>
            <span>ООО “РосКомТехнология”, 2020</span>
            <span>ИНН 2308172253 <br> КПП 231001001</span>
        </div>
        <div class="footerInfo-item">
            <span>Телефон: 8 (861) 210-33-10 </span>
            <span>Адрес: 350020, г. Краснодар, ул. Одесская, 48, Литер А3, 741</span>
            <span>E-mail: snejca@mail.ru</span>
        </div>
        <div class="footerInfo-item">
            <span>Q & A</span>
            <span>Сотрудникам</span>
            <span>Партнерам</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.footer {
    width: 100%;
    height: 160px;
    background: $colorGrey;
    @include flex();
    justify-content: space-around;
    .footerInfo-item {
        @include flex();
        flex-direction: column;
        align-items: flex-start;
        span {
            margin-bottom: 5px;
        }
        .logo {
            @include flex();
            margin-bottom: 10px;
        }
    }
}
</style>