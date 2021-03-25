<template>
    <input type="checkbox" name="" id="check">
    <label for="check">
      <font-awesomme-icon icon="bars" id="btn" @click="liste()" />
      <font-awesome-icon icon="times" id="cancel" />
    </label>
      <div class="sidebar">

        <header><span class="badge rounded-pill bg-warning">Todo</span><b>App</b></header>
        <div class="btn btn-warning task" ><span>Vos Listes</span></div>
        <ul>
          <li v-for="todo in getTodos" :key="todo.id" @click="tasks(todo.id)">
            <a><font-awesome-icon icon="tasks" /> {{todo.name }}</a>
          </li>
        </ul>
        <div class="new">
      
       <input  v-model="newTodo" > 
        <button class="btn create" v-on:click="addTodo(newTodo)" >+</button>
        </div>
      <a @click="disconnect">Se déconnecter</a>
      
          <div class="text-center icon-box" v-if="remaining">
            <font-awesome-icon id="icon" icon="tasks" /> <p class="counter">{{remaining}} Taches restantes</p> 
          </div>
      </div>


</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks,faBars, faTimes,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTasks)
library.add(faBars)
library.add(faTimes)
library.add(faPlus)
export default {
    name: 'Sidebar',
    data(){
        return { newTodo : null }
         },
         components: {
           FontAwesomeIcon
         }
    ,computed:{
            ...mapGetters('todo', ['getTodos','remaining']),
              ...mapGetters("account",["getToken"]),
            },
    methods:{
       ...mapActions('todo', ['createTodoList','loadTodolists']),
       ...mapActions('account', ['logout']),
     
   
          addTodo(data){
               
                    this.$store.dispatch('todo/createTodolist',{name:data,token:this.getToken}); 
            },
          tasks(index) {
          
              this.$router.push({ name: 'Todo', params: { id: index}});
            }, 
           disconnect(){
              this.$router.push( {path:'/'});
             this.logout();
            
           },
           liste() {
            this.loadTodolists({token:this.getToken});
    },       
    },
}
</script>

<style>
/* The sidebar menu */
.task{
margin-left: 30px;
color: white;
}
.sidebar {
  height: 100%; 
  width: 14%; 
  position: fixed;
  z-index: 1; 
  left: -14%;
  background-color:rgb(179, 195, 245); 
  overflow-x: hidden;
  color: white;
  transition: all .5s ease;
}
label #btn{
  left: 40px;
  top:25px;
  font-size: 35px;
  padding: 6px 12px;
}


ul{
  list-style: none;
  text-decoration: none;
}
li{
  margin: 0;
  padding: 0;
}
#check :checked ~ .sidebar{
  left: 0;
}

.sidebar ul li:hover a{
padding-left: 20px;
}

.sidebar header{
  
    width: 100%;
    font-size: 22px;
    text-align: center;
    color: white;
    line-height: 60px;
    background-color: rgb(187, 143, 204);
    user-select: none;
  
}


label #btn{
  position:absolute;
  cursor:pointer;
  border-radius: 3px;
  margin: 15px 30px;
  font-size: 29px;
  height: 45px;
  width: 45px;
  background-color: rgb(143, 142, 184);
  text-align: center;
  line-height: 45px;
  transition: all .5s ease;
  padding-top: 5px;
  
} 
label #cancel{
  position:absolute;
  cursor:pointer;
  background-color: rgb(233, 199, 199);
  border-radius: 3px;
  margin: 15px 30px;
  font-size: 29px;
  height: 45px;
  width: 45px;
  text-align: center;
  line-height: 45px;
  transition: all .5s ease;

}
#check{
display: none;
}
.new {
  background: transparent;
  border: 0;
  color: inherit;
  border-bottom: 1px solid currentColor;
  font-size: inherit;
  outline: none;
  padding: 0.25em;
  transition: border-bottom 150ms ease-in;
  order: 2;
}


#check:checked ~ .sidebar{
  left: 0;
}

/* sidebar elements */
.sidebar  a{
  padding-top: 5px;
  text-decoration: none;
  font-size: 20px;
  color:white;
  display: block;
  height:55px;
  width: 100%;
  line-height:45px;
  box-sizing:border-box;
  border-top:1px solid rgba(255,255,255,.1);
  border-bottom: 1px solid white;
  padding-left: 10px;
  border-left: 5px solid transparent;
  transition: all .5s ease;
}
font-awesome-icon{
  font-size: 23px;
  margin-right: 16px;
}
.sidebar a span{
  letter-spacing: 1px;
  text-transform: uppercase;
}
#check{
  display: none;
}

label #cancel{
  opacity: 0;
  visibility: hidden;
}

#check:checked ~ label #btn{
  margin-left:0%;
  opacity: 1;
  visibility: visible;
}
#check:checked ~ label #cancel{
  margin-left:15%;
  opacity: 1;
  visibility: visible;
}
@media(max-width : 860px){
  .sidebar{
    height: auto;
    width: 70px;
    left: 0;
    margin: 100px 0;
  }
  header,#btn,#cancel{
    display: none;
  }
  span{
    position: absolute;
    margin-left: 23px;
    opacity: 0;
    visibility: hidden;
  }
  .sidebar a{
    height: 60px;
  }
  .sidebar a i{
    margin-left: -10px;
  }
  a:hover {
    width:15%;
    background: inherit;
  }
  .sidebar a:hover span{
    opacity: 1;
    visibility: visible;
  }

  .counter-section{
    margin:10% auto;
    color: rgb(231, 222, 93);
  
  }
  .icon-box{
    border: 3px solid rgb(231, 222, 93);
    height: 50px;
    width:50px;
    transform: rotate(35deg);  
    margin: 15px auto;
    font-size: 50px;
    }
    #icon{
  font-size:35px;
  margin: 30px auto;
   color: rgb(231, 222, 93);
     transform: rotate(-35deg);  
    }
    
}



</style>
