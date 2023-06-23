<template>
  <Header />
  <transition name="slide-page">
    <div style="padding-top: 111px;">
      <router-view />
    </div>
  </transition>
</template>
<script>
import Header from './components/Header.vue';
import 'mosha-vue-toastify/dist/style.css'
export default {
  components: {
    Header
  }
};
</script>
<style>
body {
  background-color: rgba(0, 0, 0, 0.9);
}
.slide-page-enter-active {
  transition: all 0.3s ease-out;
}

.slide-page-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-page-enter-from,
.slide-page-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
