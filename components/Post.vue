<template>
    <!-- <div v-if="$apollo.loading">Apollo is loading...</div>
    <div v-if="$apollo.queries.posts.loading">Posts are Loading...</div> -->
    <div>
      <div v-if="post">

        <!-- <ul> -->
          <!-- <li v-for="post in posts" :key="post.id"> -->
            <h1>{{post.title}}</h1>
            <!-- <router-link :to="`/post/${post.slug}`" class="link">
              <div class="placeholder"> -->
                <img
                  alt="Photo"
                  :src="`https://media.graphcms.com/resize=w:400,fit:crop/${post.coverImage.handle}`"
                />
              <!-- </div> -->
            <!-- </router-link> -->
          <!-- </li> -->
        <!-- </ul> -->
        <!-- <button v-if="postCount && postCount > allPosts.length" @click="loadMorePosts">
          {{loading ? 'Loading...' : 'Show more'}}
        </button> -->
      </div>
      <div v-else>
        <h2>No POST found</h2>
      </div>
    </div>
</template>

<script>
import POST_QUERY from "../graphql/Post.gql"

export default {
  name: "Post",
  data: () => {
    return {
      post: {}
    }
  },
  apollo: {
    post: {
      query: POST_QUERY,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
