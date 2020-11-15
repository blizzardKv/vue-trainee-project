export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    const store = state;
    store.coaches = payload;
  },
};
