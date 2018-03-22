<template>
<div>
<svg :width="svgWidth" :height="svgHeight">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>   
  
  <g>
  <rect class="outside" rx="10" ry="10" :width=poolWidth
        :height=poolHeight fill="blue"/>
  <text text-anchor="middle"  :x="textXPosition" y="30" fill="#ffffff" font-size="25" font-family="Verdana" >Piscina
  <tspan text-anchor="middle"  :x="textXPosition" :y="textYPosition" fill="#ffffff" font-size="45" font-family="Verdana" >{{poolText}}</tspan>
</text>
  Sorry, your browser does not support inline SVG.
</g>
</svg>
</div>
</template>
<script>
  const kWidth=50;
  export default {
        name: 'BToolbar',
        props: {
              poolText: {
                  type: String,
                  default: 'BSP-Piscina'
              },
              poolWidth:{
                type: Number,
                default: 250
              },
              poolHeight:{
                type: Number,
                default: 150
              },
            onAction: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {}
        },
        computed:{
          svgWidth(){
            return `${this.poolWidth + kWidth}`

          },
          svgHeight(){
            return `${this.poolHeight + kWidth}`

          },
          textYPosition(){
            return `${(this.poolHeight)/2}` 

          },
          textXPosition(){
            return `${(this.poolWidth)/2}` 

          }
        }
   }     
</script>
<style scoped>
.outside{
    position:relative;
    stroke:black;
    stroke-width:5;
    opacity:0.7
}
.inside{
    position:absolute;
    top:50%;
    bottom:50%;
    transform:translate(-50%, -50%);
}
</style>
