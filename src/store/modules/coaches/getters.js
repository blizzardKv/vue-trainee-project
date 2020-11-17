export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    // eslint-disable-next-line
    const coaches = getters.coaches;
    // eslint-disable-next-line
    const userId = rootGetters.userId;
    // eslint-disable-next-line
    return coaches.some(coach => coach.id === userId);
  },
  shouldUpdate(state) {
    // eslint-disable-next-line
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
