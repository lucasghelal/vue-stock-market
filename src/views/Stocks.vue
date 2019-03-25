<template>
  <div class="columns is-multiline">
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"></Stock>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Stock from '@/components/market/Stock.vue';

@Component({
  components: {
    Stock,
  },
})
export default class Stocks extends Vue {
  get stocks() {
    return this.$store.getters.stocks;
  }
}
</script>

<style>
</style>
