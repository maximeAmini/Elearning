import {
   createStore
} from 'vuex'

// Create a new store instance.
export default createStore({
   state() {
      return {
         _SESSION: {
            idUser: -1,
            connected: false,
            token: ""
         }
      }
   },
   mutations: {
      setSession(state,newVal){
         state._SESSION = newVal
      }
   }
})