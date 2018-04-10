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
import { contentLoader } from '~/assets/core/mixins/content-loader';
export default {
  mixins: [contentLoader],
  async asyncData({ params }) {
    const post = await contentLoader.methods.queryContent(
      'values/posts',
      params.slug
    );
    return post;
  }
};
</script>
