<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-header has-background-success">
        <p class="card-header-title">
          <strong>{{ stock.empresa }} <small>(Preço: {{ stock.valor | currency }})</small></strong>
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <b-field grouped :type="insuficcientFunds || quantidade < 0 || !Number.isInteger(quantidade) ? 'is-danger' : ''">
            <b-input 
              expanded 
              placeholder="Quantidade" 
              step="any" 
              type="number" 
              v-model.number="quantidade">
            </b-input>
            <p class="control">
              <button class="button is-success"
                @click="buyStock"
                :disabled="insuficcientFunds || quantidade <= 0 || !Number.isInteger(quantidade)">
                {{ insuficcientFunds ? "Insuficiente": "Comprar" }}
              </button>
            </p>
          </b-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Action, namespace } from 'vuex-class';

const stocksModule = namespace('stocks');

@Component({})
export default class Stock extends Vue {
  @Prop() stock!: any;
  @stocksModule.Action('buyStock') buyStockAction;

  quantidade: number = 0;

  get funds() {
    return this.$store.getters['portfolio/funds'];
  }

  get insuficcientFunds() {
    return (this.quantidade * this.stock.valor) > this.funds;
  }

  buyStock() {
    const order = {
      stockId: this.stock.id,
      stockPrice: this.stock.valor,
      quantidade: this.quantidade,
    };

    this.buyStockAction(order);
    this.quantidade = 0;
  }
}
</script>

<style scoped>
.column {
  padding: 1rem;
}
</style>
