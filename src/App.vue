<template>
  <div>
    <Header />
    <div style="padding-top: 111px">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import 'mosha-vue-toastify/dist/style.css';

export default {
  components: {
    Header
  }
};
</script>
