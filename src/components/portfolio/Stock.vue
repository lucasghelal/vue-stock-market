<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-header has-background-info">
        <p class="card-header-title">
          <strong>{{ stock.empresa }} 
            <small>
              (Preço: {{ stock.valor | currency }} | Qtde: {{ stock.quantidade }})
            </small>
          </strong>
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <b-field grouped :type="naoPodeVender || quantidade < 0 || !Number.isInteger(quantidade) ? 'is-danger' : '' ">
            <b-input expanded placeholder="Quantidade" type="number" step="any" v-model.number="quantidade"></b-input>
            <p class="control">
              <button class="button is-info"
                @click="sellStock"
                :disabled="naoPodeVender || quantidade <= 0 || !Number.isInteger(quantidade)">
                {{ naoPodeVender ? "Insuficiente" : "Vender" }} 
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

const portfolio = namespace('portfolio');

@Component({})
export default class Stock extends Vue {
  @Prop() stock!: any;
  @portfolio.Action('sellStock') sellStockAction;

  quantidade: number = 0;

  get naoPodeVender() {
    return this.quantidade > this.stock.quantidade;
  }

  sellStock() {
    const order = {
      stockId: this.stock.id,
      stockPrice: this.stock.valor,
      quantidade: this.quantidade,
    };
    this.sellStockAction(order);
  }
}
</script>

<style scoped>
.column {
  padding: 1rem;
}
</style>
