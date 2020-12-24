<template>
  <div class="mtn-info">
    <div v-if="selectedMtn">
      <div class="header">
        <h1>{{ selectedMtn.name }}</h1>
        <p>{{ selectedMtn.range }}</p>
        <p>elevation: {{ selectedMtn.elevation }} ft.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('mtns', {
      selectedMtn: (state) => state.currentMtn,
    }),
  },
}
</script>
