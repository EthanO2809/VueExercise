import { createStore } from "vuex";

export default createStore({
  state: {
    products: null,
    product: null,
  },

  mutations: {
    setTutorials: (state, products) => {
      state.products = products;
    },
    setTutorial: (state, product) => {
      state.product = product;
    },
  },
  actions: {
    getproducts: async (context) => {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
    getTutorial: async (context, id) => {
      fetch("http://localhost:3000/product/" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setProduct", product));
    },
  },
});
