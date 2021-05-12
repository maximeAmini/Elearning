<template>
   <div class="rounded-b-md ">
      <div v-if='this.eps.length === 0 ' class="p-6 border border-gray-600 bg-red-900">
         Des Episodes arrive bientot
      </div>
      <div to="/formations" v-else class="p-6 border border-gray-600" v-for='ep in eps'
         v-bind:key='ep.titre'>
         <router-link :to='"/episode/"+ep.id'>{{ep.titre}}</router-link>
      </div>
   </div>
</template>

<script>
   import axios from 'axios'
   export default {
      name: "oneFC",
      props: {
         idForm: String,
      },
      data() {
         return {
            eps: []
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