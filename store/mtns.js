import { db } from '@/firebase'

export const state = () => ({
  all: [],
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
}
