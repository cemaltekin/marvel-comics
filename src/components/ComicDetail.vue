<template>
  <div v-if="comic" class="comic container">
    <div class="img-area">
      <img
        :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
        alt=""
      />
    </div>
    <div class="detail">
      <h2>{{ comic.title }}</h2>
      <p>{{ comic.series.name }}</p>
      <div>
        <span>Page Count:</span> &nbsp;
        <span>{{ comic.pageCount }}</span>
      </div>
      <div>
        <span>Format:</span> &nbsp;
        <span>{{ comic.format }}</span>
      </div>
      <p>
        {{ comic.description }}
      </p>
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
