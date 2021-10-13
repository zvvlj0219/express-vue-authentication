<template>
  <div id="app">
    <h1>Express Vue Authentication</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="header">
      <p class="auth" v-on:click="currentComponent = 'auth'">login</p>
      <p class="register" v-on:click="currentComponent = 'register'">register</p>
    </div>
    <keep-alive>
      <component 
        v-bind:is="currentComponent"
        v-on:loginComplete="loginComplete"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import auth from './components/auth.vue'
import register from './components/register.vue'
import information from './components/information.vue'

export default {
  name: 'App',
  components: {
    auth,
    register,
    information
  },
  data(){
    return {
      currentComponent:auth
    }
  },
  methods:{
    loginComplete(){
      this.currentComponent = information;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header{
  display:flex;
  justify-content:flex-end;
  font-size:25px;
  border-bottom:2px solid skyblue;
  width:80%;
  margin:0 auto;
}

.auth,.register{
  margin-right:10px;
  background-color:lightgreen;
  border-radius:5px;
  padding:2px 3px;
}

</style>
