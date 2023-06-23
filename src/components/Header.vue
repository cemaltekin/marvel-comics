<template>
  <header>
    <div class="container nav">
      <router-link to="/" class="logo">Marvel Comics</router-link>
      <div class="navigation">
        <NavigationButton to="/" text="Homepage" />
        <NavigationButton to="/favorites" text="Favorites" />
      </div>
    </div>
  </header>
</template>
<script>
import NavigationButton from './NavigationButton.vue';

export default {
  components: {
    NavigationButton
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
  @media (min-width: 1024px) {
    padding: 0;
  }
}
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0.5));
  z-index: 50;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    .navigation {
      display: flex;
      align-content: center;
      gap: 20px;
    }
  }
  .logo {
    text-decoration: none;
    color: white;
    font-size: clamp(2.8rem, 1.5vw, 3rem);
    font-family: 'Comic Neue', cursive !important;
  }
}
</style>
