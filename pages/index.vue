<template>
  <div>
    <flex-col tag="main" >
       <section>
      <flex-col>
        <h2 class="title">{{ date_of_reading | moment(currentDatetimeFormat()) }}</h2>
      </flex-col>
    <flex-row justify="around">
        <flex-col
            align-v="center"
            align-h="center"
            grow
            wrap
            @click="handleClick"
        ><Pool></Pool>
      </flex-col>
      <flex-col align-v="center">
        <PoolList v-bind:poolData="poolData"/> 
          <flex-row  justify="around" class="company_logo">
              <Company v-bind="clientConfig"></Company>  
          </flex-row>
      </flex-col>
    </flex-row>
    <flex-row>
        <div v-if="hasWave()" >
          <Wave/>
        </div>  
    </flex-row>
    </section>
    </flex-col>
</div>
</template>

<script>
import clientConfig from '~/content/config/default_client' 
import Company from '~/components/company/BaseCompany.vue' 
import Pool from '~/components/pool/pool2.vue' 
import Logo from '~/components/BaseLogo.vue' 
import Wave from '~/components/TheWave.vue'
import PoolList from '~/components/BasePoolList_2.vue'
import { contentTransformer } from '~/assets/core/mixins/content-transformer';


/* Used before */
 // import lastReadingData from '~/assets/mock_reading' 
 // in data() method use:
 //poolData: lastReadingData.poolData
/* */
export default {
  mixins: [contentTransformer],
   data() {
    // const newReadingData= this.postToVue({url:`nada`})
    const newReadingData= this.postToVue({url:`nada`})
      return {
          date_of_reading: newReadingData.date_of_reading,
          poolData: newReadingData.poolData,
          clientConfig
      }
  },
  methods: {

    hasWave(){
      return clientConfig.has_wave;
    },
    currentDatetimeFormat(){
      let current_format=clientConfig.current_datetime_format;
      return clientConfig[current_format]
    },
    handleClick() {

      console.log(`Clicked`)
      window.location.href = "admin"
      // this.$app.router.push('/')
      // $nuxt._router.push('/admin/')
    }
  },
  components: {
    Company,
    Pool,
    Wave,
    PoolList,
    Logo
  }
};
</script>

<style>
body{
  height: 100vh;
  width: 100vw;
  background:radial-gradient(ellipse at center, rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%);
  overflow: hidden;
}
.company_logo {
  transform:TranslateY(10vh)  
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 60px;
  color: #35495e;
  letter-spacing: 1px;
  text-align: center;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  letter-spacing: 1px;
  text-align: center;
}

</style>
