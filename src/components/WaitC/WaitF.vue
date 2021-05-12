<template>

   <div class="border border-blue-800 shadow rounded-md w-full lg:w-3/12 h-60 m-6 ">
      <div class="animate-pulse w-full">
         <div class="rounded-t-sm bg-blue-800 h-20 w-full"></div>
         <div class="flex flex-col space-y-4 p-6 h-3/6">
            <div class="space-y-2">
               <div class="h-4 bg-blue-800 rounded"></div>
               <div class="h-4 bg-blue-800 rounded w-5/6"></div>
            </div>
            <div class="h-10 self-center bg-blue-800 rounded w-1/4"></div>
         </div>
      </div>
   </div>

</template>

<script>
   export default {
      name: "WaitF"
   }
</script>