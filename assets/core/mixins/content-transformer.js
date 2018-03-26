export const contentTransformer = {
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
      // let dataToTransform = await import('~/content/values/posts/' + params.slug + '.json');
      // let dataToTransform = await import(`~/content/values/posts/${params.slug}.json`);
      const dataToTransform = require(`~/content/values/posts/2018-03-26-leitura.json`);
       console.log(dataToTransform)
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

      console.log(transformedData)
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