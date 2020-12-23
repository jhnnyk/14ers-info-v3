<template>
  <div id="app">
    <TitleBar />
    <main>
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
}
</script>
