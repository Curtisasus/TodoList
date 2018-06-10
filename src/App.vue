<template>
  <div id="app">
    <div class="bg-primary">
      <div class="container">
        <a href="#" class="select">My Tasks</a>
        <a href="#" >In Progress</a>
        <a href="#" >Completed</a>
      </div>
    </div>
    <!-- 組件使用-->
    <!-- <HeaderView msg="父組件傳遞值到子組件"></HeaderView> -->

    <!-- <HeaderView :msg="title"></HeaderView>
    <img src="./assets/logo.png"> -->
    

    <!-- 組件使用-->
    <ListView @myMsg='getData'></ListView>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
//導入組件
import ListView from './components/List'
import HeaderView from './components/Header'

// App.vue 是父組件，ListView 是子組件  組件溝通
//父組件 --> 子組件   props選項
//子組件 --> 父組件   自定義事件



export default {
  name: 'App',
  components: {
    ListView,HeaderView
  },
  data(){
    return{
        title: "Vue入門學習"
    }
  },
  methods: {
    getData(msg){
        console.log("App.vue組件:" + msg);
    }
  }
}
</script>

<style>

body{
  position: relative;
}

.bg-primary{
  height: 76px;
  color: #00408B;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
  position: absolute;
  width:1024px;      
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
}


#app .container{
  margin-left: 182px;
  margin-right: 182px;
  padding-top: 23px;
  
}
.bg-primary a{
  color: #00408B;
  font-size: 24px;
  width: 220px;
  display:block;
  float:left;    
  text-align:center;
  margin-bottom:23px;
  padding-bottom: 18px;
  text-decoration:none;
}

.bg-primary .select{
  color : #FFFFFF;
  box-shadow: 0 -5px #00408B inset;
}



.bg-primary{
  height: 76px;
  width: 1024px;
}
.container{
  position: relative;
}
.container .select{
  font-color : #FFFFFF!;
}
</style>
