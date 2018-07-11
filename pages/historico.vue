<template>
  <section class="container">
    <h2>Leituras</h2>
    <a @click="csvExport(posts)">CSV</a>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }} @ {{ post.date_of_reading | moment("dddd, DD MMMM YYYY - HH:mm") }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import AppLogo from '~/components/BaseLogo.vue';
import XLSX from 'xlsx';
import * as alasql from 'alasql';
import * as moment from 'moment';
alasql.utils.isBrowserify = false;
alasql.utils.global.XLSX = XLSX;
export default {
  components: {
    AppLogo
  },
  data() {
    // Using webpacks context to gather all  files from a folder
    //let targetCollection = 'blog'
    let targetCollection = 'values'
    const context = require.context(`~/content/values/posts/`, false, /\.json$/);

    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/values/${key.replace('.json', '').replace('./', '')}`
    })).reverse();

    return { posts };
  },
   methods: {
    csvExportStatic: function (users) {
      var sheet_1_data = [{Col_One:1, Col_Two:11}, {Col_One:2, Col_Two:22}];
      var sheet_2_data = [{Col_One:10, Col_Two:110}, {Col_One:20, Col_Two:220}];
      var opts = [{sheetid:'Sheet One',header:true},{sheetid:'Sheet Two',header:false}];
      var res = alasql('SELECT * INTO XLSX("sample_file.xlsx",?) FROM ?', [opts,[sheet_1_data ,sheet_2_data]]);
    },
    getSinglePoolData: function(_data, suffix){
        return _data.map(function(elem){
          return {
            "Cloro (ppm)":elem["poolCloro" + suffix ],  //elem.poolCloro_1,
            pH:elem["poolPH" + suffix ],//elem.poolPH_1,
            "Temperatura (ºC)":elem["poolTemperatura" + suffix ],//elem.poolTemperatura_1,
            "Data - hora": moment(elem.date_of_reading).format("DD MMMM YYYY - HH:mm")
          }
        });
      },
    csvExport: function (users) {

      var currentData = this.posts;
      var dataDaUltimaLeitura = moment(currentData[0].date_of_reading).format("dddd, DD MMMM YYYY");
      var dataSimplesDaUltimaLeitura = moment(currentData[0].date_of_reading).format("DD MMMM YYYY");
      
      //Para separar os dados de várias piscinas por Sheets do Excel
      var sheet_1_data =  this.getSinglePoolData(currentData, "_1");
      var sheet_2_data =  this.getSinglePoolData(currentData, "_2");
      
      var opts = [
        {sheetid:`${currentData[0].poolText_1} - ${dataSimplesDaUltimaLeitura}` ,header:true},
        {sheetid:`${currentData[0].poolText_2} - ${dataSimplesDaUltimaLeitura}` ,header:true}
      ];
      var res = alasql(`SELECT * INTO XLSX("Qualidade água - ${dataDaUltimaLeitura}.xlsx",?) FROM ?`,
       [opts,[sheet_1_data ,sheet_2_data]]);
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /*text-align: center;*/
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
