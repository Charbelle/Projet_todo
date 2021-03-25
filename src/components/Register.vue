

<template>
    <div>
        <h2>Register</h2>
        <form >
            <div class="form-group">
                <label for="username">Nom d'utilisateur</label>
                <input  v-model="name" type="text" reuired  name="username" class="form-control"  />
            </div>
               <div class="form-group">
                <label For="password">Email</label>
                <input type="email" required v-model="email" name="email" class="form-control" />
            </div>
            <div class="form-group">
                <label For="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="handleSubmit" >Valider</button>
                <router-link to="/" class="btn btn-link">Annuler</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name:'Register',
    data(){
       return{
               name:'',
               email:'',
               password:'',
       }
    },
    methods:{
        ...mapActions('account',['register']),
        ...mapGetters('account',['isAuthenticated']),
        handleSubmit(e){
            e.preventDefault();
            if(this.password.length>7)
            {
                 this.$store.dispatch('account/register',{password:this.password,
                 email:this.email,name:this.name});
            
                 
            }
            }
    }
}
</script>