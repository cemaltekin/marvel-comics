<template>
  <div v-if="comic" class="special-comic container">
    <div class="img-area">
      <img
      v-if="comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'"
      :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      alt=""
    />
    <img v-else src="../assets/images/image_not_found.png" alt="" />
    </div>
    <div class="detail">
      <h2>{{ comic.title }}</h2>
      <p>
        {{ comic.description }}
      </p>
      <div class="creators">
        <span class="title">Creators</span>
        <ul class="list">
          <li v-for="(creator, index) in comic.creators.items" :key="index">{{ creator.name }} - {{ creator.role }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  }
}
</script>
