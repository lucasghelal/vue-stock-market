<template>
  <div>
    <Stock v-for="stock in stocks" :key="stock.id"></Stock>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import Stock from "@/components/market/Stock.vue";

@Component({
  components: {
    Stock,
  },
})
export default class Stocks extends Vue {
  stocks: object[] = [
    {id: 1, empresa: 'OI', valor: 100},
    {id: 2, empresa: 'TIM', valor: 200},
    {id: 3, empresa: 'CLARO', valor: 300},
    {id: 4, empresa: 'VIVO', valor: 400},
    {id: 5, empresa: 'MORTO', valor: 500},
  ]
};
</script>

<style>
</style>
