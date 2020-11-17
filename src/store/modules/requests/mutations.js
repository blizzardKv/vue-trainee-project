export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    // eslint-disable-next-line
    state.requests = payload;
  },
};
