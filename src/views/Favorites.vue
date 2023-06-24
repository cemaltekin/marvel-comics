<template>
  <div v-if="!favorites.length == 0">
    <div class="container">
      <h2 class="section-title">Favorites</h2>
    </div>
    <div class="container grid-area">
      <ComicCard v-for="comic in favorites" :key="comic.id" :comic="comic" />
    </div>
  </div>
  <div class="container isNull" v-else>
    You haven't added a comics to your favorites yet...
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ComicCard from '@/components/ComicCard.vue';
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    ComicCard,
    Spinner,
  },
  computed: {
    ...mapState(['favorites']),
  },
};
</script>
