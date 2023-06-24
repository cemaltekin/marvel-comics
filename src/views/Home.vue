<template>
  <div>
    <ComicDetail v-if="comicOfTheWeek" :comic="comicOfTheWeek" />
    <Spinner v-else />
  </div>
  <div class="container">
    <h2 class="section-title">Comics</h2>
    <div class="grid-area">
      <ComicCard v-for="comic in getComics" :key="comic.id" :comic="comic" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ComicCard from '@/components/ComicCard.vue';
import ComicDetail from '@/components/ComicDetail.vue';
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    ComicCard,
    ComicDetail,
    Spinner,
  },
  data() {
    return {
      comicOfTheWeek: null,
    };
  },
  computed: {
    ...mapGetters(['getComics']),
  },
  methods: {
    ...mapActions(['fetchComics']),
    fetchData() {
      this.fetchComics();
    },
    updateComicOfTheWeek() {
      if (this.getComics && this.getComics.length > 0) {
        this.comicOfTheWeek = this.getComics[3];
      }
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    getComics: {
      immediate: true,
      handler() {
        this.updateComicOfTheWeek();
      },
    },
  },
};

</script>
