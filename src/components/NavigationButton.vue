<template>
  <router-link class="button" active-class="active" :to="to">{{
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

<style lang="scss" scoped>
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  outline: none;
  background-color: rgba(21, 0, 80,.5);
  &.active {
    background-color: rgba(21, 0, 80,1);
  }
}
</style>
