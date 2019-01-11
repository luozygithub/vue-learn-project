import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// import state from "./state"
// import getters from "./getters"
// import mutations from "./mutations"
// import actions from "./actions"
// Vue.use(Vuex)

// let store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions,
// })
// export default store;
import myCity from "./MyCity"
let store = new Vuex.Store({
    modules:{
        myCity
    }
})
export default store;