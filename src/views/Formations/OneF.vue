<template>
   <div class="formationsOne sm:mx-20 mx-2 pt-24">
      <div v-if='!fine' class="h-full grid justify-items-center">
         <Wait />
      </div>
      <div v-else class="h-full grid justify-items-center">
         <div v-if='this.form==null'
            class=" flex justify-center items-center h-16 text-center sm:w-10/12 rounded bg-red-800 border  border-red-900">
            La formation demandé n'existe pas
         </div>
         <div v-else class="lg:w-10/12 w-full">
            <OneFC :form='form' />
         </div>
      </div>
   </div>
</template>

<script>
   import OneFC from '@/components/FormationsC/OneFC.vue'
   import Wait from '@/components/WaitC/WaitOF.vue'
   import axios from 'axios'

   export default {
      name: "oneF",
      components: {
         OneFC,
         Wait
      },
      data() {
         return {
            form: [],
            fine: false
         }
      },
      created() {
         axios.get('http://localhost:4000/formations/' + this.$route.params.idF)
            .then((res) => {
               this.form = res.data
               this.fine = true;
            })
            .catch(err => {
               let error = err.response
               if (error.status == 500) {
                  this.$router.push({
                     path: '/error/500'
                  })
               }
            })
      }
   }
</script>