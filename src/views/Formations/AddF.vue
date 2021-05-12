<template>
   <div class="formationsAdd pt-24 sm:mx-20 mx-2 h-full mb-8">
      <h1 class="text-3xl font-bold">Crée ma formation</h1>
      <form method="post" @submit.prevent="add" class="my-8 ml-40 sm:w-8/12 sm:ml-2/12 w-full">

         <div class="flex flex-wrap w-full items-center">
            <label for="titre" class="block mb-4 sm:w-2/12 w-full">Titre :</label>
            <input type="text" id="titre" name="titre"
               class="sm:w-10/12  w-full mb-4 border border-gray-300 shadow-inner py-2 px-3 text-gray-700 focus:outline-none focus:border-green-600 focus:shadow-lg"
               :class="this.inRed" placeholder="Apprendre le..." v-model="titre">
         </div>

         <div class="flex flex-wrap items-center">
            <label for="discr" class="block mb-4 sm:w-2/12 w-full">Discription :</label>
            <textarea type="text" id="discr" name="discr"
               class="sm:w-10/12  w-full mb-4 border border-gray-300 shadow-inner py-2 px-3 text-gray-700 focus:outline-none focus:border-green-600 focus:shadow-lg"
               :class="this.inRed" placeholder="Dans ce cours vous allez..." v-model="discr" rows="5"></textarea>
         </div>

         <input type="submit"
            class="cursor-pointer bg-green-500 text-white mt-4 px-4 py-2 rounded hover:bg-green-600 float-right"
            value="Crée">

      </form>
   </div>
</template>

<script>
   import axios from 'axios'
   export default {
      name: 'addF',
      data() {
         return {
            titre: '',
            discr: '',
            error: false
         }
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         },
         inRed() {
            if (this.error == true) {
               return "border-2 border-red-500"
            }
            return ""
         }
      },
      methods: {
         add() {
            const header = {
               'authorization': 'bearer' + this.getSession.token
            }
            axios.post('http://localhost:4000/formations/', {
               titre: this.titre,
               discr: this.discr
            }, {
               headers: header
            }).then((rep) => {
               this.$router.push({
                  path: '/formations/' + rep.data
               })
            }).catch((error) => {
               console.log(error)
               if (error.response.data.type == 1) {
                  this.error = true
               }else if (error.response.data.type == 3) {
                  this.$router.push({
                     path: '/auth'
                  })
               } else {
                  this.$router.push({
                     path: '/error/500'
                  })
               }

            })
         }
      }
   }
</script>