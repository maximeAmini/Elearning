<template>
   <div class="formationsOne sm:mx-20 mx-2 pt-24">
      <div v-if='!fine' class="h-full grid justify-items-center">
         <Wait />
      </div>
      <div v-else class="h-full grid justify-items-center">
         <div v-if='this.form==null'
            class=" flex justify-center items-center h-16 text-center sm:w-10/12 rounded bg-red-200 border  border-red-300">
            La formation demandé n'existe pas
         </div>
         <div v-else class="w-10/12">
            <OneFC :form='form' />
         </div>
      </div>
   </div>
</template>

<script>
   import OneFC from '@/components/OneFC.vue'
   import Wait from '@/components/WaitOF.vue'
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
      }
   }
</script>