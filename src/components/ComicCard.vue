<template>
  <div class="comic-card">
    <img
      v-if="comic.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'"
      :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      alt=""
    />
    <img v-else src="../assets/images/image_not_found.png" alt="" />
    <span class="fav-icon" @click="toggleFavorite">
      <font-awesome-icon v-if="!isActive" icon="fa-regular fa-heart" />
      <font-awesome-icon v-else icon="fa-solid fa-heart" />
    </span>
    <div class="card-detail">
      <h3>{{ comic.title }}</h3>
      <router-link :to="'/comic/' + comic.id">Detail</router-link>
    </div>
  </div>
</template>

<script>
import { createToast } from 'mosha-vue-toastify';
export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$store.getters.getFavorites.some(
        favorite => favorite.id === this.comic.id
      );
    },
  },
  methods: {
    toggleFavorite() {
      if (this.isActive) {
        this.$store.dispatch('removeFromFavorites', this.comic.id);
        createToast('Deleted from favorites', {
          position: 'top-right',
          type: 'success',
          transition: 'zoom',
        });
      } else {
        this.$store.dispatch('addToFavorites', this.comic);
        createToast('Added to favorites', {
          position: 'top-right',
          type: 'success',
          transition: 'zoom',
        });
      }
    },
  },
};
</script>
