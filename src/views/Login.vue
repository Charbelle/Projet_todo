<template>
    <div id="login">
      <h1>Bienvenue sur TodoApp</h1>
         <h2>Un pas de plus vers l'organisation</h2>
      <router-link to="/login">Connexion</router-link> |
      <router-link to="/register">Inscription</router-link>
      <router-view/>
    </div>
 
</template>
<script>
export default {
    name: 'Login',
}

</script>