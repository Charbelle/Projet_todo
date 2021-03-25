<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label for="username">Email</label>
                <input type="text" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
       
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
  
            </div>
            <div class="form-group">
                <button class="btn btn-primary" >Login</button>
                <router-link to="/register" class="btn btn-link">Register</router-link>
            </div>
        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    name:'Register',
    data(){
       return{
               email:'',
               password:'',
       }
    },
    methods:{
        ...mapActions('account',['login']),
        handleSubmit(e){
            e.preventDefault();
        
            {
                 this.$store.dispatch('account/login',{password:this.password,
                 email:this.email});
                 this.$router.push({path:'/'});
                 
            }
            }
    }
}
</script>
