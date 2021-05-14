<template>
   <div class="flex flex-wrap pt-24 sm:mx-20 mx-2">
      <div class="sm:w-4/6 w-full">
         <div class="w-full ">
            <video controls :src="this.ep.url" class="w-full">{{this.ep.titre}}</video>
         </div>
         <div class="pt-4">
            <h1 class="text-3xl font-bold">{{this.ep.titre}}</h1>
            <p class="mr-8">{{this.ep.discr}}</p>
         </div>
      </div>
      <div class="sm:w-2/6 w-full sm:py-0 px-4 py-4">
         <EpisodesC idForm='1' />
      </div>
   </div>
</template>

<script>
   import EpisodesC from '@/components/EpisodeC/EpisodesC.vue'
   import axios from 'axios'
   export default {
      name: "Formations",
      components: {
         EpisodesC
      },
      data() {
         return {
            ep: "",
            fine: false
         }
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         },
      },
      created() {
         const header = {
            'authorization': 'bearer' + this.getSession.token
         }
         axios.get('http://localhost:4000/episodes/one/' + this.$route.params.idE, {
            headers: header
         }).then((res) => {
            this.ep = res.data
            this.fine = true;
         })
      }
   }
</script>