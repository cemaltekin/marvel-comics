<template>
  {{ favorites.length }}
  <div v-if="!favorites.length == 0">
    <div class="container grid-area">
      <ComicCard v-for="comic in favorites" :key="comic.id" :comic="comic" />
    </div>
  </div>
  <div class="container isNull" v-else>
    Henüz favoriye bir ürün eklemediniz...
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

<style lang="scss" scoped>
.isNull {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}
</style>
