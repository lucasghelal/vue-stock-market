import stocks from '@/data/stocks';


export default {
    namespaced: true,
    state: {
        stocks: [],
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks;
        },
        randomizeStocks(state) {
            state.stocks.forEach((stock) => {
                stock.valor = Math.round(stock.valor * (1 + Math.random() - 0.45));
            });
        },
    },
    actions: {
        buyStock({ commit }, order) {
            commit('portfolio/buyStock', order, { root: true });
        },
        initStocks({ commit }) {
            commit('setStocks', stocks);
        },
        randomizeStocks({ commit }) {
            commit('randomizeStocks');
        },
    },
    getters: {
        stocks(state) {
            return state.stocks;
        },
    },
};
