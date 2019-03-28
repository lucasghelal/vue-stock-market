<template>
  <div class="columns is-multiline">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';
import Stock from '@/components/portfolio/Stock.vue';

const portfolio = namespace('portfolio');

@Component({
  components: {
    Stock,
  },
})
export default class Stocks extends Vue {
  @portfolio.Getter('stocksPortfolio') stocks;
}
</script>

<style>

</style>
