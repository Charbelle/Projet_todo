<template>

<div class="container-fluid">
  <div class="main">
 
 <div v-if="isAuthenticated" >
   <Sidebar />
 <router-view  />
 </div>
  
    <Login v-else/>

   
</div>
</div>

</template>

<script>
import Login from '@/views/Login'
import Sidebar from '@/components/menu/Sidebar'
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'App',
  data(){
    return {
      id:null,
    }},
components:{
 Login,Sidebar
}
,
  methods: {
    ...mapActions("todo",["login"]),
   register(){

     this.$store.dispatch('account/login',{password:"motdepasse",email:"exampleelh@toto.com"});
    },
    todo()
    {
      this.$store.dispatch('account/accountInformation',{token:this.getToken})
    }
  },
  computed: {
    ...mapGetters("account",["getToken","isAuthenticated"])
  },
  
  
}
</script>

<style >
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}
.add{

  width: 100%;
  display: flex;
  padding: 10px 0;
}

.add > input[type="text"]{

  width: 90%;
  color: yellow;
  border: none;
  border-bottom: 2px solid black;
  padding: 10px;
  font-size: 22px;
  outline: none;
}

.add{
 margin: O 10px;
 font-size: 18px;
 border: none;
 padding: 10px;
 outline: none;

}
</style>
