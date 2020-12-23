<template>
  <div id="app">
    <TitleBar />
    <main>
      <ul>
        <li v-for="mtn in mtns" :key="mtn.slug">
          {{ mtn.name }}
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

  created() {
    this.$store.dispatch('mtns/getMtns')
  },

  computed: {
    mtns() {
      return this.$store.state.mtns.all
    },
  },
}
</script>
