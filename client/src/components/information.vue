<template>
  <div>
    <h1>successfully logged in</h1>
    <hr>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import authService from '../modules/authService';

export default {
  name:'information',
  data(){
    return {
      msg:'null'
    }
  },
  async created(){
    try{
      const response = await authService.info();
      this.msg = response.posts.title;
    }catch(e){
      console.log(e)
    }
  }
}
</script>