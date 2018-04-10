
import { contentLoader } from '~/assets/core/mixins/content-loader';
export const contentTransformer = {
  mixins: [contentLoader],
  created: function () {
    // console.log('contentTansformer activated');
  },
  methods: {
      postToVueAsync: async function ({ url="LATEST"}) {
      // let dataToTransform = await import('~/content/values/posts/' + params.slug + '.json');
      // let dataToTransform = await import(`~/content/values/posts/${params.slug}.json`);
      let dataToTransform = await import(`~/content/values/posts/2018-03-26-leitura.json`);
      
      let transformedData = {
        "date_of_reading":dataToTransform.date_of_reading,
          "poolData":[
            { 
              "poolText": dataToTransform.poolText_1,
              "poolPH":  dataToTransform.poolPH_1,
              "poolCloro": dataToTransform.poolCloro_1,
              "poolTemperatura": dataToTransform.poolTemperatura_1
            }, 
            { 
              "poolText": dataToTransform.poolText_2,
              "poolPH":  dataToTransform.poolPH_2,
              "poolCloro": dataToTransform.poolCloro_2,
              "poolTemperatura": dataToTransform.poolTemperatura_2
            }
          ]
      };
      return transformedData;
    },
    postToVue: function ({ url="LATEST"}) {
      const posts = this.queryContentAll('/values/posts/', '/values');
      console.log(`Numero de posts:${posts.length}`)
      console.log(`Last post path:${posts[posts.length-1]._meta.originFilePath}`)
      /* static post */
      //const dataToTransform = require(`~/content/values/posts/2018-03-26-leitura.json`);
      
      /* last created post*/
      const dataToTransform = require(`~/content/${posts[posts.length-1]._meta.originFilePath}`);
      
       // console.log(dataToTransform)
      var transformedData = {
        "date_of_reading":dataToTransform.date_of_reading,
          "poolData":[
            { 
              "poolText": dataToTransform.poolText_1,
              "poolPH":  dataToTransform.poolPH_1,
              "poolCloro": dataToTransform.poolCloro_1,
              "poolTemperatura": dataToTransform.poolTemperatura_1
            }, 
            { 
              "poolText": dataToTransform.poolText_2,
              "poolPH":  dataToTransform.poolPH_2,
              "poolCloro": dataToTransform.poolCloro_2,
              "poolTemperatura": dataToTransform.poolTemperatura_2
            }
          ]
      };

      // console.log(transformedData)
      return transformedData;
    },
    JSONContentToVue: function ({dataToTransform}) {

      let transformedData = {
        "date_of_reading":dataToTransform.date_of_reading,
          "poolData":[
            { 
              "poolText": dataToTransform.poolText_1,
              "poolPH":  dataToTransform.poolPH_1,
              "poolCloro": dataToTransform.poolCloro_1,
              "poolTemperatura": dataToTransform.poolTemperatura_1
            }, 
            { 
              "poolText": dataToTransform.poolText_2,
              "poolPH":  dataToTransform.poolPH_2,
              "poolCloro": dataToTransform.poolCloro_2,
              "poolTemperatura": dataToTransform.poolTemperatura_2
            }
          ]
      };

      return transformedData;
    }

  }
}