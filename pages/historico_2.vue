<template>
  <section class="container">
    <h2>Histórico</h2>
    <ul>
      <li v-for="post in posts" :key="post.date">
        <nuxt-link :to="post._path">
          {{ post.title }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { contentLoader } from '~/assets/core/mixins/content-loader';
import { contentTransformer } from '~/assets/core/mixins/content-transformer';
export default {
  mixins: [contentLoader,contentTransformer],
  data() {
    // Using webpacks context to gather all files from a folder
    // const posts = this.getContentList('~/content/values/posts/', 'json', '/values');
    const anotherData1= this.postToVue({url:`nada`})
    // const posts = this.getContentList('~/content/values/posts/', 'json', 'values');
    // console.log(posts);
    // return {posts};
    return {};
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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