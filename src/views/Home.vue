<template>
    <div class="home">
       <div class="home-about_company">
            <div class="about_company-number">
               <span>01</span>
               <span class="shadow">01</span>
            </div>
            <div class="about_company-content">
                <AboutCompany />
           </div>
       </div>
       <div class="home-catalog">
            <div class="catalog-number">
               <span>02</span>
               <span class="shadow">02</span>
            </div>
            <div class="catalog-content">
                <h1>Каталог</h1>
                <div class="content-сategory">
                    <Catalogries v-for="categories in categori" :key="categories.id" :categories="categories"/>
                </div>
                <router-link tag="div" :to="'/Catalog'">
                    <div class="allCategory">
                        <span>Все категории</span>
                        <img src="../assets/image/arrow.png" alt="">
                    </div>
                </router-link>
            </div>
            
       </div>
        <div class="home-discounts">
            <div class="discounts-number">
               <span>03</span>
               <span class="shadow">03</span>
            </div>
            <div class="discounts-content">
                <h1>Скидки и акции</h1>
                <div class="content-text">
                    <p>В данном зазделе представлены товары участвующие в акции и имеющие пониженную цену</p>
                </div>
                <div class="content-discountItem">
                    <ProductItem v-for="product in Products" :key="product" :product="product"/>
                </div>
                <router-link tag="div" :to="'/Discounts'">
                    <div class="allDisc">
                       <span>Все акции</span>
                       <img src="../assets/image/arrow.png" alt="">
                    </div>
                </router-link>
            </div>
        </div>
        <div class="home-delivery">
            <div class="delivery-number">
               <span>04</span>
               <span class="shadow">04</span>
            </div>
            <div class="delivery-content">
                <Delivery />
            </div>
        </div>
        <div class="home-contacts">
            <div class="contacts-number">
               <span>05</span>
               <span class="shadow">05</span>
            </div>
            <div class="contacts-content">
                <Contacts />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Catalogries from '../components/CatalogСategory.vue'
import Footer from '../components/Footer.vue'
import AboutCompany from '../views/AboutCompany.vue'
import Delivery from '../views/Delivery.vue'
import Contacts from '../views/Contacts.vue'
import ProductItem from '../components/ProductItem.vue'

export default {
    name: 'Home',
    components: {
        Catalogries, 
        Footer,
        AboutCompany,
        Delivery,
        Contacts,
        ProductItem
    },
    data() {
        return {
           
        }
    },
    computed:{
        categori(){
            return this.$store.getters.categories.slice(0,2)
        },
        Products(){
            return this.$store.getters.catalog.filter(prod => prod.new_price !== null).slice(0,4)
        }
    },
    mounted(){
        this.$store.dispatch('axiosCategories')
        this.$store.dispatch('axiosCartsItem')
        this.$store.dispatch('axiosCatalog')
    }
}
</script>

<style lang="scss">
@import "../assets/mixin/_mixin.scss";

.home {
    height: 100%;
    z-index: -10;
    overflow: auto;
    .home-about_company {
        //height: 100%;
        width: 100%;
        @include flex();
        justify-content: flex-start;
        flex-direction: column;
        //position: relative;
        .about_company-number {
            @include number();
        }
    }
    .home-catalog {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        flex-direction: column;
        .catalog-number {
            @include number();
            ///text-align: end;
            position: relative;
            span {
                position: absolute;
                right: 0;
            }
            .shadow {
                position: absolute;
                right: 10px;
            }
        }
        .catalog-content {
            width: calc(100% - 60px);
            max-width: 1440px;
            padding: 30px;
            .allCategory {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 35px; 
                cursor: pointer;
                span {
                    margin-right: 10px;
                }
            }
            h1 {
                font-size: 45px;
                font-weight: bold;
                grid-column: 1/3;
            }
        }
        
    }
    .home-discounts {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        flex-direction: column;
        .discounts-number {
            @include number();
        }
        .discounts-content {
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
                margin-bottom: 50px;
            }
            .content-discountItem {
                display: grid;
                grid-template-columns: 25% 25% 25% 25%;
                //grid-gap: 10px;
            }
            .allDisc {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 35px; 
                cursor: pointer;
                span {
                    margin-right: 10px;
                }
            }
        }
    }
    .home-delivery {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        flex-direction: column;
        .delivery-number {
            @include number();
            position: relative;
            span {
                position: absolute;
                right: 0;
            }
            .shadow {
                position: absolute;
                right: 10px;
            }
        }
    }
    .home-contacts {
        width: 100%;
        @include flex();
        justify-content: flex-start;
        flex-direction: column;
        .contacts-number {
            @include number();
        }
        .contacts-content {
            width: 100%;
        }
    }
}
</style>