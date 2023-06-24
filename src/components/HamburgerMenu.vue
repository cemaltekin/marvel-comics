<template>
  <div id="hamburgerOverlay" @click="closeHamburger">
    <div id="hamburgerMenu" @click.stop="">
      <div class="navigation-buttons">
        <NavigationButton to="/" text="Homepage" />
        <NavigationButton to="/favorites" text="Favorites" />
      </div>
    </div>
  </div>
</template>
<script>
import NavigationButton from "./NavigationButton.vue"
export default {
  components: {
    NavigationButton
  },
  methods: {
    closeHamburger() {
      this.$store.commit("setHamburgerIsVisible", false)
    }
  }
}

</script>
<style lang="scss" scoped>
#hamburgerOverlay {
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  #hamburgerMenu {
    width: 90%;
    max-width: 300px;
    height: 100vh;
    max-height: 100vh;
    min-height: 100vh;
    overflow-y: auto;
    background-color: white;
    padding: 20px;
  }
  .navigation-buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
