<script setup>
import preloaderGif from "@/../data/clientbase-frontend-test/preloader.gif"
</script>

<template>
  <div class="preloader">
    <img :src="preloaderGif" alt="preloader">
  </div>
</template>

<style scoped>
.preloader{
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}
</style>