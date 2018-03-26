<template>
  <article>
    <h1>{{ title }}</h1>
    <h2>Data de Leitura{{date_of_reading}}</h2>
    <h2>{{poolText_1}}</h2>
    <h2>{{poolPH_1}}</h2>
    <h2>{{poolCloro_1}}</h2>
    <h2>{{poolTemperatura_1}}</h2>
    <h2>{{poolText_2}}</h2>
    <h2>{{poolPH_2}}</h2>
    <h2>{{poolCloro_2}}</h2>
    <h2>{{poolTemperatura_2}}</h2>
  </article>
</template>

<script>
export default {
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/values/posts/' + params.slug + '.json');
    return post;
  }
};
</script>
