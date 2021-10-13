<template>
  <div>
    <div class="form">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input 
            type="email" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            v-model="register_email"
          >
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputUsername1" class="form-label">User name</label>
          <input 
            type="text" 
            class="form-control" 
            id="exampleInputUsername1"
            v-model="register_username"
          >
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input 
            type="password" 
            class="form-control" 
            id="exampleInputPassword1"
            v-model="register_password"
          >
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <input 
          type="button" 
          class="btn btn-primary"
          v-on:click="submit_register()"
          value="submit"
        >
      </form>    
    </div>
  </div>
</template>

<script>
import authService from '../modules/authService';

export default {
  name:'register',
  data(){
    return {
      register_email:'',
      register_username:'',
      register_password:''
    }
  },
  methods:{
    async submit_register(){
      try{
        const response = await authService.register(
          this.register_email, 
          this.register_username,  
          this.register_password
        )
        console.log(response);
        this.register_email = '' ;
        this.register_username = '' ;
        this.register_password = '' ;
      }catch(e){
        console.log(e)
      }
    },
  }
}
</script>


<style scoped>
.form{
  width:80%;
  margin:0 auto;
}
</style>
