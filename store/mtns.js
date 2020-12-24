import { db } from '@/firebase'

export const state = () => ({
  all: [],
  currentMtn: null,
})

export const getters = {
  mtnsByRange: (state) => {
    const ranges = []

    state.all.forEach((mtn) => {
      const index = ranges.findIndex((r) => r.name === mtn.range)

      if (index === -1) {
        ranges.push({ name: mtn.range, mtns: [mtn] })
      } else {
        ranges[index].mtns.push(mtn)
      }
    })

    return ranges
  },
}

export const mutations = {
  setMtns: (state, mtns) => {
    state.all = mtns
  },
  setCurrentMtn: (state, mtn) => {
    state.currentMtn = mtn
  },
}

export const actions = {
  getMtns: async ({ commit }) => {
    const mtnList = []
    const snapshot = await db
      .collection('mtns')
      .orderBy('elevation', 'desc')
      .get()

    if (snapshot.empty) {
      console.log('No matching documents')
      return
    }

    snapshot.forEach((mtn) => {
      mtnList.push(mtn.data())
    })

    commit('setMtns', mtnList)
  },

  setCurrentMtn: async ({ dispatch, commit, state }, slug) => {
    const currentMtn = await state.all.find((m) => m.slug === slug)
    commit('setCurrentMtn', currentMtn)
    // if (currentMtn) {
    //   commit('setForecastLoading', true)
    //   dispatch('getForecast', currentMtn)
    //   commit('setCurrentWeatherLoading', true)
    //   dispatch('getCurrentWeather', currentMtn)
    // }
  },
}
