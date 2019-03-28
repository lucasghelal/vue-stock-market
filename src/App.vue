<template>
  <div>
    <Header />
    <div class="container is-fluid">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
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
  @keyframes slide-in {
    from {
       transform: translateY(-30px);
       opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
       transform: translateY(0px);
       opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

  .slide-leave-active {
    animation: slide-out 0.3s ease;
  }

  .slide-enter-active {
    animation: slide-in 0.3s ease;
  }
</style>
