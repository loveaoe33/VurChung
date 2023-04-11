<template>
    <HelloWorld />
    <FStation />
</template>
    

<script>
    import "bootstrap"
    import "jquery"
    import FStation from "./FStation.vue";
    import HelloWorld from "./HelloWorld.vue";
    
    export default {
        name: 'Warning',
        components: {
          FStation,HelloWorld
      },
        data() {
              return {
            
      
              };
          },
      
      
          methods:
        {
          
        }
      }
    </script>
    