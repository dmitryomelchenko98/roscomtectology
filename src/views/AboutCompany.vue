<template>
    <div class="aboutCompany">
        <div class="aboutCompany-content">
            <h1>О компании</h1>
            <div class="content-text">
                <p>
                    Здесь прилагается краткая история предприятия, описание его работы, перечисление преимуществ перед другими компаниями. 
                </p>
                <p>
                    Также указывается вся информация, которая поможет добиться расположения клиента и склонить его к выбору именно этой фирмы.
                </p>
                <p>
                    Абзацы текста прописываются через одну строчку, как в этом примере. Ширина текстового блока определяется так, чтобы на строках не оставалось «висящих» слов (местоимения, союзы, предлоги, слова из 3 и менее букв).
                </p>
            </div>
            <div class="content-image">
                <div class="image-item">
                    <img src="../assets/image/about1.png" alt="">
                    <span>Преимущество 1</span>
                </div>
                <div class="image-item">
                    <img src="../assets/image/about2.png" alt="">
                    <span>Преимущество 2</span>
                </div>
                <div class="image-item">
                    <img src="../assets/image/about3.png" alt="">
                    <span>Преимущество 3</span>
                </div>
                <div class="image-item">
                    <img src="../assets/image/about4.png" alt="">
                    <span>Преимущество 4</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutCompany'
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.aboutCompany {
    height: 100%;
    overflow: auto;
    .aboutCompany-content {
        width: calc(100% - 60px);
        height: calc(100% - 60px);
        max-width: 1440px;
        padding: 30px;
        display: grid;
        grid-template-columns: 70% minmax(280px, 30%);
        grid-template-rows: min-content min-content;
        margin: 0 auto;
        h1 {
            font-size: 45px;
            font-weight: bold;
            grid-column: 1/3;
        }
        .content-image {
            display: grid;
            grid-template-columns: 50% 50%;
            .image-item {
                @include flex();
                flex-direction: column;
                span {
                    margin: 10px 0;
                }
            }
        }
        .content-text {
            font-size: 20px;
        }
    }
}
</style>