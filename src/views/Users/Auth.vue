<template>
   <div class="auth pt-12  flex content-center justify-center items-center h-screen">
      <div class="bg-white shadow-lg max-w-lg max-h-bg md:flex">
         <img src="@/assets/img/cover.jpg" alt="" class="flex-1 w-full h-40 object-cover md:h-full">

         <div class="flex-1 p-4 md:flex md:flex-col md:items-center md:justify-center">
            <h1 class="text-2xl font-bold text-gray-800">Connexion</h1>

            <form method="post" @submit.prevent="auth" class="mb-4 mt-4">
               <label for="username" class="block text-gray-600 mb-4">Nom d'utilisateur</label>
               <input type="text" id="username" name="username"
                  class="mb-4 border border-gray-300 shadow-inner py-2 px-3 text-gray-700 w-full focus:outline-none focus:border-green-600 focus:shadow-lg"
                  placeholder="Nom d'utilisateur" v-model="userName">

               <label for="pass" class="block text-gray-600 mb-4">Mot de passe</label>
               <input type="password" id="pass" name="pass"
                  class="border border-gray-300 shadow-inner py-2 px-3 text-gray-700 w-full focus:outline-none focus:border-green-600 focus:shadow-lg"
                  placeholder="Mot de passe" v-model="pass">

               <input type="submit"
                  class="cursor-pointer bg-blue-500 text-white w-full mt-4 px-4 py-2 rounded hover:bg-blue-600"
                  value="se connecter">
            </form>
         </div>
      </div>

   </div>
</template>

<script>
   import axios from 'axios'

   export default {
      name: 'Auth',
      data() {
         return {
            userName: '',
            pass: '',
            err: ''
         }
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         }
      },
      methods: {
         auth() {
            axios.post('http://localhost:4000/users/login', {
               userName: this.userName,
               pass: this.pass
            }).then((rep) => {
               this.$store.commit('setSession', this.getSession = {
                  idUser: rep.data.userId,
                  connected: true,
                  token: rep.data.token
               })
               this.$router.push({
                  path: '/'
               })
            }).catch((error) => {
               console.log(error)
            })
         }
      }
   }
</script>