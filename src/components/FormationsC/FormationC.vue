<template>

    <div class="formation flex flex-col w-full lg:w-3/12 h-60 m-4 rounded-xl shadow border border-gray-600 transition duration-500 hover:shadow-2xl relative">
        <img :src="this.img" alt="imageDuCours" class="rounded-t-xl flex-1 w-full h-2/6 object-cover">
        <router-link to="/" class="absolute top-14 right-2 font-bold text-gray-600 hover:text-green-700 ">By:{{form.User.userName}}</router-link>
        <div class="flex flex-col w-full h-4/6 px-2 py-3">
            <h1 class="text-xl font-bold">{{form.titre}}</h1>
            <p class="mb-2 w-full h-full">{{form.discr.substr(0, 70)+"..."}}</p>
            <p class="self-center mb-2">
                <router-link :to='"/formations/"+form.id' class="transition duration-500 ease-in-out  bg-blue-500 text-white w-full mt-4 px-6 py-3 hover:bg-blue-600">Voir le cours
            </router-link>
            </p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Formation",
        props: {
            form: Object,
        },
        computed:{
            img(){
                return require("@/assets/img/form/"+this.form.img)
            }
        }
    }
</script>