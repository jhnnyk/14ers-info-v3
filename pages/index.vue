<template>
  <div class="home">
    <p>
      Welcome to <router-link :to="{ name: 'index' }">14ers.info</router-link>,
      your source for current weather and the weather forecast for Colorado's
      14ers.
    </p>
    <p>
      Please select a mountain to see the current weather and the weather
      forecast.
    </p>
    <p>
      Need help deciding? Maybe try Colorado's highest peak,
      <nuxt-link to="/mt_elbert">Mt. Elbert</nuxt-link>; or perhaps the iconic
      <nuxt-link to="/pikes_peak">Pikes Peak</nuxt-link>!
    </p>
  </div>
</template>

<script>
export default {}
</script>
