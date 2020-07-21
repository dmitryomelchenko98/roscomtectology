<template>
    <div class="contacts">
        <div class="contacts-content">
            <h1>Контакты</h1>
            <div class="content-info">
                <span>Контактные телефоны:</span>
                <span>8 (861) 292 01 72 <br> 8 (861) 210-33-10 </span>
                <span>Адрес:</span>
                <span>350020, г. Краснодар, ул. Одесская, 48, Литер А3, 741</span>
                <span>Элетронная почта:</span>
                <span>snejca@mail.ru</span>
            </div>
            <!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5637.337857154931!2d38.97987787810679!3d45.05193983787212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86f6b55db2c4f127!2z0LvQuNGC0LXRgCDQkDM!5e0!3m2!1sru!2sru!4v1591663293431!5m2!1sru!2sru" width="80%" height="150" frameborder="0" style="border:0; border-radius: 10px; margin-top: 40px;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>-->
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts'
}
</script>

<style lang="scss">
.contacts {
    height: 100%;
    overflow: auto;
    .contacts-content {
        width: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        margin: 0 auto;
        h1 {
            font-size: 45px;
            font-weight: bold;
            grid-column: 1/3;
        }
        .content-info {
            display: grid;
            grid-template-columns: 30% 70%;
            grid-row-gap: 30px;
        }
    }
}
</style>