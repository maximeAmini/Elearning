<template>
   <div id="nav" class="flex items-center w-full fixed inset-x-0 top-0 shadow-lg z-20 bg-gray-900 text-white">
      <div class="text-2xl bolder mr-6 flex items-center">
         <img class="w-8 mr-2" src="@/assets/img/logo.png" /> Elearning
      </div>
      <div class="sm:flex items-center hidden">
         <router-link to="/" class="mx-4">Home</router-link> |
         <router-link to="/formations" class="mx-4">Formations</router-link> |
         <router-link to="/about" class="mx-4">About</router-link>
      </div>
      <div class="ml-auto flex items-center">
         <form class="lg:flex hidden">
            <input type="search" name="search" id="search" placeholder="Recherche..."
               class="py-1 px-2 border border-gray-700 rounded-lg focus:outline-none focus:border-green-600 focus:shadow-lg mr-4 bg-gray-700">
         </form>
         <div v-if='!getSession.connected'>
            <router-link to="/auth">Connexion </router-link> |
            <router-link to="/register">Register</router-link>
         </div>
         <div v-else>
            <Drop />
         </div>
      </div>
   </div>
   <router-view />
</template>

<script>
   import Drop from '@/components/Utils/DropDown.vue'
   export default {
      components: {
         Drop
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         }
      }
   }
</script>

<style>
   #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100%;
      width: 100%;
   }

   #nav {
      padding: 20px;
   }

   #nav a {
      font-weight: bold;
      color: #2c3e50;
   }

   #nav a.router-link-exact-active {
      color: #42b983;
   }

   
   *::-webkit-scrollbar {
      width: 8px;
   }
   *::-webkit-scrollbar-track {
      background: transparent;
      padding: 10px;
   }
   *::-webkit-scrollbar-thumb {
      background-color: rgba(5, 150, 105, var(--tw-bg-opacity));
      border-radius: 100px;
   }
   *::-webkit-scrollbar-thumb:hover {
      background-color: rgba(4, 120, 87, var(--tw-bg-opacity));
   }

   /* Pour firefox */
   * {
      scrollbar-width: 8px;
      scrollbar-color: blue rgba(5, 150, 105, var(--tw-bg-opacity));
   }
</style>