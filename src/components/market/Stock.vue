<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        <strong>EMPRESA <small>(Preço: valor)</small></strong>
      </p>
    </div>
    <div class="card-content">
      <div class="content">
        <b-field label="Quantidade">
          <b-input type="number"></b-input>
        </b-field>
        <button class="button">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class Stock extends Vue {

};
</script>

<style>
</style>
