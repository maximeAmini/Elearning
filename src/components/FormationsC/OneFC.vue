<template>
   <div class="w-full bg-cover p-4 rounded-t-md text-gray-400 border-t border-l border-r border-gray-600" v-bind:style='this.img'>
      <div class="flex w-full items-center">
         <h1 class="text-3xl font-bold">
            {{this.form.titre}}
            <span class="text-xs bold text-red-300">Le: {{this.form.createdAt}}</span>
         </h1>
         <div class="ml-auto" v-if='this.form.userId==this.getSession.idUser'>
            <a @click="supp" class="cursor-pointer text-red-500 hover:text-red-600 ml-auto">Supprimé</a> |
            <router-link :to="'/formations/editF/'+this.form.id" class="cursor-pointer text-green-500 hover:text-green-600">
               Modifier
            </router-link>
         </div>
      </div>
      <div class="mt-6">
         {{this.form.discr}}
         
      </div>
   </div>
   <EpisodesC :idForm='this.$route.params.idF' :userId='this.form.userId' />
</template>

<script>
   import EpisodesC from '@/components/EpisodeC/EpisodesC.vue'
   import axios from 'axios'
   export default {
      name: "oneFC",
      components: {
         EpisodesC
      },
      props: {
         form: Object,
      },
      computed: {
         img() {
            if (this.form.img != null) {
               let newmg = require("@/assets/img/form/" + this.form.img)
               return "background-image: url(" + newmg + ")"
            }
            return ""
         },
         getSession() {
            return this.$store.state._SESSION;
         }
      },
      methods: {
         supp() {
            const header = {
               'authorization': 'bearer' + this.getSession.token
            }
            axios.delete('http://localhost:4000/formations/' + this.$route.params.idF, {
                  headers: header
               })
               .then(() => {
                  this.$router.push({
                     path: '/formations'
                  })
               })
         }
      }
   }
</script>