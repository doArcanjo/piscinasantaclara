<template>
<div class="rcorners1">
  <h1>Piscina de {{poolText}}</h1>
  <h2>PH: {{poolPH}}</h2>
  <h2>Temperatura: {{poolTemperatura}} º</h2>
  <h2>Cloro: {{poolPH}}</h2>
</div>
</template>
<script>
  const kWidth=50;
  export default {
        name: 'BToolbar_1',
        props: {
              poolText: {
                  type: String,
                  default: 'BSP-Piscina'
              },
              poolPH:{
                type: [Number,String],
                default: 0.9
              },
              poolCloro:{
                type: [Number,String],
                default: 150
              },
              poolTemperatura:{
                type: [Number,String],
                default: '18'
              },

            onAction: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {}
        },

   }     
</script>
<style scoped>
.rcorners1 {
  margin-left: 15px;
  border-radius: 25px;
  /*background: RGB(93, 173, 226);*/
  padding: 40px; 

  /* 1 - Gradient background */ 
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#d0e4f7+0,73b1e7+24,0a77d5+50,539fe1+79,87bcea+100;Blue+Pipe+%231 */
  background: #d0e4f7; /* Old browsers */
  background: -moz-linear-gradient(45deg, #d0e4f7 0%, #73b1e7 24%, #0a77d5 50%, #539fe1 79%, #87bcea 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, #d0e4f7 0%,#73b1e7 24%,#0a77d5 50%,#539fe1 79%,#87bcea 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, #d0e4f7 0%,#73b1e7 24%,#0a77d5 50%,#539fe1 79%,#87bcea 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d0e4f7', endColorstr='#87bcea',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
/* 1 -  Gradient background end */ 
}  
</style>

