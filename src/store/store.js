import { createStore } from 'vuex'


export default createStore(
    {
        state:{
            msg:"VuexTest",
            TestNumber:5,
         },
          mutations:{
            addTestNumber(state)
            {
                console.log(state.TestNumber);
             
            }
          },
          actions:{},
          modules:{},
    });