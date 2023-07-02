import { observable } from './core/Observer';

const store = {
  state: observable({
    lottos: [],
    lottoResult: [],
    isModalOpen: false,
  }),

  setState(newState) {
    Object.entries(newState).forEach(([key, value]) => {
      if (!(key in this.state)) return;
      this.state[key] = value;
    });
  },
};

export default store;
