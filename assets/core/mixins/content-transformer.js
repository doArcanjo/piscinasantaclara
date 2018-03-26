export const contentTransformer = {
  created: function () {
    console.log('contentTansformer activated');
  },
  methods: {
      postToVueAsync: async function ({ url="LATEST"}) {
      // let dataToTransform = await import('~/content/values/posts/' + params.slug + '.json');
      // let dataToTransform = await import(`~/content/values/posts/${params.slug}.json`);
      let dataToTransform = await import(`~/content/values/posts/2018-03-26-leitura.json`);
      console.log(`hello from mixin contentTansformer! Using url: ${url}`)
      
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

      console.log(transformedData)
      // const context = require.context('~/content/', true, /\.json$/);
      // console.error(`Here we go:`)
      // console.log(`${context.keys}`)
      // const list = context.keys()
      // console.log(list)
      // // const list = context.keys().map(key => ({
      // //   ...context(key),
      // //   _path: `${url}/${key.replace(`.${ext}`, '').replace('./', '')}`
      // // }));
      // return list;

      return transformedData;
    },
    postToVue: function ({ url="LATEST"}) {
      // let dataToTransform = await import('~/content/values/posts/' + params.slug + '.json');
      // let dataToTransform = await import(`~/content/values/posts/${params.slug}.json`);
      let dataToTransform = require(`~/content/values/posts/2018-03-26-leitura.json`);
      console.log(`hello from mixin contentTansformer! Using url: ${url}`)
      
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

      console.log(transformedData)
      return transformedData;
    },
      JSONContentToVue: function ({dataToTransform}) {

        console.error("d22222")
        console.error(dataToTransform)
      // let dataToTransform = await import('~/content/values/posts/' + params.slug + '.json');
      // let dataToTransform = await import(`~/content/values/posts/${params.slug}.json`);
            
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

      console.log(transformedData)
      return transformedData;
    }

  }
}