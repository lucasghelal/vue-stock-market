<template>
  <div class="column is-4">
    <div class="card">
      <div class="card-header has-background-info">
        <p class="card-header-title">
          <strong>{{ stock.empresa }} 
            <small>
              (Preço: {{ stock.valor }} | Qtde: {{ stock.quantidade }})
            </small>
          </strong>
        </p>
      </div>
      <div class="card-content">
        <div class="content">
          <b-field grouped>
            <b-input expanded placeholder="Quantidade" type="number" v-model="quantidade"></b-input>
            <p class="control">
              <button class="button is-info"
                @click="sellStock"
                :disabled="quantidade <= 0">Vender</button>
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

  private quantidade: number = 0;

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
