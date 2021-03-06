<template>

  <div>
  <div class="sidenav">

    <a href="#" v-for="(element) in list" :key="element.id" list.sync="list">

        {{element.name }} </a>
        <input v-model="newList" >
      <button v-on:click="addNewList">Ajouter</button>
       <router-link to="/todo">Todo de base</router-link>

</div>
<div class="main">
<router-view/>
  
</div>
</div>

</template>

<script>



export default {
  name: 'App',
 
   data() {

return{
list: [
{
id: 1,
name : 'tache 1',
},
{
id: 2,
name : 'tache 2',

}
]
,
newList: '',
filter: 'all',
}
  },


methods: {

supp(element){
 
 this.list.splice(element,1)

},
addNewList: function () {
       let id= this.list.length+1
     
      this.list.push({
        id: id,
        name: this.newList
      })
      this.NewList = ''
    }

},  
computed: {
 filtre(){
   return this.todos.filter()
 }

}



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* The sidebar menu */
.sidenav {
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color:wheat; /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

/* The navigation menu links */
.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

