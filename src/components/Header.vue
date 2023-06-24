<template>
  <header>
    <div class="container nav">
      <router-link to="/" class="logo">Marvel Comics</router-link>
      <div class="navigation">
        <NavigationButton to="/" text="Homepage" />
        <NavigationButton to="/favorites" text="Favorites" />
      </div>
      <font-awesome-icon
        icon="fa-solid fa-bars"
        style="color: white"
        class="hamburger-toggler"
        @click="handleHambuger"
      />
    </div>
  </header>
  <transition name="hamburger">
    <HamburgerMenu v-if="hamburgerIsVisible" />
  </transition>
</template>
<script>
import NavigationButton from './NavigationButton.vue';
import HamburgerMenu from '@/components/HamburgerMenu.vue'
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['hamburgerIsVisible']),
  },
  components: {
    NavigationButton,
    HamburgerMenu
  },
  methods: {
    handleHambuger() {
      console.log(this.hamburgerIsVisible);
      this.$store.commit("setHamburgerIsVisible", true);
    }
  }
};
</script>

<style>
.hamburger-enter-active {
  transition: all .2s ease-out;
}

.hamburger-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.hamburger-enter-from,
.hamburger-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
