import { createStore } from "vuex";

export const store = createStore({
  // a global state for you app
  state: {
    count: 1,
    cats: [],
    cat: null,
  },
  // an object exposing the state key/value pairs
  getters: {
    getCount: (state) => state.count,
    cats: (state) => state.cats,
    cat: (state) => state.cat,
  },
  // a set of methods to update the state synchronously
  mutations: {
    setCount: (state, payload) => {
      console.log("im a mutation method", payload);
      state.count = payload;
    },
    setCats: (state, payload) => {
      state.cats = payload;
    },
    setCurrentCat: (state, payload) => {
      state.cat = payload;
    },
  },
  // a set of methods to update the state assynchronously
  actions: {
    fetchCats: async (ctx) => {
      // one you get the data asynchronously
      const res = await fetch("http://localhost:8080/cats");
      const cats = await res.json();
      // two : you want to mutate the state
      ctx.commit("setCats", cats);
    },
    fetchOneCat: async (ctx, id) => {
      // one you get the data asynchronously
      const res = await fetch(`http://localhost:8080/cats/${id}`);
      const cat = await res.json();
      // two : you want to mutate the state
      ctx.commit("setCurrentCat", cat);
    },
  },
});
