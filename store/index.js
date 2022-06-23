export const state = () => ({
  title: "오른쪽 버튼 누르면?",
  cnt: 0
})

export const mutations = {
  increment(state) {
    state.cnt++;
  },
  decrement(state) {
    state.cnt--;
  }
}
