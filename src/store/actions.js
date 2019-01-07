import { RANDOM_NUM } from "./const"
export default{
    getNumFromBackEnd({commit}){//解构赋值
        //let commit = store.commit
        setTimeout(()=>{
            let newNum = Math.floor(Math.random() * 100);
            commit(RANDOM_NUM, newNum)
        },500)
    }
}