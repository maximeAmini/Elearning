<template>
   <div class="formations pt-24 sm:mx-20 mx-2 h-full">
      <div class="flex w-full flex-wrap items-center">
         <h1 class="text-3xl font-bold">Nos Formation</h1>
         <router-link to="/formations/addF"
            class="rounded transition duration-500 ease-in-out bg-green-500 hover:bg-green-600 text-white px-4 py-2 ml-auto flex justify-center items-center">
            <span class="text-3xl mr-2">+</span>
            Crée ma formation
         </router-link>
      </div>
      <div v-if='!fine' class="flex flex-wrap mt-1 justify-center">
         <Wait />
         <Wait />
         <Wait />
      </div>
      <div v-else class="transition duration-500 ease-in-out flex flex-wrap mt-1 h-full justify-center">
         <FormationC v-for='form in forms' v-bind:key='form.titre' :form='form' />
      </div>
   </div>
</template>

<script>
   import FormationC from '@/components/FormationsC/FormationC.vue'
   import Wait from '@/components/WaitC/WaitF.vue'
   import axios from 'axios'
   export default {
      name: "Formations",
      components: {
         FormationC,
         Wait
      },
      data() {
         return {
            forms: [],
            fine: false
         }
      },
      computed: {
         getSession() {
            return this.$store.state._SESSION;
         }
      },
      created() {
         axios.get('http://localhost:4000/formations').then((res) => {
            if (res.status == 200) {
               this.forms = res.data
               this.fine = true;
            }
         })
         .catch(err=>{
             let error = err.response
             if(error.status==500){
                this.$router.push({
                  path: '/error/500'
               })
             }
         })
      }
   }
</script>