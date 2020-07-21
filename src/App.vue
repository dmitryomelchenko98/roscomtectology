<template>
  <div id="app">
    <Header />
    <NavBar />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Header,
    NavBar
  }
  
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'), 
    url('./assets/fonts/Robotolight.woff2') format('woff2'), 
    url('./assets/fonts/Robotolight.woff') format('woff'), 
    url('./assets/fonts/Robotolight.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

::-webkit-scrollbar {
        width: 5px; /* ширина для вертикального скролла */
        height: 5px; /* высота для горизонтального скролла */
        background-color: #514e4c;
    }
    
    /* ползунок скроллбара */
    ::-webkit-scrollbar-thumb {
        background-color: rgb(189, 198, 205);
        border-radius: 30px;
        //box-shadow: inset 1px 1px 10px #f3faf7;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background-color: #8e8e95;
    }

#app {
  max-width: 1920px;
  width: 100%;
  height: 100%;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: minmax(0px, calc(100% - 80px)) 80px;
  grid-template-rows: 80px calc(100% - 80px);
}
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body {
    font-family: 'Roboto';
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
  grid-column: 1/2;
  grid-row: 2/3;
  overflow: hidden;
}
</style>
