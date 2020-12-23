<template>
  <div id="app">
    <TitleBar />
    <main>
      <ul>
        <li v-for="mtn in mtns" :key="mtn.mtn">
          {{ mtn.mtn }}
        </li>
      </ul>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'

export default {
  components: {
    TitleBar,
  },

  computed: {
    mtns() {
      return this.$store.state.store.mtns
    },
  },
}
</script>
