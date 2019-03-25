<template>
  <div>
    <Header />
    <div class="container is-fluid">
      <router-view></router-view>
    </div>

  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import stocks from '@/data/stocks';


@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {
  created() {
    this.$store.dispatch('stocks/initStocks', stocks);
  }
}
</script>

<style>
</style>
