<template>
  <ComicDetail :comic="comic" v-if="comic" />
  <Spinner v-else />
</template>
  
  <script>
import axios from 'axios';
import md5 from 'md5';
import ComicDetail from '@/components/ComicDetail.vue';
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    ComicDetail,
    Spinner,
  },
  data() {
    return {
      comic: null,
    };
  },
  computed: {
    isFavorite() {
      return this.$store.getters.getFavorites.some(
        favorite => favorite.id === this.comic.id
      );
    },
  },
  methods: {
    addToFavorites() {
      this.$store.dispatch('addToFavorites', this.comic);
    },
    removeFromFavorites() {
      this.$store.dispatch('removeFromFavorites', this.comic.id);
    },
    fetchComicDetail() {
      const comicId = this.$route.params.id;

      const publicKey = 'd34ea269d99edbd46f157b69213c4415';
      const privateKey = 'aea8eaf50fc8406cc7019c004fdb6da827e1b101';
      const timestamp = Math.floor(Date.now() / 1000).toString();
      const hash = md5(timestamp + privateKey + publicKey);
      const apiUrl = `http://gateway.marvel.com/v1/public/comics/${comicId}`;
      const requestUrl = `${apiUrl}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

      axios.get(requestUrl)
        .then(response => {
          this.comic = response.data.data.results[0] || null;
        })
        .catch(error => {
          console.error(error);
        });
    },

  },
  created() {
    this.fetchComicDetail();
  },
};
  </script>
