
const count ={
  state:{
    count:1
  },
  mutations:{
    accountCount(state){
      console.log(state.count)
    }
  }
}

export default count