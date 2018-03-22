<template>
    <flex-row justify="between" >
    	<!-- <flex-col> -->
    		<BasePoolBar v-for="singlePoolData in poolData" :key="singlePoolData.poolText" v-bind="singlePoolData" >
    		</BasePoolBar>	
      	<!-- </flex-col> -->
    </flex-row>
</template>

<script>
import BasePoolBar from '~/components/BasePoolBar_1.vue'
export default {
  data: function () {
  	return {}
  },
  props:{
  	poolData: {
                type: Array,
                default: function () {
        			return [
        				 { poolText: 'ls-Aprendizagem', poolWidth :350, poolHeight:150},
        				 { poolText: 'ls-Competição', poolWidth :450, poolHeight:250}
        			]
                }
            },
  },

  components: {
    BasePoolBar
  }
}
</script>
