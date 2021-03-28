<template>

  <div class="todo">
   <!--Nom de la liste, bouton supprimer-->.
    <h2>{{title}}  <button  v-on:click="removeTodo"> <font-awesome-icon icon="trash"></font-awesome-icon></button></h2> 
    
    <!-- Compteur de Todos -->.
    <label>{{uncompleted}}</label>
 
      <!--filtres -->.
      <select class="form-select" v-model="filter">
          <option value='all'>Toutes vos taches </option>
          <option value='todo'> a faire </option>
          <option value='done'> Faites </option>
      </select>

     <!--Champ d'ajout d'un tache(todo) -->.
    <div class="input">
      <input class= "form-control" v-model="newTask" @keyup.enter="addTask" placeholder="Ajouter nouvelle tache" >
      <button  v-on:click="addTask"><font-awesome-icon icon="plus"></font-awesome-icon></button>
    </div>
    

    <div class ="content">
      <ul id="todo" class ="list-group list-group-flush" >
        <li class="list-group-item " v-for="task  in filtered" :key="task.id" >
          <label>
              <input class="form-check-input"  reuired type="checkbox" @click="completeTask(task)" v-if="task.completed==1" checked >
              <input type="checkbox" @click="completeTask(task)" v-else >  
              <p>{{task.name}}</p>  <span> </span>
          </label>
            
          <span class="remove" v-on:click="removeTask(task)"><font-awesome-icon icon="trash"></font-awesome-icon></span>
           
          <label for="newTodo">Modifier une tache</label>
          <input class= "form-control" type="text" placeholder="Appuyez sur entrer pour enregistrer" v-model="task.name" @keyup.enter="edit(task)" >
      
        </li>

        
      </ul>

    </div>
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//ajout des icones
library.add(faTrash)
library.add(faPlus)
import {mapGetters} from 'vuex'
export default {
  name: 'Todo',
 data()
 {
return {newTitle:"",filter:'all'}
 },  components: {
           FontAwesomeIcon
         },
 methods:{         
            addTask(){
              this.$store.dispatch('todo/createTodo',{liste:this.$route.params.id,name:this.newTask,bool:0,token:this.getToken});
              this.newTask=""
            },

            //fonction completer todo
            completeTask(task){
            //1 si tache complete, 0 sinon
            let bool=1; // initialisation à car par défaut on considère que la tache est incomplete

            if (task.completed==1) //la tache est complete, on passe la valeur de bool à 1
              bool=0;

            this.$store.dispatch('todo/completeTodo',{liste:this.$route.params.id,name:task.name,bool:bool,token:this.getToken,id:task.id});
            },
 
             //retirer une liste 
            removeTodo(){
                this.$store.dispatch('todo/deleteTodolist',{id:this.$route.params.id,token:this.getToken});
                 this.$router.push({path:'/'})
            },
             //retirer une tache 
            removeTask(task){
             this.$store.dispatch('todo/deleteTodo',{id:task.id,token:this.getToken,liste:this.$route.params.id});
            },
            edit(task){
       
              this.$store.dispatch('todo/modifyTodo',{name:task.name,token:this.getToken,id:task.id});
            }
    },

computed: {
     ...mapGetters('todo', ['tasks','taskName','subremaining','todo','done']),
     ...mapGetters('account',['getToken']),
       
        //filtrages des todos suivant la valeur du paramètre filter
        filtered()
       {
         
        if(this.filter=="todo")
          return this.todo(this.$route.params.id)
        else if(this.filter=="done")
          return this.done(this.$route.params.id)
        else
          return this.tasks(this.$route.params.id)
     },

      //titre de la todo
     title()
     {
       return this.taskName(this.$route.params.id)
     },

      //compteur des todos
     uncompleted()
     {
      let nb= this.subremaining(this.$route.params.id);
       if(nb>1)
        return "Il vous reste "+ nb+ " taches "
      else  if(nb==1)
        return "Il vous reste "+ nb+ " tache "
      else
        return "Il ne vous reste aucune tache " 
     }
  
    },
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  align-items: center;
}
.todo{
  position: relative;
 border: 1px solid black;
  width: 50%;
  margin-left:7em;
}

.todo h2{
 background-color:rgb(152, 195, 233);
 color:white;
 padding: 10px 15px
}
.todo ul{
  position: relative;
  padding: 15px ;
}

.todo ul li{
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid black;
   line-height:35px;
   border-radius: 3px;
   margin-bottom: 15px;
   padding: 0 15px;
}
.todo ul li:last-child{
  border-bottom: none;
}
.todo ul li label{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor:pointer;
}
.todo ul li label input{
  visibility: hidden;
  appearance: none;
}

.todo ul li label p{
  position: absolute;
}

.todo ul li label  span{
  position:relative;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius:50%;
  display: flex;
  justify-content:center;
  align-items: center;


}

.todo ul li label span:before{
  content:'';
  top: 5px;
  width:10px;
  height:5px;
  border-left: 3px solid rgb(220, 223, 95);
  border-bottom: 3px solid rgb(228, 230, 112);
  transform: rotate(-50deg)}

  .todo ul li label input:checked~ p {
text-decoration: line-through;
color:#ccc;
  }

  .todo ul li label input:checked~ span:before{
  border-left: 3px solid white;
  border-bottom: 3px solid white;
  }
  .input{
    display: flex;
    outline:none;
  }
  .input button{
    background-color: rgb(136, 115, 163);
    height:100%;
    width:60px;
    border:none;
    outline: none;
    font-size: 19px;
    border-radius: 3px;
    cursor:pointer;
    margin-left: 5px;
  }

  .remove{
    position: absolute;
    right:0px;
    color:red;
  }
  </style>