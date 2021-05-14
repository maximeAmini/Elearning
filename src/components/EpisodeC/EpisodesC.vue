<template>
   <div class="rounded-b-md">
      <div v-if='this.eps.length === 0 ' class="p-6 border border-gray-600 bg-red-900">
         Des Episodes arrive bientot
      </div>
      <div to="/formations" v-else class="flex p-6 border border-gray-600" v-for='ep in eps'
         v-bind:key='ep.titre'>
         <router-link :to='"/episode/"+ep.id'>{{ep.titre}}</router-link>
         <div class="ml-auto" v-if='this.userId==this.getSession.idUser'>
            <a class="cursor-pointer"><i class="fas fa-trash mr-2 text-red-800"></i></a> 
            <router-link :to='"/episode/"+ep.id'><i class="fas fa-edit text-green-800"></i></router-link>
         </div>
      </div>
   </div>
</template>

<script>
   import axios from 'axios'
   export default {
      name: "oneFC",
      props: {
         idForm: String,
         userId: String
      },
      data() {
         return {
            eps: []
         }
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         }
      },
      created() {
         console.log(this.idForm)
         axios.get('http://localhost:4000/episodes/' + this.idForm).then((res) => {
            this.eps = res.data
         })
      }
   }
</script>