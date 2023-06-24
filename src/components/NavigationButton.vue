<template>
  <router-link class="navigation-button" active-class="active" :to="to">{{
    text
  }}</router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

