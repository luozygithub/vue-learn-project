import {CHANGE_NUM, RANDOM_NUM } from "./const"

export default {
    [CHANGE_NUM](state,param){
        state.num++;
    },
    [RANDOM_NUM](state, newNum){
        state.num = newNum;
    }
}