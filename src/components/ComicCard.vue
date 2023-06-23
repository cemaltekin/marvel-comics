<template>
  <div class="comic-card">
    <img
      v-if="comic.thumbnail"
      :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
      alt=""
    />
    <img v-else src="https://via.placeholder.com/1000" alt="" />
    <span class="fav-icon" @click="toggleFavorite">
      <font-awesome-icon v-if="!isActive" icon="fa-regular fa-heart" />
      <font-awesome-icon v-else icon="fa-solid fa-heart" />
    </span>
    <div class="card-detail">
      <h3>{{ comic.title }}</h3>
      <p>{{ comic.series.name }}</p>
      <router-link :to="'/comic/' + comic.id">Detay</router-link>
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
      // Vuex store'daki favorites state'ini kontrol ederek, çizgi romanın favoriye eklenip eklenmediğini döndürür
      return this.$store.getters.getFavorites.some(
        favorite => favorite.id === this.comic.id
      );
    },
  },
  methods: {
    toggleFavorite() {
      if (this.isActive) {
        // Favoriden kaldırma işlemi
        this.$store.dispatch('removeFromFavorites', this.comic.id);
        createToast('Deleted from favorites', {
          position: 'top-right',
          type: 'success',
          transition: 'zoom',
        });
      } else {
        // Favoriye ekleme işlemi
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
<style lang="scss" scoped>
.fav-icon {
  position: absolute;
  font-size: 30px;
  top: 10px;
  right: 10px;
  z-index: 1;
  color: white;
  cursor: pointer;
}
.comic-card {
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
  position: relative;
  &:hover {
    .card-detail {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
  }
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .card-detail {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    transition: 300ms all;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    transform: translateY(100%);
    gap: 5px;
    a {
      color: white;
      padding: 5px;
    }
  }
}
</style>
