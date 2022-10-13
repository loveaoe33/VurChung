<template>
      <h1>Home Page</h1>
      <h1>{{ VuexTest }}</h1>
      <input type="button" @click="this.intercome(4)"  value="測試vuex">
<input type="button" @click="VuexCommitTest"  value="測試vuex2">
</template>



<script>


import "jquery";

import { mapMutations, mapState } from 'vuex';


    export default {
      name: "Empty",
      props: {
        msg: String,
      },
      created() {
      

      },
      data() {
        return {
        
    
        };
      },
      computed:
  {
    ...mapState({
          VuexTest: state=>state.count,
      }),

  },
      methods: {


        ...mapMutations(['intercome']),
        VuexCommitTest:function()   
        {
         
          return this.$store.commit('intercome',5);

        },
      },
    };
    </script>