<template></template>

<script>
export default {
  // asyncData(context) {
  //   const version = context.isDev ? "draft" : "published";

  //   const requests = [
  //     context.app.$storyapi.get(`cdn/stories`, {
  //       version: version,
  //       starts_with: `posts`,
  //     }),

  //     context.app.$storyapi.get(`cdn/stories`, {
  //       version: version,
  //       starts_with: `posts`,
  //       filter_query: {
  //         author: {
  //           in: "e8581bcd-72a5-41ad-bf2f-8f63a38c17e0"
  //         }
  //       }
  //     }),

  //     context.app.$storyapi.get(`cdn/stories`, {
  //       version: version,
  //       starts_with: `posts`,
  //       filter_query: {
  //         categories: {
  //           exists: "9520f5cc-12a6-4971-812f-29495416f3d0"
  //         }
  //       }
  //     }),

  //     context.app.$storyapi.get(`cdn/stories/posts/my-third-post`, {
  //       version: version,
  //     }),

  //     context.app.$storyapi.get(`cdn/stories`, {
  //       version: version,
  //       starts_with: `posts`,
  //       by_uuids: "33dad3ef-4423-47fe-9fef-241ad6b3edb7"
  //     }),
  //   ];

  //   return Promise.all(requests)
  //     .then(responses => {
  //       const posts = responses[0];
  //       const postsByAuthor = responses[1];
  //       const postsByCategory = responses[2];
  //       const singlePost = responses[3];
  //       const postByUuid = responses[4]

  //       console.log(postByUuid.data.stories[0].content);

  //       return {};
  //     })
  //     .catch(errors => {
  //       console.error(errors);
  //     });
  // }
};
</script>

<style>
</style>