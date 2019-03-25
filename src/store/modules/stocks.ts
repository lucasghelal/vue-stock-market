import stocks from '@/data/stocks'


export default {
    namespaced: true,
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks;
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('portfolio/buyStock', order, { root: true });
        },
        initStocks({ commit }) {            
            commit('setStocks', stocks);
        }
    },
    getters: {
        stocks(state) {
            return state.stocks;
        }
    }
}