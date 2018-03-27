<template>
	 <div>
      <!-- <logo/> -->
      <!-- <img src="~/assets/logo_client.jpg" width="20%" > -->
      <img  :src="getClientImage(ClientLogoSrc)" :width=ClientLogoWidth >
      <h2 class="subtitle">
         <b>{{ClientName}}</b>
      </h2>
  </div>
</template>
<script>
export default {
    name: 'BaseCompany',
    props: {
          ClientName: {
              type: String,
              default: 'Piscina'
          },
          ClientLogoSrc: {
              type: String
          },
          //issue: https://github.com/nuxt/nuxt.js/issues/448
          ClientLogoWidth: {
              type: String	
          }
    },
    methods: {
    	getClientImage(path){
    		/* To-Do make this dynamic - Issues here: * /
    		https://github.com/nuxt/nuxt.js/issues/448
    		https://github.com/nuxt/nuxt.js/issues/2667
    		https://github.com/nuxt/nuxt.js/issues/1746
    		https://github.com/vuejs/Discussion/issues/202

    		/* Desired is the one above */
    		// const imageUrl = require(path)
    		const imageUrl = require('~/assets/logo_client.jpg')
    		return imageUrl
    	}
    }	
}
</script>