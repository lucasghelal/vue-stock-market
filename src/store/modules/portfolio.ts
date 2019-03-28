export default {
  namespaced: true,
  state: {
    funds: 10000,
    stocks: [],
  },
  mutations: {
    buyStock(state, { stockId, quantidade, stockPrice }) {
      const record = state.stocks.find((element) => element.id === stockId);

      if (record) {
        record.quantidade += quantidade;
      } else {
        state.stocks.push({
          id: stockId,
          quantidade,
        });
      }
      state.funds -= stockPrice * quantidade;
    },
    sellStock(state, {stockId, quantidade, stockPrice}) {
      const record = state.stocks.find((element) => element.id === stockId);

      if (record.quantidade > quantidade) {
        record.quantidade -= quantidade;
      } else {
        state.stocks.splice(state.stocks.indexOf(record), 1);
      }
      state.funds += stockPrice * quantidade;
    },
    setPortfolio(state, portfolio) {
      state.funds = portfolio.funds;
      state.stocks = portfolio.stocksPortfolio || [];
    },
  },
  actions: {
    sellStock({commit}, order ) {
      commit('sellStock', order);
    },
  },
  getters: {
    stocksPortfolio(state, getters, rootState, rootGetters) {
      return state.stocks.map((stock) => {
        const record = rootGetters['stocks/stocks'].find((element) => element.id === stock.id);
        return {
          id: stock.id,
          quantidade: stock.quantidade,
          nome: record.nome,
          valor: record.valor,
        };
      });
    },
    funds(state) {
      return state.funds;
    },
  },
};
