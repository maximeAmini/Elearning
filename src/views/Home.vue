<template>
   <div>
      <div class="home flex flex-col items-center justify-center">
         <h1 class="text-3xl text-center font-bold text-gray-800 mb-4">
            Bienvenu sur notre site de formations 100% gratuit inscrivez vous de suite...
         </h1>
         <router-link to="/auth" class="bg-green-500 hover:bg-green-600  text-white mt-6 px-6 py-3 ">Rejoindre
         </router-link>
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