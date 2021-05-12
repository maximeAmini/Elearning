<template>
   <div>
      <div class="home flex flex-col items-center justify-center">
         <h1 class="text-3xl sm:w-3/6 text-center font-bold text-white mb-4">
            Bienvenu sur notre site de formations 100% gratuit dans tout domaine...
         </h1>
         <form class="w-full grid justify-items-center">
            <input type="search" name="search" id="search" placeholder="Recherche..."
               class="sm:w-3/6 py-2 px-4 text-2xl border border-gray-400 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-lg">
            <legend class="text-center text-sm m-2">
               Suggestion:
               <span class="text-gray-300 text-xs">Apprendre le C, Les reseaux, Comment dévlopper un site web, </span>
               <router-link to="/formations" class="text-blue-800 bold">plus...</router-link>
            </legend>
         </form>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'Home'
   }
</script>

<style scoped>
   .home {
      width: 100%;
      height: 100vh;
      background-image: url("../assets/img/home.jpg");
      background-size: cover;
   }
</style>