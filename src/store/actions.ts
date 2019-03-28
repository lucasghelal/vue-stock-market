import Vue from 'vue';

export default {
  loadData({ commit }) {
    Vue.prototype.$http.get('data').then((resp) => {
      const data = resp.data;
      if (data) {
        commit('stocks/setStocks', data.stocks);
        commit('portfolio/setPortfolio', {
          funds: data.funds,
          stocksPortfolio: data.stocksPortfolio,
        });
      }
    });
  },
};
