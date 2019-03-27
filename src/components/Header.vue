<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <span style="margin: auto;" class="has-text-weight-light"><strong>Stock</strong>Market</span>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link class="navbar-item" :to="{ name: 'home' }">
        Inicio
      </router-link>

      <router-link class="navbar-item" :to="{ name: 'portfolio' }">
        Portfólio
      </router-link>

      <router-link class="navbar-item" :to="{ name: 'stocks' }">
        Ações
      </router-link>
    </div>

    <div class="navbar-end">
      <a class="navbar-item" @click="finalizarDia">Finalizar Dia</a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">Salvar & Carregar</a>

        <div class="navbar-dropdown">
          <a class="navbar-item" @click="saveData">
            Salvar Dados
          </a>
          <a class="navbar-item">
            Carregar Dados
          </a>
        </div>
      </div>

      <span class="navbar-item">Seu saldo: {{ funds | currency }}</span>
    </div>
  </div>
</nav>    
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import AxiosHttp from '@/plugins/axios';

const portfolio = namespace('portfolio');
const stocks = namespace('stocks');

@Component({})
export default class Header extends Vue {
  @portfolio.Getter funds;
  @stocks.Action randomizeStocks;

  finalizarDia() {
    this.randomizeStocks();
  }

  saveData() {
    const {
      'portfolio/stockPortifolio': stockPortifolio,
      'portfolio/funds': funds,
      'stocks/stocks': stocks,
    } = this.$store.getters;
    this.$http.put('data', { stockPortifolio, funds, stocks});
  }
}
</script>

<style>

</style>
