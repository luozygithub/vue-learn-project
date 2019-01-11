import {UPDATA_CITY} from "./const"
export default {
    changeCity({commit}, city){
        localStorage.myCity = city;
        commit(UPDATA_CITY,city)
    }
}