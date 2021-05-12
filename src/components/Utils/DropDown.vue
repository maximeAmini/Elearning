<template>
   <div class="flex flex-col items-center justify-center relative shadow">
      <img ref="menu" @click="this.show" src="@/assets/img/user.png"
         class="cursor-pointer rounded-full h-8 w-8 transition-all duration-500 ease-in-out">
      <div v-show="this.isClick"
         class="felx flex-col items-center justify-center w-60 rounded-lg absolute top-10 right-1 bg-white p-4">
         <div class="pb-1">
            <router-link to="/tabBord" class="w-full">Tableau de bord</router-link>
         </div>
         <div class="pb-1">
            <router-link to="/profile" class="w-full">Profile</router-link>
         </div>
         <div class="pb-1">
            <router-link to="/ModProfile" class="w-full">Modifier le profile</router-link>
         </div>
         <hr>
         <div class="pt-1"><a @click="logOut" class="cursor-pointer w-full">Logout</a></div>
      </div>
   </div>
</template>

<script>
   export default ({
      data() {
         return {
            isClick: false
         }
      },
      methods: {
         logOut() {
            this.$store.commit('setSession', this.getSession = {
               idUser: -1,
               connected: false,
               token: ""
            })
            this.$router.push({
               path: '/'
            })
         },
         show() {
            this.isClick = !this.isClick
         }
      }
   })
</script>