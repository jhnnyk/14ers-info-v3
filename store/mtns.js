import { db } from '@/firebase'

export const state = () => ({
  all: [],
})

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
